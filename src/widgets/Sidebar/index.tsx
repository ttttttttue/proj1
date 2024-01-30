import { createRoot, Root } from 'react-dom/client';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { App } from 'app/App';

const root: Root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
