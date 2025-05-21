import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './pages/Authentication/AuthContext';
import MainLayout from './components/Layouts/MainLayout';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import AdminPanel from './pages/Authentication/AdminPanel';
import StudentPanel from './pages/Authentication/StudentPanel';
import TeacherPanel from './pages/Authentication/TeacherPanel';
import GuestPanel from './pages/Authentication/GuestPanel';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/signin" element={<MainLayout><SignIn /></MainLayout>} />
          <Route path="/signup" element={<MainLayout><SignUp /></MainLayout>} />

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
  );
};

export default App; 