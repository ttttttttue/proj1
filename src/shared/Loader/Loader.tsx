import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.css';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  // eslint-disable-next-line i18next/no-literal-string
  return <div className={classNames(cls.loader, {}, [className])} />;
};
