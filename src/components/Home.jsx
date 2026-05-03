import Navbar from "./Navbar";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
import FilterBar from "./FilterBar";
import Hero from "./Hero";
import AllMovies from "./AllMovies";
import AddMovieModal from "./AddMovieModal";
import { useEffect, useState } from "react";
import ViewDetailsModal from "./ViewDetailsModal";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const moviesData = JSON.parse(localStorage.getItem("movies")) || [];
    console.log(moviesData);

    setMovies(moviesData);
  }, [setMovies]);
  console.log(movies);
  return (
    <div className="">
      <Navbar />
      <Hero movies={movies} />
      <MovieList movies={movies} setMovies={setMovies} />
      <AllMovies movies={movies} />
      <AddMovieModal setMovies={setMovies} movies={movies} />
    </div>
  );
}
