import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import EmptyState from "./EmptyState";

export default function MovieList({
  movies,
  onShowModal,
  favorites,
  onToggleFavorite,
}) {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (!movies.length) {
    return (
      <EmptyState
        message="No encontramos películas con esos filtros"
        actionText="Agregar una película"
        onAction={() =>
          document
            .getElementById("agregarPelicula")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />
    );
  }

  return (
    <div className="movie-carousel">
      <button className="scroll-btn left" onClick={scrollLeft}>
        <FaChevronLeft />
      </button>

      <main id="movie-list" ref={scrollRef}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            movie={movie}
            onShowModal={onShowModal}
            isFavorite={favorites.includes(movie.title)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </main>

      <button className="scroll-btn right" onClick={scrollRight}>
        <FaChevronRight />
      </button>
    </div>
  );
}
