import { configureStore } from '@reduxjs/toolkit';

import { changeLangReducer } from '@features/language/model/slice';
import { changeMeasureReducer } from '@features/measureSystem/model/slice';
import { changeThemeReducer } from '@features/theme/model/slice';
import { setUserDataReducer } from '@widgets/formSteps/model/slice';

export const store = configureStore({
  reducer: {
    theme: changeThemeReducer,
    lang: changeLangReducer,
    measure: changeMeasureReducer,
    userData: setUserDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
