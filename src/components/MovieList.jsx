import "../index.css";
import MovieCard from "./MovieCard";

export default function MovieList() {
  return (
    <div className="movie-list">
      <span className="font-abril">Hall of Fame</span>
      <h2 className="font-cinzel">Top Rated Films</h2>
      <hr className="top-movies-divider" />
      <div className="movies">
        <MovieCard />
      </div>
    </div>
  );
}
