import React from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-bar_icon">
        <i className="fas fa-search"></i>
      </div>
      <input
        type="text"
        name="search"
        placeholder="Search"
        className="search-bar_area"
      ></input>
    </div>
  );
};

export default SearchBar;
