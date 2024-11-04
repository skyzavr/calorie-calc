import { useNavigate } from 'react-router-dom';
import { Toolbar } from '@mui/material';

import { Button, Text } from '@shared/ui';
import { useTranslate } from '@shared/lib/useTranslate';
import css from './notFound.module.css';

export const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslate('notFound');

  const navigateToHome = () => navigate('/');
  const paragraphs = t('description', { returnObjects: true }) as string[];

  return (
    <Toolbar className={css.wrapper}>
      <p className={css.errorCode}>404</p>
      <Text type="h1" weight="bold" option="h1">
        {t('header')}
      </Text>
      <div className={css.descWrapper}>
        {paragraphs.map((el) => (
          <Text type="bodyMed" weight="light" key={el}>
            {el}
          </Text>
        ))}
      </div>
      <Button onHandler={navigateToHome} size="big">
        {t('home')}
      </Button>
    </Toolbar>
  );
};
