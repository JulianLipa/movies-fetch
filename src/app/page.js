"use client";

import styles from "./page.module.css";
import FetchMovies from "./components/FetchMovies/FetchMovies";
import Navbar from "@/app/components/Navbar/Navbar"

export default function Home() {
  const menuItems = [
    {
      item: "Favorites",
      link:"/",
    },
    {
      item: "Watchlist",
      link:"/",
    },
    {
      description:'',
      image:'/images/usuario-blanco.png'
    }
  ]
  return (
    <main className={styles.main}>
        <Navbar menu={menuItems}/>
        <FetchMovies />
    </main>
  );
}
