import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  hotels: [],
  viewHotel: {},
  loading: false,
  error: null
};

// Hotel slice
const hotelSlice = createSlice({
  name: 'hotels',
  initialState: initialState,
  reducers: {
    fetchHotelsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchHotelsSuccess: (state, action) => {
      state.loading = false;
      state.hotels = action.payload;
    },
    currentHotel: (state, action) => {
      state.loading = false;
      state.viewHotel = action.payload;
    },
    fetchHotelsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchHotelsStart, fetchHotelsSuccess, fetchHotelsFailure, currentHotel } = hotelSlice.actions;
export default hotelSlice.reducer;
