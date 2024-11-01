import { Step, StepLabel, Stepper } from '@mui/material';
import classNames from 'classnames';

import css from './stepper.module.css';

type stepperProps = { step: number; steps: string[] };
export const StepperWrapper = (props: stepperProps) => {
  const { step, steps } = props;
  return (
    <Stepper activeStep={step} alternativeLabel>
      {steps.map((label, ind) => (
        <Step key={label}>
          <StepLabel
            className={classNames(css.label, ind === step ? css.active : '')}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
