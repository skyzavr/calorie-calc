import css from './rateCard.module.css';

type cardProps = {
  percentage: number;
  calories: number;
  description: string;
};

export const RateCard = (props: cardProps) => {
  const { percentage, calories, description } = props;
  const [Percent, Kcal, Details] = ['Percent', 'Kcal', 'Details'];
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
