import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from '../context/AppContext';
import { AuthProvider } from '../pages/Authentication/AuthContext';
import MainLayout from './Layouts/MainLayout';
import AIAssistantLayout from './Layouts/AIAssistantLayout';
import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';
import Home from '../pages/Home/Home';
import AIAssistant from './AIAssistant/AIAssistant';
import ProtectedRoute from './ProtectedRoute';
import SpecialStudentRoute from './SpecialStudentRoute';

// Import all page components
import Vocabulary from '../pages/Vocabulary/Vocabulary';
import Grammar from '../pages/Grammar/Grammar';
import Writings from '../pages/Writing/Writings';
import Syllabus from '../pages/Syllabus/Syllabus';
import Courses from '../pages/Courses/Courses';
import Documents from '../pages/Documents/Documents';

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

            {/* Protected routes - authentication required */}
            <Route path="/vocabulary/*" element={
              <ProtectedRoute>
                <MainLayout><Vocabulary /></MainLayout>
              </ProtectedRoute>
            } />
            <Route path="/grammar/*" element={
              <ProtectedRoute>
                <MainLayout><Grammar /></MainLayout>
              </ProtectedRoute>
            } />
            <Route path="/writing/*" element={
              <ProtectedRoute>
                <MainLayout><Writings /></MainLayout>
              </ProtectedRoute>
            } />
            <Route path="/documents/*" element={
              <SpecialStudentRoute>
                <MainLayout><Documents /></MainLayout>
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