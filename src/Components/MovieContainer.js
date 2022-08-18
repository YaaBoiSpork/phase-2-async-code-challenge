import React from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import Search from "./Search";

function MovieContainer({ movies }) {

  const movieLib = movies.map(movie => <MovieCard key={movie.id} {...movie}/>)

  return (
    <div>
      <h1>Watchlist</h1>
      <Search /><br/>
      <Filter />
      {movieLib} 
    </div>
  );
}

export default MovieContainer;
