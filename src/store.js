// store.js
import { configureStore } from '@reduxjs/toolkit';
import provincesReducer from './slices/provincesSlice';

const store = configureStore({
  reducer: {
    provinces: provincesReducer,
  },
});

export default store;
