
export default function MovieCard({ movie, onShowModal }) {
  return (
    <li className="movie-card">
      <div className="card-content">
        <img src={movie.imgSrc} alt={movie.title} />
        <div className="overlay">
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <button className="btn-modern" onClick={() => onShowModal(movie)}>
            Resumen
          </button>
        </div>
      </div>
    </li>
  );
}
