import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { userData } from '@type/functions';
import { defValues } from './types';

type calcSlice = { userData: userData };

const initialState: calcSlice = {
  userData: defValues,
};
export const calculatorSlice = createSlice({
  name: 'calculatorData',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<userData>) => {
      state.userData = { ...state.userData, ...action.payload };
    },
    clearData: (state) => {
      state.userData = { ...defValues };
    },
  },
});
export const { setUserData, clearData } = calculatorSlice.actions;
export const setUserDataReducer = calculatorSlice.reducer;
