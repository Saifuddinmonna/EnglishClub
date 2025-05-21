import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import {
  UserGroupIcon,
  AcademicCapIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

const AdminPanel = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { name: 'Total Students', value: '1,234', icon: UserGroupIcon },
    { name: 'Active Courses', value: '12', icon: AcademicCapIcon },
    { name: 'Teachers', value: '45', icon: UserGroupIcon },
    { name: 'Completion Rate', value: '85%', icon: ChartBarIcon },
  ];

  const navigation = [
    { name: 'Dashboard', icon: ChartBarIcon, current: activeTab === 'dashboard' },
    { name: 'Users', icon: UserGroupIcon, current: activeTab === 'users' },
    { name: 'Courses', icon: AcademicCapIcon, current: activeTab === 'courses' },
    { name: 'Content', icon: DocumentTextIcon, current: activeTab === 'content' },
    { name: 'Schedule', icon: CalendarIcon, current: activeTab === 'schedule' },
    { name: 'Settings', icon: CogIcon, current: activeTab === 'settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
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

              {/* Recent Activity */}
              <div className="mt-8">
                <div className="bg-white shadow rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Recent Activity
                    </h3>
                  </div>
                  <div className="border-t border-gray-200">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flow-root">
                        <ul className="-mb-8">
                          <li>
                            <div className="relative pb-8">
                              <span
                                className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                aria-hidden="true"
                              />
                              <div className="relative flex space-x-3">
                                <div>
                                  <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                                    <UserGroupIcon
                                      className="h-5 w-5 text-white"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                  <div>
                                    <p className="text-sm text-gray-500">
                                      New student registration{' '}
                                      <span className="font-medium text-gray-900">
                                        John Doe
                                      </span>
                                    </p>
                                  </div>
                                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                    <time dateTime="2023-01-23">1h ago</time>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
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

export default AdminPanel; 