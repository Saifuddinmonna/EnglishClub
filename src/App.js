import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './pages/Authentication/AuthContext';
import { AppProvider } from './context/AppContext';
import MainLayout from './components/Layouts/MainLayout';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import AdminPanel from './pages/Authentication/AdminPanel';
import StudentPanel from './pages/Authentication/StudentPanel';
import TeacherPanel from './pages/Authentication/TeacherPanel';
import GuestPanel from './pages/Authentication/GuestPanel';
import Home from './pages/Home/Home';

// Import all page components
import Vocabulary from './pages/Vocabulary/Vocabulary';
import Grammar from './pages/Grammar/Grammar';
import Writings from './pages/Writing/Writings';
import Syllabus from './pages/Syllabus/Syllabus';
import Courses from './pages/Courses/Courses';
import Documents from './pages/Documents/Documents';

const App = () => {
  return (
    <AppProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<MainLayout><Home /></MainLayout>} />
            <Route path="/signin" element={<MainLayout><SignIn /></MainLayout>} />
            <Route path="/signup" element={<MainLayout><SignUp /></MainLayout>} />

            {/* Content routes */}
            <Route path="/vocabulary/*" element={<MainLayout><Vocabulary /></MainLayout>} />
            <Route path="/grammar/*" element={<MainLayout><Grammar /></MainLayout>} />
            <Route path="/writing/*" element={<MainLayout><Writings /></MainLayout>} />
            <Route path="/syllabus/*" element={<MainLayout><Syllabus /></MainLayout>} />
            <Route path="/courses/*" element={<MainLayout><Courses /></MainLayout>} />
            <Route path="/documents/*" element={<MainLayout><Documents /></MainLayout>} />

            {/* Protected routes */}
            <Route path="/admin/*" element={<MainLayout><AdminPanel /></MainLayout>} />
            <Route path="/student/*" element={<MainLayout><StudentPanel /></MainLayout>} />
            <Route path="/teacher/*" element={<MainLayout><TeacherPanel /></MainLayout>} />
            <Route path="/guest/*" element={<MainLayout><GuestPanel /></MainLayout>} />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </AppProvider>
  );
};

export default App; 