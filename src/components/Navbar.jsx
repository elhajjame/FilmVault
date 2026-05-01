import "../index.css";
export default function Navbar({ AddMovieModal }) {
  const openModel = function () {
    document.querySelector(".modal-overlay").classList.remove("hidden");
  };

  return (
    <div className="navbar">
      <h4>FilmVault</h4>
      <button id="add-btn" onClick={openModel}>
        + ADD Movie
      </button>
    </div>
  );
}
