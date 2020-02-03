import React from "react";
import "./FilterButton.scss";

const FilterButton = props => {
  return (
    <button className="filter-btn">
      <div className="filter-btn_label">{props.label}</div>
    </button>
  );
};

export default FilterButton;
