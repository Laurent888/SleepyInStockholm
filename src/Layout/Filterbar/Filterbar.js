import React from "react";
import "./Filterbar.scss";
import FilterButton from "../../Components/Buttons/FilterButton/FilterButton";

const Filterbar = () => {
  return (
    <div className="filterbar">
      <FilterButton label="Type" />
      <FilterButton label="Price" />
      <FilterButton label="Guests" />
    </div>
  );
};

export default Filterbar;
