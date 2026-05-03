import "../index.css";
// import moviesData from "../data/movies.json";
import MovieCard from "./MovieCard";
import SectionTitle from "./SectionTitle";
import FilterBar from "./FilterBar";

export default function AllMovies({ movies }) {
  return (
    <div className="title-two">
      <SectionTitle title="All Films" category="The Collection" />
      <FilterBar movies={movies} />

      <div className="movies">
        {movies.map((movie) => (
          <MovieCard movie={movie} width={"165px"} />
        ))}
      </div>
    </div>
  );
}
