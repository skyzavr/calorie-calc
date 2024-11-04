import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { measure } from '@app/store/selectors';
import { ToggleGroup } from '@entities/toggleButtonGroup';
import { useTranslate } from '@shared/lib/useTranslate';
import { getParams } from '@shared/lib/helpers';
import { changeMeasure } from '../model/slice';
import { Measure } from '../model/types';

export const MeasureSystem = () => {
  const { t } = useTranslate('settings.system');
  const dispatch = useDispatch();
  const currenMeasure = useSelector(measure);
  const options = ['imperial', 'metric'];
  const data = t('options', { returnObjects: true }) as string[];

  const changeMeasureClb = (value: string) =>
    dispatch(changeMeasure(value as Measure));

  const changeMeasureHandler = useCallback(changeMeasureClb, [currenMeasure]);

  const params = {
    value: currenMeasure,
    onSetValue: changeMeasureHandler,
    title: t('header'),
    params: getParams(options, data),
  };

  return <ToggleGroup {...params} />;
};
