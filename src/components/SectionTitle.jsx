import "../index.css";

export default function SectionTitle({ title, category }) {
  return (
    <div className="">
      <span className="font-abril">{category}</span>
      <h2 className="font-cinzel">{title}</h2>
      <hr className="top-movies-divider" />
    </div>
  );
}
