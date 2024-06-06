"use client";

import styles from "./page.module.css";
import FetchMovies from "./components/FetchMovies/FetchMovies";
import Navbar from "@/app/components/Navbar/Navbar"

export default function Home() {
  return (
    <main className={styles.main}>
        <FetchMovies />
    </main>
  );
}
