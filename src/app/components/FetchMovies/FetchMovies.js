"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import styles from "./FetchMovies.module.css";
import FetchGenresById from "@/app/components/FetchGenresById/FetchGenresById.js";

const FetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const handleFetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=eb7e3fd7272143562cec959061b5eb32"
        );
        const data = response.data.results;
        setMovies(data.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    handleFetchMovies();
  }, []);

  return (
    <div className={`${styles["container_title_grid"]}`}>
      <h1>Trending Today</h1>

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
                </div>
                <div className={`${styles["container_hover"]}`}>
                  <h4>{}</h4>
                  <FetchGenresById id={movie.id} />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default FetchMovies;
