'use client'

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const FetchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true);
      const handleFetchMovies = async () => {
        try {
          const response = await axios.get(
            "https://www.omdbapi.com/?apikey=f409f1e6&t=titanic"
          );
          const data = response.data.topalbums.album;
          setMovies(data);
          setLoading(false);
          console.log("data");
        } catch (error) {
          console.log("error", error);
        }
      };
  
      handleFetchMovies();
    }, []);

  };
  
  export default FetchMovies;