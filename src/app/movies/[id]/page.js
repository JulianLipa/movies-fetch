"use client";

import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";

const SingleMovie = ({params}) => {
  const {id} = params;
  console.log(id)
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const handleFetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=eb7e3fd7272143562cec959061b5eb32`
        );
        const data = response.data;
        setMovie(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    handleFetchMovies();
  }, [id]);

  return (
    <div>
      {loading && <p>Fetching data</p>}
      {!loading &&
        <p>{movie.title}</p>}
    </div>
  );
}

export default SingleMovie