import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { theme } from '@app/store/selectors';
import { ToggleGroup } from '@entities/toggleButtonGroup';
import { changeTheme } from '../model/slice';
import { Theme } from '../model/types';

export const ChangeTheme = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(theme);

  const changeThemeClb = (value: string) =>
    dispatch(changeTheme(value as Theme));

  const changeThemeHandler = useCallback(changeThemeClb, [currentTheme]);

  const params = {
    value: currentTheme,
    onSetValue: changeThemeHandler,
    title: 'Theme',
    params: [
      { key: 'light', buttonValue: 'Light' },
      { key: 'dark', buttonValue: 'Dark' },
    ],
  };

  return <ToggleGroup {...params} />;
};
