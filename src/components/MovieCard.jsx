import "../index.css";

export default function MovieCard({ movie }) {
  return (
    <div className="movies-card">
      <img src={movie.movieCoverUrl} alt="movie cover" />

      <div className="overlay">
        <span>{movie.genre}</span>
        <h3 font-cinzel>{movie.title}</h3>
        <span>⭐ {movie.rating}</span>
      </div>
    </div>
  );
}
