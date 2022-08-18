import MovieContainer from "./Components/MovieContainer";
import MovieForm from "./Components/MovieForm";
import Home from "./Components/Home";
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { useState, useEffect } from "react";


function App() {
 const [movies, setMovies] = useState([]);
 const [filterByGenre, setFilterByGenre] = useState("");
 const [search, setSearch] = useState("");

 useEffect(() => {
  fetch("http://localhost:3001/movies")
  .then(resp => resp.json())
  .then(data => setMovies(data))
 }, [])

 const handleAddMovie = (newMovie) => {
  const updatedMovies = [...movies, newMovie]
  setMovies(updatedMovies)
 }

 const filteredMovies = movies.filter(movie => {
  if(filterByGenre === "") return movie
  return movie.genre === filterByGenre
 })

 const searchByTitle = filteredMovieList.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<MovieContainer movies={searchByTitle} filterByGenre={filterByGenre} onFilterChange={setFilterByGenre} search={search} onSearch={setSearch}/>} />
        <Route path="/movies/new" element={<MovieForm onAddMovie={handleAddMovie}/>} />
      </Routes>
      
    </div>
  );
}

export default App;