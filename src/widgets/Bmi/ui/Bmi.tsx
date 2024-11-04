import { TFunction } from 'i18next';

import { calculateBmi, getDescription } from '../lib/bmiCalculation';
import { Text } from '@shared/ui';
import { colors, stringObj } from '../model/colors';

import css from './bmi.module.css';

type bmiProps = { data: number[]; t: TFunction };

export const BMI = ({ data, t }: bmiProps) => {
  const [weight, height] = data;
  const bmiDesc = t('desc', { returnObjects: true }) as stringObj;

  const bmiValue = calculateBmi(height, weight);
  const descParam = getDescription(bmiValue);

  return (
    <div className={css.bmi}>
      <Text type="h3" weight="medium" option="h3">
        {t('bmi')}
      </Text>
      <div className={css.wrapper}>
        <Text
          type="body"
          weight="medium"
          option="h3"
          style={{ color: colors[descParam] }}
        >
          {bmiValue.toString()}
        </Text>
        <Text type="body">{bmiDesc[descParam]}</Text>
      </div>
    </div>
  );
};
