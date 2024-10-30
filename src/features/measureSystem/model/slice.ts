import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Measure } from './types';

type MeasureSlice = {
  measure: Measure;
};

const preferredMS = localStorage.getItem('measure') as Measure;

const initialState: MeasureSlice = {
  measure: preferredMS ? preferredMS : 'metric',
};

export const MeasureSlice = createSlice({
  name: 'measure',
  initialState,
  reducers: {
    changeMeasure: (state, action: PayloadAction<Measure>) => {
      state.measure = action.payload;
    },
  },
});

export const { changeMeasure } = MeasureSlice.actions;
export const changeMeasureReducer = MeasureSlice.reducer;
