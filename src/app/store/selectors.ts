import { RootState } from './store';

export const theme = (state: RootState) => state.theme.theme;
export const lang = (state: RootState) => state.lang.lang;
export const measure = (state: RootState) => state.measure.measure;
