import { RouterProvider } from 'react-router-dom';
import { router } from 'app/providers/router/ui/AppRouter';

export const App = () => <RouterProvider router={router} />;
