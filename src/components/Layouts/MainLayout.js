import React from 'react';
import { useAuth } from '../../pages/Authentication/AuthContext';
import Navbar from '../Navbar/Navbar';
import DashboardLayout from './DashboardLayout';
import AIButton from '../AIAssistant/AIButton';

const MainLayout = ({ children }) => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {user ? (
        <DashboardLayout>{children}</DashboardLayout>
      ) : (
        <main className="pt-16">
          {children}
        </main>
      )}
      <AIButton />
    </div>
  );
};

export default MainLayout;
