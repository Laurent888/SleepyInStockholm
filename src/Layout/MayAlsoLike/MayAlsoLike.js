import React from "react";
import "./MayAlsoLike.scss";
import ProductCard from "../../Components/ProductCard/ProductCard";
// Redux
import { connect } from "react-redux";

const MayAlsoLike = props => {
  const { products, typeRoom, id } = props;

  // Filter the featured cards
  const filtereddProducts = products.filter(
    item => item.typeRoom === typeRoom && item.id !== id
  );
  const featuredProducts = filtereddProducts.filter((item, idx) => idx <= 3);

  // Render the featured cards

  const renderedCards = featuredProducts.map(item => (
    <div className="mayAlsoLike_content_item">
      <ProductCard
        key={`${item.id}-mayLike`}
        img={item.images[0]}
        id={item.id}
        type={item.typeRoom}
        reviewsRate={item.reviewsRate}
        title={item.title}
      />
    </div>
  ));

  return (
    <div className="mayAlsoLike">
      <h3 className="mayAlsoLike-title">You may also like: </h3>
      <div className="mayAlsoLike_content mt-2">{renderedCards}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps)(MayAlsoLike);
