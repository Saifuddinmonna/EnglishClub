import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
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
  HomeIcon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';

// Import admin components
import UserManagement from '../features/adminDashboard/AdminDashBoardComponents/UserManagement';
import AdminHome from '../features/adminDashboard/AdminDashBoardComponents/adminHome';

const MainDashboardLayout = () => {
  const { user, dbUser, logout } = useAuth();
  const { isSidebarVisible, toggleSidebar } = useApp();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  console.log("dbUser",dbUser);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Update active tab based on current location
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/dashboard/admin/')) {
      const tab = path.split('/dashboard/admin/')[1] || 'dashboard';
      setActiveTab(tab);
    } else if (path.includes('/dashboard/')) {
      const tab = path.split('/dashboard/')[1] || 'dashboard';
      setActiveTab(tab);
    } else {
      setActiveTab('dashboard');
    }
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Role-based navigation items with routes
  const getNavigationItems = () => {
    const commonItems = [
      { name: 'Dashboard', icon: HomeIcon, current: activeTab === 'dashboard', path: '/dashboard' },
      // { name: 'Courses', icon: BookOpenIcon, current: activeTab === 'courses', path: '/dashboard/courses' },
      // { name: 'Schedule', icon: CalendarIcon, current: activeTab === 'schedule', path: '/dashboard/schedule' },
      // { name: 'test', icon: CalendarIcon, current: activeTab === 'test', path: '/dashboard/test' },
    ];

    const roleSpecificItems = {
      admin: [
        { name: 'Users', icon: UserGroupIcon, current: activeTab === 'users', path: '/dashboard/admin/users' },
        { name: 'Content', icon: DocumentTextIcon, current: activeTab === 'content', path: '/dashboard/admin/content' },
        { name: 'Courses', icon: DocumentTextIcon, current: activeTab === 'courses', path: '/dashboard/admin/courses' },
        { name: 'Analytics', icon: ChartBarIcon, current: activeTab === 'analytics', path: '/dashboard/admin/analytics' },
        { name: 'Settings', icon: CogIcon, current: activeTab === 'settings', path: '/dashboard/admin/settings' },
      ],
      teacher: [
        { name: 'My Classes', icon: UserGroupIcon, current: activeTab === 'classes', path: '/dashboard/teacher/classes' },
        { name: 'Assignments', icon: DocumentTextIcon, current: activeTab === 'assignments', path: '/dashboard/teacher/assignments' },
        { name: 'Grades', icon: ClipboardDocumentListIcon, current: activeTab === 'grades', path: '/dashboard/teacher/grades' },
      ],
      student: [
        { name: 'My Courses', icon: BookOpenIcon, current: activeTab === 'my-courses', path: '/dashboard/student/my-courses' },
        { name: 'Assignments', icon: DocumentTextIcon, current: activeTab === 'assignments', path: '/dashboard/student/assignments' },
        { name: 'Progress', icon: ChartBarIcon, current: activeTab === 'progress', path: '/dashboard/student/progress' },
      ],
      special_student: [
        { name: 'My Courses', icon: BookOpenIcon, current: activeTab === 'my-courses', path: '/dashboard/special-student/my-courses' },
        { name: 'Assignments', icon: DocumentTextIcon, current: activeTab === 'assignments', path: '/dashboard/special-student/assignments' },
        { name: 'Progress', icon: ChartBarIcon, current: activeTab === 'progress', path: '/dashboard/special-student/progress' },
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

  const handleTabClick = (item) => {
    setActiveTab(item.name.toLowerCase());
    navigate(item.path);
    
    if (item.name.toLowerCase() === 'dashboard') {
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
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h1 className="text-xl font-bold text-gray-900">
                {user?.role
                  ? user.role.charAt(0).toUpperCase() + user.role.slice(1) + ' Portal'
                  : 'User Portal'}
              </h1>
            </div>

            {/* User Profile Section */}
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center space-x-3">
                {/* User Picture */}
                <div className="flex-shrink-0">
                  {dbUser?.profilePicture ? (
                    <img
                      src={dbUser.profilePicture}
                      alt="Profile"
                      className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className={`h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center border-2 border-white shadow-sm ${
                    dbUser?.profilePicture ? 'hidden' : 'flex'
                  }`}>
                    <UserCircleIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                {/* User Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {dbUser?.name || dbUser?.name || user?.displayName || 'User'}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {dbUser?.email || user?.email || 'user@example.com'}
                  </p>
                  <p className="text-xs text-blue-600 font-medium capitalize">
                    {user?.role || 'User'}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-4">
              {getNavigationItems().map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleTabClick(item)}
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

            {/* Logout Section */}
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className="w-full flex items-center px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5 mr-3" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={`transition-all duration-300 ${
        isSidebarVisible ? 'ml-64' : 'ml-0'
      }`}>
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainDashboardLayout; 