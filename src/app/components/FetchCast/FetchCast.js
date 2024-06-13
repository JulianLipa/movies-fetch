import React from "react";
import Image from "next/image";

const FetchCast = ({ cast }) => {
  return (
    <div>
      {cast.map((member, index) => (
        <div key={index}>
          <p>{member.name}</p>
          <Image
            src={`https://image.tmdb.org/t/p/original${member.profile_path}`}
            alt="cover image"
            width={100}
            height={150}
          />
        </div>
      ))}
    </div>
  );
};

export default FetchCast;
