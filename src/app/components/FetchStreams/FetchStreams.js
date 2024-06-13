import React from "react";
import Image from "next/image";

const FetchStreams = ({ streams }) => {
    console.log(streams)

    return (
        /*<div>
          {streams.buy.length > 1 && streams.buy.map((stream, index) => (
            <div key={index}>
              <p>{stream.provider_name}</p>
              <Image
                src={`https://image.tmdb.org/t/p/original${stream.logo_path}`}
                alt="cover image"
                width={50}
                height={50}
              />
            </div>
          ))}
        </div>*/
        <p>hola</p>
      );
};

export default FetchStreams;
