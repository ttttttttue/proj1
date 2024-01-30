import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Layout.module.css';

export const Layout = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(cls.layout, {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <header className={cls.header}>
          <Navbar />
        </header>
        <main className={cls.main}>
          <Sidebar />
          <AppRouter />
        </main>
      </Suspense>
    </div>
  );
};
