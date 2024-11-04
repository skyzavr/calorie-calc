import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { theme } from '@app/store/selectors';
import { ToggleGroup } from '@entities/toggleButtonGroup';
import { useTranslate } from '@shared/lib/useTranslate';
import { getParams } from '@shared/lib/helpers';
import { changeTheme } from '../model/slice';
import { Theme } from '../model/types';

export const ChangeTheme = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(theme);
  const { t } = useTranslate('settings.theme');

  const changeThemeClb = (value: string) =>
    dispatch(changeTheme(value as Theme));

  const options = ['light', 'dark'];
  const data = t('options', { returnObjects: true }) as string[];

  const changeThemeHandler = useCallback(changeThemeClb, [currentTheme]);

  const params = {
    value: currentTheme,
    onSetValue: changeThemeHandler,
    title: t('header'),
    params: getParams(options, data),
  };

  return <ToggleGroup {...params} />;
};
