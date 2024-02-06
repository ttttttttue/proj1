import { Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { NotFoundPage } from 'pages/NotFoundPage/ui/NotFoundPage';
import { Layout } from 'pages/Layout';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { PageLoader } from 'widgets/PageLoader';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';

import '../../../styles/index.css';

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: AppRoutes.MAIN,
      element: (
        <ErrorBoundary>
          <Layout />
        </ErrorBoundary>
      ),
      children: [
        {
          path: AppRoutes.NOT_FOUND,
          element: <NotFoundPage />,
        },
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
    <Suspense fallback={<PageLoader />}>
      <div className="page-wrapper">
        <Outlet />
      </div>
    </Suspense>
  );
};
