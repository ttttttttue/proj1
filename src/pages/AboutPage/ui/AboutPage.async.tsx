import React, { lazy } from 'react';

export const AboutPageAsync: React.LazyExoticComponent<
  () => React.ReactElement
> = lazy(
  () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    new Promise((resolve) => {
      setTimeout(() => resolve(import('./AboutPage')), 2000);
    }),
);
