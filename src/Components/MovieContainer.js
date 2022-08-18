import React from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import Search from "./Search";

function MovieContainer({ movies, filterByGenre, onFilterChange, search, onSearch }) {

  const movieLib = movies.map(movie => <MovieCard key={movie.id} {...movie}/>)

  return (
    <div>
      <h1>Watchlist</h1>
      <Search search={search} onSearch={onSearch}/><br/>
      <Filter filterByGenre={filterByGenre} onFilterChange={onFilterChange}/>
      {movieLib} 
    </div>
  );
}

export default MovieContainer;
