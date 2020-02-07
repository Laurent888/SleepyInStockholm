import { userTypes } from "./userTypes";
import { removeBookingUtil } from "./userUtils";

const INITIAL_STATE = {
  currentUser: null,
  bookings: []
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case userTypes.ADD_BOOKING:
      return {
        ...state,
        bookings: [...state.bookings, action.payload]
      };
    case userTypes.REMOVE_BOOKING:
      return {
        ...state,
        bookings: [...removeBookingUtil(state.bookings, action.payload)]
      };
    default:
      return state;
  }
};

export default userReducer;
