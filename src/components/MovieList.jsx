import "../index.css";
// import moviesData from "../data/movies.json";
import MovieCard from "./MovieCard";
import SectionTitle from "./SectionTitle";

export default function MovieList({ movies, setMovies }) {
  const topRated = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 4);
  console.log(movies);
  console.log(topRated);

  return (
    <div className="movie-list">
      <SectionTitle title="Top Rated Films" category="Hall of Fame" />
      <div className="movies">
        {topRated.map((movie) => (
          <MovieCard
            movie={movie}
            movies={movies}
            width={"236px"}
            setMovies={setMovies}
          />
        ))}
      </div>
    </div>
  );
}
