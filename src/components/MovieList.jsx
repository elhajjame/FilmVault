import "../index.css";
import moviesData from "../data/movies.json";
import MovieCard from "./MovieCard";
import SectionTitle from "./SectionTitle";

export default function MovieList() {
  return (
    <div className="movie-list">
      <SectionTitle title="Top Rated Films" category="Hall of Fame" />
      <div className="movies">
        {moviesData.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}
