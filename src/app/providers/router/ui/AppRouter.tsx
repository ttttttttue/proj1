import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { Layout } from 'pages/Layout';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import '../../../styles/index.css';

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: AppRoutes.MAIN,
      element: <Layout />,
      children: [
        {
          path: AppRoutes.MAIN,
          element: <MainPage />,
        },
        {
          path: AppRoutes.ABOUT,
          element: <AboutPage />,
        },
      ],
    },
  ]);

export const AppRouter = () => {
  return (
    <Suspense fallback={'loading ...'}>
      <div className="page-wrapper">
        <Outlet />
      </div>
    </Suspense>
  );
};
