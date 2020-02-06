import React from "react";
import "./FilterButton.scss";

const FilterButton = props => {
  const { clicked, label } = props;
  return (
    <button className="filter-btn" onClick={clicked}>
      <div className="filter-btn_label">{label}</div>
    </button>
  );
};

export default FilterButton;
