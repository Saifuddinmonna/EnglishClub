import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useApp } from '../../context/AppContext';
import {
  UserGroupIcon,
  AcademicCapIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CogIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  ClockIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon
} from '@heroicons/react/24/outline';

const UnifiedDashboard = () => {
  const { user } = useAuth();
  const { isSidebarVisible, toggleSidebar } = useApp();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Role-based navigation items
  const getNavigationItems = () => {
    const commonItems = [
      { name: 'Dashboard', icon: HomeIcon, current: activeTab === 'dashboard' },
      { name: 'Courses', icon: BookOpenIcon, current: activeTab === 'courses' },
      { name: 'Schedule', icon: CalendarIcon, current: activeTab === 'schedule' },
    ];

    const roleSpecificItems = {
      admin: [
        { name: 'Users', icon: UserGroupIcon, current: activeTab === 'users' },
        { name: 'Content', icon: DocumentTextIcon, current: activeTab === 'content' },
        { name: 'Analytics', icon: ChartBarIcon, current: activeTab === 'analytics' },
        { name: 'Settings', icon: CogIcon, current: activeTab === 'settings' },
      ],
      teacher: [
        { name: 'My Classes', icon: UserGroupIcon, current: activeTab === 'classes' },
        { name: 'Assignments', icon: DocumentTextIcon, current: activeTab === 'assignments' },
        { name: 'Grades', icon: ClipboardDocumentListIcon, current: activeTab === 'grades' },
      ],
      student: [
        { name: 'My Courses', icon: BookOpenIcon, current: activeTab === 'my-courses' },
        { name: 'Assignments', icon: DocumentTextIcon, current: activeTab === 'assignments' },
        { name: 'Progress', icon: ChartBarIcon, current: activeTab === 'progress' },
      ],
    };

    return [...commonItems, ...(roleSpecificItems[user?.role] || [])];
  };

  // Role-based stats
  const getStats = () => {
    const commonStats = [
      { name: 'Active Courses', value: '4', icon: AcademicCapIcon, color: 'bg-blue-500' },
    ];

    const roleSpecificStats = {
      admin: [
        { name: 'Total Users', value: '1,234', icon: UserGroupIcon, color: 'bg-purple-500' },
        { name: 'Content Items', value: '156', icon: DocumentTextIcon, color: 'bg-green-500' },
        { name: 'System Health', value: '100%', icon: ShieldCheckIcon, color: 'bg-yellow-500' },
      ],
      teacher: [
        { name: 'Total Students', value: '156', icon: UserGroupIcon, color: 'bg-purple-500' },
        { name: 'Assignments Due', value: '12', icon: DocumentTextIcon, color: 'bg-red-500' },
        { name: 'Average Grade', value: 'B+', icon: ChartBarIcon, color: 'bg-green-500' },
      ],
      student: [
        { name: 'Courses Enrolled', value: '4', icon: BookOpenIcon, color: 'bg-purple-500' },
        { name: 'Assignments Due', value: '3', icon: DocumentTextIcon, color: 'bg-red-500' },
        { name: 'Study Hours', value: '24h', icon: ClockIcon, color: 'bg-yellow-500' },
      ],
    };

    return [...commonStats, ...(roleSpecificStats[user?.role] || [])];
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName.toLowerCase());
    if (tabName.toLowerCase() === 'dashboard') {
      setShowDashboard(true);
    } else {
      setShowDashboard(false);
    }
  };

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
          isSidebarVisible ? 'w-64' : 'w-0'
        }`}
      >
        <div className={`h-full bg-white border-r border-gray-200 shadow-lg transition-opacity duration-300 ${
          isSidebarVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h1 className="text-xl font-bold text-gray-900">
                {user?.role.charAt(0).toUpperCase() + user?.role.slice(1)} Portal
              </h1>
            </div>
            <nav className="flex-1 overflow-y-auto p-4">
              {getNavigationItems().map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleTabClick(item.name)}
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
        isSidebarVisible ? 'ml-64' : 'ml-0'
      }`}>
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            {showDashboard ? (
              <>
                <h1 className="text-2xl font-bold text-gray-900 mb-8">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h1>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {getStats().map((item) => (
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

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
                  <div className="space-y-4">
                    {/* Add your recent activity content here */}
                    <p className="text-gray-600">No recent activity to display.</p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <button className="p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                      View Courses
                    </button>
                    <button className="p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                      Check Assignments
                    </button>
                    <button className="p-4 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                      View Progress
                    </button>
                    <button className="p-4 bg-yellow-50 text-yellow-700 rounded-lg hover:bg-yellow-100 transition-colors">
                      Schedule
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <p className="text-gray-600">Content for {activeTab} will be displayed here.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default UnifiedDashboard; 