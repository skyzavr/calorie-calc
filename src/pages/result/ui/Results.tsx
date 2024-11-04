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
import { useTranslate } from '@shared/lib/useTranslate';
import { getMetabolism, getRate } from '../lib/metabolismCalc';

import css from './result.module.css';

export const Results = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslate('results');

  const currentData = useSelector(userData);

  const isMetricSystem = useSelector(measure) === 'metric';
  const isDataEmpty = Object.values(currentData).some((el) => el === '');
  if (isDataEmpty) return <NotFound />;

  const { age, weight, gender, height, activity } = currentData;

  const correctWeight = isMetricSystem ? Number(weight) : poundToKilo(weight);
  const correctHeight = isMetricSystem ? Number(height) : inchToCm(height);
  const metabolism = getMetabolism(correctWeight, correctHeight, age, gender);
  const rateBasedOnActivity = getRate(metabolism, activity);

  const goHome = () => {
    dispatch(clearData());
    navigate('/');
  };

  return (
    <Toolbar className={css.wrapper}>
      <Text type="h1" weight="bold" option="h1">
        {t('header')}
      </Text>
      <BMI data={[correctWeight, correctHeight]} t={t} />
      <CaloriesRate metabolism={metabolism} rate={rateBasedOnActivity} t={t} />
      <RateWrapper metabolism={rateBasedOnActivity} t={t} />
      <Button btnType="outline" onHandler={goHome}>
        {t('home')}
      </Button>
    </Toolbar>
  );
};
