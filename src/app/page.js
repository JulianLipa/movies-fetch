"use client";

import styles from "./page.module.css";
import FetchMovies from "./components/FetchMovies/FetchMovies";
import Navbar from "@/app/components/Navbar/Navbar"
import Footer from "@/app/components/Footer/Footer"
import MainHero from "@/app/components/MainHero/page";

export default function Home() {
  return (
    <main className={styles.main}>
        <MainHero/>
        <FetchMovies/>
    </main>
  );
}
