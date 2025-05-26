import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../pages/Authentication/AuthContext';
import { useApp } from '../../context/AppContext';
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
  BookOpenIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  BookmarkIcon,
  DocumentDuplicateIcon,
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon,
  UserPlusIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  DocumentMagnifyingGlassIcon,
  BookmarkSquareIcon,
  DocumentChartBarIcon,
  DocumentCheckIcon,
  DocumentArrowDownIcon,
  DocumentArrowUpIcon,
  DocumentPlusIcon,
  DocumentMinusIcon,
  DocumentDuplicateIcon as DocumentDuplicateIcon2,
  DocumentTextIcon as DocumentTextIcon2,
  DocumentChartBarIcon as DocumentChartBarIcon2,
  DocumentCheckIcon as DocumentCheckIcon2,
  DocumentArrowDownIcon as DocumentArrowDownIcon2,
  DocumentArrowUpIcon as DocumentArrowUpIcon2,
  DocumentPlusIcon as DocumentPlusIcon2,
  DocumentMinusIcon as DocumentMinusIcon2,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import AIButton from '../AIAssistant/AIButton';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { isMobileMenuOpen, toggleMobileMenu, isStudentPanelVisible, toggleStudentPanel } = useApp();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Vocabulary', 
      href: '/vocabulary',
      dropdown: [
        { name: 'Strong verb and Week Verb', href: '/vocabulary/3-forms-of-verb', icon: BookOpenIcon },
        { name: 'Vocabulary for Connectors', href: '/vocabulary/connectors', icon: ChatBubbleLeftRightIcon },
        { name: 'Others', href: '/vocabulary/others', icon: SparklesIcon }
      ]
    },
    { 
      name: 'Grammar', 
      href: '/grammar',
      dropdown: [
        { name: 'Sentences', href: '/grammar/sentences', icon: DocumentTextIcon },
        { name: 'Auxiliary verb', href: '/grammar/auxiliary-verb', icon: DocumentDuplicateIcon },
        { name: 'Tense in one page', href: '/grammar/tense', icon: DocumentChartBarIcon },
        { name: 'Case', href: '/grammar/case', icon: DocumentCheckIcon }
      ]
    },
    { 
      name: 'Writing', 
      href: '/writing',
      dropdown: [
        { name: 'Paragraph malty', href: '/writing/paragraph', icon: PencilSquareIcon },
        { name: 'Padma Bridge - Paragraph', href: '/writing/padma-bridge', icon: DocumentArrowDownIcon },
        { name: 'Covid-19 Paragraph', href: '/writing/covid19', icon: DocumentArrowUpIcon },
        { name: 'Application', href: '/writing/application', icon: DocumentPlusIcon }
      ]
    },
    { 
      name: 'Syllabus', 
      href: '/syllabus',
      dropdown: [
        { name: 'HSC', href: '/syllabus/hsc', icon: AcademicCapIcon },
        { name: 'SSC', href: '/syllabus/ssc', icon: BookmarkIcon },
        { name: 'JSC', href: '/syllabus/jsc', icon: ClipboardDocumentListIcon }
      ]
    },
    { name: 'Courses', href: '/courses' },
    { name: 'Study Materials', href: '/documents' },
  ];

  return (
    
    <div className='relative mt-3 '>
      <nav className="  fixed bg-white shadow  top-0 z-50 w-full">
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
                        className={`inline-flex items-center px-2 py-2 text-base font-medium rounded-lg transition-all duration-2000 ease-in-out shadow-sm hover:shadow-md no-underline ${
                          location.pathname.startsWith(item.href)
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-900 bg-gray-50 hover:bg-blue-600 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </Link>
                      <div className="absolute hidden group-hover:block w-48 bg-white rounded-lg shadow-lg py-2 z-50 mt-1 border border-gray-100 transform transition-all duration-2000 ease-in-out origin-top scale-95 group-hover:scale-100">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            to={dropItem.href}
                            className={`block px-4 py-2 text-sm font-medium transition-all duration-2000 ease-in-out mx-2 rounded-md no-underline flex items-center gap-2 ${
                              location.pathname === dropItem.href
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                            }`}
                          >
                            {dropItem.icon && <dropItem.icon className="w-5 h-5 text-[rgb(252,99,2)]" />}
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`inline-flex items-center justify-center px-4 py-2 text-base font-medium rounded-lg transition-all duration-2000 ease-in-out shadow-sm hover:shadow-md no-underline ${
                        location.pathname === item.href
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-900 bg-gray-50 hover:bg-blue-600 hover:text-white'
                      } ${
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
                {user.role === 'student' && (
                  <button
                    onClick={toggleStudentPanel}
                    className="inline-flex items-center justify-center p-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                    style={{ width: '40px', height: '40px' }}
                  >
                    {isStudentPanelVisible ? (
                      <ChevronLeftIcon className="h-5 w-5" />
                    ) : (
                      <ChevronRightIcon className="h-5 w-5" />
                    )}
                  </button>
                )}
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
        <div className="sm:hidden animate-fadeIn">
          <div className="pt-2 pb-2 space-y-1 bg-gradient-to-b from-white to-gray-50 rounded-[10px] shadow-lg border border-gray-100 mx-2 my-1">
            {navigation.map((item) => (
              <div key={item.name} className="transform transition-all duration-300 hover:translate-x-1 px-1">
                  <div className="space-y-1">
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-all duration-300 ease-in-out rounded-[10px] shadow-sm hover:shadow-md ${
                      location.pathname.startsWith(item.href)
                        ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-500'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 border-l-2 border-transparent hover:border-blue-400'
                    }`}
                  >
                      {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-3 space-y-1">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.href}
                          className={`block px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out rounded-[10px] shadow-sm hover:shadow-md flex items-center gap-2 ${
                            location.pathname === dropItem.href
                              ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-500'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 border-l-2 border-transparent hover:border-blue-400'
                          }`}
                        >
                          {dropItem.icon && <dropItem.icon className="w-5 h-5 text-[rgb(252,99,2)]" />}
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                  </div>
              </div>
            ))}
          </div>
          <div className="pt-2 pb-2 border-t border-gray-200 bg-white rounded-[10px] shadow-lg mx-2 my-1">
            {user ? (
              <div className="space-y-1">
                <div className="flex items-center px-3 py-2 bg-gradient-to-r from-blue-50 to-transparent rounded-[10px] mx-2">
                  <div className="flex-shrink-0">
                    <UserCircleIcon className="h-8 w-8 text-[rgb(252,99,2)] transform transition-transform duration-300 hover:scale-110" />
                  </div>
                  <div className="ml-2">
                    <div className="text-base font-medium text-gray-800 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      {user.firstName} {user.lastName}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {user.email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 ease-in-out border-l-2 border-transparent hover:border-blue-400 rounded-[10px] shadow-sm hover:shadow-md mx-2 flex items-center gap-2"
                >
                  <ArrowRightOnRectangleIcon className="w-5 h-5 text-[rgb(252,99,2)]" />
                  Sign out
                </button>
              </div>
            ) : (
              <div className="space-y-1">
                <Link
                  to="/signin"
                  className={`block px-3 py-2 text-base font-medium ${
                    location.pathname === '/signin' 
                      ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-500' 
                      : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50 border-l-2 border-transparent hover:border-blue-400'
                  } transition-all duration-300 ease-in-out rounded-[10px] shadow-sm hover:shadow-md mx-2 flex items-center gap-2`}
                >
                  <ArrowLeftOnRectangleIcon className="w-5 h-5 text-[rgb(252,99,2)]" />
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className={`block px-3 py-2 text-base font-medium ${
                    location.pathname === '/signup' 
                      ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-500' 
                      : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50 border-l-2 border-transparent hover:border-blue-400'
                  } transition-all duration-300 ease-in-out rounded-[10px] shadow-sm hover:shadow-md mx-2 flex items-center gap-2`}
                >
                  <UserPlusIcon className="w-5 h-5 text-[rgb(252,99,2)]" />
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar; 