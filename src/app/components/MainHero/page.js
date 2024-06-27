"use client";

import styles from "@/app/components/MainHero/MainHero.module.css";
import styles_movies from "@/app/components/FetchMovies/FetchMovies.module.css";
import React from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const MainHero = () => {
  const [inputText, setInputText] = useState("");
  const [searchState, setSearchState] = useState(false); //searchState === true > el usuario escribio algo
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSearchState(false);
    setLoading(true);
    const handleFetchGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=eb7e3fd7272143562cec959061b5eb32`
        );
        setGenres(response.data.genres.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    handleFetchGenres();
  }, []);

  const keyUp = () => {
    var text = document.getElementById("inputBar").value;

    if (text.length === 0) {
      setSearchState(false);
      setMovies("");
    } else {
      setSearchState(true);
      setInputText(text);
      FetchMovies(text);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const FetchMovies = async (movieInput) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${movieInput}&api_key=eb7e3fd7272143562cec959061b5eb32`
      );
      const data = response.data.results;
      setMovies(data.slice(0, 3));
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  return (
    <div className={`${styles["hero_container"]}`}>
      <form onSubmit={handleSubmit} className={`${styles["form_container"]}`}>
        <input
          className={`${styles["input_component"]}`}
          placeholder="Search for a movie"
          onKeyUp={keyUp}
          id="inputBar"
        ></input>
        
        {searchState && (
          <div className={`${styles["search_container"]}`}>
            {movies.length > 0 &&
              movies.map((movie, index) => (
                <Link
                  key={index}
                  href={`/movies/${movie.id}`}
                  className={`${styles["movie_card"]}`}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt="cover image"
                    width={80}
                    height={100}
                    className={`${styles["movie_poster"]}`}
                  />
                  <h2>{movie.title}</h2>
                  <p>({movie.release_date.split("-", 1)})</p>
                </Link>
              ))}
          </div>
        )}
        <div
          className={`${styles_movies["container_genres"]} ${
            styles["container_genres"]
          } ${styles[!searchState]}`}
        >
          {!loading &&
            genres.map((genre, index) => {
              return (
                <Link
                  key={index}
                  className={`${styles_movies["genre_component"]}`}
                  href={`/genres/${genre.id}`}
                >
                  <p>{genre.name}</p>
                </Link>
              );
            })}
        </div>
      </form>
    </div>
  );
};

export default MainHero;
