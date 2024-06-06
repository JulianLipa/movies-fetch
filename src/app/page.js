"use client";

import styles from "./page.module.css";
import FetchMovies from "./components/FetchMovies/FetchMovies";
import Navbar from "@/app/components/Navbar/Navbar"
import Footer from "@/app/components/Footer/Footer"

export default function Home() {
<<<<<<< HEAD
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
=======
>>>>>>> c046457b8e2be3ffa8e134a023f838649a4c91b6
  return (
    <main className={styles.main}>
        <FetchMovies />
        <Footer social={socialMedia}/>
    </main>
  );
}
