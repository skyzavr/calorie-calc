import { ReactElement } from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';

type appProps = { children: ReactElement };

export const AppStore = ({ children }: appProps) => (
  <Provider store={store}>{children}</Provider>
);
