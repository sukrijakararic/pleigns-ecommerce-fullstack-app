
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context-api/AuthContext';
export function RequireAuth({ children }) {
  const { loggedIn } = useContext(AuthContext);
  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
