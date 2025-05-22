import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../pages/Authentication/AuthContext';

const SpecialStudentRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>;
  }

  // Check if user is authenticated and is a recognized student
  const isRecognizedStudent = user && user.role === 'student' && user.isRecognized;

  if (!user) {
    // If not logged in, redirect to signin
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (!isRecognizedStudent) {
    // If logged in but not a recognized student, show access denied
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Access Denied
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              This section is only available for recognized students.
            </p>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                Please contact your teacher or administrator to get access.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default SpecialStudentRoute; 