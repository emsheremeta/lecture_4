import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTrips = createAsyncThunk(
  'trips/fetchAll',
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/trips');

      return response.data;
    } catch (e) {
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
      const response = await axios.delete(`/bookings/${bookingId}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchBookings = createAsyncThunk(
  'bookings/fetchBookings',

  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/bookings/`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
