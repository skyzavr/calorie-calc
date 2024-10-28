import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

type layoutProps = { children: ReactElement };

export const Layout = ({ children }: layoutProps) => {
  return (
    <>
      {children}
      <main>
        <Outlet />
      </main>
    </>
  );
};
