import React, { useState } from "react";
import "./BookingForm.scss";
import Calendar from "react-calendar";
import LargeButton from "../Buttons/LargeButton/LargeButton";
import BookingPriceDetails from "./BookingPriceDetails/BookingPriceDetails";
import { connect } from "react-redux";
import { addBooking } from "../../redux/user/userActions";

const BookingForm = ({
  price,
  title,
  images,
  reviewsNumber,
  reviewsRate,
  maxGuests,
  currentUser,
  addBooking,
  id
}) => {
  // Local states section
  const [showCalendar, setShowCalendar] = useState(false);
  const [numberNight, setNumberNight] = useState(0);
  const [checkInOutDate, setCheckInOutDate] = useState({
    checkInDate: "",
    checkOutDate: ""
  });
  const [numberGuest, setNumberGuest] = useState(0);

  // Render the options for the number of guests
  const renderOptionGuestNb = [...new Array(maxGuests)].map((item, idx) => (
    <option key={`bookingForm-${idx}`} value={idx + 1}>{`${idx + 1} Guest${
      idx !== 0 ? "s" : ""
    }`}</option>
  ));

  // To show the calendar when click on Dates
  const handleClickDate = () => {
    setShowCalendar(!showCalendar);
  };

  // Calculate the price depending on the number of guest
  const newPrice = Math.floor(price + numberGuest * (price * 0.05));

  // Calculate the number of nights the user selected
  const calculateNumNights = date => {
    const checkInDate = date[0];
    const checkOutDate = date[1];

    const DifferenceInTime = checkOutDate.getTime() - checkInDate.getTime();

    const DifferenceInDays = Math.floor(DifferenceInTime / (1000 * 3600 * 24));
    setNumberNight(DifferenceInDays);
  };

  const onChange = date => {
    calculateNumNights(date);

    // Render the dates the user selected
    const showCheckIn = `${
      date[0].getDate() < 10 ? "0" : ""
    }${date[0].getDate()}/${
      date[0].getMonth() < 10 ? "0" : ""
    }${date[0].getMonth() + 1}/${date[0].getFullYear()}`;
    const showCheckOut = `${
      date[1].getDate() < 10 ? "0" : ""
    }${date[1].getDate()}/${
      date[0].getMonth() < 10 ? "0" : ""
    }${date[1].getMonth() + 1}/${date[1].getFullYear()}`;

    setCheckInOutDate(state => ({
      checkInDate: showCheckIn,
      checkOutDate: showCheckOut
    }));
    setShowCalendar(false);
  };

  // Reset the data on the booking form
  const resetStates = () => {
    setNumberNight(0);
    setCheckInOutDate({ checkInDate: "", checkOutDate: "" });
  };

  // Choose the number of Guests
  const handleChangeGuest = e => {
    setNumberGuest(e.target.value);
  };

  // Submit the booking
  const handleSubmitBooking = () => {
    if (!currentUser) {
      return console.log("please login in order to book");
    }
    const bookingDetails = {
      bookingId: `${currentUser.uid}${id}${numberGuest}${numberNight}`,
      roomId: id,
      userId: currentUser.uid,
      title,
      images,
      guestNumber: numberGuest,
      priceToPay: newPrice * numberNight,
      numberOfNights: numberNight,
      datesSelected: checkInOutDate
    };

    addBooking(bookingDetails);
  };

  return (
    <div className="bookingForm">
      <div className="bookingForm_header">
        <div>
          <span className="booking-topPrice">${newPrice}</span> per night
        </div>
        <div className="bookingForm_reviews mt-1">
          <span className="mdi mdi-star" /> {reviewsRate}{" "}
          {`(${reviewsNumber} reviews )`}
        </div>
      </div>
      <div className="bookingForm_calendar mt-2">
        <h3 className="booking-subheading">Dates</h3>

        {/* Section dates and calendar */}
        <div className="bookingForm_calendar_input" onClick={handleClickDate}>
          <div className="bookingForm_calendar_input_dates">
            {checkInOutDate.checkInDate !== ""
              ? checkInOutDate.checkInDate
              : "Check in"}
          </div>
          <span className="mdi mdi-arrow-right" />
          <div className="bookingForm_calendar_input_dates">
            {checkInOutDate.checkOutDate !== ""
              ? checkInOutDate.checkOutDate
              : "Check on"}
          </div>
        </div>
        <div
          className="bookingForm_calendar_reset"
          onClick={() => {
            resetStates();
          }}
        >
          Reset dates
        </div>

        {/* Show the Calendar when user click on dates */}
        {showCalendar && (
          <div className="bookingForm_calendar_table">
            <Calendar selectRange onChange={onChange} minDate={new Date()} />
          </div>
        )}
      </div>

      {/* Number of guest option section */}
      <div className="bookingForm_guest">
        <h3 className="booking-subheading">Guest</h3>
        <select className="select-input" onChange={handleChangeGuest}>
          {renderOptionGuestNb}
        </select>
        <p className="bookingForm_guest_note">
          An small additional fee will apply depending on the number of guests
        </p>
      </div>

      {/* Conditionally show the booking and price details when the user selected dates */}
      {numberNight !== 0 ? (
        <div className="bookingForm_paymentDetails">
          <BookingPriceDetails
            price={newPrice}
            numberNight={numberNight}
            numberGuest={numberGuest}
          />
        </div>
      ) : null}

      <LargeButton
        label="Book this place !"
        clicked={handleSubmitBooking}
        disabled={checkInOutDate.checkInDate === "" && true}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addBooking: booking => dispatch(addBooking(booking))
});

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
