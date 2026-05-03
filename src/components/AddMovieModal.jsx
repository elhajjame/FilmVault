import { useState } from "react";
import "../index.css";

export default function AddMovieModal({ setMovies }) {
  const closeModel = function () {
    document.querySelector(".modal-overlay").classList.add("hidden");
  };

  const [values, setValues] = useState({
    title: "",
    description: "",
    releaseYear: "",
    genre: "",
    director: "",
    mainActors: "",
    coverImg: "",
    trailer: "",
    rating: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const moviesData = JSON.parse(localStorage.getItem("movies")) || [];

    const newMovie = {
      ...values,
      id: Date.now(),
    };

    const updatedMovies = [...moviesData, newMovie];

    localStorage.setItem("movies", JSON.stringify(updatedMovies));

    setMovies(updatedMovies);

    console.log(newMovie);
    console.log(moviesData);
  };
  return (
    <div className="modal-overlay hidden">
      <div className="modal">
        <div className="modal-header">
          <h2>Add Movie</h2>
          <button onClick={closeModel} className="close-btn">
            ✕
          </button>
        </div>

        <form onSubmit={submitHandler} className="form">
          <label>Title *</label>
          <input
            type="text"
            name="title"
            placeholder="Movie title"
            onChange={(e) => handleChange(e)}
          />

          <label>Description</label>
          <textarea
            placeholder="Brief synopsis..."
            name="description"
            onChange={(e) => handleChange(e)}
          />

          <div className="row">
            <div>
              <label>Release Year</label>
              <input
                type="text"
                name="releaseYear"
                placeholder="2026"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label>Genre</label>
              <input
                type="text"
                name="genre"
                placeholder="Drama"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="row">
            <div>
              <label>Director</label>
              <input
                type="text"
                name="director"
                placeholder="Director name"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label>Main Actors</label>
              <input
                type="text"
                name="mainActors"
                placeholder="Actor 1, Actor 2..."
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <label>Cover Image URL</label>
          <input
            type="text"
            name="coverImg"
            placeholder="https://..."
            onChange={(e) => handleChange(e)}
          />

          <label>Trailer URL (YouTube)</label>
          <input
            type="text"
            name="trailer"
            placeholder="https://youtube.com/watch?v=..."
            onChange={(e) => handleChange(e)}
          />

          <label>Rating</label>
          <div className="stars">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <div className="actions">
            <button onClick={closeModel} type="button" className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              ADD MOVIE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
