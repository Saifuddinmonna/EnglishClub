// src/hooks/useMyProfile.js
import { useQuery } from '@tanstack/react-query';
import { fetchMyProfile } from '../services/userService';

export const useMyProfile = () => {
  return useQuery({
    queryKey: ['myProfile'],
    queryFn: fetchMyProfile,
    enabled: !!localStorage.getItem('token'), // Only run if token exists
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};