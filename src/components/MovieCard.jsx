import "../index.css";

export default function MovieCard({ movie, width }) {
  return (
    <div className="movies-card" style={{ width }}>
      <img src={movie.coverImg} alt="movie cover" />

      <div className="overlay">
        <span>{movie.genre}</span>
        <h3 font-cinzel>{movie.title}</h3>
        <span>⭐ {movie.rating}</span>
      </div>
    </div>
  );
}
