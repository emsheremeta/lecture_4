import { createSlice } from '@reduxjs/toolkit';
import { fetchTrips } from './operations';

const tripsInitialSlice = {
  trips: {
    items: [],
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
    //starts HTTP
    // fetchingInProgress(state) {
    //   state.isLoading = true;
    // },
    [fetchTrips.pending]: handlePending,
    // if succesfull
    // fetchingSuccess(state, action) {
    //   state.isLoading = false;
    //   state.error= null;
    //   state.item= action.payload;
    // },
    [fetchTrips.fulfilled](state, action) {
      console.log('success', action.payload);
      state.trips.isLoading = false;
      state.trips.error = null;
      state.trips.items = action.payload;
    },
    [fetchTrips.error]: handleRejected,

    // [addContact.pending]: handlePending,

    // [addContact.fulfilled](state, action) {
    //   state.isLoading = true;
    //   state.error = false;
    //   state.error = null;
    //   state.contacts.items.push(action.payload);
    // },
    // [addContact.rejected]: handleRejected,

    // [deleteContact.pending]: handlePending,

    // [deleteContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.contacts.items.findIndex(
    //     c => c.id === action.payload.id
    //   );
    //   state.contacts.items.splice(index, 1);
    // },
    // [deleteContact.rejected]: handleRejected,
    // // old reducers
    // addContact(state, action) {
    //     action.payload.id=nanoid();
    //     console.log('add contact' + JSON.stringify(action.payload));
    //     state.contacts.push(action.payload);
    // },
    // deleteContact (state, action) {
    //     console.log(JSON.stringify (action.payload) + 'del');
    //     state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    // }
  },
});

//export const {addContact, deleteContact} = contactSlice.actions;

// export const {fetchingInProgress, fetchingSuccess, fetchingError} = contactSlice.actions
export const tripReducer = tripSlice.reducer;
