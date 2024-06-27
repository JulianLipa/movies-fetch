"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./movies.module.css";
import FetchCast from "@/app/components/FetchCast/FetchCast";
import FetchStreams from "@/app/components/FetchStreams/FetchStreams";
import FetchGenresById from "@/app/components/FetchGenresById/FetchGenresById";

const SingleMovie = ({ params }) => {
  const { id } = params;
  const [movie, setMovie] = useState({ movie: "", year: "" });
  const [images, setImages] = useState({ filePath: "", width: 0, height: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleFetchMovies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=eb7e3fd7272143562cec959061b5eb32`
        );
        const year = response.data.release_date.split("-")[0];
        setLoading(false);
        setMovie({
          movie: response.data,
          year: year,
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    const handleMoviesFrames = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/images?api_key=eb7e3fd7272143562cec959061b5eb32`
        );
        const data = response.data.backdrops[0];
        setLoading(false);
        setImages({
          filePath: data.file_path,
          width: data.width,
          height: data.height,
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    handleFetchMovies();
    handleMoviesFrames();
  }, [id]);

  return (
    <div className={`${styles["container_pr"]}`}>
      {loading && (
        <Image
          src="/images/loading.webp"
          alt="cover image"
          width={100}
          height={100}
        />
      )}

      {!loading && movie.movie && images.filePath && (
        <div className={`${styles["container_single_movies"]}`}>
            <div className={`${styles["overlay"]}`}></div>
          
          <div className={"container_hero"}>
            <Image
              className={`${styles["img_hero"]}`}
              src={`https://image.tmdb.org/t/p/original${images.filePath}`}
              alt="cover image"
              width={images.width}
              height={images.height}
            />
          </div>
          <div className={`${styles["content"]}`}>
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.movie.poster_path}`}
              alt="cover image"
              width={200}
              height={300}
              className={`${styles["poster_img"]}`}
            />
            <div className={`${styles["genre_container"]}`}>
              <h1>{movie.movie.title}</h1>
              <div className={`${styles["año_genero"]}`}>
                <h3>{movie.year}</h3>
                <FetchGenresById id={movie.movie.id} />
              </div>
              <p className={`${styles["info"]}`}>{movie.movie.overview}</p>
            </div>

            <div className={`${styles["content_full_width"]}`}>
              <div>
                <h2>Available on</h2>
                <FetchStreams id={id} />
              </div>

              <div className={`${styles["cast_container"]}`}>
                <h2>Cast</h2>
                <FetchCast id={id} directorState={false} />
              </div>

              <div className={`${styles["cast_container"]}`}>
                <h2>Director</h2>
                <FetchCast id={id} directorState={true} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleMovie;
