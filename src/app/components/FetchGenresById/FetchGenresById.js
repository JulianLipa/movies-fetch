"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import styles from "@/app/components/FetchMovies/FetchMovies.module.css";
import Link from "next/link";
import React from "react";

const FetchGenresById = ({id}) => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const handleFetchGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=eb7e3fd7272143562cec959061b5eb32`
        );
        setGenres(response.data.genres);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    handleFetchGenres();
  }, [id]);

  return (
    <div className={`${styles["container_genres"]}`}>
        {!loading &&
          genres.map((genre, index) => {
            return (
                <Link key={index} className={`${styles["genre_component"]}`} href={`/genres/${genre.id}`} >
                    <p>{genre.name}</p>
                </Link>
            );
          })}
    </div>
  );
};

export default FetchGenresById;
