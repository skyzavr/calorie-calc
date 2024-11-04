import { AppRouter } from './appRouter';
import { AppStore } from './appStore';
import { AppProvider } from './appProvider';

import { AppI18Next } from './appI18Next';
AppI18Next;
export const App = () => {
  return (
    <AppStore>
      <AppProvider>
        <AppI18Next>
          <AppRouter />
        </AppI18Next>
      </AppProvider>
    </AppStore>
  );
};
