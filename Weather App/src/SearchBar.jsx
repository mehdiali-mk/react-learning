import SearchBox from "./SearchBox";
import Button from "./Button";
import "./SearchBar.css";

export default function SearchBar({
  searchText = "",
  searchUpdate = () => {},
  searchSubmitUpdate = () => {},
}) {
  return (
    <div className="search-bar">
      <SearchBox searchText={searchText} searchUpdate={searchUpdate} />
      <Button action={searchSubmitUpdate} />
    </div>
  );
}
