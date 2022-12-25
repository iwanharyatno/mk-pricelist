import { createBrowserRouter } from 'react-router-dom';

import Root from './Root.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Products from './pages/Products.jsx';

import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/products',
        element: <Products />
      }
    ]
  },
]);

export default router;
