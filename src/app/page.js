"use client";

import styles from "./page.module.css";
import FetchMovies from "./components/FetchMovies/FetchMovies";

export default function Home() {
  return (
    <main className={styles.main}>
        <p>Trending today</p>
        <FetchMovies />
    </main>
  );
}
