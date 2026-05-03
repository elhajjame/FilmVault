import { useState } from "react";
import "../index.css";
import ViewDetailsModal from "./ViewDetailsModal";

export default function MovieCard({ movie, width }) {
  const [isOpen, isSetOpen] = useState(false);
  return (
    <div className="movies-card" style={{ width }}>
      <img src={movie.coverImg} alt="movie cover" />

        <div className="overlay">
          <span>{movie.genre}</span>
          <h3 font-cinzel>{movie.title}</h3>
          <span>⭐ {movie.rating}</span>
        </div>
      </div>
      {isOpen && <ViewDetailsModal movie={movie} isSetOpen={isSetOpen} />}
    </>
  );
}
