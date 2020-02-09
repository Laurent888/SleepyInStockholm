import { userTypes } from "./userTypes";
// import { removeBookingUtil } from "./userUtils";

const INITIAL_STATE = {
  currentUser: {
    userInfo: null,
    bookings: [],
    bookingValidation: {},
    resetBookingDetails: false
  }
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        currentUser: {
          ...state.currentUser,
          userInfo: action.payload
        }
      };
    case userTypes.VALIDATE_BOOKING:
      return {
        currentUser: {
          ...state.currentUser,
          bookingValidation: action.payload,
          resetBookingDetails: false
        }
      };
    case userTypes.CANCEL_VALIDATE_BOOKING:
      return {
        currentUser: {
          ...state.currentUser,
          bookingValidation: {}
        }
      };
    case userTypes.ADD_BOOKING:
      return {
        currentUser: {
          ...state.currentUser,
          bookings: [...state.currentUser.bookings, action.payload],
          bookingValidation: {},
          resetBookingDetails: true
        }
      };
    case userTypes.REMOVE_BOOKING_ASYNC:
      return {
        currentUser: {
          ...state.currentUser,
          bookings: [...action.payload]
        }
      };
    case userTypes.RESET_BOOKING:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export default userReducer;
