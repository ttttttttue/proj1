import React, { lazy } from 'react';

export const MainPageAsync: React.LazyExoticComponent<
  () => React.ReactElement
> = lazy(
  () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    new Promise((resolve) => {
      setTimeout(() => resolve(import('./MainPage')), 2000);
    }),
);
