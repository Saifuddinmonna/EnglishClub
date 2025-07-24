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
        { name: 'Catagories', icon: DocumentTextIcon, current: activeTab === 'catagories', path: '/dashboard/admin/catagories' },
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: 'var(--color-primary)' }}></div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      {/* Sidebar */}
      <div 
        className={`fixed top-20 left-0 h-[calc(100vh-5rem)] transition-all duration-300 ease-in-out z-30 ${
          isSidebarVisible ? 'w-64' : 'w-0'
        }`}
      >
        <div style={{ height: '100%', background: 'var(--color-bg-card)', borderRight: '1px solid var(--color-border)', boxShadow: '0 1px 3px 0 var(--color-shadow)', color: 'var(--color-text)' }} className={`transition-opacity duration-300 ${
          isSidebarVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex flex-col h-full" style={{ color: 'var(--color-text)' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid var(--color-border)', color: 'var(--color-section-title)' }}>
              <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-section-title)' }}>
                {user?.role
                  ? user.role.charAt(0).toUpperCase() + user.role.slice(1) + ' Portal'
                  : 'User Portal'}
              </h1>
            </div>
            {/* User Profile Section */}
            <div style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)', background: 'var(--color-hover-bg)', color: 'var(--color-text)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text)' }}>
                {/* User Picture */}
                <div style={{ flexShrink: 0 }}>
                  {dbUser?.profilePicture ? (
                    <img
                      src={dbUser.profilePicture}
                      alt="Profile"
                      style={{ height: '2.5rem', width: '2.5rem', borderRadius: '9999px', objectFit: 'cover', border: '2px solid var(--color-bg-card)', boxShadow: '0 1px 2px 0 var(--color-shadow)' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div style={{ height: '2.5rem', width: '2.5rem', borderRadius: '9999px', background: 'var(--color-primary)', display: dbUser?.profilePicture ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--color-bg-card)', boxShadow: '0 1px 2px 0 var(--color-shadow)' }}>
                    <UserCircleIcon className="h-6 w-6" style={{ color: '#fff' }} />
                  </div>
                </div>
                {/* User Info */}
                <div style={{ flex: 1, minWidth: 0, color: 'var(--color-text)' }}>
                  <p style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-section-title)', marginBottom: 0 }}>{dbUser?.name || dbUser?.name || user?.displayName || 'User'}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 0 }}>{dbUser?.email || user?.email || 'user@example.com'}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 500, textTransform: 'capitalize', marginBottom: 0 }}>{user?.role || 'User'}</p>
                </div>
              </div>
            </div>
            {/* Navigation */}
            <nav style={{ flex: 1, overflowY: 'auto', padding: '1rem', color: 'var(--color-text)' }}>
              {getNavigationItems().map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleTabClick(item)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', padding: '1rem', marginBottom: '0.5rem', borderRadius: '0.5rem', background: item.current ? 'var(--color-hover-bg)' : 'transparent', color: item.current ? 'var(--color-primary)' : 'var(--color-text-muted)', transition: 'background 0.2s, color 0.2s' }}
                >
                  <item.icon className="h-5 w-5 mr-3" style={{ color: item.current ? 'var(--color-primary)' : 'var(--color-border)' }} />
                  <span style={{ fontWeight: 500 }}>{item.name}</span>
                </button>
              ))}
            </nav>
            {/* Logout Section */}
            <div style={{ padding: '1rem', borderTop: '1px solid var(--color-border)', color: 'var(--color-text)' }}>
              <button
                onClick={handleLogout}
                style={{ width: '100%', display: 'flex', alignItems: 'center', padding: '1rem', borderRadius: '0.5rem', color: 'var(--color-secondary)', background: 'transparent', transition: 'background 0.2s, color 0.2s' }}
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5 mr-3" />
                <span style={{ fontWeight: 500 }}>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className={`transition-all duration-300 ${
        isSidebarVisible ? 'ml-64' : 'ml-0'
      }`}>
        <main style={{ padding: '1.5rem', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
          <div className="max-w-7xl mx-auto" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainDashboardLayout; 