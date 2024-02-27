import { createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundery';
import { NotFoundPage } from 'pages/NotFoundPage';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { App } from 'app/App';

import '../../../styles/index.css';

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: AppRoutes.MAIN,
      element: (
        <ErrorBoundary>
          <App />
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
