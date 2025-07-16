import React, { useState } from "react";

export default function Modal({ movie, onClose }) {
  const [showTrailer, setShowTrailer] = useState(false);

  if (!movie) return null;

  const { title, description, buttonTrailer, imgModal } = movie;

  // Extraer videoId de YouTube
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
    <div className={`modal ${movie ? "mostrar" : ""}`} style={{ visibility: movie ? "visible" : "hidden" }}>
      <div
        className="modal-content"
        style={{
          backgroundImage: `url(${imgModal})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="modal-container">
          <img src={imgModal} alt={title} className="imgModal" />
          <button id="close-modal" className="close-button" onClick={() => { setShowTrailer(false); onClose(); }}>
            X
          </button>
          {!showTrailer && (
            <>
              <h2 className="modal-title">{title}</h2>
              <p className="modal-description">{description}</p>
              <button className="button-trailer" onClick={handleTrailerClick} style={{ paddingLeft: 0, marginLeft: 0 }}>
                Ver Trailer
              </button>
            </>
          )}
          {showTrailer && (
            <iframe
              id="trailer-movie"
              className="videoModal"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`Trailer de ${title}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}
