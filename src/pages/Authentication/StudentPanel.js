import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useApp } from '../../context/AppContext';
import {
  BookOpenIcon,
  AcademicCapIcon,
  ChartBarIcon,
  ClockIcon,
  DocumentTextIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const StudentPanel = () => {
  const { user } = useAuth();
  const { isStudentPanelVisible, toggleStudentPanel } = useApp();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Only show panel if user is logged in and is a student
  if (!user || user.role !== 'student') {
    return null;
  }

  const stats = [
    { name: 'Courses Enrolled', value: '4', icon: BookOpenIcon, color: 'bg-blue-500' },
    { name: 'Assignments Due', value: '3', icon: DocumentTextIcon, color: 'bg-red-500' },
    { name: 'Average Grade', value: 'A-', icon: ChartBarIcon, color: 'bg-green-500' },
    { name: 'Study Hours', value: '24h', icon: ClockIcon, color: 'bg-purple-500' },
  ];

  const navigation = [
    { name: 'Dashboard', icon: ChartBarIcon, current: activeTab === 'dashboard' },
    { name: 'My Courses', icon: BookOpenIcon, current: activeTab === 'courses' },
    { name: 'Assignments', icon: DocumentTextIcon, current: activeTab === 'assignments' },
    { name: 'Progress', icon: ChartBarIcon, current: activeTab === 'progress' },
    { name: 'Schedule', icon: CalendarIcon, current: activeTab === 'schedule' },
  ];

  const recentCourses = [
    {
      id: 1,
      name: 'Advanced Grammar',
      progress: 75,
      nextLesson: 'Conditional Sentences',
      instructor: 'Dr. Smith',
      color: 'bg-blue-100 text-blue-800',
    },
    {
      id: 2,
      name: 'Business Writing',
      progress: 45,
      nextLesson: 'Email Etiquette',
      instructor: 'Prof. Johnson',
      color: 'bg-green-100 text-green-800',
    },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div 
        className={`fixed top-20 left-0 h-[calc(100vh-5rem)] transition-all duration-300 ease-in-out z-30 ${
          isStudentPanelVisible ? 'w-64' : 'w-0'
        }`}
      >
        <div className={`h-full bg-white border-r border-gray-200 shadow-lg transition-opacity duration-300 ${
          isStudentPanelVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h1 className="text-xl font-bold text-gray-900">Student Portal</h1>
              <button
                onClick={toggleStudentPanel}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                {isStudentPanelVisible ? (
                  <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name.toLowerCase())}
                  className={`w-full flex items-center px-4 py-3 mb-2 rounded-lg transition-all duration-200 ${
                    item.current
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon className={`h-5 w-5 mr-3 ${
                    item.current ? 'text-blue-500' : 'text-gray-400'
                  }`} />
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={`transition-all duration-300 ${
        isStudentPanelVisible ? 'ml-64' : 'ml-0'
      }`}>
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard</h1>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-xl shadow-sm p-6 transform transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg ${item.color} bg-opacity-10`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">{item.name}</p>
                      <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Courses */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Recent Courses</h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {recentCourses.map((course) => (
                    <div
                      key={course.id}
                      className="bg-gray-50 rounded-lg p-6 transform transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="mb-4 md:mb-0">
                          <h3 className="text-lg font-medium text-gray-900 mb-2">
                            {course.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Instructor: {course.instructor}
                          </p>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="text-sm text-gray-600 mb-2">
                            Next: {course.nextLesson}
                          </p>
                          <div className="w-48">
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                              <span>Progress</span>
                              <span>{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${course.color.split(' ')[0]}`}
                                style={{ width: `${course.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentPanel; 