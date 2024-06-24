"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./FetchCast.module.css";

const FetchCast = ({ id, directorState }) => {
  const [cast, setCast] = useState({ director: "", actors: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleCast = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=eb7e3fd7272143562cec959061b5eb32`
        );
        const cast = response.data.cast.slice(1, 5);
        let crew = response.data.crew;
        let director;

        for (let i = 0; i < crew.length; i++) {
          if (crew[i].job === "Director") {
            director = crew[i];
            break;
          }
        }
        setCast({
          actors: cast,
          director: director,
        });
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    handleCast();
  }, [id]);

  return (
    <div className={`${styles["cast_container"]}`}>
      {!loading &&
        !directorState &&
        cast.actors.map((member, index) => (
          <div key={index} className={`${styles["cast_component"]}`}>
            <Image
              src={`https://image.tmdb.org/t/p/original${member.profile_path}`}
              alt="cover image"
              width={100}
              height={150}
              className={`${styles["cast_img"]}`}
            />
            <p>{member.name}</p>
          </div>
        ))}

      {!loading && directorState && (
        <div className={`${styles["cast_component"]}`}>
          <Image
            src={`https://image.tmdb.org/t/p/original${cast.director.profile_path}`}
            alt="cover image"
            width={100}
            height={150}
            className={`${styles["cast_img"]}`}
          />
          <p>{cast.director.name}</p>
        </div>
      )}
    </div>
  );
};

export default FetchCast;
