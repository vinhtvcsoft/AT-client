/** @format */

import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './data';
import { MainPage, Login, Home } from 'pages';

import ResolveRoute from '../routes/ResolveRoute';

export const routes = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    Component: ResolveRoute,
    children: [
      {
        path: ROUTES.ROOT,
        Component: MainPage,
        children: [
          {
            path: ROUTES.HOME,
            Component: Home,
          },
        ],
      },
      {
        path: ROUTES.LOGIN,
        Component: Login,
      },
    ],
  },
  // {
  //     path: ROUTES.ROOT,
  //     Component: MainPage,
  // },
  // {
  //     path: ROUTES.LOGIN,
  //     Component: MainPage,
  // },
]);
