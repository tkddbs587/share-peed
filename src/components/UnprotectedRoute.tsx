import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '@/firebase';

const UnprotectedRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // 사용자가 로그인되어 있다면 루트 페이지로 리다이렉트
        navigate('/');
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;

  return <>{children}</>;
};

export default UnprotectedRoute;
