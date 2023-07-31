import { createSlice } from '@reduxjs/toolkit';
import { fetchTrips, fetchBookings, deleteBooking } from './operations';

const tripsInitialSlice = {
  trips: {
    items: [],
    bookings: [],
    isLoading: false,
    error: null,
  },
};
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const tripSlice = createSlice({
  name: 'trips',
  initialState: tripsInitialSlice,
  extraReducers: {
    [fetchTrips.pending]: handlePending,

    [fetchTrips.fulfilled](state, action) {
      state.trips.isLoading = false;
      state.trips.error = null;
      state.trips.items = action.payload;
    },
    [fetchTrips.error]: handleRejected,
    [fetchBookings.fulfilled](state, action) {
      state.trips.isLoading = false;
      state.trips.error = null;
      state.trips.bookings = action.payload;
    },
    [fetchBookings.error]: handleRejected,

    [deleteBooking.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.trips.bookings.findIndex(
        c => c.id === action.payload.id
      );
      state.trips.bookings.splice(index, 1);
    },
    [deleteBooking.rejected]: handleRejected,
  },
});
export const tripReducer = tripSlice.reducer;
