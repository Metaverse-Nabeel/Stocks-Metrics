// eslint-disable-next-line import/no-extraneous-dependencies
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'https://api.coinranking.com/v2/coin/';

export const getOneCrypto = createAsyncThunk(
  'getOneCrypto',
  async (id) => {
    const options = {
      headers: {
        'x-access-token': 'coinranking19798f5481d660fd1481e710c61e9bbbc541ae241740a36e',
      },
    };

    const response = await fetch(`${API_URL}${id}`, options);
    const result = await response.json();
    return result.data.coin;
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
    builder.addCase(getOneCrypto.pending, (state) => ({
      ...state, isLoading: true,
    }));

    builder.addCase(getOneCrypto.fulfilled, (state, action) => ({
      ...state, isLoading: false, cryptoDetails: action.payload,
    }));
  },
});

export default detailsSlice.reducer;
