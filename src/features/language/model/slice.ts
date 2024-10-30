import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Lang } from './types';

type LangSlice = {
  lang: Lang;
};

const preferredLang = localStorage.getItem('lang') as Lang;

const initialState: LangSlice = {
  lang: preferredLang ? preferredLang : 'en',
};

export const LangSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<Lang>) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLang } = LangSlice.actions;
export const changeLangReducer = LangSlice.reducer;
