import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import UserManagement from './AdminDashBoardComponents/UserManagement';
import AdminHome from './AdminDashBoardComponents/adminHome';
import AdminCourseManager from './AdminDashBoardComponents/AdminCourseManager';
import {
  UserGroupIcon,
  AcademicCapIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CogIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  ShieldCheckIcon,
  BellIcon,
  ChartPieIcon
} from '@heroicons/react/24/outline';

const AdminPanel = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showBulkActions, setShowBulkActions] = useState(false);

  const navigation = [
    { name: 'Dashboard', icon: ChartBarIcon, current: activeTab === 'dashboard' },
    { name: 'Users', icon: UserGroupIcon, current: activeTab === 'users' },
    { name: 'Courses', icon: AcademicCapIcon, current: activeTab === 'courses' },
    { name: 'Content', icon: DocumentTextIcon, current: activeTab === 'content' },
    { name: 'Analytics', icon: ChartPieIcon, current: activeTab === 'analytics' },
    { name: 'Settings', icon: CogIcon, current: activeTab === 'settings' },
  ];

  const stats = [
    { name: 'Total Users', value: '1,234', icon: UserGroupIcon },
    { name: 'Active Courses', value: '12', icon: AcademicCapIcon },
    { name: 'Content Items', value: '156', icon: DocumentTextIcon },
    { name: 'System Health', value: '100%', icon: ShieldCheckIcon },
  ];

  // Simulated user data - in real app, this would come from your backend
  useEffect(() => {
    const mockUsers = [
      { id: 1, email: 'student1@student.edu', firstName: 'John', lastName: 'Doe', role: 'student', status: 'active', lastLogin: '2024-03-15' },
      { id: 2, email: 'teacher1@teacher.edu', firstName: 'Jane', lastName: 'Smith', role: 'teacher', status: 'active', lastLogin: '2024-03-14' },
      { id: 3, email: 'admin1@admin.edu', firstName: 'Mike', lastName: 'Johnson', role: 'admin', status: 'inactive', lastLogin: '2024-03-13' },
    ];
    setUsers(mockUsers);
    setLoading(false);
  }, []);

  const handleUserSelect = (userId) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
    setShowBulkActions(selectedUsers.length > 0);
  };

  const handleBulkAction = (action) => {
    // Implement bulk actions (activate, deactivate, delete, etc.)
    console.log(`Performing ${action} on users:`, selectedUsers);
    setSelectedUsers([]);
    setShowBulkActions(false);
  };

  const filteredUsers = users.filter(user =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
  return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdminHome activeTab="dashboard" showDashboard={true} />;
      case 'users':
        return <UserManagement />;
      case 'courses':
        return <AdminCourseManager />;
      case 'content':
        return <div className="bg-white rounded-lg shadow p-6"><h2 className="text-xl font-semibold">Content Management</h2><p className="text-gray-600">Content management coming soon...</p></div>;
      case 'analytics':
        return <div className="bg-white rounded-lg shadow p-6"><h2 className="text-xl font-semibold">Analytics</h2><p className="text-gray-600">Analytics dashboard coming soon...</p></div>;
      case 'settings':
        return <div className="bg-white rounded-lg shadow p-6"><h2 className="text-xl font-semibold">Settings</h2><p className="text-gray-600">Settings panel coming soon...</p></div>;
      default:
        return <AdminHome activeTab="dashboard" showDashboard={true} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)', padding: 'var(--standard-padding)' }}>
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0" style={{ background: 'var(--color-bg-card)', borderRight: '1px solid var(--color-border)', padding: 'var(--standard-padding)' }}>
          <div className="flex-1 flex flex-col overflow-y-auto" style={{ padding: 0 }}>
            <div className="flex items-center flex-shrink-0" style={{ padding: 'var(--standard-padding)' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-section-title)', margin: 0 }}>Admin Dashboard</h1>
            </div>
            <nav style={{ flex: 1, padding: 0, margin: 0 }}>
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name.toLowerCase())}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', padding: 'var(--standard-padding)', marginBottom: 'var(--standard-margin)', borderRadius: '0.5rem', background: item.current ? 'var(--color-hover-bg)' : 'transparent', color: item.current ? 'var(--color-primary)' : 'var(--color-text-muted)', transition: 'background 0.2s, color 0.2s', fontWeight: 500 }}
                >
                  <item.icon style={{ marginRight: '0.75rem', color: item.current ? 'var(--color-primary)' : 'var(--color-border)' }} />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <main className="flex-1" style={{ padding: 'var(--standard-padding)' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', padding: 0 }}>
            {renderContent()}
          </div>
        </main>
      </div>
      {/* Course Management Section */}
      <div style={{ padding: 0 }}>
        <AdminCourseManager />
      </div>
    </div>
  );
};

export default AdminPanel; 