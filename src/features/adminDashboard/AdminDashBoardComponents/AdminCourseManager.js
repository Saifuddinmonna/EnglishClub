import React, { useState } from 'react';
import CourseListPage from '../pages/CourseListPage';
import CourseFormPage from '../pages/CourseFormPage';

const AdminCourseManager = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleAdd = () => {
    setSelectedCourse(null);
    setShowForm(true);
  };

  const handleEdit = (course) => {
    setSelectedCourse(course);
    setShowForm(true);
  };

  const handleSuccess = () => {
    setShowForm(false);
    setSelectedCourse(null);
    setRefreshKey((k) => k + 1);
  };

  const handleCancel = () => {
    setShowForm(false);
    setSelectedCourse(null);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="min-h-screen bg-gray-100 py-8 px-2 sm:px-4">
        <div className="w-[98%] lg:w-4/5 mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700 tracking-wide">Course Management</h2>
          {!showForm ? (
            <CourseListPage key={refreshKey} onAdd={handleAdd} onEdit={handleEdit} />
          ) : (
            <CourseFormPage course={selectedCourse} onSuccess={handleSuccess} onCancel={handleCancel} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCourseManager; 