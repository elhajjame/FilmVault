import "../index.css";

export default function MovieCard() {
  return (
    <div className="movies-card">
      <img
        src="https://a.ltrbxd.com/resized/film-poster/5/1/4/4/4/51444-pulp-fiction-0-2000-0-3000-crop.jpg?v=dee19a8077"
        alt="movie cover"
      />

      <div className="overlay">
        <span>Drama</span>
        <h3 font-cinzel>Pulp Fiction</h3>
        <span>⭐ 8.5 </span>
      </div>
    </div>
  );
}
