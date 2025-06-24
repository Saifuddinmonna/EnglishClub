import React from 'react';
import AppRouter from './components/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import api from '../src/config/api'; // axios instance


export default function App() {
  
  return (
    <>
      <AppRouter />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

