import "../index.css";
export default function FilterBar() {
  return (
    <div className="filter-section">
      <div className="filter">
        <select>
          <option value="">filter</option>
          <option value="drama">drama</option>
          <option value="action">action</option>
          <option value="comedy">comedy</option>
        </select>
      </div>

      <div className="rating">
        <label>rating</label>
        <select>
          <option value="">rating</option>
          <option value="">⭐ +1</option>
          <option value="">⭐ +3</option>
          <option value="">⭐ +6</option>
          <option value="">⭐ +9</option>
        </select>
      </div>
    </div>
  );
}
