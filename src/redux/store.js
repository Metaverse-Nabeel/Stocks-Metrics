import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cryptoReducer from './cryptoSlice/cryptoSlice';
import detailsReducer from './cryptoSlice/cryptoDetailsSlice';

const reducer = combineReducers({
  crypto: cryptoReducer,
  detils: detailsReducer,
});

const store = configureStore({ reducer });

export default store;
