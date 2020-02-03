import React, { Fragment } from "react";
import "./AllProductPage.scss";
import FilterBar from "../../Filterbar/Filterbar";
import ProductGrid from "../../../Components/ProductGrid/ProductGrid";

const AllProductPage = () => {
  return (
    <Fragment>
      <FilterBar />
      <div className="allProductPage">
        <ProductGrid />
      </div>
    </Fragment>
  );
};

export default AllProductPage;
