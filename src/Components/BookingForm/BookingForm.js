import React, { useState } from "react";
import "./BookingForm.scss";
import Calendar from "react-calendar";
import LargeButton from "../Buttons/LargeButton/LargeButton";

const BookingForm = ({ price, reviewsNumber, reviewsRate, maxGuests }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [numberNight, setNumberNight] = useState(0);
  const [checkInOutDate, setCheckInOutDate] = useState({
    checkInDate: "",
    checkOutDate: ""
  });

  // Render the options for the number of guests
  const renderOptionGuestNb = [...new Array(maxGuests)].map((item, idx) => (
    <option key={`bookingForm-${idx}`} value={idx}>{`${idx + 1} Guest${
      idx !== 0 ? "s" : ""
    }`}</option>
  ));

  // To show the calendar when click on Dates
  const handleClickDate = () => {
    setShowCalendar(!showCalendar);
  };

  // Show the dates
  const calculateNumNights = date => {
    const checkInDate = date[0];
    const checkOutDate = date[1];

    const DifferenceInTime = checkOutDate.getTime() - checkInDate.getTime();

    const DifferenceInDays = Math.floor(DifferenceInTime / (1000 * 3600 * 24));
    return DifferenceInDays;
  };

  const onChange = date => {
    calculateNumNights(date);

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
  };

  return (
    <div className="bookingForm">
      <div className="bookingForm_header">
        <div>
          <span className="booking-topPrice">${price}</span> per night
        </div>
        <div className="bookingForm_reviews mt-1">
          <span className="mdi mdi-star" /> {reviewsRate}{" "}
          {`(${reviewsNumber} reviews )`}
        </div>
      </div>
      <div className="bookingForm_calendar mt-2">
        <h3 className="booking-subheading">Dates</h3>
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
        {showCalendar && (
          <div className="bookingForm_calendar_table">
            <Calendar selectRange onChange={onChange} />
          </div>
        )}
      </div>
      <div className="bookingForm_guest">
        <h3 className="booking-subheading">Guest</h3>
        <select className="select-input">{renderOptionGuestNb}</select>
      </div>
      <LargeButton label="Book this place !" />
    </div>
  );
};

export default BookingForm;
