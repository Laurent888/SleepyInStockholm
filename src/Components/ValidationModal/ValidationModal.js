import React from "react";
import "./ValidationModal.scss";
import { useHistory } from "react-router-dom";
import LargeButton from "../Buttons/LargeButton/LargeButton";
import { connect } from "react-redux";
import {
  addBooking,
  cancelValidateBooking
} from "../../redux/user/userActions";
import { db } from "../../firebase/firebase";

const ValidationModal = ({
  validationBooking,
  addBooking,
  cancelValidateBooking
}) => {
  const {
    guestNumber,
    priceToPay,
    numberOfNights,
    datesSelected,
    userId,
    bookingId
  } = validationBooking;

  let history = useHistory();

  //////////////
  return (
    <div className="validation-modal">
      <h2 className="validation-modal_title">Booking Summary</h2>
      <div className="validation-modal_info">
        <ul className="validation-modal_list">
          <li className="validation-modal_list_item">Dates: </li>
          <li className="validation-modal_list_item">Price: </li>
          <li className="validation-modal_list_item">Nights: </li>
          <li className="validation-modal_list_item">Guests: </li>
        </ul>
        <ul className="validation-modal_values">
          <li className="validation-modal_values_item">{`${datesSelected.checkInDate} - ${datesSelected.checkOutDate}`}</li>
          <li className="validation-modal_values_item">{priceToPay} &euro;</li>
          <li className="validation-modal_values_item">{numberOfNights}</li>
          <li className="validation-modal_values_item">{guestNumber}</li>
        </ul>
      </div>

      <div className="validation-modal_btn">
        <LargeButton
          label="Confirm booking"
          clicked={() => {
            db.collection("users")
              .doc(userId)
              .collection("bookings")
              .doc(bookingId)
              .set(validationBooking)
              .then(() => {
                console.log("Added successully on Firestore");
                setTimeout(() => {
                  addBooking(validationBooking);
                  history.push("/profile");
                }, 500);
              })
              .catch(err => {
                console.log(err);
              });
          }}
        />
        <button
          className="validation-modal_btn-notyet"
          onClick={() => cancelValidateBooking()}
        >
          Not yet !
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addBooking: item => dispatch(addBooking(item)),
  cancelValidateBooking: () => dispatch(cancelValidateBooking)
});

export default connect(null, mapDispatchToProps)(ValidationModal);
