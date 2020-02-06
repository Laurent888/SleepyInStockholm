import React from "react";
import "./Filterbar.scss";
import { connect } from "react-redux";
import FilterButton from "../../Components/Buttons/FilterButton/FilterButton";
import {
  toggleMenuPriceRoom,
  toggleMenuTypeRoom
} from "../../redux/UI/uiActions";
import FilterTab from "../../Components/FilterTab/FilterTab";

const Filterbar = props => {
  const {
    toggleMenuPriceRoom,
    toggleMenuTypeRoom,
    menuTypeRoomOpen,
    menuPriceRoomOpen
  } = props;
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
    </div>
  );
};

const mapStateToProps = state => ({
  menuTypeRoomOpen: state.ui.menuTypeRoomOpen,
  menuPriceRoomOpen: state.ui.menuPriceRoomOpen
});

const mapDispatchToProps = dispatch => ({
  toggleMenuTypeRoom: () => dispatch(toggleMenuTypeRoom),
  toggleMenuPriceRoom: () => dispatch(toggleMenuPriceRoom)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filterbar);
