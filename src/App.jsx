import React, { useState } from "react";
import "./styles/App.scss";
import MovieList from "./components/MovieList";
import Modal from "./components/Modal";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FormMovie from "./components/FormMovie";
import HeroCarousel from "./components/HeroCarousel";
import moviesData from "./data/MoviesData";

export default function App() {
  const [movies, setMovies] = useState(moviesData);
  const [filteredMovies, setFilteredMovies] = useState(moviesData);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleShowModal = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const handleSearch = (searchTerm) => {
    const filtered = movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredMovies(filtered);
  };

  const handleYearSearch = (year, searchTerm) => {
    const filtered = movies.filter(
      (movie) => (year ? movie.year === parseInt(year, 10) : true) && movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    const newMoviesList = [...movies, newMovie];
    setMovies(newMoviesList);
    setFilteredMovies(newMoviesList);
  };

  return (
    <>
      <Header />
      <HeroCarousel />
      <SearchBar onSearch={handleSearch} onYearSearch={handleYearSearch} />
      <MovieList movies={filteredMovies} onShowModal={handleShowModal} />
      <Modal movie={selectedMovie} onClose={handleCloseModal} />

      <h1 id="agregarPelicula" className="title-pelicula">
        Agregar Nueva Película
      </h1>
      <FormMovie onAddMovie={handleAddMovie} />

      <footer>
        <p>&copy; Listado de peliculas</p>
      </footer>
    </>
  );
}

