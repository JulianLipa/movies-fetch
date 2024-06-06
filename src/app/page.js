"use client";

import styles from "./page.module.css";
import FetchMovies from "./components/FetchMovies/FetchMovies";

export default function Home() {
  return (
    <main className={styles.main}>
        <FetchMovies />
    </main>
  );
}
