import { RateCard, Text } from '@shared/ui';
import { calculateCaloriesRate } from '../lib/caloriesCalculation';
import { list } from '../model/data';

import css from './caloriesRate.module.css';

type caloriesRateProps = { metabolism: number };

export const CaloriesRate = ({ metabolism }: caloriesRateProps) => {
  const data = calculateCaloriesRate(list, metabolism);

  return (
    <div className={css.wrapper}>
      <Text type="h3" weight="medium" option="h3">
        Your rate
      </Text>
      <ul className={css.list}>
        {data.map((el, i) => (
          <RateCard {...el} key={i} />
        ))}
      </ul>
    </div>
  );
};
