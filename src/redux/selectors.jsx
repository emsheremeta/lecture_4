export const getTrips = state => state.trips;
export const getBookings = state => state.trips.trips.bookings;

export const getIsLoading = state => state.isLoading;

export const getError = state => state.error;
