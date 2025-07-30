import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function MovieList({ movies, onShowModal }) {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (!movies.length) {
    return (
      <p style={{ color: "red", textAlign: "center", fontWeight: "bold", width: "100%" }}>
        No se encontraron películas.
      </p>
    );
  }

  return (
    <div className="movie-carousel">
      <button className="scroll-btn left" onClick={scrollLeft}> <FaChevronLeft /> </button>
      <main id="movie-list" ref={scrollRef}>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} onShowModal={onShowModal} />
        ))}
      </main>

      <button className="scroll-btn right" onClick={scrollRight}> <FaChevronRight /> </button>
    </div>
  );
}
