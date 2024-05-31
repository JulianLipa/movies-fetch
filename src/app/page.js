import Image from "next/image";
import styles from "./page.module.css";
import FetchMovies from "./components/FetchMovies/FetchMovies";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <FetchMovies/>
        <p>hola</p>

      </div>
    </main>
  );
}