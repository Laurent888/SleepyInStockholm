import React, { useEffect, useState } from "react";
import "./ProfilePageContent.scss";
import ProfileBookingSection from "./ProfileBookingSection/ProfileBookingSection";
import { connect } from "react-redux";

const ProfilePageContent = props => {
  const { bookings, user } = props;
  const [userBooking, setUserBooking] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    extractUserBookings(bookings);
    setShowLoading(false);
  }, [bookings]);

  const extractUserBookings = bookings => {
    if (bookings.length === 0) {
      return;
    }
    const userBookings = bookings.filter(item => item.userId === user.uid);
    if (userBookings === 0) {
      return;
    }
    setUserBooking(userBookings);
  };

  const renderBookings = userBooking => {
    if (userBooking.length === 0) {
      return <h3 className="no-booking">You have no bookings</h3>;
    }
    return userBooking.map(item => (
      <ProfileBookingSection
        key={`${item.title}-us8s7`}
        title={item.title}
        priceToPay={item.priceToPay}
        images={item.images[0]}
        dates={item.datesSelected}
        roomId={item.roomId}
        nbNights={item.numberOfNights}
        bookingId={item.bookingId}
      />
    ));
  };

  return (
    <div className="profile-page container">
      <h1 className="profile-page_title">Profile</h1>
      <h2 className="profile-page_subtitle">Your Booking</h2>
      {showLoading ? <p>Loading...</p> : renderBookings(userBooking)}
    </div>
  );
};

const mapStateToProps = state => ({
  bookings: state.user.bookings,
  user: state.user.currentUser
});

export default connect(mapStateToProps)(ProfilePageContent);
