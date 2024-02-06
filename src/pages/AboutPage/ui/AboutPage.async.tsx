import React, { lazy } from 'react';

export const AboutPageAsync: React.LazyExoticComponent<
  () => React.ReactElement
> = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./AboutPage')), 3000);
  });
});
