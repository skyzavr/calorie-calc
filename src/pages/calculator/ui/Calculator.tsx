import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Toolbar } from '@mui/material';

import { userData } from '@app/store/selectors';
import { userData as userDataType } from '@type/functions';
import { ControlButtons } from '@widgets/formControlButtons';
import { StepOne, StepTwo, StepThree } from '@widgets/formSteps';
import { StepperWrapper } from '@widgets/Stepper';
import { setUserData } from '@widgets/formSteps/model/slice';
import { useForm } from '@shared/lib/useForm';
import { steps } from '../model/const';

import css from './calculator.module.css';

export const Calculator = () => {
  const dispatch = useDispatch();
  const currentData = useSelector(userData);
  const [isValid, setIsValid] = useState(false);
  const { gender, age, height, weight, activity } = currentData;

  const onUpdateHandler = (data: userDataType) => {
    dispatch(setUserData(data));
    setIsValid(true);
  };

  const formSteps = [
    <StepOne initValue={gender} onUpdateHandler={onUpdateHandler} />,
    <StepTwo
      initValue={{ age, height, weight }}
      onUpdateHandler={onUpdateHandler}
      setIsValid={setIsValid}
    />,
    <StepThree
      initValue={activity}
      onUpdateHandler={onUpdateHandler}
      setIsValid={setIsValid}
    />,
  ];

  const pages = formSteps.length;
  const { page, onNext, onPrev } = useForm(0, pages);

  return (
    <Toolbar className={css.wrapper}>
      <StepperWrapper step={page} steps={steps} />
      <div style={{ width: '100%' }}>
        {formSteps[page]}
        <div>
          <ControlButtons
            currentPage={page}
            pages={pages}
            onNext={onNext}
            onPrev={onPrev}
            isValid={!isValid}
          />
        </div>
      </div>
    </Toolbar>
  );
};
