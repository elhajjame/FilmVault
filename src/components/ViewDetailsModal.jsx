import "../index.css";
export default function ViewDetailsModal({ movie, isSetOpen }) {
  return (
    <div className="modal-overlay-2">
      <div className="container-de">
        <div className="modal-header">
          {/* <h2>Add Movie</h2> */}
          <button onClick={() => isSetOpen(false)} className="close-details">
            ✕
          </button>
        </div>
        <img src={movie.movieCoverUrl} />
        <section className="details-container">
          <div className="category">
            {movie.releaseYear} • {movie.genre}
          </div>
          <h3 className="font-bebas title">{movie.title}</h3>
          <div className="director">{movie.director}</div>
          <div className="stars">{movie.rating}</div>

          <p className="desc">{movie.description}</p>
          <div className="cast">
            {movie.mainActors.map((actor) => (
              <span>{actor}</span>
            ))}
          </div>
          <div className="buttons">
            <button className="btn trailer">Watch Trailer</button>
            <button className="btn edit">Edit Movie</button>
            <button className="btn delete">Delete</button>
          </div>
        </section>
      </div>
    </div>
  );
}
