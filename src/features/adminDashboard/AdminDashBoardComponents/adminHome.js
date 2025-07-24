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
      <div style={{ background: 'var(--color-bg-card)', borderRadius: '0.75rem', boxShadow: '0 1px 3px 0 var(--color-shadow)', padding: 'var(--standard-padding)', margin: 0 }}>
        <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>Content for {activeTab} will be displayed here.</p>
      </div>
    );
  }

  return (
    <>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-section-title)', marginBottom: 'var(--standard-margin)' }}>
        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
      </h1>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--standard-gap)', marginBottom: 'var(--standard-margin)' }}>
        {getStats().map((item) => (
          <div
            key={item.name}
            style={{ background: 'var(--color-bg-card)', borderRadius: '0.75rem', boxShadow: '0 1px 3px 0 var(--color-shadow)', padding: 'var(--standard-padding)', transition: 'transform 0.3s', border: '1px solid var(--color-border)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ padding: '0.75rem', borderRadius: '0.5rem', background: 'var(--color-hover-bg)', marginRight: '1rem' }}>
                <item.icon style={{ height: '1.5rem', width: '1.5rem', color: 'var(--color-primary)' }} />
              </div>
              <div>
                <p style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-text-muted)', margin: 0 }}>{item.name}</p>
                <p style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--color-section-title)', margin: 0 }}>{item.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div style={{ background: 'var(--color-bg-card)', borderRadius: '0.75rem', boxShadow: '0 1px 3px 0 var(--color-shadow)', padding: 'var(--standard-padding)', marginBottom: 'var(--standard-margin)', border: '1px solid var(--color-border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--standard-margin)' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-section-title)', margin: 0 }}>Recent Activity</h2>
          <button style={{ color: 'var(--color-primary)', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'underline' }}>
            View All
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--standard-gap)' }}>
          {isLoading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 'var(--standard-padding)' }}>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : recentActivity.length > 0 ? (
            recentActivity.map((activity) => (
              <div key={activity.id} style={{ display: 'flex', alignItems: 'center', padding: 'var(--standard-padding)', borderRadius: '0.5rem', transition: 'background-color 0.3s' }}>
                <div style={{ marginRight: '0.75rem' }}>
                  <activity.icon style={{ height: '1.25rem', width: '1.25rem', color: 'var(--color-text-muted)' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-section-title)', margin: 0 }}>{activity.message}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: 0 }}>{activity.time}</p>
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', padding: 'var(--standard-padding)' }}>No recent activity to display.</p>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ background: 'var(--color-bg-card)', borderRadius: '0.75rem', boxShadow: '0 1px 3px 0 var(--color-shadow)', padding: 'var(--standard-padding)', marginBottom: 'var(--standard-margin)', border: '1px solid var(--color-border)' }}>
        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-section-title)', marginBottom: 'var(--standard-margin)' }}>Quick Actions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--standard-gap)' }}>
          {quickActions.map((action) => (
            <button
              key={action.name}
              onClick={action.action}
              style={{ padding: 'var(--standard-padding)', background: 'var(--color-hover-bg)', color: 'var(--color-primary)', fontWeight: 500, borderRadius: '0.5rem', transition: 'all 0.3s, transform 0.3s', transform: 'scale(1)', flexDirection: 'row', alignItems: 'center', gap: '0.5rem' }}
            >
              <action.icon style={{ height: '1.25rem', width: '1.25rem' }} />
              <span style={{ fontWeight: 500 }}>{action.name}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminHome;