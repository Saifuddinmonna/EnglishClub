import React from 'react';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar/Navbar';

import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  const { user } = useAuth();

 if (user) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Navbar />
      <main className="flex-1 pt-20" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
          {children} 
        </div>
      </main>
      <Footer />
    </div>
  );
};
 
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Navbar />
      <main className="flex-1 pt-20" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
          {children} 
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
