"use client";

import Image from "next/image";
import FetchMovies from "./components/FetchMovies/FetchMovies";
import ReactDOM from "react-dom";

const SingleMovie2 = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <FetchMovies />
      </div>
    </main>
  );
};

export default SingleMovie2;