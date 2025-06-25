import React, { useState, useEffect } from 'react';
import {
  UserGroupIcon,
  AcademicCapIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  BellIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  CogIcon,
  ChartPieIcon
} from '@heroicons/react/24/outline';

const AdminHome = ({ activeTab, showDashboard }) => {
  const [recentActivity, setRecentActivity] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Stats data
  const getStats = () => {
    return [
      { 
        name: 'Total Users', 
        value: '1,234', 
        icon: UserGroupIcon, 
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
      },
      { 
        name: 'Active Courses', 
        value: '12', 
        icon: AcademicCapIcon, 
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
      },
      { 
        name: 'Content Items', 
        value: '156', 
        icon: DocumentTextIcon, 
        color: 'text-green-600',
        bgColor: 'bg-green-50'
      },
      { 
        name: 'System Health', 
        value: '100%', 
        icon: ShieldCheckIcon, 
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50'
      },
    ];
  };

  // Quick actions data
  const quickActions = [
    {
      name: 'View Courses',
      icon: AcademicCapIcon,
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      hoverColor: 'hover:bg-blue-100',
      action: () => console.log('View Courses clicked')
    },
    {
      name: 'Check Assignments',
      icon: ClipboardDocumentListIcon,
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      hoverColor: 'hover:bg-green-100',
      action: () => console.log('Check Assignments clicked')
    },
    {
      name: 'View Progress',
      icon: ChartBarIcon,
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      hoverColor: 'hover:bg-purple-100',
      action: () => console.log('View Progress clicked')
    },
    {
      name: 'Schedule',
      icon: CalendarIcon,
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700',
      hoverColor: 'hover:bg-yellow-100',
      action: () => console.log('Schedule clicked')
    }
  ];

  // Simulate loading recent activity
  useEffect(() => {
    const timer = setTimeout(() => {
      setRecentActivity([
        {
          id: 1,
          type: 'user',
          message: 'New student registration: John Doe',
          time: '2 minutes ago',
          icon: UserGroupIcon
        },
        {
          id: 2,
          type: 'course',
          message: 'Course "Advanced Grammar" updated',
          time: '15 minutes ago',
          icon: AcademicCapIcon
        },
        {
          id: 3,
          type: 'content',
          message: 'New content added to Vocabulary section',
          time: '1 hour ago',
          icon: DocumentTextIcon
        },
        {
          id: 4,
          type: 'system',
          message: 'System backup completed successfully',
          time: '2 hours ago',
          icon: ShieldCheckIcon
        }
      ]);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!showDashboard) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <p className="text-gray-600">Content for {activeTab} will be displayed here.</p>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {getStats().map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-xl shadow-sm p-6 transform transition-all duration-300 hover:scale-105 border border-gray-100"
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${item.bgColor}`}>
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
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : recentActivity.length > 0 ? (
            recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0">
                  <activity.icon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center py-4">No recent activity to display.</p>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <button
              key={action.name}
              onClick={action.action}
              className={`p-4 ${action.bgColor} ${action.textColor} ${action.hoverColor} rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2`}
            >
              <action.icon className="h-5 w-5" />
              <span className="font-medium">{action.name}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminHome;