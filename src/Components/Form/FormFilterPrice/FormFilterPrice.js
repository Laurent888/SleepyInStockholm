import React, { useState } from "react";
import "./FormFilterPrice.scss";
import FilterTabBtn from "../../Buttons/FilterTabBtn/FilterTabBtn";
import { setFilterPriceRoom } from "../../../redux/product/productAction";
import { toggleMenuPriceRoom } from "../../../redux/UI/uiActions";
import { connect } from "react-redux";

const FormFilterPrice = ({ setFilterPriceRoom, toggleMenuPriceRoom }) => {
  const [maxPrice, setMaxPrice] = useState(150);

  const handleChange = e => {
    setMaxPrice(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFilterPriceRoom(maxPrice);
    toggleMenuPriceRoom();
  };

  return (
    <form className="formFilterPrice" onSubmit={handleSubmit}>
      <div className="formFilterPrice-group">
        <label htmlFor="">
          Max Price :{" "}
          <span className="formFilterPrice-price">
            {maxPrice}
            &euro;
          </span>
        </label>
        <input
          type="range"
          name="filter-price"
          step="10"
          value={maxPrice}
          min="0"
          max="150"
          onChange={handleChange}
        />
      </div>
      <FilterTabBtn label="Save" type="submit" />
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  setFilterPriceRoom: maxPrice => dispatch(setFilterPriceRoom(maxPrice)),
  toggleMenuPriceRoom: () => dispatch(toggleMenuPriceRoom)
});

export default connect(null, mapDispatchToProps)(FormFilterPrice);
