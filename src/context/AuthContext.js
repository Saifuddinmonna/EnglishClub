import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        setLoading(true);
        console.log("=== INITIALIZING AUTH ===");
        
        // Check if user is stored in localStorage
        const storedUser = localStorage.getItem('user');
        const storedDbUser = localStorage.getItem('dbUser');
        
        console.log("storedUser from localStorage:", storedUser);
        console.log("storedDbUser from localStorage:", storedDbUser);
        
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          console.log("Setting user from localStorage:", parsedUser);
          setUser(parsedUser);
        }
        
        if (storedDbUser) {
          const parsedDbUser = JSON.parse(storedDbUser);
          console.log("Setting dbUser from localStorage:", parsedDbUser);
          setDbUser(parsedDbUser);
        }
        
        // Simulate async loading for better UX
        await new Promise(resolve => setTimeout(resolve, 500));
        
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        setLoading(false);
        setUserLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // login can accept both userData and dbUserData
  const login = async (userData, dbUserData) => {
    try {
      setUserLoading(true);
      console.log("=== LOGIN FUNCTION CALLED ===");
      console.log("userData:", userData);
      console.log("dbUserData:", dbUserData);
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      
      if (dbUserData) {
        console.log("Setting dbUser:", dbUserData);
        setDbUser(dbUserData);
        localStorage.setItem('dbUser', JSON.stringify(dbUserData));
      } else {
        console.log("WARNING: dbUserData is null/undefined!");
      }
      
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 300));
      
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setUserLoading(false);
    }
  };

  const setDbUserAndPersist = async (dbUserData) => {
    try {
      setUserLoading(true);
      setDbUser(dbUserData);
      localStorage.setItem('dbUser', JSON.stringify(dbUserData));
      
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 200));
      
    } catch (error) {
      console.error('Error setting dbUser:', error);
    } finally {
      setUserLoading(false);
    }
  };

  console.log("dbUser from auth context", dbUser);
  
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

  const authValue = {
    user,
    setUser,
    dbUser,
    setDbUser: setDbUserAndPersist,
    login,
    logout,
    loading,
    userLoading
  };

  return (
    <AuthContext.Provider value={authValue}>
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