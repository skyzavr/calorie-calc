import { AppBar, Toolbar } from '@mui/material';

import { Settings } from '@features/settings';
import css from './header.module.css';

export const Header = () => {
  return (
    <AppBar className={css.header}>
      <Toolbar className={css.wrapper}>
        <Settings />
      </Toolbar>
    </AppBar>
  );
};
