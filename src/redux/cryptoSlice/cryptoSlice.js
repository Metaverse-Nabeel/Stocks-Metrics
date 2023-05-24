// eslint-disable-next-line import/no-extraneous-dependencies
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=30&currency=USD';

export const getCrypto = createAsyncThunk(
  'getData',
  async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  cryptoArray: [],
  isLoading: false,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCrypto.pending, (state) => ({
      ...state, isLoading: true,
    }));

    builder.addCase(getCrypto.fulfilled, (state, action) => ({
      ...state, isLoading: false, cryptoArray: action.payload.coins,
    }));
  },
});

export default cryptoSlice.reducer;
