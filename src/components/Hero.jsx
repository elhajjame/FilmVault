import "../index.css";
import { useState } from "react";
import ViewDetailsModal from "./ViewDetailsModal";

export default function Hero({ movies }) {
  const [isOpen, isSetOpen] = useState(false);
  if (!movies.length) return null;
  const topRated = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 1)[0];
  console.log(movies);
  console.log(topRated);

  return (
    <>
      <div
        className="hero-container "
        style={{
          backgroundImage: `url(${topRated.coverImg})`,
        }}
      >
        <div className="hero-content">
          <div className="top-rated">
            <hr className="divider" />
            <span>Top Rated in Your Vault</span>
          </div>
          <h1 className="font-bebas">{topRated.title}</h1>
          <div className="movie-info">
            <span className="font-cinzel">{topRated.genre}</span>
            <span>{topRated.releaseYear}</span>
            <span>{topRated.director}</span>
          </div>
          <p>{topRated.description}</p>
          <div className="hero-btn">
            <button
              className="details-btn"
              onClick={() => {
                isSetOpen(true);
              }}
            >
              View Details
            </button>
            <button className="trailer-btn">Trailer</button>
          </div>
        </div>
      </div>
      {isOpen && <ViewDetailsModal movie={topRated} isSetOpen={isSetOpen} />}
    </>
  );
}
