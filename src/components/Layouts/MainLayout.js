import React from 'react';
import { useAuth } from '../../pages/Authentication/AuthContext';
import Navbar from '../Navbar/Navbar';
import DashboardLayout from './DashboardLayout';
import Footer from '../Footer';
const MainLayout = ({ children }) => {
  const { user } = useAuth();

  // If user is authenticated, wrap content with DashboardLayout
  if (user) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <DashboardLayout>{children}</DashboardLayout>
      </div>
    );
  }

  // If user is not authenticated, show only Navbar and content
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
