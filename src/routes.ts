import { lazy } from 'react';

import * as Routes from 'constants/routes';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const Carrier = lazy(() => import('pages/Carrier'));
const Email = lazy(() => import('pages/Email'));

const routes = {
  inbox: {
    label: 'home',
    path: Routes.HOME,
    component: Home,
  },
  about: {
    label: 'about',
    path: Routes.ABOUT,
    component: About,
  },
  carrier: {
    label: 'career',
    path: Routes.CARRIER,
    component: Carrier,
  },
  email: {
    label: 'email',
    path: Routes.EMAIL,
    component: Email,
  },
};

export default routes;
