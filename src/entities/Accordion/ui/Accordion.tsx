import { useState } from 'react';
import { Accordion as AccordionMui } from '@mui/material';

import { initValue } from '@type/functions';
import { AccordionItem } from '@shared/ui';
import css from './accordion.module.css';

type accordionProps = {
  data: { [key: string]: string }[];
  activity: initValue;
  onHandler: (value: string) => void;
};

type handleChange = (
  panel: string
) => (event: React.SyntheticEvent, isExpanded: boolean) => void;

export const Accordion = (props: accordionProps) => {
  const { data, activity, onHandler } = props;
  const [expanded, setExpanded] = useState<initValue | false>(activity);
  const [active, setActive] = useState(activity);

  const handleChange: handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const onPickActivity = (value: string) => {
    setActive(active === value ? -1 : value);
    onHandler(active === value ? '' : value);
  };
  return (
    <div className={css.container}>
      {data.map(({ value, title }) => (
        <div onClick={() => onPickActivity(value)} key={value}>
          <AccordionMui
            expanded={expanded === value}
            onChange={handleChange(value)}
            className={css.wrapper}
          >
            <AccordionItem
              title={title}
              value={value}
              cl={expanded === value ? 'active' : ''}
            />
          </AccordionMui>
        </div>
      ))}
    </div>
  );
};
