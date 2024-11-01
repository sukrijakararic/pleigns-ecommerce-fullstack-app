
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
export function RequireAuth({ children }) {
  const { loggedIn } = useContext(AuthContext);
  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
