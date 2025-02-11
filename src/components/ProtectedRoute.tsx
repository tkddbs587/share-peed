import { auth } from '@/firebase';

import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = auth.currentUser;
  if (user === null) {
    return <Navigate to="/sign-in" />;
  }
  return children;
}

export default ProtectedRoute;
