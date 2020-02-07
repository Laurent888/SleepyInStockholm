import React from "react";
import "./Filterbar.scss";
import { connect } from "react-redux";
import FilterButton from "../../Components/Buttons/FilterButton/FilterButton";
import {
  toggleMenuPriceRoom,
  toggleMenuTypeRoom
} from "../../redux/UI/uiActions";
import { resetFilterTypeRoom } from "../../redux/product/productAction";
import FilterTab from "../../Components/FilterTab/FilterTab";

const Filterbar = props => {
  const {
    toggleMenuPriceRoom,
    toggleMenuTypeRoom,
    menuTypeRoomOpen,
    menuPriceRoomOpen,
    resetFilterTypeRoom,
    maxPrice,
    typeRoomSelected
  } = props;

  const renderedFilterTypeRoom = array => {
    if (array.length === 0) {
      return <span>All</span>;
    }
    return array.map(item => <span key={`${item}-y8v3829`}>{item}, </span>);
  };

  return (
    <div className="filterbar">
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

      {/* Show the filters choice */}

      <div className="filters-choice">
        <div className="filters-choice_item">
          Room type: {renderedFilterTypeRoom(typeRoomSelected)}{" "}
        </div>
        <div className="filters-choice_item">
          Max price: <span>{maxPrice} &euro;</span>{" "}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  menuTypeRoomOpen: state.ui.menuTypeRoomOpen,
  menuPriceRoomOpen: state.ui.menuPriceRoomOpen,
  maxPrice: state.products.maxPrice,
  typeRoomSelected: state.products.typeRoomSelected
});

const mapDispatchToProps = dispatch => ({
  toggleMenuTypeRoom: () => dispatch(toggleMenuTypeRoom),
  toggleMenuPriceRoom: () => dispatch(toggleMenuPriceRoom),
  resetFilterTypeRoom: () => dispatch(resetFilterTypeRoom)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filterbar);
