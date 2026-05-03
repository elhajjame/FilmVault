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
    setMovies(moviesData);
  }, []);

  return (
    <div className="">
      <Navbar />
      <Hero />
      <MovieList movies={movies} />
      <AllMovies movies={movies} />
      <AddMovieModal setMovies={setMovies} movies={movies} />
    </div>
  );
}
