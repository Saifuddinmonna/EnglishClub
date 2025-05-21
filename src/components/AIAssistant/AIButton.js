import React from 'react';
import { Link } from 'react-router-dom';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../pages/Authentication/AuthContext';

const AIButton = () => {
  const { currentUser } = useAuth();

  return (
    <Link
      to="/ai-assistant"
      className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
    >
      <SparklesIcon className="h-5 w-5 mr-2" />
      AI Assistant
    </Link>
  );
};

export default AIButton; 