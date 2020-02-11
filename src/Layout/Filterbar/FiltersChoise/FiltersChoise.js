import React from "react";
import "./FiltersChoise.scss";

const FiltersChoise = ({ typeRoomSelected, maxPrice }) => {
  const renderedFilterTypeRoom = array => {
    if (array.length === 0) {
      return <span>All</span>;
    }
    return array.map(item => <span key={`${item}-y8v3829`}>{item}, </span>);
  };
  return (
    <div className="filters-choice">
      <div className="filters-choice_item">
        Room type: {renderedFilterTypeRoom(typeRoomSelected)}{" "}
      </div>
      <div className="filters-choice_item">
        Max price: <span>{maxPrice} &euro;</span>{" "}
      </div>
    </div>
  );
};

export default FiltersChoise;
