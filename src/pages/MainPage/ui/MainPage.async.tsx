import React, { lazy } from 'react';

export const MainPageAsync: React.LazyExoticComponent<
    () => React.ReactElement
> = lazy(
  () => new Promise((resolve) => {
    setTimeout(() => resolve(import('./MainPage')), 1000);
  }),
);
