import { useEffect, useState } from 'react';

import { initValue, onHandler } from '@type/functions';
import { ToggleGroup } from '@entities/toggleButtonGroup';
import { useTranslate } from '@shared/lib/useTranslate';

type stepProps = {
  initValue: initValue;
  onUpdateHandler: onHandler;
};

export const StepOne = ({ initValue, onUpdateHandler }: stepProps) => {
  const [gender, setGender] = useState(initValue);
  const { t } = useTranslate('calculator.stepOne');
  const setValue = (gender: string) => {
    setGender(gender);
    onUpdateHandler({ gender });
  };

  const getParams = () => {
    const [female, male] = t('params', { returnObjects: true }) as string[];
    return [
      { key: 'female', buttonValue: female },
      { key: 'male', buttonValue: male },
    ];
  };
  const genderValue = getParams().find((el) => el.key === gender)?.buttonValue;

  const params = {
    value: gender.toString(),
    onSetValue: setValue,
    title: t('title', { gender: genderValue }),
    params: getParams(),
  };

  useEffect(() => {
    if (gender) onUpdateHandler({ gender });
  }, []);

  return <ToggleGroup {...params} />;
};
