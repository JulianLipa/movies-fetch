'use client'

import { useEffect, useState } from "react";
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
          const data = response.data;
          setMovies(data);
          console.log(data.Poster);
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
        {!loading && 
        <div>
          <Image
            src={movies.Poster}
            alt="cover image"
            width={200}
            height={270}
          />
          <p>{movies.Title}</p>
          <p>{movies.Year}</p>

        </div>
        }
      </div>
    );
    
  };
  
  export default FetchMovies;