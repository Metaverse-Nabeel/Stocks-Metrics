import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'https://api.coinranking.com/v2/coins';

export const getCrypto = createAsyncThunk(
  'getData',
  async () => {
    const options = {
      headers: {
        'x-access-token': 'coinranking19798f5481d660fd1481e710c61e9bbbc541ae241740a36e',
      },
    };

    const response = await fetch(API_URL, options);
    const result = await response.json();
    return result.data.coins;
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
      ...state, isLoading: false, cryptoArray: action.payload,
    }));
  },
});

export default cryptoSlice.reducer;
