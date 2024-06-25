"use client";

import styles from "@/app/components/MainHero/MainHero.module.css";
import React from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const MainHero = () => {
  const [inputText, setInputText] = useState("");
  const [searchState, setSearchState] = useState(false); //searchState === true > el usuario escribio algo
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSearchState(false);
  }, []);

  const keyUp = () => {
    var text = document.getElementById("inputBar").value;
    console.log(text);
    if (text.length > 0) {
      setSearchState(true);
      setInputText(text);
      FetchMovies(text);
    } else {
      setSearchState(false);
      console.log("no results");
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

  console.log(movies);
  return (
    <div className={`${styles["hero_container"]}`}>
      <form onSubmit={handleSubmit} className={`${styles["form_container"]}`}>
        <input
          className={`${styles["input_component"]}`}
          placeholder="Search for a movie"
          onKeyUp={keyUp}
          id="inputBar"
        ></input>
        <div className={`${styles["search_container"]} ${searchState}`}>
          {movies.length > 0 &&
            movies.map((movie, index) => (
              <Link key={index} href={`/movies/${movie.id}`} className={`${styles["movie_card"]}`}>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt="cover image"
                    width={80}
                    height={100}
                    className={`${styles["movie_poster"]}`}
                  />
                  <h2>{movie.title}</h2>
                  <p>({movie.release_date.split("-",1)})</p>
              </Link>
            ))}
        </div>
      </form>
    </div>
  );
};

export default MainHero;
