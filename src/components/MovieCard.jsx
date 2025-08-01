
export default function MovieCard({ movie, onShowModal }) {
  return (
    <div className="movie-card-wrapper"> 
      <li className="movie-card">
        <div className="card-content">
          <img src={movie.imgSrc} alt={movie.title} />
          <div className="overlay">
            <h3 className="titulo-banner">{movie.title}</h3>
            <p>{movie.year}</p>
            <button className="btn-modern" onClick={() => onShowModal(movie)}>
              Resumen
            </button>
          </div>
        </div>
      </li>
    </div>
  );
}

