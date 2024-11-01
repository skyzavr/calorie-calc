import { useEffect, useState } from 'react';

import { initValue, onHandler } from '@type/functions';
import { ToggleGroup } from '@entities/toggleButtonGroup';

type stepProps = {
  initValue: initValue;
  onUpdateHandler: onHandler;
};

export const StepOne = ({ initValue, onUpdateHandler }: stepProps) => {
  const [gender, setGender] = useState(initValue);

  const setValue = (gender: string) => {
    setGender(gender);
    onUpdateHandler({ gender });
  };
  const params = {
    value: gender.toString(),
    onSetValue: setValue,
    title: `I'am ${gender}`,
    params: [
      { key: 'female', buttonValue: 'female' },
      { key: 'male', buttonValue: 'male' },
    ],
  };

  useEffect(() => {
    if (gender) onUpdateHandler({ gender });
  }, []);

  return <ToggleGroup {...params} />;
};
