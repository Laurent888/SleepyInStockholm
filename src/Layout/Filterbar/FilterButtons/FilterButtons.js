import React from "react";
import "./FilterButtons.scss";
import FilterButton from "../../../Components/Buttons/FilterButton/FilterButton";
import FilterTab from "../../../Components/FilterTab/FilterTab";

const FilterButtons = ({ props }) => {
  const {
    toggleMenuTypeRoom,
    menuTypeRoomOpen,
    toggleMenuPriceRoom,
    menuPriceRoomOpen,
    resetFilterTypeRoom
  } = props;
  return (
    <div className="filterbar-buttons">
      <div className="filterbar-group">
        <FilterButton label="Type" clicked={toggleMenuTypeRoom} />
        {menuTypeRoomOpen && (
          <FilterTab label="type of room" filterType="typeRoom" />
        )}
      </div>
      <div className="filterbar-group">
        <FilterButton label="Price" clicked={toggleMenuPriceRoom} />
        {menuPriceRoomOpen && <FilterTab label="price" />}
      </div>
      <div className="reset-filter" onClick={resetFilterTypeRoom}>
        Reset filter
      </div>
    </div>
  );
};

export default FilterButtons;
