"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/components/FetchMovies/FetchMovies.module.css";
import FetchCast from "@/app/components/FetchCast/FetchCast";
import FetchStreams from "@/app/components/FetchStreams/FetchStreams";
import FetchGenres from "@/app/components/FetchGenres/FetchGenres";
import FetchGenresById from "@/app/components/FetchGenresById/FetchGenresById"

const FetchMoviesByGenre = ({ params }) => {
  const { id } = params;
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const handleFetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=eb7e3fd7272143562cec959061b5eb32`
        );
        const data = response.data.results;
        setMovies(data.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    const handleGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=eb7e3fd7272143562cec959061b5eb32`
        );
        const data = response.data.genres;
        
        data.forEach((genre) => {
          if(genre.id === Number(id)){
            setGenre(genre.name)
          }
        });
        
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
  
    handleGenres();
    handleFetchMovies();
  }, [id]);


  return (
    <div className={`${styles["container_title_grid"]}`}>
      <h1>{genre}</h1>

      <div className={`${styles["container_fetch_movies"]}`}>
        {loading && (
          <Image
            src="/images/loading.webp"
            alt="loading image"
            width={100}
            height={100}
          />
        )}
        {!loading &&
          movies.map((movie, index) => {
            return (
              <Link
                href={`/movies/${movie.id}`}
                key={index}
                className={`${styles["movie_card"]}`}
              >
                <div className={`${styles["container_main"]}`}>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt="cover image"
                    width={200}
                    height={270}
                    className={`${styles["movie_poster"]}`}
                  />
                  <div className={`${styles["container_text_movie"]}`}>
                    <h2>{movie.title}</h2>
                      <div className={`${styles["container_rate_star"]}`}>
                        <Image
                          src={"/star.png"}
                          alt="cover image"
                          width={15}
                          height={15}
                        />
                        <h3>{Math.trunc(movie.vote_average)}/10</h3>
                      </div>
                  </div>
                  <div className={`${styles["container_hover"]}`}>
                  <FetchGenresById id={movie.id} />
                </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default FetchMoviesByGenre;
