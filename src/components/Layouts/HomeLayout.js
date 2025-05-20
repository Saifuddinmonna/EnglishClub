import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../../pages/Home/Home';

const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <Home />
          <Outlet />
        </div>      
      </div>
    </div>
  );
};

export default HomeLayout; 