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
            <Route path="/vocabulary/*" element={<MainLayout><UserManagement /></MainLayout>} /> 
            
           
          </Routes>
        </Router>
      </AppProvider>
    </AuthProvider>
  );
};

export default AppRouter;