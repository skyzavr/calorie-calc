import { useNavigate } from 'react-router-dom';
import { Toolbar } from '@mui/material';

import { Button, Text, TextBlock } from '@shared/ui';

import { phases } from '../model/phases';
import css from './home.module.css';

export const Home = () => {
  const navigate = useNavigate();

  const navigateToCalculator = () => navigate('/calculator');

  return (
    <Toolbar className={css.wrapper}>
      <Text type="h1" weight="bold" option="h1">
        CALORIE RATE CALCULATOR
      </Text>
      <div className={css.descWrapper}>
        <Text type="bodyMed">
          We calculate the calorie rate according to the MIFFLIN-SAN GEOR
          formula
        </Text>
        <Text type="bodyMed">
          The formula was developed in 1990 and is considered by far the most
          accurate for calculating daily energy needs
        </Text>
      </div>
      <div className={css.phasesWrapper}>
        {phases.map((el) => (
          <TextBlock {...el} key={el.title} />
        ))}
      </div>

      <Button onHandler={navigateToCalculator} size="big">
        Start
      </Button>
    </Toolbar>
  );
};
