import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import {
  UserGroupIcon,
  AcademicCapIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CalendarIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';

const TeacherPanel = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { name: 'Total Students', value: '156', icon: UserGroupIcon },
    { name: 'Active Courses', value: '4', icon: AcademicCapIcon },
    { name: 'Assignments Due', value: '12', icon: DocumentTextIcon },
    { name: 'Average Grade', value: 'B+', icon: ChartBarIcon },
  ];

  const navigation = [
    { name: 'Dashboard', icon: ChartBarIcon, current: activeTab === 'dashboard' },
    { name: 'My Classes', icon: UserGroupIcon, current: activeTab === 'classes' },
    { name: 'Assignments', icon: DocumentTextIcon, current: activeTab === 'assignments' },
    { name: 'Grades', icon: ClipboardDocumentListIcon, current: activeTab === 'grades' },
    { name: 'Schedule', icon: CalendarIcon, current: activeTab === 'schedule' },
  ];

  const recentClasses = [
    {
      id: 1,
      name: 'Advanced Grammar',
      students: 42,
      nextLesson: 'Conditional Sentences',
      time: '10:00 AM',
    },
    {
      id: 2,
      name: 'Business Writing',
      students: 38,
      nextLesson: 'Email Etiquette',
      time: '2:00 PM',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <h1 className="text-2xl font-bold text-gray-900">Teacher Portal</h1>
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
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Stats */}
              <div className="mt-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((item) => (
                    <div
                      key={item.name}
                      className="bg-white overflow-hidden shadow rounded-lg"
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

              {/* Today's Classes */}
              <div className="mt-8">
                <div className="bg-white shadow rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Today's Classes
                    </h3>
                  </div>
                  <div className="border-t border-gray-200">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="space-y-6">
                        {recentClasses.map((class_) => (
                          <div key={class_.id} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-lg font-medium text-gray-900">
                                  {class_.name}
                                </h4>
                                <p className="text-sm text-gray-500">
                                  Students: {class_.students}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-gray-500">
                                  Next: {class_.nextLesson}
                                </p>
                                <p className="text-sm font-medium text-gray-900 mt-1">
                                  {class_.time}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8">
                <div className="bg-white shadow rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Quick Actions
                    </h3>
                  </div>
                  <div className="border-t border-gray-200">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          Create Assignment
                        </button>
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                          Grade Submissions
                        </button>
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                          Schedule Class
                        </button>
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

export default TeacherPanel; 