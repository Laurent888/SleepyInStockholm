import { takeLatest, put, call } from "redux-saga/effects";
import { db } from "../firebase/firebase";
import { userTypes } from "../redux/user/userTypes";

// Fetch the updated bookings after the deletion in generator "removeBookingAsync"
function* allData(userId) {
  const data = yield db
    .collection("users")
    .doc(userId)
    .collection("bookings")
    .get()
    .then(res => {
      const bookings = res.docs.map(item => item.data());
      return bookings;
    })
    .catch(err => console.log(err));
  return data;
}

function* removeBookingAsync(item) {
  const bookingId = item.payload[0];
  const userId = item.payload[1];

  // Remove the booking from Firebase
  yield db
    .collection("users")
    .doc(userId)
    .collection("bookings")
    .doc(bookingId)
    .delete()
    .then(() => console.log("Booking deleted"))
    .catch(err => console.log(err));

  // Fetch the updated bookings from Firebase
  const bookings = yield call(allData, userId);
  yield put({ type: userTypes.REMOVE_BOOKING_ASYNC, payload: bookings });
}

export function* removeBooking() {
  yield takeLatest(userTypes.REMOVE_BOOKING, removeBookingAsync);
}
