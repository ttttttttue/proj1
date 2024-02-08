import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router/ui/AppRouter';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';
import cls from './Layout.module.css';

export const Layout = () => {
  const { theme } = useTheme();


  return (
    <div className={classNames(cls.layout, {}, [theme])}>
      <header className={cls.header}>
        <Navbar />
      </header>
      <main className={cls.main}>
        <Sidebar />
        <AppRouter />
      </main>
    </div>
  );
};
