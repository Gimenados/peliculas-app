import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies, onShowModal }) {
  if (!movies.length) {
    return <p style={{ color: "red", textAlign: "center", fontWeight: "bold", width: "100%" }}>No se encontraron películas.</p>;
  }

  return (
    <main id="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} onShowModal={onShowModal} />
      ))}
    </main>
  );
}
