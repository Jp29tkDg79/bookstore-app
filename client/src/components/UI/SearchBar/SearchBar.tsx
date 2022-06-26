import { FaSearch } from "react-icons/fa";

import classes from "./SearchBar.module.css";

type SearchBarProps = {
  isOpen: boolean;
};

const SearchBar = ({ isOpen }: SearchBarProps) => {
  return (
    <form
      className={classes["search-form"]}
      style={{ top: isOpen ? "115%" : "" }}
    >
      <input
        type="search"
        className={classes["search-box"]}
        id="searchBar"
        placeholder="search here..."
      />
      <label htmlFor="searchBar">
        <FaSearch />
      </label>
    </form>
  );
};

export default SearchBar;
