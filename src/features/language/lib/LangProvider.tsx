import { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { lang } from '@app/store/selectors';

type LangProviderProps = { children: ReactElement };

export const LangProvider = ({ children }: LangProviderProps) => {
  const currentLang = useSelector(lang);

  useEffect(() => {
    localStorage.setItem('lang', currentLang);
  }, [currentLang]);

  return <>{children}</>;
};
