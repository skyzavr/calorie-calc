import { ReactElement } from 'react';

import { LangProvider } from '@features/language';
import { MeasureProvider } from '@features/measureSystem';
import { ThemeProvider } from '@features/theme';

type appProviderProps = { children: ReactElement };

export const AppProvider = ({ children }: appProviderProps) => {
  return (
    <LangProvider>
      <MeasureProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </MeasureProvider>
    </LangProvider>
  );
};
