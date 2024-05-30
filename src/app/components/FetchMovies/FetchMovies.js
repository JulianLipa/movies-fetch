'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const getMovieRequest = async () => {
  const url = "https://www.omdbapi.com/?apikey=f409f1e6&t=titanic";
  const response 
}

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
          setMovies(response);
          setLoading(false);
        } catch (error) {
          console.log("error", error);
        }
      };
  
      handleFetchMovies();
    }, []);

    return(
      <div>
        {loading && <p>Fetching data</p>}
        {!loading && <p>${movies}</p>}
      </div>
    );
    
  };
  
  export default FetchMovies;