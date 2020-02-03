import React from "react";
import "./SinglePage.scss";
import { connect } from "react-redux";
import Hero from "../../../Components/HeroSinglePage/HeroSinglePage";
import OptionSection from "../../../Components/OptionSections/OptionSection";

const SinglePage = ({ product, match }) => {
  // Look for the single appartment using the ID
  let productInfo = product.filter(
    item => item.id === parseInt(match.params.id)
  );
  const {
    images,
    title,
    owner,
    description,
    amenities,
    rules
  } = productInfo[0];
  //////////////////////
  return (
    <div className="singlePage">
      <Hero images={images} />
      <div className="container">
        <div className="container-left">
          <div className="singlePage_header">
            <h1>{title}</h1>
            <div className="owner">{owner}</div>
          </div>
          <div className="singlePage_highlights">
            <ul>
              <li>MAX GUESTS</li>
              <li>ROOMS</li>
              <li>MAX GUESTS</li>
              <li>PRICE</li>
            </ul>
          </div>
          <div className="singlePage_description">
            <p>{description}</p>
          </div>
          <div className="singlePage_amenities">
            <OptionSection title="Amenities" options={amenities} />
          </div>
          <div className="singlePage_rules">
            <OptionSection title="Rules" options={rules} />
          </div>
          <div className="reviews">
            <div>Star and rates</div>
            <div>reviews</div>
          </div>
        </div>
        <div className="container-right">asdasdasdas</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  product: state.products.products
});

export default connect(mapStateToProps)(SinglePage);
