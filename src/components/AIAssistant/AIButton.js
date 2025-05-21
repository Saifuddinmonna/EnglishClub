import React from 'react';
import { Link } from 'react-router-dom';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../pages/Authentication/AuthContext';

const AIButton = () => {
  const { login, resetPassword, signup, currentUser } = useAuth();

  return (
    <Link
      to="/ai-assistant"
      className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group"
    >
      <SparklesIcon className="h-6 w-6" />
      <span className="hidden group-hover:inline-block transition-all duration-300">
        AI Assistant
      </span>
    </Link>
  );
};

export default AIButton; 