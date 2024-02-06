import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import cls from './Loader.module.css';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return <div className={classNames(cls.loader, {}, [className])} />;
};
