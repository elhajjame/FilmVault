import { useState } from "react";
import "../index.css";
import ViewDetailsModal from "./ViewDetailsModal";

export default function MovieCard({ movies, movie, width, setMovies }) {
  console.log(movie);

  const [isOpen, isSetOpen] = useState(false);
  const deleteHandler = (id) => {
    const updatedMovies = movies.filter((film) => film.id !== id);
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
  };
  return (
    <>
      <div
        onClick={() => isSetOpen(true)}
        className="movies-card"
        style={{ width }}
      >
        <img src={movie.coverImg} alt="movie cover" />

        <div className="overlay">
          <span>{movie.genre}</span>
          <h3 font-cinzel>{movie.title}</h3>
          <span>⭐ {movie.rating}</span>
        </div>
      </div>
      {isOpen && (
        <ViewDetailsModal
          movie={movie}
          isSetOpen={isSetOpen}
          deleteHandler={deleteHandler}
        />
      )}
    </>
  );
}
