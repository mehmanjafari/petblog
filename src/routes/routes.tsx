import { RouteObject } from 'react-router-dom';
import HomePage from '@pages/HomePage/HomePage';
import TagPage from '@pages/TagPage/TagPage';
import SignIn from '@auth/SignIn/SignIn';
import SignUp from '@auth/SignUp/SignUp';
import Popup from '@components/Popup/Popup';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/tag/:tagName',
    element: <TagPage />,
  },
  {
    path: '/sign-in',
    element: (
      <Popup>
        <SignIn />
      </Popup>
    ),
  },
  {
    path: '/sign-up',
    element: (
      <Popup>
        <SignUp />
      </Popup>
    ),
  },
];
