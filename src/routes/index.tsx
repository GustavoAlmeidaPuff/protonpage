import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Catalog from '../pages/Catalog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/catalogo',
    element: <Catalog />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
}; 