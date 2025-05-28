import React, { useEffect, useState } from 'react';
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
  ChevronRightIcon,
  HomeIcon
} from '@heroicons/react/24/outline';
import AIButton from '../AIAssistant/AIButton';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { isMobileMenuOpen, toggleMobileMenu, isStudentPanelVisible, toggleStudentPanel, isSidebarVisible, toggleSidebar } = useApp();
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState(null);

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
    setOpenNestedSubmenu(null); // Close nested submenu when parent changes
  };

  const toggleNestedSubmenu = (menuName) => {
    setOpenNestedSubmenu(openNestedSubmenu === menuName ? null : menuName);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup function
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMobileMenuOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Vocabulary', 
      href: '/vocabulary',
      dropdown: [
        { name: 'Strong verb and Week Verb', href: '/vocabulary/strong-weak-verbs', icon: BookOpenIcon },
        { name: 'Vocabulary for Connectors', href: '/vocabulary/connectors', icon: ChatBubbleLeftRightIcon },
        { name: 'Others', href: '/vocabulary/others', icon: SparklesIcon }
      ]
    },
    { 
      name: 'Grammar', 
      href: '/grammar',
      dropdown: [
        { 
          name: 'Basic Grammar',
          icon: BookOpenIcon,
          items: [
            { 
              name: 'Parts of Speech',
              items: [
                { name: 'Parts of Speech Overview', href: '/grammar/basic/parts-of-speech/overview' },
                { name: 'Parts of Speech (Version 2)', href: '/grammar/basic/parts-of-speech/v2' },
                { name: 'Parts of Speech (Version 3)', href: '/grammar/basic/parts-of-speech/v3' },
                { name: 'Parts of Speech for Level', href: '/grammar/basic/parts-of-speech/level' },
                { name: 'Parts of Speech Understanding Sheet', href: '/grammar/basic/parts-of-speech/understanding' },
                { name: 'Parts of Speech in Rhyme', href: '/grammar/basic/parts-of-speech/rhyme' },
                { name: 'Parts of Speech Easy Method', href: '/grammar/basic/parts-of-speech/easy' }
              ]
            },
            {
              name: 'Verbs and Tenses',
              items: [
                { name: 'Auxiliary Verbs Overview', href: '/grammar/basic/verbs-tenses/auxiliary-overview' },
                { name: 'Auxiliary Verbs (Version 2)', href: '/grammar/basic/verbs-tenses/auxiliary-v2' },
                { name: 'Auxiliary Verbs and Modals', href: '/grammar/basic/verbs-tenses/auxiliary-modals' },
                { name: 'Auxiliary Verbs Level 1', href: '/grammar/basic/verbs-tenses/auxiliary-level1' },
                { name: 'Auxiliary Verbs Level 1 (Version 2)', href: '/grammar/basic/verbs-tenses/auxiliary-level1-v2' },
                { name: 'Tense Classification', href: '/grammar/basic/verbs-tenses/tense-classification' },
                { name: 'Tense in One Page', href: '/grammar/basic/verbs-tenses/tense-one-page' },
                { name: 'Tense Details', href: '/grammar/basic/verbs-tenses/tense-details' },
                { name: 'Tense and Verb Forms', href: '/grammar/basic/verbs-tenses/tense-verb-forms' },
                { name: '3 Forms of Verb', href: '/grammar/basic/verbs-tenses/verb-forms' },
                { name: '3 Forms of Verb (Expanded)', href: '/grammar/basic/verbs-tenses/verb-forms-expanded' },
                { name: 'Causative Verbs', href: '/grammar/basic/verbs-tenses/causative-verbs' },
                { name: 'Causative Verbs (Version 2)', href: '/grammar/basic/verbs-tenses/causative-verbs-v2' },
                { name: 'Causative Verbs (Editing)', href: '/grammar/basic/verbs-tenses/causative-verbs-editing' }
              ]
            },
            {
              name: 'Modal Auxiliaries',
              items: [
                { name: 'Modal Auxiliaries Overview', href: '/grammar/basic/modal-auxiliaries/overview' }
              ]
            },
            {
              name: 'Pronouns',
              items: [
                { name: 'Pronoun Overview', href: '/grammar/basic/pronouns/overview' },
                { name: 'Pronoun Definition', href: '/grammar/basic/pronouns/definition' },
                { name: 'Personal Pronouns', href: '/grammar/basic/pronouns/personal' },
                { name: 'Personal Pronouns Level 2', href: '/grammar/basic/pronouns/personal-level2' },
                { name: 'Relative Pronouns', href: '/grammar/basic/pronouns/relative' },
                { name: 'Which vs That', href: '/grammar/basic/pronouns/which-vs-that' },
                { name: 'Whose as Possessive', href: '/grammar/basic/pronouns/whose-possessive' },
                { name: 'Whoever, Whatever, etc.', href: '/grammar/basic/pronouns/whoever-whatever' }
              ]
            },
            {
              name: 'Prepositions and Articles',
              items: [
                { name: 'Prepositions Overview', href: '/grammar/basic/prepositions-articles/prepositions-overview' },
                { name: 'Prepositions for Kids', href: '/grammar/basic/prepositions-articles/prepositions-kids' },
                { name: 'Prepositions for Class 5', href: '/grammar/basic/prepositions-articles/prepositions-class5' },
                { name: 'Preposition Techniques', href: '/grammar/basic/prepositions-articles/preposition-techniques' },
                { name: '51 Prepositions at a Glance', href: '/grammar/basic/prepositions-articles/51-prepositions' },
                { name: 'Article Rules A to Z', href: '/grammar/basic/prepositions-articles/article-rules' },
                { name: 'Article Rules A to Z (Version 3)', href: '/grammar/basic/prepositions-articles/article-rules-v3' },
                { name: 'Article Practice', href: '/grammar/basic/prepositions-articles/article-practice' }
              ]
            },
            {
              name: 'Sentence Structure',
              items: [
                { name: 'Sentence Types', href: '/grammar/basic/sentence-structure/types' },
                { name: 'Subject Verb Agreement', href: '/grammar/basic/sentence-structure/subject-verb-agreement' },
                { name: 'Phrases and Clauses', href: '/grammar/basic/sentence-structure/phrases-clauses' },
                { name: 'Phrases and Clauses Details', href: '/grammar/basic/sentence-structure/phrases-clauses-details' },
                { name: 'Completing Sentences', href: '/grammar/basic/sentence-structure/completing-sentences' },
                { name: 'Completing Sentences (Rewrite)', href: '/grammar/basic/sentence-structure/completing-sentences-rewrite' },
                { name: 'Conditional Sentences', href: '/grammar/basic/sentence-structure/conditional-sentences' }
              ]
            },
            {
              name: 'Word Formation',
              items: [
                { name: 'Prefixes and Suffixes', href: '/grammar/basic/word-formation/prefixes-suffixes' },
                { name: 'Prefixes and Suffixes Level 2', href: '/grammar/basic/word-formation/prefixes-suffixes-level2' },
                { name: 'Common Prefixes and Suffixes', href: '/grammar/basic/word-formation/common-prefixes-suffixes' },
                { name: 'Comprehensive Guide to Prefixes and Suffixes', href: '/grammar/basic/word-formation/prefixes-suffixes-guide' }
              ]
            },
            {
              name: 'Other Topics',
              items: [
                { name: 'Case', href: '/grammar/basic/other-topics/case' },
                { name: 'Degrees of Comparison', href: '/grammar/basic/other-topics/degrees-comparison' },
                { name: 'Let and Allow Usage', href: '/grammar/basic/other-topics/let-allow-usage' },
                { name: 'Steps of Learning Grammar', href: '/grammar/basic/other-topics/learning-grammar-steps' },
                { name: 'Steps of Learning Grammar (Print Version)', href: '/grammar/basic/other-topics/learning-grammar-steps-print' },
                { name: 'English Learning Magic Class', href: '/grammar/basic/other-topics/english-learning-magic' }
              ]
            }
          ]
        },
        { 
          name: 'Advanced Grammar',
          icon: AcademicCapIcon,
          items: [
            // Add advanced grammar items here
          ]
        },
        { 
          name: 'Academic Grammar',
          icon: DocumentTextIcon,
          items: [
            // Add academic grammar items here
          ]
        }
      ]
    },
    { 
      name: 'Writing', 
      href: '/writing',
      dropdown: [
        { name: 'Paragraph Writing', href: '/writing/paragraph', icon: PencilSquareIcon },
        { name: 'Padma Bridge - Paragraph', href: '/writing/padma-bridge', icon: DocumentArrowDownIcon },
        { name: 'Covid-19 Paragraph', href: '/writing/covid19', icon: DocumentArrowUpIcon },
        { name: 'Application', href: '/writing/application', icon: DocumentPlusIcon }
      ]
    },
    { 
      name: 'Syllabus', 
      href: '/syllabus',
      dropdown: [
        { 
          name: 'Academic Syllabus',
          icon: AcademicCapIcon,
          submenu: [
            { name: 'New National Curriculum Framework (NCF) 2021', href: '/syllabus/academic/ncf-2021' },
            { name: 'Classes 1–5 (Primary Level)', href: '/syllabus/academic/primary' },
            { name: 'Classes 6–8 (Lower Secondary)', href: '/syllabus/academic/lower-secondary' },
            { name: 'Classes 9–10 (SSC Level)', href: '/syllabus/academic/ssc' },
            { name: 'HSC (Classes 11-12) - Old Syllabus', href: '/syllabus/academic/hsc-old' },
            { name: 'HSC (Class 11 from 2026) - New Curriculum', href: '/syllabus/academic/hsc-new' }
          ]
        },
        { name: 'Exam Preparation', href: '/syllabus/exam-preparation', icon: BookmarkIcon },
        { name: 'NCTB Syllabus', href: '/syllabus/nctb', icon: ClipboardDocumentListIcon },
        { name: 'BCS Syllabus', href: '/syllabus/bcs', icon: DocumentTextIcon }
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

            {/* Add Dashboard Toggle Button */}
            {user && (
              <Link
                to="/dashboard"
                className="ml-4 flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
              >
                <HomeIcon className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            )}

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
                      <div className="absolute hidden group-hover:block w-64 bg-white rounded-lg shadow-lg py-2 z-50 mt-1 border border-gray-100 transform transition-all duration-2000 ease-in-out origin-top scale-95 group-hover:scale-100">
                        {item.dropdown.map((dropItem) => (
                          <div key={dropItem.name} className="relative group/sub">
                            <div className="flex items-center justify-between px-4 py-2 text-sm font-medium transition-all duration-2000 ease-in-out mx-2 rounded-md hover:bg-blue-50 hover:text-blue-600">
                              <div className="flex items-center gap-2">
                                {dropItem.icon && <dropItem.icon className="w-5 h-5 text-[rgb(252,99,2)]" />}
                                {dropItem.name}
                              </div>
                              {dropItem.items && (
                                <ChevronRightIcon className="w-4 h-4 transform transition-transform duration-300 group-hover/sub:rotate-90" />
                              )}
                            </div>
                            {dropItem.items && (
                              <div className="absolute hidden group-hover/sub:block left-full top-0 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                                {dropItem.items.map((subItem) => (
                                  <div key={subItem.name} className="relative group/sub2">
                                    <div className="flex items-center justify-between px-4 py-2 text-sm font-medium transition-all duration-2000 ease-in-out mx-2 rounded-md hover:bg-blue-50 hover:text-blue-600">
                                      <span>{subItem.name}</span>
                                      {subItem.items && (
                                        <ChevronRightIcon className="w-4 h-4 transform transition-transform duration-300 group-hover/sub2:rotate-90" />
                                      )}
                                    </div>
                                    {subItem.items && (
                                      <div className="absolute hidden group-hover/sub2:block left-full top-0 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                                        {subItem.items.map((finalItem) => (
                                          <Link
                                            key={finalItem.name}
                                            to={finalItem.href}
                                            className={`block px-4 py-2 text-sm font-medium transition-all duration-2000 ease-in-out mx-2 rounded-md ${
                                              location.pathname === finalItem.href
                                                ? 'bg-blue-50 text-blue-600'
                                                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                            }`}
                                          >
                                            {finalItem.name}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
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
        <div className="sm:hidden absolute top-20 left-0 right-0 bg-white z-50 shadow-lg">
          <div className="max-h-[80vh] overflow-y-auto">
            <div className="pt-2 pb-2 space-y-1 bg-gradient-to-b from-white to-gray-50 rounded-[10px] border border-gray-100 mx-2 my-1">
            {navigation.map((item) => (
              <div key={item.name} className="transform transition-all duration-300 hover:translate-x-1 px-1">
                  <div className="space-y-1">
                    <div 
                      onClick={() => item.dropdown && toggleSubmenu(item.name)}
                    className={`block px-3 py-2 text-base font-medium transition-all duration-300 ease-in-out rounded-[10px] shadow-sm hover:shadow-md ${
                      location.pathname.startsWith(item.href)
                        ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-500'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 border-l-2 border-transparent hover:border-blue-400'
                      } ${item.dropdown ? 'cursor-pointer' : ''}`}
                  >
                      <div className="flex items-center justify-between">
                        {item.dropdown ? (
                          <>
                            <span>{item.name}</span>
                            <ChevronRightIcon className={`w-5 h-5 transform transition-transform duration-300 ${openSubmenu === item.name ? 'rotate-90' : ''}`} />
                          </>
                        ) : (
                          <Link to={item.href} className="block w-full">
                      {item.name}
                  </Link>
                        )}
                      </div>
                    </div>
                    {item.dropdown && openSubmenu === item.name && (
                    <div className="pl-3 space-y-1">
                      {item.dropdown.map((dropItem) => (
                          <div key={dropItem.name}>
                            {dropItem.items ? (
                              <>
                                <div 
                                  onClick={() => toggleNestedSubmenu(dropItem.name)}
                                  className={`block px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out rounded-[10px] shadow-sm hover:shadow-md flex items-center justify-between cursor-pointer ${
                                    location.pathname.startsWith(dropItem.href)
                                      ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-500'
                                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 border-l-2 border-transparent hover:border-blue-400'
                                  }`}
                                >
                                  <div className="flex items-center gap-2">
                                    {dropItem.icon && <dropItem.icon className="w-5 h-5 text-[rgb(252,99,2)]" />}
                                    {dropItem.name}
                                  </div>
                                  <ChevronRightIcon className={`w-4 h-4 transform transition-transform duration-300 ${openNestedSubmenu === dropItem.name ? 'rotate-90' : ''}`} />
                                </div>
                                {openNestedSubmenu === dropItem.name && (
                                  <div className="pl-3 space-y-1">
                                    {dropItem.items.map((nestedItem) => (
                                      <Link
                                        key={nestedItem.name}
                                        to={nestedItem.href}
                                        className={`block px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out rounded-[10px] shadow-sm hover:shadow-md ${
                                          location.pathname === nestedItem.href
                                            ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-500'
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 border-l-2 border-transparent hover:border-blue-400'
                                        }`}
                                      >
                                        {nestedItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                        <Link
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
                            )}
                          </div>
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
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar; 