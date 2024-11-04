import { useEffect, useState } from 'react';

import { initValue, onHandler } from '@type/functions';
import { Accordion } from '@entities/Accordion';

type stepProps = {
  initValue: initValue;
  panelsData: string[];
  onUpdateHandler: onHandler;
  setIsValid: (value: boolean) => void;
};

export const StepThree = (props: stepProps) => {
  const { initValue, panelsData, onUpdateHandler, setIsValid } = props;
  const [activity, setActivity] = useState(initValue);

  const setValue = (activity: string) => {
    setActivity(activity);
    onUpdateHandler({ activity });
    activity ? setIsValid(true) : setIsValid(false);
  };

  const getPanelsData = (panelsData: string[]) => {
    const values = ['1.200', '1.375', '1.550', '1,725', '1.900'];
    return values.map((el, ind) => {
      return { value: el, title: panelsData[ind] };
    });
  };

  const panels = getPanelsData(panelsData);

  useEffect(() => {
    if (activity) onUpdateHandler({ activity });
  }, []);

  return (
    <Accordion
      data={panels}
      activity={activity}
      onHandler={setValue}
    ></Accordion>
  );
};
