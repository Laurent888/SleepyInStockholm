import React from "react";
import "./ProductGrid.scss";
import ProductCard from "../ProductCard/ProductCard";
import { connect } from "react-redux";
import {
  toggleMenuTypeRoom,
  toggleMenuPriceRoom
} from "../../redux/UI/uiActions";

const ProductGrid = props => {
  const productsToShow = props.products.filteredProducts;

  const {
    toggleMenuTypeRoom,
    toggleMenuPriceRoom,
    menuPriceRoomOpen,
    menuTypeRoomOpen
  } = props;

  // Toggle the filter tab when click anywhere on the page
  const handleClick = () => {
    console.log("test");
    if (menuTypeRoomOpen) {
      toggleMenuTypeRoom();
    } else if (menuPriceRoomOpen) {
      toggleMenuPriceRoom();
    } else {
      return;
    }
  };

  // Render the appartments
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
  return (
    <div className="product-grid" onClick={() => handleClick()}>
      {renderProductCard}
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products,
  menuPriceRoomOpen: state.ui.menuPriceRoomOpen,
  menuTypeRoomOpen: state.ui.menuTypeRoomOpen
});

const mapDispatchToProps = dispatch => ({
  toggleMenuTypeRoom: () => dispatch(toggleMenuTypeRoom),
  toggleMenuPriceRoom: () => dispatch(toggleMenuPriceRoom)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
