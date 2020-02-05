import React from "react";
import "./BookingPriceDetails.scss";

const BookingPriceDetails = props => {
  const { numberNight, price } = props;

  return (
    <div className="price-details">
      <div className="price-details_container">
        <div className="price-details_content">
          {price}&euro; x {numberNight} nights
        </div>
        <div className="price-details_total">
          Total : <span>{price * numberNight}&euro;</span>
        </div>
      </div>
    </div>
  );
};

export default BookingPriceDetails;
