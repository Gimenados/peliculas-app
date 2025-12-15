import React from "react";

const MovieCard = React.memo(
  ({ movie, onShowModal, isFavorite, onToggleFavorite }) => {
    const openModal = () => onShowModal(movie);

    return (
      <div className="movie-card-wrapper">
        <article
          className="movie-card"
          role="button"
          tabIndex={0}
          aria-label={`Ver detalles de ${movie.title}`}
          onClick={openModal}
          onKeyDown={(e) => e.key === "Enter" && openModal()}
        >
          <div className="card-content">
            <img
              src={movie.imgSrc}
              alt={`Poster de ${movie.title}`}
              loading="lazy"
            />

            <div className="overlay">
              {/* ⭐ Favorita */}
              <button
                type="button"
                className={`favorite-btn ${isFavorite ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite(movie.title);
                }}
                aria-label="Marcar como favorita"
              >
                {isFavorite ? "⭐" : "☆"}
              </button>

              <h3 className="titulo-banner">{movie.title}</h3>

              <span className="movie-meta">
                {movie.year}
                {movie.genres?.length ? ` · ${movie.genres[0]}` : ""}
              </span>

              <button
                type="button"
                className="btn-modern"
                onClick={(e) => {
                  e.stopPropagation();
                  openModal();
                }}
              >
                Ver resumen
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  }
);

export default MovieCard;
