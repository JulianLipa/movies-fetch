"use client";

import React from 'react';

function MoviePage() {
  // Acceder a la URL actual usando window.location
  let searchParams = new URLSearchParams(window.location.search);
  let query = searchParams.get('query') || 'No query provided';

  console.log(query);
  return <div>Search query is {query}</div>;
}

export default MoviePage;