import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import i18next from './i18n/i18next';
import { lang } from './store/selectors';

type appProviderProps = { children: ReactElement };

export const AppI18Next = ({ children }: appProviderProps) => {
  const language = useSelector(lang);

  return (
    <I18nextProvider i18n={i18next} defaultNS={language}>
      {children}
    </I18nextProvider>
  );
};
