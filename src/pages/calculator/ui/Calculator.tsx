import { useState } from 'react';
import { Toolbar } from '@mui/material';

import { ControlButtons } from '@widgets/formControlButtons';
import { StepOne, StepTwo, StepThree } from '@widgets/formSteps';
import { StepperWrapper } from '@widgets/Stepper';
import { defaultValues, steps } from '../model/const';
import { useForm } from '@shared/lib/useForm';

import css from './calculator.module.css';

type formValues = { [key: string]: string | number };

export const Calculator = () => {
  const [formData, setFormData] = useState<formValues>({ ...defaultValues });
  const [isValid, setIsValid] = useState(false);

  const onUpdateHandler = (data: { [key: string]: string | number }) => {
    setFormData({ ...formData, ...data });
    localStorage.setItem('calcData', JSON.stringify({ ...formData, ...data }));
    setIsValid(true);
  };
  const { gender, age, height, weight, activity } = formData;

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
