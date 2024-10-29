import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

type layoutProps = { children: ReactElement };

export const Layout = ({ children }: layoutProps) => {
  const mainStyles = { display: 'flex', justifyContent: 'center' };
  return (
    <>
      {children}
      <main style={mainStyles}>
        <Outlet />
      </main>
    </>
  );
};
