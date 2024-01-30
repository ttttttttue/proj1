import React, { lazy } from 'react';

export const AboutPageAsync: React.LazyExoticComponent<
  () => React.ReactElement
> = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import('./AboutPage')), 1000),
    ),
);
