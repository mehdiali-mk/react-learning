import "./SearchBox.css";

export default function SearchBox({ searchText, searchUpdate }) {
  return (
    <input
      type="text"
      name="search"
      id="search"
      className="search-box"
      value={searchText}
      onChange={searchUpdate}
      placeholder="Search for cities..."
    />
  );
}
