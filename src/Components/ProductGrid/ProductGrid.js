import React from "react";
import "./ProductGrid.scss";
import ProductCard from "../ProductCard/ProductCard";
import { connect } from "react-redux";

const ProductGrid = props => {
  const productsToShow = props.products.filteredProducts;
  const renderProductCard = productsToShow.map(item => (
    <ProductCard
      key={item.id}
      img={item.images[0]}
      id={item.id}
      type={item.typeRoom}
      reviewsRate={item.reviewsRate}
      title={item.title}
    />
  ));
  return <div className="product-grid">{renderProductCard}</div>;
};

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(ProductGrid);
