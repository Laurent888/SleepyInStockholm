import React, { useEffect, useState } from "react";
import "./ProfilePageContent.scss";
import ProfileBookingSection from "./ProfileBookingSection/ProfileBookingSection";
import { connect } from "react-redux";

const ProfilePageContent = props => {
  const { bookings, user } = props;
  const [userBooking, setUserBooking] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const extractUserBookings = bookings => {
      if (bookings.length === 0) {
        setUserBooking([]);
        return;
      }
      const userBookings = bookings.filter(item => item.userId === user.uid);
      if (userBookings === 0) {
        return;
      }
      setUserBooking(userBookings);
    };

    /////////
    extractUserBookings(bookings);
    setLoading(false);
  }, [bookings]);

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
        userId={item.userId}
      />
    ));
  };
  return (
    <div className="profile-page container">
      <h1 className="profile-page_title">Profile</h1>
      <h2 className="profile-page_subtitle">Your Booking</h2>
      {loading ? <p>Loading...</p> : renderBookings(userBooking)}
    </div>
  );
};

const mapStateToProps = state => ({
  bookings: state.user.currentUser.bookings,
  user: state.user.currentUser.userInfo
});

export default connect(mapStateToProps)(ProfilePageContent);
