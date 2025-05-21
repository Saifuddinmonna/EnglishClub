import React from 'react';
import { useAuth } from '../../pages/Authentication/AuthContext';
import { Navigate } from 'react-router-dom';
import {
  UserGroupIcon,
  AcademicCapIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  CalendarIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();

  if (!user) {
    return <Navigate to="/signin" />;
  }

  const navigation = {
    admin: [
      { name: 'Dashboard', icon: ChartBarIcon, path: '/admin' },
      { name: 'Users', icon: UserGroupIcon, path: '/admin/users' },
      { name: 'Courses', icon: AcademicCapIcon, path: '/admin/courses' },
      { name: 'Content', icon: DocumentTextIcon, path: '/admin/content' },
      { name: 'Schedule', icon: CalendarIcon, path: '/admin/schedule' },
      { name: 'Settings', icon: CogIcon, path: '/admin/settings' },
    ],
    teacher: [
      { name: 'Dashboard', icon: ChartBarIcon, path: '/teacher' },
      { name: 'My Classes', icon: UserGroupIcon, path: '/teacher/classes' },
      { name: 'Assignments', icon: DocumentTextIcon, path: '/teacher/assignments' },
      { name: 'Grades', icon: DocumentTextIcon, path: '/teacher/grades' },
      { name: 'Schedule', icon: CalendarIcon, path: '/teacher/schedule' },
    ],
    student: [
      { name: 'Dashboard', icon: ChartBarIcon, path: '/student' },
      { name: 'My Courses', icon: AcademicCapIcon, path: '/student/courses' },
      { name: 'Assignments', icon: DocumentTextIcon, path: '/student/assignments' },
      { name: 'Progress', icon: ChartBarIcon, path: '/student/progress' },
      { name: 'Schedule', icon: CalendarIcon, path: '/student/schedule' },
    ],
    guest: [
      { name: 'Dashboard', icon: ChartBarIcon, path: '/guest' },
      { name: 'Browse Courses', icon: AcademicCapIcon, path: '/guest/courses' },
      { name: 'Learning Paths', icon: DocumentTextIcon, path: '/guest/paths' },
      { name: 'Resources', icon: DocumentTextIcon, path: '/guest/resources' },
    ],
  };

  const roleNavigation = navigation[user.role] || navigation.guest;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <h1 className="text-2xl font-bold text-gray-900">
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)} Portal
              </h1>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {roleNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <item.icon
                    className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <div className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <div>
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500">
                    <span className="text-lg font-medium leading-none text-white">
                      {user.firstName?.charAt(0) || user.email?.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    {user.firstName} {user.lastName}
                  </p>
                  <button
                    onClick={logout}
                    className="text-xs font-medium text-gray-500 group-hover:text-gray-700 flex items-center"
                  >
                    Sign out
                    <ArrowRightOnRectangleIcon className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 