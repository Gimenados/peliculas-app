import React, { useState, useEffect } from "react";
import "./styles/App.scss";

import MovieList from "./components/MovieList";
import Modal from "./components/Modal";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FormMovie from "./components/FormMovie";
import HeroCarousel from "./components/HeroCarousel";
import moviesData from "./data/MoviesData";
import Footer from "./components/Footer";

export default function App() {
  const [movies, setMovies] = useState(moviesData);
  const [filteredMovies, setFilteredMovies] = useState(moviesData);
  const [selectedMovie, setSelectedMovie] = useState(null);
  

  // ⭐ FAVORITOS
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // ⭐ FILTRO SOLO FAVORITAS
  const [showFavorites, setShowFavorites] = useState(false);

  // Persistencia de favoritos
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorito
  const toggleFavorite = (movieTitle) => {
    setFavorites((prev) =>
      prev.includes(movieTitle)
        ? prev.filter((t) => t !== movieTitle)
        : [...prev, movieTitle]
    );
  };

  // MODAL
  const handleShowModal = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  // 🔍 SEARCH POR TÍTULO
  const handleSearch = (searchTerm) => {
    let filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // aplicar filtro de favoritas si está activo
    if (showFavorites) {
      filtered = filtered.filter((movie) =>
        favorites.includes(movie.title)
      );
    }

    setFilteredMovies(filtered);
  };

  // 📅 SEARCH POR AÑO + TEXTO
  const handleYearSearch = (year, searchTerm) => {
    let filtered = movies.filter(
      (movie) =>
        (year ? movie.year === parseInt(year, 10) : true) &&
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // aplicar filtro de favoritas si está activo
    if (showFavorites) {
      filtered = filtered.filter((movie) =>
        favorites.includes(movie.title)
      );
    }

    setFilteredMovies(filtered);
  };

  // ➕ AGREGAR PELÍCULA
  const handleAddMovie = (newMovie) => {
    const newMoviesList = [...movies, newMovie];
    setMovies(newMoviesList);
    setFilteredMovies(newMoviesList);
  };

  // 🎬 LISTA FINAL A MOSTRAR
  const moviesToShow = showFavorites
    ? filteredMovies.filter((movie) =>
        favorites.includes(movie.title)
      )
    : filteredMovies;

  return (
    <>
      <Header />
      <HeroCarousel />

      <SearchBar
        onSearch={handleSearch}
        onYearSearch={handleYearSearch}
        showFavorites={showFavorites}
        onToggleFavorites={() =>
          setShowFavorites((prev) => !prev)
        }
      />

      <MovieList
        movies={moviesToShow}
        onShowModal={handleShowModal}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />

      <Modal
        movie={selectedMovie}
        onClose={handleCloseModal}
        isFavorite={favorites.includes(selectedMovie?.title)}
        onToggleFavorite={toggleFavorite}
      />

      <h1 id="agregarPelicula" className="title-pelicula">
        Agregar Nueva Película
      </h1>

      <FormMovie onAddMovie={handleAddMovie} />

      <Footer />
    </>
  );
}
