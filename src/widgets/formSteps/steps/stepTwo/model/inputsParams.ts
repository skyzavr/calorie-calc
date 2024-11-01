import { initValue } from '@type/functions';

export const getInputsParams = (values: initValue[]) => {
  const [age, height, weight] = values;
  return [
    {
      name: 'age',
      title: ['I am', 'years old'],
      min: 14,
      init: age,
      key: 'age',
    },
    {
      name: 'height',
      title: ['My height is ', 'cm'],
      min: 120,
      init: height,
      key: 'height',
    },
    {
      name: 'weight',
      title: ['My weight is', 'kg'],
      min: 45,
      init: weight,
      key: 'weight',
    },
  ];
};
