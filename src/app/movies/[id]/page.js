"use client";

import React, { useEffect, useState } from 'react';
import axios from "axios";
import Image from 'next/image';
import styles from "./movies.module.css";

const SingleMovie = ({ params }) => {
  const { id } = params;
  const [movie, setMovie] = useState({});
  const [images, setImages] = useState({ filePath: '', width: 0, height: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleFetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=eb7e3fd7272143562cec959061b5eb32`
        );
        setMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    const handleMoviesFrames = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/images?api_key=eb7e3fd7272143562cec959061b5eb32`
        );
        const data = response.data.backdrops[0];
        setImages({ filePath: data.file_path, width: data.width, height: data.height });
        console.log(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    setLoading(false);

    handleFetchMovies();
    handleMoviesFrames();
  }, [id]);

  return (
    <div>
      {loading && <p>Fetching data...</p>}
      {!loading && movie && images.filePath &&
      <div className={`${styles["container_single_movies"]}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${images.filePath}`}
          alt="cover image"
          width={images.width}
          height={images.height}
        />
        <p>{movie.title}</p>
      </div>
      }
    </div>
  );
}

export default SingleMovie;
