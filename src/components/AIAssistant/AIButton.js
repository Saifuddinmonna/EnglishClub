import React from 'react';
import { Link } from 'react-router-dom';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../pages/Authentication/AuthContext';

const AIButton = () => {
  const { currentUser } = useAuth();

  return (
    <Link
      to="/ai-assistant"
      className="flex flex-col text-decoration-none items-center justify-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center gap-0.5">
        <SparklesIcon className="h-3 w-3" />
        <span>AI</span>
      </div>
      <span className="text-xs -mt-0.5">Assistant</span>
    </Link>
  );
};

export default AIButton; 