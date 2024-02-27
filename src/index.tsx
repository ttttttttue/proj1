import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot, Root } from 'react-dom/client';
import { router } from 'app/providers/router';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';

import './shared/config/i18n/i18n';

const root: Root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
