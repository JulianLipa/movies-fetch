"use client";

import styles from "./page.module.css";
import FetchMovies from "./components/FetchMovies/FetchMovies";
import Navbar from "@/app/components/Navbar/Navbar"
import Footer from "@/app/components/Footer/Footer"

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
  const socialMedia= [
    {
      image:'',
      link:"/",
    },
    {
      image:'',
      link:"/",
    },
    {
      image:'',
      link:"/",
    }
  ]
  return (
    <main className={styles.main}>
        <Navbar menu={menuItems}/>
        <FetchMovies />
        <Footer social={socialMedia}/>
    </main>
  );
}
