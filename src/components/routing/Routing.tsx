import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/ui/applayout/AppLayout';
import Main from '@/pages/Main/Main';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
    ],
  },
]);

export default router;
