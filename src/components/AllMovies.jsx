import "../index.css";
import moviesData from "../data/movies.json";
import MovieCard from "./MovieCard";
import SectionTitle from "./SectionTitle";

export default function AllMovies() {
  return (
    <div className="title-two">
      <SectionTitle title="All Films" category="The Collection" />
      <div className="movies">
        {moviesData.map((movie) => (
          <MovieCard movie={movie} width={"165px"} />
        ))}
      </div>
    </div>
  );
}
