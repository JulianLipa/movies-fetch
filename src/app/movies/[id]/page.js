"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./movies.module.css";
import FetchCast from "@/app/components/FetchCast/FetchCast";
import FetchStreams from "@/app/components/FetchStreams/FetchStreams";
import FetchGenres from "@/app/components/FetchGenres/FetchGenres";

const SingleMovie = ({ params }) => {
  const { id } = params;
  const [movie, setMovie] = useState({ movie: "", year: "" });
  const [images, setImages] = useState({ filePath: "", width: 0, height: 0 });
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState({ director: "", cast: "" });

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
    <div>
      {loading && (
        <Image
          src="/public/images/loading.webp"
          alt="cover image"
          width={images.width}
          height={images.height}
        />
      )}

      {!loading && movie && images.filePath  && (
        <div className={`${styles["container_single_movies"]}`}>
         <div className={"container_hero"}>
            <div className={`${styles["overlay"]}`}></div>
            <Image
              className={`${styles["img_hero"]}`}
              src={`https://image.tmdb.org/t/p/original${images.filePath}`}
              alt="cover image"
              width={images.width}
              height={images.height}
            />
         </div>
          
          <div className={`${styles["content"]}`}>
            <h1>{movie.movie.title}</h1>

            <div className={`${styles["año_genero"]}`}>
              <h3>{movie.year}</h3>
              <div>
                <h2>Genres</h2>
                {/* Componente de genres */}
              </div>
            </div>

            <p className={`${styles["info"]}`}>{movie.movie.overview}</p>
            {/*<Image
              src={`https://image.tmdb.org/t/p/original${movie.movie.poster_path}`}
              alt="cover image"
              width={200}
              height={270}
            />*/}

            <div>
              <FetchStreams id={id} />
            </div>

            <div>
              <h2>Cast</h2>
              <FetchCast id={id}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleMovie;
