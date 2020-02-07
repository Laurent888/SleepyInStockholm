import React from "react";
import "./FilterTabBtn.scss";

const FilterTabBtn = props => {
  return (
    <button type={props.type} className="filterTabBtn">
      {props.label}
    </button>
  );
};

export default FilterTabBtn;
