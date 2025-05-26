import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useApp } from '../../context/AppContext';
import {
  BookOpenIcon,
  AcademicCapIcon,
  ChartBarIcon,
  ClockIcon,
  DocumentTextIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

const StudentPanel = () => {
  const { user } = useAuth();
  const { isStudentPanelVisible, toggleStudentPanel } = useApp();
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    // If user is a student, ensure panel is visible
    if (user && user.role === 'student' && !isStudentPanelVisible) {
      toggleStudentPanel();
    }
  }, [user, isStudentPanelVisible, toggleStudentPanel]);

  // Only show panel if user is logged in and is a student
  if (!user || user.role !== 'student') {
    return null;
  }

  const stats = [
    { name: 'Courses Enrolled', value: '4', icon: BookOpenIcon },
    { name: 'Assignments Due', value: '3', icon: DocumentTextIcon },
    { name: 'Average Grade', value: 'A-', icon: ChartBarIcon },
    { name: 'Study Hours', value: '24h', icon: ClockIcon },
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
    },
    {
      id: 2,
      name: 'Business Writing',
      progress: 45,
      nextLesson: 'Email Etiquette',
      instructor: 'Prof. Johnson',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`hidden md:flex md:flex-col md:fixed md:top-[12vh] transition-all duration-300 ease-in-out ${
        isStudentPanelVisible ? 'md:w-40' : 'md:w-0'
      }`}>
        <div className={`flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200 transition-all duration-300 ${
          isStudentPanelVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <h1 className="text-2xl font-bold text-gray-900">Student Portal</h1>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name.toLowerCase())}
                  className={`${
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full transition-colors duration-200`}
                >
                  <item.icon
                    className={`${
                      item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500'
                    } mr-3 flex-shrink-0 h-6 w-6`}
                  />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={`flex flex-col flex-1 transition-all duration-300 ${
        isStudentPanelVisible ? 'md:pl-72' : 'md:pl-0'
      }`}>
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Stats */}
              <div className="mt-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((item) => (
                    <div
                      key={item.name}
                      className="bg-white overflow-hidden shadow rounded-lg transform transition-all duration-300 hover:scale-105"
                    >
                      <div className="p-5">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <item.icon className="h-6 w-6 text-gray-400" />
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-500 truncate">
                                {item.name}
                              </dt>
                              <dd className="flex items-baseline">
                                <div className="text-2xl font-semibold text-gray-900">
                                  {item.value}
                                </div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Courses */}
              <div className="mt-8">
                <div className="bg-white shadow rounded-lg transform transition-all duration-300 hover:shadow-xl">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Recent Courses
                    </h3>
                  </div>
                  <div className="border-t border-gray-200">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="space-y-6">
                        {recentCourses.map((course) => (
                          <div key={course.id} className="bg-gray-50 rounded-lg p-4 transform transition-all duration-300 hover:scale-102 hover:shadow-md">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-lg font-medium text-gray-900">
                                  {course.name}
                                </h4>
                                <p className="text-sm text-gray-500">
                                  Instructor: {course.instructor}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-gray-500">
                                  Next: {course.nextLesson}
                                </p>
                                <div className="mt-2">
                                  <div className="relative pt-1">
                                    <div className="flex mb-2 items-center justify-between">
                                      <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                          Progress
                                        </span>
                                      </div>
                                      <div className="text-right">
                                        <span className="text-xs font-semibold inline-block text-blue-600">
                                          {course.progress}%
                                        </span>
                                      </div>
                                    </div>
                                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                                      <div
                                        style={{ width: `${course.progress}%` }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500"
                                      ></div>
                                    </div>
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
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentPanel; 