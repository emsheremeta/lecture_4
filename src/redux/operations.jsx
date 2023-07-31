import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTrips = createAsyncThunk(
  'trips/fetchAll',
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
      console.log('fetchAll');
      const response = await axios.get('/trips');
      console.log('res' + JSON.stringify(response));
      return response.data;
    } catch (e) {
      console.log(JSON.stringify(e));
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addBooking = createAsyncThunk(
  'contact/addBooking',
  async (booking, thunkAPI) => {
    try {
      console.log(JSON.stringify(booking));
      const response = await axios.post('/bookings/', booking);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteBooking = createAsyncThunk(
  'bookings/deleteBooking',

  async (bookingId, thunkAPI) => {
    try {
      console.log(bookingId);
      const response = await axios.delete(`/bookings/${bookingId}`);
      console.log(JSON.stringify(response));
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getBookings = () => async dispatch => {
  try {
    // dispatch(fetchingInProgress());
    const response = await axios.get('/bookings/');
    console.log(response);
    // dispatch(fetchingSuccess());
  } catch (e) {
    // dispatch(fetchingError(e.message));
  }
};
