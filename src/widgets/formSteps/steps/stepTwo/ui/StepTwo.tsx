import { useEffect, useState } from 'react';

import { initValue, onHandler } from '@type/functions';
import { Input } from '@shared/ui';
import { getInputsParams } from '../model/inputsParams';

type loopValues = { [key: string]: initValue };

type stepProps = {
  initValue: loopValues;
  onUpdateHandler: onHandler;
  setIsValid: (value: boolean) => void;
};
export const StepTwo = (props: stepProps) => {
  const {
    initValue: { age, height, weight },
    onUpdateHandler,
    setIsValid,
  } = props;

  const inputs = getInputsParams([age, height, weight]);
  const [stepData, setStepData] = useState({ age, height, weight });

  const isValid = (data: loopValues) => {
    const isValidData = Object.values(data).every((el) => el !== '');
    isValidData ? onUpdateHandler({ ...data }) : setIsValid(false);
  };

  const onStepHandler = (data: loopValues) => {
    const updatedData = { ...stepData, ...data };
    setStepData({ ...updatedData });
    isValid(updatedData);
  };

  useEffect(() => isValid(stepData), []);

  return (
    <div>
      {inputs.map((el) => (
        <Input {...el} onHandler={onStepHandler} key={el.key} />
      ))}
    </div>
  );
};
