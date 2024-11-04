import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Toolbar } from '@mui/material';

import { measure, userData } from '@app/store/selectors';

import { NotFound } from '@pages/notFound';
import { BMI } from '@widgets/Bmi';
import { clearData } from '@widgets/formSteps/model/slice';
import { RateWrapper } from '@widgets/caloriesRateWrapper';
import { CaloriesRate } from '@entities/calorieRateWrapper';
import { inchToCm, poundToKilo } from '@shared/lib/converter';
import { Button, Text } from '@shared/ui';
import { getMetabolism, getRate } from '../lib/metabolismCalc';

import css from './result.module.css';

export const Results = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentData = useSelector(userData);
  const isMetricSystem = useSelector(measure) === 'metric';
  const isDataEmpty = Object.values(currentData).some((el) => el === '');
  if (isDataEmpty) return <NotFound />;

  const { age, weight, gender, height, activity } = currentData;
  const correctWeight = isMetricSystem ? Number(weight) : inchToCm(weight);
  const correctHeight = isMetricSystem ? Number(height) : poundToKilo(height);
  const metabolism = getMetabolism(correctWeight, correctHeight, age, gender);
  const rateBasedOnActivity = getRate(metabolism, activity);

  const goHome = () => {
    dispatch(clearData());
    navigate('/');
  };

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
