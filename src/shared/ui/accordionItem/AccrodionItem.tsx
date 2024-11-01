import { AccordionSummary } from '@mui/material';
import classNames from 'classnames';

import { Text } from '@shared/ui';
import css from './accrodionItem.module.css';

type itemProps = {
  value: string;
  cl: string;
  title: string;
};
export const AccordionItem = ({ value, cl, title }: itemProps) => {
  return (
    <AccordionSummary className={classNames(css.summary, css[cl])}>
      <Text type="bodyMed" weight="bold">
        {value}
      </Text>
      <Text type="bodySmall">{title}</Text>
    </AccordionSummary>
  );
};
