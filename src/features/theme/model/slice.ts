import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme } from './types';

type themeSlice = {
  theme: Theme;
};
const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
const lsTheme = localStorage.getItem('theme') as Theme;

const initialState: themeSlice = {
  theme: lsTheme ? lsTheme : matches ? 'dark' : 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export const changeThemeReducer = themeSlice.reducer;
