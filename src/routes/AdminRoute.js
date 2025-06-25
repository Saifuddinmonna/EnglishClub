import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const AdminRoute = ({ children }) => {
  const { user, loading, dbUser } = useAuth();
  const location = useLocation();
  console.log("dbUser from admin route", dbUser);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>;
  }

  if (!user || (dbUser?.role !== 'admin' && dbUser?.isAdmin !== true)) {
    console.log("from admin route checking user and dbUser", user, dbUser);
    toast.error("You are not authorized to access this page. This is not admin or superadmin.");
    // Redirect to signin page but save the attempted url
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute; 