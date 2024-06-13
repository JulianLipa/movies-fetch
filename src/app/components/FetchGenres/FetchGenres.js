import React from 'react'

const FetchGenres = ({genres}) => {
    return (
        <div>
          {genres.map((genre, index) => (
            <div key={index}>
              <p>{genre.name}</p>
            </div>
          ))}
        </div>
      );
}

export default FetchGenres