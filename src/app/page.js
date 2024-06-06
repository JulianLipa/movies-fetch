"use client";

import Image from "next/image";
import styles from "./page.module.css";
import FetchMovies from "./components/FetchMovies/FetchMovies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleMovie from "./components/SingleMovie/SingleMovie.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FetchMovies />} />
            <Route path="/movies" element={<SingleMovie />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}
