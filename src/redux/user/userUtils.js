export const removeBookingUtil = (allBookings, bookingId) => {
  const filteredAllBookings = allBookings.filter(item => {
    return item.bookingId !== bookingId;
  });

  return filteredAllBookings;
};
