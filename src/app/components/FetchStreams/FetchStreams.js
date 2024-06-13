"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const FetchStreams = ({ id }) => {
  const [stream, setStreams] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleWatchStreams = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=eb7e3fd7272143562cec959061b5eb32`
        );
        const data = response.data.results.US;

        setStreams(data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    handleWatchStreams();
  }, [id]);

  console.log(stream);

  return (
    <div>
      {!loading && stream != undefined && stream.hasOwnProperty('flatrate') && (
        <div>
          <Image
              src={`https://image.tmdb.org/t/p/original${stream.flatrate[0].logo_path}`}
              alt="cover image"
              width={50}
              height={50}
            />
        </div>
      )}
      {!loading && stream != undefined && stream.hasOwnProperty('buy') && 
      stream.buy.map((stream, index) => (
        <Image
            key={index}
            src={`https://image.tmdb.org/t/p/original${stream.logo_path}`}
            alt="cover image"
            width={50}
            height={50}
          />
      ))}
    </div>
  );
};

export default FetchStreams;
