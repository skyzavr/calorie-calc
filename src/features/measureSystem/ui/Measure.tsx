import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { measure } from '@app/store/selectors';
import { ToggleGroup } from '@entities/toggleButtonGroup';
import { changeMeasure } from '../model/slice';
import { Measure } from '../model/types';

export const MeasureSystem = () => {
  const dispatch = useDispatch();
  const currenMeasure = useSelector(measure);

  const changeMeasureClb = (value: string) =>
    dispatch(changeMeasure(value as Measure));

  const changeMeasureHandler = useCallback(changeMeasureClb, [currenMeasure]);

  const params = {
    value: currenMeasure,
    onSetValue: changeMeasureHandler,
    title: 'System',
    params: [
      { key: 'imperial', buttonValue: 'Imperial' },
      { key: 'metric', buttonValue: 'Metric' },
    ],
  };

  return <ToggleGroup {...params} />;
};
