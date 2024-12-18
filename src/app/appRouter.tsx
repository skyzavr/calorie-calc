import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from './layout/MainLayout';

import { Home } from '@pages/home';
import { NotFound } from '@pages/notFound';
import { Calculator } from '@pages/calculator';
import { Results } from '@pages/result';

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/calculator', element: <Calculator /> },
        { path: '/results', element: <Results /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
