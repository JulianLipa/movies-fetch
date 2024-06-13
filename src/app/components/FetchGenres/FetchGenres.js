import React from 'react'
import styles from "./FetchGenres.module.css"

const FetchGenres = ({genres}) => {
    return (
        <div>
          {genres.map((genre, index) => (
            <div key={index}>
              <p className={styles.generos}>{genre.name}</p>
            </div>
          ))}
        </div>
      );
}

export default FetchGenres