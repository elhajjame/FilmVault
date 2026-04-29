import Navbar from "./Navbar";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
import FilterBar from "./FilterBar";
import Hero from "./Hero";
import AllMovies from "./AllMovies";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <MovieList />
      <AllMovies />
    </div>
  );
}
