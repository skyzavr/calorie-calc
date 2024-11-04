import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { measure } from '@app/store/selectors';
import { initValue, onHandler } from '@type/functions';
import { Input } from '@shared/ui';
import { useTranslate } from '@shared/lib/useTranslate';
import { getInputsParams, measureParamsType } from '../model/inputsParams';

type loopValues = { [key: string]: initValue };

type stepProps = {
  initValue: loopValues;
  onUpdateHandler: onHandler;
  setIsValid: (value: boolean) => void;
};
export const StepTwo = (props: stepProps) => {
  const measureSystem = useSelector(measure);
  const { t } = useTranslate('calculator.stepTwo');
  const { initValue, onUpdateHandler, setIsValid } = props;
  const [stepData, setStepData] = useState({ ...initValue });

  const measureParams = t('params', {
    returnObjects: true,
  }) as measureParamsType;

  const inputs = getInputsParams(measureParams, initValue, t, measureSystem);

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
        <Input {...el} onHandler={onStepHandler} t={t} key={el.key} />
      ))}
    </div>
  );
};
