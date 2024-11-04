import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

import { lang } from '@app/store/selectors';
import { ToggleGroup } from '@entities/toggleButtonGroup';
import { useTranslate } from '@shared/lib/useTranslate';
import { changeLang } from '../model/slice';
import { Lang } from '../model/types';

export const ChangeLang = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector(lang);
  const { t } = useTranslate('settings.lang');

  const changeLangClb = (value: string) => dispatch(changeLang(value as Lang));

  const changeLangHandler = useCallback(changeLangClb, [currentLang]);

  const params = {
    value: currentLang,
    onSetValue: changeLangHandler,
    title: t('header'),
    params: [
      { key: 'en', buttonValue: 'En' },
      { key: 'ru', buttonValue: 'Ru' },
    ],
  };

  return <ToggleGroup {...params} />;
};
