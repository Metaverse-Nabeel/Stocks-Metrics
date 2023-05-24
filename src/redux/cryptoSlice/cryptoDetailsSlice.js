// eslint-disable-next-line import/no-extraneous-dependencies
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'https://api.coinstats.app/public/v1/coins/';

export const getDetails = createAsyncThunk(
  'getDetails',
  async (id) => {
    try {
      const res = await fetch(`${API_URL}${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  cryptoDetails: {},
  isLoading: false,
};

const detailsSlice = createSlice({
  name: 'cryptoDetails',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => ({
      ...state, isLoading: true,
    }));

    builder.addCase(getDetails.fulfilled, (state, action) => ({
      ...state, isLoading: false, cryptoDetails: action.payload.coin,
    }));
  },
});

export default detailsSlice.reducer;
