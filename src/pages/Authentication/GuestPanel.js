import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import {
  BookOpenIcon,
  AcademicCapIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CalendarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const GuestPanel = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  const featuredCourses = [
    {
      id: 1,
      name: 'Introduction to English Grammar',
      description: 'Learn the basics of English grammar and sentence structure',
      level: 'Beginner',
      duration: '4 weeks',
    },
    {
      id: 2,
      name: 'Business Communication',
      description: 'Master professional English for the workplace',
      level: 'Intermediate',
      duration: '6 weeks',
    },
    {
      id: 3,
      name: 'Advanced Writing Skills',
      description: 'Develop your writing skills for academic and professional success',
      level: 'Advanced',
      duration: '8 weeks',
    },
  ];

  const navigation = [
    { name: 'Dashboard', icon: ChartBarIcon, current: activeTab === 'dashboard' },
    { name: 'Browse Courses', icon: BookOpenIcon, current: activeTab === 'courses' },
    { name: 'Learning Paths', icon: AcademicCapIcon, current: activeTab === 'paths' },
    { name: 'Resources', icon: DocumentTextIcon, current: activeTab === 'resources' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <h1 className="text-2xl font-bold text-gray-900">Guest Portal</h1>
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
                  } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full`}
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
      <div className="md:pl-64 flex flex-col flex-1">
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-900">Welcome to English Club</h1>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Sign Up to Get Started
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Featured Courses */}
              <div className="mt-8">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Featured Courses</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {featuredCourses.map((course) => (
                    <div
                      key={course.id}
                      className="bg-white overflow-hidden shadow rounded-lg"
                    >
                      <div className="p-6">
                        <h3 className="text-lg font-medium text-gray-900">{course.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{course.description}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {course.level}
                            </span>
                            <span className="ml-2 text-sm text-gray-500">
                              {course.duration}
                            </span>
                          </div>
                          <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Join Us */}
              <div className="mt-12">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Why Join English Club?</h2>
                <div className="bg-white shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <AcademicCapIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-gray-900">Expert Teachers</h3>
                          <p className="mt-1 text-sm text-gray-500">
                            Learn from experienced English language professionals
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <BookOpenIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-gray-900">Structured Learning</h3>
                          <p className="mt-1 text-sm text-gray-500">
                            Follow our proven curriculum designed for all levels
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <ChartBarIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-gray-900">Track Progress</h3>
                          <p className="mt-1 text-sm text-gray-500">
                            Monitor your improvement with detailed analytics
                          </p>
                        </div>
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

export default GuestPanel; 