import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { classNames } from 'shared/lib/classNames/classNames';

import './styles/index.css';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <header>
        <Navbar />
      </header>
      <main className="main">
        <Sidebar />
        <Suspense fallback={<PageLoader />}>
          <div className="page-wrapper">
            <Outlet />
          </div>
        </Suspense>
      </main>
    </div>
  );
};
