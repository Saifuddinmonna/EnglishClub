// src/services/userService.js
import api from '../config/api';

export const fetchMyProfile = async () => {
  console.log('form userservice fetchMyProfile');
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }
  
  const response = await api.get('/users/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};