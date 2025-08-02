import React, { useState } from "react";

export default function Modal({ movie, onClose }) {
  const [showTrailer, setShowTrailer] = useState(false);

  if (!movie) return null;

  console.log("Genres en Modal:", movie.genres);

  const genresText =
    Array.isArray(movie.genres) && movie.genres.length > 0
      ? movie.genres.join(" · ")
      : "Sin género";

  const { title, description, buttonTrailer, imgModal } = movie;

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


//   return (
//   <div
//     className="modal mostrar"
//     style={{
//       position: "fixed",
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: "rgba(0,0,0,0.6)",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       zIndex: 9999,
//     }}
//   >
//     <div className="modal-content animate-zoom">
//         <button
//           id="close-modal"
//           className="close-button"
//           onClick={() => {
//             setShowTrailer(false);
//             onClose();
//           }}
//         >
//           Cerrar
//         </button>
//       <div
//          className="modal-image"
//          style={{
//          backgroundImage: `url(${imgModal})`,
//          backgroundSize: "cover",
//          backgroundPosition: "center",
//          height: "300px",
//          width: "100%",
//         }}
//       ></div>

//       <div className="modal-body">
//         {!showTrailer && (
//           <>
//             <h3 className="titulo-banner">{title}</h3>
//             <p className="modal-description">{description}</p>
//             <p className="modal-genres">{genresText}</p>
//             <button className="button-trailer" onClick={handleTrailerClick}>
//               <span style={{ color: "black", fontWeight: "bold" }}>►</span> Ver Trailer
//             </button>
//             <div className="modal-buttons">
//               <button className="btn-circle play">▶️</button>
//               <button className="btn-circle add">+</button>
//               <button className="btn-circle remove">×</button>
//               <button className="btn-circle like">👍</button>
//             </div>
//           </>
//         )}

//         {showTrailer && (
//           <iframe
//               id="trailer-movie"
//               className="videoModal"
//               width="100%"
//               height="450"
//               allowFullScreen
//               src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
//               title={`Trailer de ${title}`}
//               style={{ border: "none" }}
//           ></iframe>
//         )}
//       </div>
//     </div>
//   </div>
// );
return (
  <div
    className="modal mostrar"
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    }}
  >
    <div
      className="modal-content animate-zoom"
      style={{
        width: showTrailer ? "80%" : "90%",
        maxWidth: "900px",
        backgroundColor: "black",
        borderRadius: "10px",
        overflow: "hidden",
        padding: 0,
        position: "relative",
        height: showTrailer ? "500px" : "auto",
      }}
    >
      {/* Botón Cerrar */}
      <button
        id="close-modal"
        className="close-button"
        onClick={() => {
          setShowTrailer(false);
          onClose();
        }}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 1000,
          backgroundColor: "darkred",
          color: "white",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Cerrar
      </button>

      {showTrailer ? (
        <iframe
          id="trailer-movie"
          className="videoModal"
          width="100%"
          height="100%"
          allowFullScreen
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={`Trailer de ${title}`}
          style={{
            border: "none",
            display: "block",
            zIndex: 0,
          }}
        ></iframe>
      ) : (
        <>
          <div
            className="modal-image"
            style={{
              backgroundImage: `url(${imgModal})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
              width: "100%",
            }}
          ></div>

          <div className="modal-body" style={{ padding: "1.5rem", color: "white" }}>
            <h3 className="titulo-banner">{title}</h3>
            <p className="modal-description">{description}</p>
            <p className="modal-genres">{genresText}</p>
            <button className="button-trailer" onClick={handleTrailerClick}>
              <span style={{ color: "black", fontWeight: "bold" }}>►</span> Ver Trailer
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
