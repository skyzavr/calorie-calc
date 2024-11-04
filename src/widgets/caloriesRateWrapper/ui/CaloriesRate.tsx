import { TFunction } from 'i18next';

import { RateCard, Text } from '@shared/ui';
import { calculateCaloriesRate } from '../lib/caloriesCalculation';

import css from './caloriesRate.module.css';

type caloriesRateProps = { metabolism: number; t: TFunction };

export const CaloriesRate = ({ metabolism, t }: caloriesRateProps) => {
  const list = t('rate.data', { returnObjects: true }) as string[];
  const data = calculateCaloriesRate(list, metabolism);

  return (
    <div className={css.wrapper}>
      <Text type="h3" weight="medium" option="h3">
        {t('rate.header')}
      </Text>
      <ul className={css.list}>
        {data.map((el, i) => (
          <RateCard {...el} key={i} t={t} />
        ))}
      </ul>
    </div>
  );
};
