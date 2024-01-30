import { createRoot, Root } from 'react-dom/client';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { App } from 'app/App';

import './shared/config/i18n/i18n';

const root: Root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
