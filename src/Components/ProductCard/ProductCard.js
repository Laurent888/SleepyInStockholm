import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

const ProductCard = props => {
  return (
    <Link to={`/homes/${props.id}`}>
      <div className="product-card">
        <div className="product-card_image">
          <img src={props.img} alt={props.id} />
        </div>
        <div className="product-card_header">
          <div className="product-card_header-category">
            <div className="product-card_header-type">{props.type}</div>
            <div className="product-card_header-reviews">
              <span>
                <i className="fas fa-star" />
              </span>
              {props.reviewsRate}
            </div>
          </div>
          <div className="product-card_header-title">{props.title}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
