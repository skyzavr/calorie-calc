import { useEffect, useState } from 'react';

import { initValue, onHandler } from '@type/functions';
import { Accordion } from '@entities/Accordion';

type stepProps = {
  initValue: initValue;
  onUpdateHandler: onHandler;
  setIsValid: (value: boolean) => void;
};

export const StepThree = (props: stepProps) => {
  const { initValue, onUpdateHandler, setIsValid } = props;
  const [activity, setActivity] = useState(initValue);

  const setValue = (activity: string) => {
    setActivity(activity);
    onUpdateHandler({ activity });
    activity ? setIsValid(true) : setIsValid(false);
  };

  const panels = [
    {
      value: '1.200',
      title: 'For the sedentary.',
    },
    {
      value: '1.375',
      title: 'Low activity. ',
    },
    {
      value: '1.550',
      title: 'Moderate activity. ',
    },
    { value: '1.725', title: 'Moderate activity. ' },
    { value: '1.900', title: 'High activity. ' },
  ];

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
