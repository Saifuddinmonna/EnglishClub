import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    // Check if dbUser is stored in localStorage
    const storedDbUser = localStorage.getItem('dbUser');
    if (storedDbUser) {
      setDbUser(JSON.parse(storedDbUser));
    }
    setLoading(false);
  }, []);

  // login can accept both userData and dbUserData
  const login = (userData, dbUserData = null) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    if (dbUserData) {
      setDbUser(dbUserData);
      localStorage.setItem('dbUser', JSON.stringify(dbUserData));
    }
  };

  const setDbUserAndPersist = (dbUserData) => {
    setDbUser(dbUserData);
    localStorage.setItem('dbUser', JSON.stringify(dbUserData));
  };

  const logout = () => {
    setUser(null);
    setDbUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('dbUser');
    localStorage.removeItem('token');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
console.log("from auth context  checking user and dbUser",user,dbUser);
  return (
    <AuthContext.Provider value={{ user, setUser, dbUser, setDbUser: setDbUserAndPersist, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 