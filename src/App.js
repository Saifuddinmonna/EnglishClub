import React from 'react';
import AppRouter from './routes/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import api from './config/api'; // axios instance
import AuthContext from './context/AuthContext';
import SignIn from './features/authentication/SignIn';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import UnifiedDashboard from './features/authentication/UnifiedDashboard';
import { useAuth } from './context/AuthContext';

export default function App() {
  
  return (
    <>
      <AppRouter />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

