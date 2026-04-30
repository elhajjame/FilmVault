import "../index.css";
import { useState } from "react";
import ViewDetailsModal from "./ViewDetailsModal";
import movies from "../data/movies.json";

export default function Hero() {
  const [isOpen, isSetOpen] = useState(false);
  return (
    <>
      <div
        className="hero-container"
        style={{
          backgroundImage:
            "url(https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/ede72271-f953-4416-a3a4-b501e704befc/bea3bb67-0372-4672-bcdb-6c8557004b48?host=wbd-images.prod-vod.h264.io&partner=beamcom) ",
        }}
      >
        <div className="hero-content">
          <div className="top-rated">
            <hr className="divider" />
            <span>Top Rated in Your Vault</span>
          </div>
          <h1 className="font-bebas">Whiplash</h1>
          <div className="movie-info">
            <span className="font-cinzel">Drama/Indie film</span>
            <span>2014</span>
            <span>Christopher Nolan</span>
          </div>
          <p>
            A promising young drummer enrolls at a cut-throat music conservatory
            where his dreams of greatness are mentored by an instructor who will
            stop at nothing to realize a student's potential.
          </p>
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
      {isOpen && <ViewDetailsModal movie={movies[0]} isSetOpen={isSetOpen} />}
    </>
  );
}
