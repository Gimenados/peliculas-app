import React, { useState } from "react";

export default function Modal({ movie, onClose }) {
  const [showTrailer, setShowTrailer] = useState(false);

  if (!movie) return null;

  const { title, description, buttonTrailer } = movie;

  const getVideoId = (url) => {
    if (!url) return null;
    if (url.includes("v=")) {
      return url.split("v=")[1].split("&")[0];
    } else if (url.includes("youtu.be/")) {
      return url.split("youtu.be/")[1].split("?")[0];
    }
    return null;
  };

  const videoId = getVideoId(buttonTrailer);

  const handleTrailerClick = () => {
    if (videoId) {
      setShowTrailer(true);
    } else {
      alert("No se pudo obtener el video del tráiler.");
    }
  };

  return (
    <div
      className="modal mostrar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.6)", // oscurece toda la pantalla de fondo
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        className="modal-content"
        style={{ backgroundImage: `url(${movie.imgModal})` }}
      >
        <button
          id="close-modal"
          className="close-button"
          onClick={() => {
            setShowTrailer(false);
            onClose();
          }}
        >
          X
        </button>

        {!showTrailer && (
          <>
            <h2 className="modal-title" style={{ marginTop: 0 }}>
              {title}
            </h2>
            <p className="modal-description">{description}</p>
            <button
              className="button-trailer"
              onClick={handleTrailerClick}
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                cursor: "pointer",
              }}
            >
              Ver Trailer
            </button>
          </>
        )}

        {showTrailer && (
          <iframe
            id="trailer-movie"
            className="videoModal"
            width="100%"
            height="315"
            allowFullScreen
            src={`https://www.youtube.com/embed/${videoId}`}
            title={`Trailer de ${title}`}
            style={{ marginTop: "1rem", borderRadius: "8px" }}
          ></iframe>
        )}
      </div>
    </div>
  );
}
