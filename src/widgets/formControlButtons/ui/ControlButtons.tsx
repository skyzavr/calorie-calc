import { TFunction } from 'i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from '@shared/ui';

import css from './controls.module.css';

type controlsProps = {
  currentPage: number;
  pages: number;
  onPrev: () => void;
  onNext: () => void;
  isValid: boolean;
  t: TFunction;
};

export const ControlButtons = (props: controlsProps) => {
  const navigate = useNavigate();

  const { currentPage, pages, onPrev, onNext, isValid, t } = props;

  const [back, next, calculate] = t('buttons', {
    returnObjects: true,
  }) as string[];

  const lastPage = currentPage === pages - 1 ? next : calculate;

  const onNextHandler = () => {
    if (currentPage === pages - 1) navigate('/results');
    onNext();
  };

  return (
    <div className={css.wrapper}>
      {currentPage > 0 && <Button onHandler={onPrev}>{back}</Button>}
      <Button onHandler={onNextHandler} btnType="outline" isDisabled={isValid}>
        {lastPage}
      </Button>
    </div>
  );
};
