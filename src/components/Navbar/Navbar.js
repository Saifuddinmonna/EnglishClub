import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../pages/Authentication/AuthContext';
import { useApp } from '../../context/AppContext';
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import AIButton from '../AIAssistant/AIButton';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { isMobileMenuOpen, toggleMobileMenu } = useApp();

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Vocabulary', 
      href: '/vocabulary',
      dropdown: [
        { name: 'Strong verb and Week Verb', href: '/vocabulary/3-forms-of-verb' },
        { name: 'Vocabulary for Connectors', href: '/vocabulary/connectors' },
        { name: 'Others', href: '/vocabulary/others' }
      ]
    },
    { 
      name: 'Grammar', 
      href: '/grammar',
      dropdown: [
        { name: 'Sentences', href: '/grammar/sentences' },
        { name: 'Auxiliary verb', href: '/grammar/auxiliary-verb' },
        { name: 'Tense in one page', href: '/grammar/tense' },
        { name: 'Case', href: '/grammar/case' }
      ]
    },
    { 
      name: 'Writing', 
      href: '/writing',
      dropdown: [
        { name: 'Paragraph malty', href: '/writing/paragraph' },
        { name: 'Padma Bridge - Paragraph', href: '/writing/padma-bridge' },
        { name: 'Covid-19 Paragraph', href: '/writing/covid19' },
        { name: 'Application', href: '/writing/application' }
      ]
    },
    { 
      name: 'Syllabus', 
      href: '/syllabus',
      dropdown: [
        { name: 'HSC', href: '/syllabus/hsc' },
        { name: 'SSC', href: '/syllabus/ssc' },
        { name: 'JSC', href: '/syllabus/jsc' }
      ]
    },
    { name: 'Courses', href: '/courses' },
    { name: 'Study Materials', href: '/documents' },
  ];

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link 
                to="/" 
                className="text-xl font-bold text-blue-600 relative group transition-all duration-2000 hover:text-blue-700 flex items-center gap-3"
              >
                <div className="relative">
                  <img 
                    src="/favico.ico" 
                    alt="English Club Logo" 
                    className="w-8 h-8 transform group-hover:scale-110 transition-transform duration-2000" 
                  />
                  <div className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-2000"></div>
                </div>
                <span className="relative inline-block">
                  <span className="text-base font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    English Club
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:w-full transition-all duration-2000 ease-in-out"></span>
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4 sm:items-center">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <Link
                        to={item.href}
                        className="inline-flex items-center px-2 py-2 text-base font-medium text-gray-900 bg-gray-50 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-2000 ease-in-out shadow-sm hover:shadow-md no-underline"
                      >
                        {item.name}
                      </Link>
                      <div className="absolute hidden group-hover:block w-48 bg-white rounded-lg shadow-lg py-2 z-50 mt-1 border border-gray-100 transform transition-all duration-2000 ease-in-out origin-top scale-95 group-hover:scale-100">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            to={dropItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-2000 ease-in-out mx-2 rounded-md no-underline"
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`inline-flex items-center justify-center px-4 py-2 text-base font-medium text-gray-900 bg-gray-50 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-2000 ease-in-out shadow-sm hover:shadow-md no-underline ${
                        item.name === 'Study Materials' ? 'text-sm font-semibold tracking-wide' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-xs text-gray-700 leading-tight">
                  Welcome, {user.firstName || user.email}
                </span>
                <div className="ml-6">
                  <AIButton />
                </div>
                <button
                  onClick={logout}
                  className="inline-flex items-center text-decoration-none ml-1 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-2000 ease-in-out leading-tight"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <div className="ml-6">
                  <AIButton />
                </div>
                <Link
                  to="/signin"
                  className="flex flex-col text-decoration-none items-center justify-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-2000 ease-in-out"
                >
                  <span>Sign</span>
                  <span className="text-xs -mt-0.5">in</span>
                </Link>
                <Link
                  to="/signup"
                  className="flex flex-col text-decoration-none items-center justify-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-2000 ease-in-out"
                >
                  <span>Sign</span>
                  <span className="text-xs -mt-0.5">up</span>
                </Link>
              </div>
            )}
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-2000 ease-in-out"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-base font-medium text-gray-900">
                      {item.name}
                    </div>
                    <div className="pl-4">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.href}
                          className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-2000 ease-in-out"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-2000 ease-in-out"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            {user ? (
              <div className="space-y-1">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <UserCircleIcon className="h-10 w-10 text-gray-400" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {user.firstName} {user.lastName}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {user.email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-all duration-2000 ease-in-out"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <div className="space-y-1">
                <Link
                  to="/signin"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-all duration-2000 ease-in-out"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-all duration-2000 ease-in-out"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 