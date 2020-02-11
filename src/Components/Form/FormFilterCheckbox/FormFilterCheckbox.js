import React, { useState } from "react";
import "./FormFilterCheckbox.scss";
import { connect } from "react-redux";
import { setFilterTypeRoom } from "../../../redux/product/productAction";
import { toggleMenuTypeRoom } from "../../../redux/UI/uiActions";
import FilterTabBtn from "../../Buttons/FilterTabBtn/FilterTabBtn";

const FormFilterCheckbox = props => {
  const { setFilterTypeRoom, toggleMenuTypeRoom } = props;

  const [filterTypeRoomState, setFilterTypeRoomState] = useState({
    studio: false,
    twoRooms: false,
    threeRooms: false
  });

  const handleChange = e => {
    setFilterTypeRoomState({
      ...filterTypeRoomState,
      [e.target.name]: e.target.checked
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFilterTypeRoom(filterTypeRoomState);
    toggleMenuTypeRoom();
  };

  return (
    <form className="form-checkbox" onSubmit={handleSubmit}>
      <div className="form-checkbox_group">
        <label className="checkbox">
          <input
            type="checkbox"
            name="studio"
            checked={filterTypeRoomState.studio}
            onChange={handleChange}
          />
          Studio
          <span className="checkbox-custom"></span>
        </label>
      </div>

      <div className="form-checkbox_group">
        {" "}
        <label className="checkbox">
          <input
            type="checkbox"
            name="twoRooms"
            checked={filterTypeRoomState.twoRooms}
            onChange={handleChange}
          />
          Two rooms
          <span className="checkbox-custom"></span>
        </label>
      </div>

      <div className="form-checkbox_group">
        {" "}
        <label className="checkbox">
          {" "}
          <input
            type="checkbox"
            name="threeRooms"
            checked={filterTypeRoomState.threeRooms}
            onChange={handleChange}
          />
          Three rooms
          <span className="checkbox-custom"></span>
        </label>
      </div>
      <FilterTabBtn type="submit" label="Save" />
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  setFilterTypeRoom: item => dispatch(setFilterTypeRoom(item)),
  toggleMenuTypeRoom: () => dispatch(toggleMenuTypeRoom)
});

export default connect(null, mapDispatchToProps)(FormFilterCheckbox);
