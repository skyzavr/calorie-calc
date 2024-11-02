import { useSelector } from 'react-redux';
import { Toolbar } from '@mui/material';

import { measure } from '@app/store/selectors';

import { NotFound } from '@pages/notFound';
import { BMI } from '@widgets/Bmi';
import { RateWrapper } from '@widgets/caloriesRateWrapper';
import { CaloriesRate } from '@entities/calorieRateWrapper';
import { inchToCm, poundToKilo } from '@shared/lib/converter';
import { Button, Text } from '@shared/ui';
import { getMetabolism, getRate } from '../lib/metabolismCalc';

import css from './result.module.css';
import { useNavigate } from 'react-router-dom';

type data = {
  gender: string;
  weight: number;
  height: number;
  activity: string;
  age: number;
};
export const Results = () => {
  const isMetricSystem = useSelector(measure) === 'metric';
  const navigate = useNavigate();
  const goHome = () => navigate('/');
  const data = localStorage.getItem('calcData');
  if (!data) return <NotFound />;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const lsData: data = JSON.parse(data);
  const { age, weight, gender, height, activity } = lsData;
  const genderParam = gender === 'female' ? -161 : 5;
  const correctWeight = isMetricSystem ? weight : inchToCm(weight);
  const correctHeight = isMetricSystem ? height : poundToKilo(height);
  const metabolism = getMetabolism(
    correctWeight,
    correctHeight,
    age,
    genderParam
  );
  const rateBasedOnActivity = getRate(metabolism, activity);

  return (
    <Toolbar className={css.wrapper}>
      <Text type="h1" weight="bold" option="h1">
        Your results
      </Text>
      <BMI data={[correctWeight, correctHeight]} />
      <CaloriesRate metabolism={metabolism} rate={rateBasedOnActivity} />
      <RateWrapper metabolism={rateBasedOnActivity} />
      <Button btnType="outline" onHandler={goHome}>
        Home
      </Button>
    </Toolbar>
  );
};
