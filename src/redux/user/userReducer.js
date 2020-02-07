import { userTypes } from "./userTypes";
import { removeBookingUtil } from "./userUtils";

const INITIAL_STATE = {
  currentUser: {
    userInfo: null,
    bookings: []
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
    case userTypes.ADD_BOOKING:
      return {
        currentUser: {
          ...state.currentUser,
          bookings: [...state.currentUser.bookings, action.payload]
        }
      };
    case userTypes.REMOVE_BOOKING:
      return {
        currentUser: {
          ...state.currentUser,
          bookings: [
            ...removeBookingUtil(state.currentUser.bookings, action.payload)
          ]
        }
      };
    default:
      return state;
  }
};

export default userReducer;
