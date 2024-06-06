"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import styles from "./FetchMovies.module.css";

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
        setMovies(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    handleFetchMovies();
  }, []);

  return (
    <div className={`${styles["container_fetch_movies"]}`}>
      {loading && <p>Fetching data</p>}
      {!loading &&
        movies.map((movie, index) => {
          return (
            <Link
              href={`/movies/${movie.id}`}
              key={index}
              className={`${styles["movie_card"]}`}
            >
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt="cover image"
                  width={200}
                  height={270}
                />
                <div className={`${styles["movie_card_text"]}`}>
                  <h2>{movie.title}</h2>
                  <h3>{movie.vote_average}/10</h3>
                </div>
            </Link>
          );
        })}
    </div>
  );
};

export default FetchMovies;
