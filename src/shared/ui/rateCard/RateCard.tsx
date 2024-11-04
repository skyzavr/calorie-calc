import { TFunction } from 'i18next';

import css from './rateCard.module.css';

type cardProps = {
  percentage: number;
  calories: number;
  description: string;
  t: TFunction;
};

export const RateCard = (props: cardProps) => {
  const { percentage, calories, description, t } = props;

  const [Percent, Kcal, Details] = t('rateCard.data', {
    returnObjects: true,
  }) as string[];

  return (
    <div className={css.listItem}>
      <li>
        <p>{Percent}</p> <p>{percentage}%</p>
      </li>
      <li>
        <p>{Kcal}</p> <p>{Math.floor(Number(calories))}</p>
      </li>
      <li>
        <p>{Details}</p> <p>{description}</p>
      </li>
    </div>
  );
};
