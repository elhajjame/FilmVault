import "../index.css";
// import moviesData from "../data/movies.json";
import MovieCard from "./MovieCard";
import SectionTitle from "./SectionTitle";
import FilterBar from "./FilterBar";
import { useState } from "react";

export default function AllMovies({ movies }) {
  const [genre, setGenre] = useState("all");
  const [rating, setrating] = useState(0);
  console.log(rating);

  const filterMovies = movies.filter((movie) => {
    const matchgenre = genre === "all" || genre === movie.genre;

    const matchingRating = rating === 0 || Number(movie.rating) >= rating;

    return matchgenre && matchingRating;
  });

  return (
    <div className="title-two">
      <SectionTitle title="All Films" category="The Collection" />
      <FilterBar movies={movies} setGenre={setGenre} setrating={setrating} />

      <div className="movies">
        {filterMovies.map((movie) => (
          <MovieCard movie={movie} width={"165px"} />
        ))}
      </div>
    </div>
  );
}
