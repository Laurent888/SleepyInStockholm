import React, { useEffect, useState } from "react";
import "./ProfileBookingSection.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeBooking } from "../../../redux/user/userActions";

const ProfileBookingSection = props => {
  const {
    title,
    priceToPay,
    images,
    dates,
    roomId,
    products,
    nbNights,
    bookingId,
    removeBooking
  } = props;

  // Local state section
  const [roomInfo, setRoomInfo] = useState({});
  const [loading, setLoading] = useState(true);

  // Process the extra info like amenities and rules
  const extraInfo = () => {
    const tempProduct = products.filter(item => {
      return item.id === roomId;
    });
    setRoomInfo(tempProduct[0]);
    setLoading(false);
  };

  useEffect(() => {
    extraInfo();
  }, []);

  return (
    <div className="ProfileBookingSection">
      <div className="ProfileBookingSection_left">
        <div className="ProfileBookingSection_dates">
          {dates.checkInDate} - {dates.checkOutDate} {`(${nbNights} nights)`}
        </div>
        <div className="ProfileBookingSection_details">
          <div className="ProfileBookingSection_left-img">
            <img src={images} alt={title} />
          </div>
          <div className="ProfileBookingSection_details-title">
            <h3>{title}</h3>
            {!loading && (
              <ul className="ProfileBookingSection_details_list">
                <li> - Max guests : {roomInfo.maxGuests}</li>
                <li> - Beds: {roomInfo.bedNumber}</li>
                <li>
                  {" "}
                  - <span className="mdi mdi-wifi" /> :{" "}
                  {roomInfo.amenities.wifi}
                </li>
                <li>
                  {" "}
                  - <span className="mdi mdi-paw" /> : {roomInfo.rules.pets}
                </li>
              </ul>
            )}
            <div className="ProfileBookingSection_details-title-link">
              <Link to={`/homes/${roomId}`}>
                Room details{" "}
                <span
                  className="mdi mdi-arrow-right-circle-outline
"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="ProfileBookingSection_right">
        <h4>Confirmed</h4>
        <div className="ProfileBookingSection_right_price">
          {priceToPay} &euro;
        </div>
        <p>You can cancel this booking anytime</p>
        <button
          className="cancel-btn mt-2"
          onClick={() => removeBooking(bookingId)}
        >
          Cancel Booking
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products.products
});

const mapDispatchToProps = dispatch => ({
  removeBooking: id => dispatch(removeBooking(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileBookingSection);
