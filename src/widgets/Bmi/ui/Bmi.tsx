import { Text } from '@shared/ui';
import { calculateBmi, desc, getDescription } from '../lib/bmiCalculation';

import css from './bmi.module.css';

type bmiProps = { data: number[] };

export const BMI = ({ data }: bmiProps) => {
  const [weight, height] = data;

  const bmiValue = calculateBmi(height, weight);
  const descParam = getDescription(bmiValue);

  const { description, color } = desc[descParam];

  return (
    <div className={css.bmi}>
      <Text type="h3" weight="medium" option="h3">
        BMI
      </Text>
      <div className={css.wrapper}>
        <Text type="body" weight="medium" option="h3" style={{ color: color }}>
          {bmiValue.toString()}
        </Text>
        <Text type="body">{description}</Text>
      </div>
    </div>
  );
};
