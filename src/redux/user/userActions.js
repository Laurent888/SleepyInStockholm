import { userTypes } from "./userTypes";

export const setCurrentUser = user => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user
});

export const validateBooking = item => ({
  type: userTypes.VALIDATE_BOOKING,
  payload: item
});

export const cancelValidateBooking = {
  type: userTypes.CANCEL_VALIDATE_BOOKING
};

export const addBooking = booking => ({
  type: userTypes.ADD_BOOKING,
  payload: booking
});

export const removeBooking = bookingId => ({
  type: userTypes.REMOVE_BOOKING,
  payload: bookingId
});

export const resetBooking = {
  type: userTypes.RESET_BOOKING
};
