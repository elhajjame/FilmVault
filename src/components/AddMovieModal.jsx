import "../index.css";

export default function AddMovieModal() {
  const closeModel = function () {
    document.querySelector(".modal-overlay").classList.add("hidden");
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

        <form className="form">
          <label>Title *</label>
          <input type="text" placeholder="Movie title" />

          <label>Description</label>
          <textarea placeholder="Brief synopsis..." />

          <div className="row">
            <div>
              <label>Release Year</label>
              <input type="text" placeholder="2026" />
            </div>
            <div>
              <label>Genre</label>
              <input type="text" placeholder="Drama" />
            </div>
          </div>

          <div className="row">
            <div>
              <label>Director</label>
              <input type="text" placeholder="Director name" />
            </div>
            <div>
              <label>Main Actors</label>
              <input type="text" placeholder="Actor 1, Actor 2..." />
            </div>
          </div>

          <label>Cover Image URL</label>
          <input type="text" placeholder="https://..." />

          <label>Trailer URL (YouTube)</label>
          <input type="text" placeholder="https://youtube.com/watch?v=..." />

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
