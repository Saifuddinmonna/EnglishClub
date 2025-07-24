import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from '../context/AppContext';
import { AuthProvider } from '../context/AuthContext';
import MainLayout from '../Layouts/MainLayout';
import AIAssistantLayout from '../Layouts/AIAssistantLayout';
import SignIn from '../features/authentication/SignIn';
import SignUp from '../features/authentication/SignUp';
import Home from '../pages/Home/Home';
import AIAssistant from '../components/AIAssistant/AIAssistant';
import ProtectedRoute from './ProtectedRoute';
import SpecialStudentRoute from './SpecialStudentRoute';
import AdminRoute from './AdminRoute';

// Import all page components
import Vocabulary from '../pages/Vocabulary/Vocabulary';
import Grammar from '../pages/Grammar/Grammar';
import Writings from '../pages/Writing/Writings';
import Syllabus from '../pages/Syllabus/Syllabus';
import Courses from '../pages/Courses/Courses';
import Documents from '../pages/Documents/Documents';
import MainDashboardLayout from '../Layouts/MainDashboardLayout';

// Import admin components
import UserManagement from '../features/adminDashboard/AdminDashBoardComponents/UserManagement';
import AdminHome from '../features/adminDashboard/AdminDashBoardComponents/adminHome';
import AdminCourseManager from '../features/adminDashboard/AdminDashBoardComponents/AdminCourseManager';
import AdminContentComingSoon from '../features/adminDashboard/AdminDashBoardComponents/AdminContentComingSoon';
import CategoryManagerPage from '../features/adminDashboard/pages/CategoryManagerPage';
import ContentManagerPage from '../features/adminDashboard/pages/ContentManagerPage';
import ContentDetailsPage from '../features/adminDashboard/pages/ContentDetailsPage';

const AppRouter = () => {
  return (
    <AuthProvider>
      <AppProvider>
        <Router>
          <Routes>
            {/* Public routes - no authentication required */}
            <Route path="/" element={<MainLayout><Home /></MainLayout>} />
            <Route path="/signin" element={<MainLayout><SignIn /></MainLayout>} />
            <Route path="/signup" element={<MainLayout><SignUp /></MainLayout>} />
            <Route path="/syllabus/*" element={<MainLayout><Syllabus /></MainLayout>} />
            <Route path="/courses/*" element={<MainLayout><Courses /></MainLayout>} />
            <Route path="/ai-assistant" element={<MainLayout><AIAssistant /></MainLayout>} />
            <Route path="/documents/*" element={<MainLayout><Documents /></MainLayout>} />
            <Route path="/writing/*" element={<MainLayout><Writings /></MainLayout>} />
            <Route path="/grammar/*" element={<MainLayout><Grammar /></MainLayout>} />
            <Route path="/vocabulary/*" element={<MainLayout><Vocabulary /></MainLayout>} /> 
            
            {/* Dashboard routes - nested under MainLayout */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <MainLayout>
                  <MainDashboardLayout />
                </MainLayout>
              </ProtectedRoute>
            }>
              <Route index element={<AdminHome />} />
            </Route>
            
            {/* Admin specific routes - nested under MainLayout */}
            <Route path="/dashboard/admin" element={
              <AdminRoute>
                <MainLayout>
                  <MainDashboardLayout />
                </MainLayout>
              </AdminRoute>
            }>
              <Route index element={<AdminHome />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="content" element={<ContentManagerPage />} />
              <Route path="content/:id/details" element={<ContentDetailsPage />} />
              <Route path="analytics" element={<div>Analytics Dashboard</div>} />
              <Route path="courses" element={<AdminCourseManager />} />
              <Route path="catagories" element={<CategoryManagerPage />} />
              <Route path="settings" element={<div>Settings</div>} />
            </Route>
            
            {/* Teacher routes */}
            <Route path="/dashboard/teacher/*" element={
              <ProtectedRoute>
                <MainLayout>
                  <MainDashboardLayout />
                </MainLayout>
              </ProtectedRoute>
            } />
            
            {/* Student routes */}
            <Route path="/dashboard/student/*" element={
              <ProtectedRoute>
                <MainLayout>
                  <MainDashboardLayout />
                </MainLayout>
              </ProtectedRoute>
            } />
            
            {/* Special Student routes */}
            <Route path="/dashboard/special-student/*" element={
              <SpecialStudentRoute>
                <MainLayout>
                  <MainDashboardLayout />
                </MainLayout>
              </SpecialStudentRoute>
            } />

            {/* AI Assistant route */}
            <Route path="/ai-assistant" element={
              <ProtectedRoute>
                <AIAssistantLayout><AIAssistant /></AIAssistantLayout>
              </ProtectedRoute>
            } />
            
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AppProvider>
    </AuthProvider>
  );
};

export default AppRouter;