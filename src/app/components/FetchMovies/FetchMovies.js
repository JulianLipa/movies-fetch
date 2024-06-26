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
            "https://api.themoviedb.org/3/discover/movie?api_key=eb7e3fd7272143562cec959061b5eb32&with_genres=27"
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

    return(
      <div>
        {loading && <p>Fetching data</p>}
        {!loading && 
        movies.map((movie,index)=>{
          return <Image
          key={index}
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="cover image"
          width={200}
          height={270}
        />
        })
        }
      </div>
    );
}

export default FetchMovies;