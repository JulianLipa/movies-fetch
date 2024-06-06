"use client";

import Image from "next/image";
import styles from "./page.module.css";
import FetchMovies from "./components/FetchMovies/FetchMovies";
import ReactDOM from 'react-dom';

export default function moviePage() {
    return (
      <main className={styles.main}>
        <div className={styles.description}>
          <FetchMovies/>
        </div>
      </main>
    );
  }