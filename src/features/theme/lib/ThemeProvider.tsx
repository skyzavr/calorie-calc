import { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { theme } from '@app/store/selectors';

type ThemeProviderProps = { children: ReactElement };

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const currentTheme = useSelector(theme);

  useEffect(() => {
    document.documentElement.setAttribute('color-scheme', currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  return <>{children}</>;
};
