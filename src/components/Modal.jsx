import React, { useState, useEffect } from "react";

export default function Modal({ movie, onClose }) {
  const [showTrailer, setShowTrailer] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (movie) {
      setVisible(true);
      setShowTrailer(false);
    }
  }, [movie]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose();
      setShowTrailer(false);
    }, 350);
  };

  if (!movie && !visible) return null;

  const { title, description, buttonTrailer, imgModal, distribution, genres } =
    movie;

  const genresText =
    Array.isArray(genres) && genres.length > 0
      ? genres.join(" · ")
      : "Sin género";

  const getVideoId = (url) => {
    if (!url) return null;
    if (url.includes("v=")) return url.split("v=")[1].split("&")[0];
    if (url.includes("youtu.be/")) return url.split("youtu.be/")[1];
    return null;
  };

  const videoId = getVideoId(buttonTrailer);

  const handleTrailerClick = () => {
    if (videoId) setShowTrailer(true);
  };

  return (
    <div
      className={`modal ${visible ? "mostrar" : ""}`}
      onClick={handleClose}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: showTrailer ? "80%" : "90%",
          maxWidth: "900px",
          height: showTrailer ? "500px" : "auto",
        }}
      >
        {/* BOTÓN CERRAR */}
        <button className="close-button" onClick={handleClose}>
          Cerrar
        </button>

        {showTrailer ? (
          <iframe
            className="videoModal"
            width="100%"
            height="100%"
            allowFullScreen
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={`Trailer de ${title}`}
          />
        ) : (
          <>
            {/* IMAGEN */}
            <div
              className="modal-image"
              style={{
                backgroundImage: `url(${imgModal})`,
                height: "300px",
              }}
            />

            {/* CONTENIDO */}
            <div className="modal-body">
              <h3 className="titulo-banner">{title}</h3>

              <p className="modal-genres">
                <strong>Reparto:</strong>{" "}
                {Array.isArray(distribution)
                  ? distribution.join(", ")
                  : "No disponible"}
              </p>

              <p className="modal-description">{description}</p>

              <p className="modal-genres">{genresText}</p>

              <button
                className="button-trailer"
                onClick={handleTrailerClick}
              >
                ► Ver Trailer
              </button>

              <div className="modal-buttons">
                <button className="btn-circle play">▶️</button>
                <button className="btn-circle add">+</button>
                <button className="btn-circle remove">×</button>
                <button className="btn-circle like">👍</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
