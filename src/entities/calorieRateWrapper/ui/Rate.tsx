import { TFunction } from 'i18next';

import { calculateCalories, listTYpe } from '../lib/caloriesBlock';
import { TextBlock } from '@entities/DescBlock';
import { Text } from '@shared/ui';

import css from './rate.module.css';

type rateProps = { metabolism: number; rate: number; t: TFunction };

export const Rate = ({ metabolism, rate, t }: rateProps) => {
  const list = t('rateWrapper.list', { returnObjects: true }) as listTYpe;
  const textBlocks = calculateCalories(list, [metabolism, rate]);

  return (
    <div className={css.rateWrapper}>
      <Text type="h3" weight="medium" option="h3">
        {t('header')}
      </Text>
      {textBlocks.map((el) => (
        <TextBlock {...el} key={el.title} />
      ))}
    </div>
  );
};
