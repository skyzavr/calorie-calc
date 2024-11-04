import { useNavigate } from 'react-router-dom';
import { Toolbar } from '@mui/material';

import { Button, Text, TextBlock } from '@shared/ui';
import { useTranslate } from '@shared/lib/useTranslate';
import css from './home.module.css';

type phaseType = {
  title: string;
  desc: string;
}[];

export const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslate('home');

  const navigateToCalculator = () => navigate('/calculator');

  const paragraphs = t('paragraphs', { returnObjects: true }) as string[];
  const phases = t('phases', { returnObjects: true }) as phaseType;

  return (
    <Toolbar className={css.wrapper}>
      <Text type="h1" weight="bold" option="h1">
        {t('header')}
      </Text>
      <div className={css.descWrapper}>
        {paragraphs.map((el) => (
          <Text type="bodyMed" key={el}>
            {el}
          </Text>
        ))}
      </div>
      <div className={css.phasesWrapper}>
        {phases.map((el) => (
          <TextBlock {...el} key={el.title} />
        ))}
      </div>

      <Button onHandler={navigateToCalculator} size="big">
        {t('start')}
      </Button>
    </Toolbar>
  );
};
