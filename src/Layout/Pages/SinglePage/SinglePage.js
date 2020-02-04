import React from "react";
import "./SinglePage.scss";
import { connect } from "react-redux";
import Hero from "../../../Components/HeroSinglePage/HeroSinglePage";
import OptionSection from "../../../Components/OptionSections/OptionSection";
import MapComponent from "../../../Components/Maps/Maps";

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
    rules,
    reviewsNumber,
    reviewsRate,
    maxGuests,
    typeRoom,
    price,
    coordinates
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
          <div className="booking-order">
            <div>
              <h3>Number of nights</h3>
              <input type="text" placeholder="Type here" />
            </div>
            <div>
              <h3>Guest</h3>
              <input type="text" />>
            </div>
            <button>Book </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  product: state.products.products
});

export default connect(mapStateToProps)(SinglePage);
