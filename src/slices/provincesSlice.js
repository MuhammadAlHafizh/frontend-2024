// slices/provincesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import data from '../utils/constants/provinces';

const provincesSlice = createSlice({
  name: 'provinces',
  initialState: {
    list: data.provinces,
  },
  reducers: {
    setProvinces: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setProvinces } = provincesSlice.actions;
export default provincesSlice.reducer;
