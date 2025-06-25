import React from 'react';
import { Outlet } from 'react-router-dom';

const VocabularyLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-gray-900">Vocabulary and testing </h1>
          <div className="bg-white rounded-lg shadow p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocabularyLayout; 