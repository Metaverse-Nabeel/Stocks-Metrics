/* eslint-disable import/no-extraneous-dependencies */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cryptoReducer from './cryptoSlice/cryptoSlice';
import detailsReducer from './cryptoSlice/cryptoDetailsSlice';

const reducer = combineReducers({
  crypto: cryptoReducer,
  details: detailsReducer,
});

const store = configureStore({ reducer });

export default store;
