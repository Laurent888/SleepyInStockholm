import React from "react";
import "./FilterResultNumber.scss";
import { connect } from "react-redux";

const FilterResultNumber = ({ filteredProducts }) => {
  const resultNumber = filteredProducts.length;
  return (
    <div className="filters-result-number">
      <div>Result: </div>
      <div>{resultNumber} found</div>
    </div>
  );
};

const mapStateToProps = state => ({
  filteredProducts: state.products.filteredProducts
});

export default connect(mapStateToProps)(FilterResultNumber);
