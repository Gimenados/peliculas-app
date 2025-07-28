import React from "react";

export default function MovieCard({ movie, onShowModal }) {
  return (
    <ul>
      <li>
        <img src={movie.imgSrc} alt={movie.title} />
        {/* <h2>{movie.title}</h2> */}
        <button className="btn-modern" onClick={() => onShowModal(movie)}>
          Resumen
        </button>
        <span>{movie.year}</span>
      </li>
    </ul>
  );
}
