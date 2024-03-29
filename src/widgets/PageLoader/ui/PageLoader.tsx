import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/Loader/Loader';
import cls from './PageLoader.module.css';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
