import React from 'react';
import { Outlet } from 'react-router-dom';
import Writings from '../../pages/Writing/Writings';

const WritingLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-gray-900">Writing</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <Writings/>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingLayout; 