import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';

import Setting from './routes/Setting';
import Message from './routes/Message';

import Home from './routes/Home';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';

import { useEffect, useState } from 'react';
import { auth } from './firebase';
import UnprotectedRoute from './components/UnprotectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'message',
        element: <Message />,
      },
      {
        path: 'setting',
        element: <Setting />,
      },
    ],
  },
  {
    path: '/sign-in',
    element: (
      <UnprotectedRoute>
        <SignIn />
      </UnprotectedRoute>
    ),
  },
  {
    path: '/sign-up',
    element: (
      <UnprotectedRoute>
        <SignUp />
      </UnprotectedRoute>
    ),
  },
]);

function App() {
  const [isLoding, setIsLoding] = useState(true);

  const init = async () => {
    await auth.authStateReady();
    setIsLoding(false);
  };

  useEffect(() => {
    init();
  }, []);

  return <>{isLoding ? 'Loding...' : <RouterProvider router={router} />}</>;
}

export default App;
