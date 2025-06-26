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
    <div>
      {!showForm ? (
        <CourseListPage key={refreshKey} onAdd={handleAdd} onEdit={handleEdit} />
      ) : (
        <CourseFormPage course={selectedCourse} onSuccess={handleSuccess} onCancel={handleCancel} />
      )}
    </div>
  );
};

export default AdminCourseManager; 