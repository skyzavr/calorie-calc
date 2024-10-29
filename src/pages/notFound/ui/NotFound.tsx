import { useNavigate } from 'react-router-dom';
import { Toolbar } from '@mui/material';

import { Button, Text } from '@shared/ui';

import css from './notFound.module.css';

export const NotFound = () => {
  const navigate = useNavigate();

  const navigateToHome = () => navigate('/');

  return (
    <Toolbar className={css.wrapper}>
      <p className={css.errorCode}>404</p>
      <Text type="h1" weight="bold" option="h1">
        Ooops! Page Not Found
      </Text>
      <div className={css.descWrapper}>
        <Text type="bodyMed" weight="light">
          This page doesn’t exist or was removed
        </Text>
        <Text type="bodyMed" weight="light">
          We suggest you back to home
        </Text>
      </div>
      <Button onHandler={navigateToHome} size="big">
        Home
      </Button>
    </Toolbar>
  );
};
