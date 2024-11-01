import { useNavigate } from 'react-router-dom';
import { Button } from '@shared/ui';

import css from './controls.module.css';

type controlsProps = {
  currentPage: number;
  pages: number;
  onPrev: () => void;
  onNext: () => void;
  isValid: boolean;
};

export const ControlButtons = (props: controlsProps) => {
  const navigate = useNavigate();
  const { currentPage, pages, onPrev, onNext, isValid } = props;
  const lastPage = currentPage === pages - 1 ? 'Calculate' : 'Next';

  const onNextHandler = () => {
    if (currentPage === pages - 1) navigate('/results');
    onNext();
  };

  return (
    <div className={css.wrapper}>
      {currentPage > 0 && <Button onHandler={onPrev}>Back</Button>}
      <Button onHandler={onNextHandler} btnType="outline" isDisabled={isValid}>
        {lastPage}
      </Button>
    </div>
  );
};
