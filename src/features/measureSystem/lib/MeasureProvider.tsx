import { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { measure } from '@app/store/selectors';

type MeasureProviderProps = { children: ReactElement };

export const MeasureProvider = ({ children }: MeasureProviderProps) => {
  const currentMS = useSelector(measure);

  useEffect(() => {
    localStorage.setItem('measure', currentMS);
  }, [currentMS]);

  return <>{children}</>;
};
