import { TFunction } from 'i18next';

type input = {
  init: string;
  key: string;
  min: number;
  name: string;
  title: string[];
};

export type measureParamsType = {
  weight: { [key: string]: string };
  height: { [key: string]: string };
};

type getInputFunc = (
  measureParams: measureParamsType,
  initValue: { [key: string]: string | number },
  t: TFunction,
  measureSystem: 'metric' | 'imperial'
) => input[];

const weightParams = {
  metric: { min: 45 },
  imperial: { min: 90 },
};
const heightParams = {
  metric: { min: 100 },
  imperial: { min: 40 },
};

export const getInputsParams: getInputFunc = (...args) => {
  const [measureParams, initValue, t, measureSystem] = args;
  const weightMeasure = measureParams.weight[measureSystem];
  const heightMeasure = measureParams.height[measureSystem];
  const minWeight = weightParams[measureSystem].min;
  const minHeight = heightParams[measureSystem].min;

  return t('inputs', {
    returnObjects: true,
    ...initValue,
    heightMeasure,
    weightMeasure,
    minWeight,
    minHeight,
  }) as input[];
};
