import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../Navbar/Navbar';
import UnifiedDashboard from '../../pages/Authentication/UnifiedDashboard';
import Footer from '../Footer';

const MainLayout = ({ children }) => {
  const { user } = useAuth();

 if (user) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
       
          {children} 
        </div>
      </main>
      <Footer />
    </div>
  );
};
 
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children} 
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
