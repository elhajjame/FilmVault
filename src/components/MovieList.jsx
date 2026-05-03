import "../index.css";
// import moviesData from "../data/movies.json";
import MovieCard from "./MovieCard";
import SectionTitle from "./SectionTitle";

export default function MovieList({ movies }) {
  return (
    <div className="movie-list">
      <SectionTitle title="Top Rated Films" category="Hall of Fame" />
      <div className="movies">
        {movies.map((movie) => (
          <MovieCard movie={movie} width={"236px"} />
        ))}
      </div>
    </div>
  );
}
