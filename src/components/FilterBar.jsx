import { useState } from "react";
import "../index.css";
export default function FilterBar({ movies, setGenre, setrating }) {
  const genres = [...new Set(movies.map((movie) => movie.genre))];

  return (
    <div className="filter-section">
      <div className="filter">
        <select onChange={(e) => setGenre(e.target.value)}>
          <option value="all">All</option>
          {genres.map((genre) => (
            <option value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      <div className="rating">
        <label>rating</label>
        <select onChange={(e) => setrating(Number(e.target.value))}>
          <option value="">rating</option>
          <option value={1}>⭐ +1</option>
          <option value={2}>⭐ +2</option>
          <option value={3}>⭐ +3</option>
          <option value={4}>⭐ +4</option>
          <option value={5}>⭐ 5</option>
        </select>
      </div>
    </div>
  );
}
