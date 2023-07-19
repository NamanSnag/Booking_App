import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userAuth';
import hotelReducer from './hotel';

export const store = configureStore({
  reducer: {
    user: userReducer,
    hotels: hotelReducer
  }
})