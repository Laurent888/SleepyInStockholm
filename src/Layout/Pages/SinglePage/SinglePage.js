import React from "react";
import "./SinglePage.scss";
import { connect } from "react-redux";
import Hero from "../../../Components/HeroSinglePage/HeroSinglePage";
import OptionSection from "../../../Components/OptionSections/OptionSection";
import MapComponent from "../../../Components/Maps/Maps";
import BookingForm from "../../../Components/BookingForm/BookingForm";
import ValidationModal from "../../../Components/ValidationModal/ValidationModal";

const SinglePage = ({ product, match, validationBooking }) => {
  // Look for the single appartment using the ID
  let productInfo = product.filter(
    item => item.id === parseInt(match.params.id)
  );
  const {
    id,
    images,
    title,
    owner,
    description,
    amenities,
    rules,
    reviewsNumber,
    reviewsRate,
    maxGuests,
    typeRoom,
    price,
    coordinates,
    address,
    postal,
    city
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
              <li>{maxGuests} guests max</li>
              <li>{`${typeRoom}`}</li>
              <li>{price}&euro; per night</li>
            </ul>
          </div>
          <div className="singlePage_description mt-2">
            <p>{description}</p>
          </div>
          <div className="singlePage_amenities">
            <OptionSection title="Amenities" options={amenities} />
          </div>
          <div className="singlePage_rules">
            <OptionSection title="Suitable for" options={rules} />
          </div>
          <div className="reviews mt-2">
            <h3>Reviews</h3>
            <div className="reviews_list mt-2">
              <div className="reviews_list-star">
                <span className="mdi mdi-star"></span>
                {reviewsRate}
              </div>
              <div className="reviews_list-number">
                <span>{reviewsNumber}</span> reviews
              </div>
            </div>
          </div>
          <div className="map-section mt-2">
            <h3>Location</h3>
            <p className="mt-2" style={{ textTransform: "capitalize" }}>
              <span
                className="mdi mdi-home"
                style={{ fontSize: "2rem" }}
              ></span>{" "}
              Address : {address}, {postal}, {city}
            </p>
            <div className="map-section_map mt-3">
              <MapComponent
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_APIKEY}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                isMarkerShown
                latLng={{ lat: coordinates[0], lng: coordinates[1] }}
              />
            </div>
          </div>
        </div>
        <div className="container-right">
          <BookingForm
            price={price}
            reviewsNumber={reviewsNumber}
            reviewsRate={reviewsRate}
            maxGuests={maxGuests}
            images={images}
            title={title}
            id={id}
          />
        </div>
        {validationBooking.title ? (
          <ValidationModal validationBooking={validationBooking} />
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  product: state.products.products,
  validationBooking: state.user.currentUser.bookingValidation
});

export default connect(mapStateToProps)(SinglePage);
