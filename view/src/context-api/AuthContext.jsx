import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    return storedLoggedIn === 'true';
  });

  useEffect(() => {
    localStorage.setItem('loggedIn', loggedIn.toString());

    window.addEventListener('beforeunload', () => {
      setLoggedIn(false);
    });
  }, [loggedIn]);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
