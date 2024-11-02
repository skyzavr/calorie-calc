import { calculateCalories } from '../lib/caloriesBlock';
import { TextBlock } from '@entities/DescBlock';
import { Text } from '@shared/ui';

import css from './rate.module.css';

type rateProps = { metabolism: number; rate: number };
export const Rate = ({ metabolism, rate }: rateProps) => {
  const textBlocks = calculateCalories([metabolism, rate]);

  return (
    <div className={css.rateWrapper}>
      <Text type="h3" weight="medium" option="h3">
        Calories rate
      </Text>
      {textBlocks.map((el) => (
        <TextBlock {...el} key={el.title} />
      ))}
    </div>
  );
};
