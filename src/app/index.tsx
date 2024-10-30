import { AppRouter } from './appRouter';
import { AppStore } from './appStore';
import { AppProvider } from './appProvider';

export const App = () => {
  return (
    <AppStore>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </AppStore>
  );
};
