import React from 'react';
import { Outlet } from 'react-router-dom';
import Syllabus from '../../pages/Syllabus/Syllabus';
import SyllabusOfEasy from '../../pages/Syllabus/SyllabusOfEasy';

const SyllabusLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-gray-900">Syllabus</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="space-y-8">
              {/* Main Syllabus Component */}
              <div>
                <h2 className="text-2xl font-semibold text-blue-800 mb-4">Main Syllabus</h2>
                {/* <Syllabus /> */}
              </div>

              {/* Syllabus of Easy Component */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4">Easy Syllabus</h2>
                <SyllabusOfEasy />
              </div>

              {/* Outlet for nested routes */}
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyllabusLayout; 