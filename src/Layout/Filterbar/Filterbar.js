import React from "react";
import "./Filterbar.scss";
import { connect } from "react-redux";
import FilterResultNumber from "./FilterResultNumber/FilterResultNumber";
import FilterChoice from "./FiltersChoise/FiltersChoise";
import FilterButtons from "./FilterButtons/FilterButtons";
import {
  toggleMenuPriceRoom,
  toggleMenuTypeRoom
} from "../../redux/UI/uiActions";
import { resetFilterTypeRoom } from "../../redux/product/productAction";

const Filterbar = props => {
  const { maxPrice, typeRoomSelected } = props;

  return (
    <div className="filterbar">
      {/* Show the filter buttons */}
      <FilterButtons props={{ ...props }} />

      {/* Show the filters choice */}
      <FilterChoice typeRoomSelected={typeRoomSelected} maxPrice={maxPrice} />

      {/* Show the number of results found */}
      <FilterResultNumber />
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
