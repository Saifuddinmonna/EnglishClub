import React, { useState } from 'react';
import { ArrowsPointingOutIcon, ArrowsPointingInIcon } from '@heroicons/react/24/outline';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('beginner');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showDocDetails, setShowDocDetails] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [isPortraitMode, setIsPortraitMode] = useState(true);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  const toggleOrientation = () => {
    setIsPortraitMode(!isPortraitMode);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleDocDetails = (docId) => {
    setShowDocDetails(prev => ({
      ...prev,
      [docId]: !prev[docId]
    }));
  };

  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const categories = [
    { 
      id: 'beginner', 
      name: 'Beginner Courses', 
      path: '/documents/coursesPdf/beginnerCourses',
      description: 'Essential English skills for beginners'
    },
    { 
      id: 'intermediate', 
      name: 'Intermediate Courses', 
      path: '/documents/coursesPdf/intermediateCourses',
      description: 'Advanced language skills and concepts'
    },
    { 
      id: 'advanced', 
      name: 'Advanced Courses', 
      path: '/documents/coursesPdf/advancedCourses',
      description: 'Professional and academic English mastery'
    }
  ];

  const documents = {
    beginner: [
      {
        category: "Basic English",
        items: [
          { name: 'Introduction to English', file: 'introduction_to_english.html' },
          { name: 'Basic Vocabulary', file: 'basic_vocabulary.html' },
          { name: 'Simple Sentences', file: 'simple_sentences.html' },
          { name: 'Basic Grammar', file: 'basic_grammar.html' },
          { name: 'Everyday Conversations', file: 'everyday_conversations.html' }
        ]
      },
      {
        category: "Speaking Skills",
        items: [
          { name: 'Pronunciation Basics', file: 'pronunciation_basics.html' },
          { name: 'Common Phrases', file: 'common_phrases.html' },
          { name: 'Greetings and Introductions', file: 'greetings_introductions.html' },
          { name: 'Basic Dialogues', file: 'basic_dialogues.html' },
          { name: 'Speaking Practice', file: 'speaking_practice.html' }
        ]
      },
      {
        category: "Reading Skills",
        items: [
          { name: 'Reading Comprehension', file: 'reading_comprehension.html' },
          { name: 'Basic Stories', file: 'basic_stories.html' },
          { name: 'Vocabulary Building', file: 'vocabulary_building.html' },
          { name: 'Reading Practice', file: 'reading_practice.html' }
        ]
      }
    ],
    intermediate: [
      {
        category: "Intermediate Grammar",
        items: [
          { name: 'Complex Sentences', file: 'complex_sentences.html' },
          { name: 'Tenses and Usage', file: 'tenses_usage.html' },
          { name: 'Modal Verbs', file: 'modal_verbs.html' },
          { name: 'Conditional Sentences', file: 'conditional_sentences.html' }
        ]
      },
      {
        category: "Writing Skills",
        items: [
          { name: 'Paragraph Writing', file: 'paragraph_writing.html' },
          { name: 'Essay Writing', file: 'essay_writing.html' },
          { name: 'Email Writing', file: 'email_writing.html' },
          { name: 'Creative Writing', file: 'creative_writing.html' }
        ]
      },
      {
        category: "Speaking Skills",
        items: [
          { name: 'Advanced Pronunciation', file: 'advanced_pronunciation.html' },
          { name: 'Public Speaking', file: 'public_speaking.html' },
          { name: 'Group Discussions', file: 'group_discussions.html' },
          { name: 'Presentation Skills', file: 'presentation_skills.html' }
        ]
      }
    ],
    advanced: [
      {
        category: "Advanced Grammar",
        items: [
          { name: 'Advanced Tenses', file: 'advanced_tenses.html' },
          { name: 'Complex Structures', file: 'complex_structures.html' },
          { name: 'Idioms and Phrases', file: 'idioms_phrases.html' },
          { name: 'Advanced Vocabulary', file: 'advanced_vocabulary.html' }
        ]
      },
      {
        category: "Professional English",
        items: [
          { name: 'Business Communication', file: 'business_communication.html' },
          { name: 'Academic Writing', file: 'academic_writing.html' },
          { name: 'Technical Writing', file: 'technical_writing.html' },
          { name: 'Professional Presentations', file: 'professional_presentations.html' }
        ]
      },
      {
        category: "Exam Preparation",
        items: [
          { name: 'IELTS Preparation', file: 'ielts_preparation.html' },
          { name: 'TOEFL Preparation', file: 'toefl_preparation.html' },
          { name: 'Cambridge Exams', file: 'cambridge_exams.html' },
          { name: 'Test Strategies', file: 'test_strategies.html' }
        ]
      }
    ]
  };

  return (
    <div className={`${isFullScreen ? 'fixed inset-0 z-50 bg-white' : 'container mx-auto px-1 py-2'}`}>
      {!isFullScreen && (
        <div className="mb-2">
          <h1 className="flex text-2xl mr-2 font-bold">English Courses
            <span className="text-sm text-gray-700">
              {hoveredItem && (
                <><span className="font-semibold ml-2">Preview:</span> {hoveredItem.name}</>
              )}
            </span>
          </h1>
        </div>
      )}
      
      {/* Categories at the top */}
      {!isFullScreen && (
        <div className="bg-white rounded-lg shadow-md p-2 mb-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
            <div className="flex flex-col sm:flex-row gap-1 w-full">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setSelectedFile(null);
                  }}
                  onMouseEnter={() => setHoveredItem(category)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`w-full px-2 py-1 rounded-md transition-colors text-[0.88rem] ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  <h3 className="font-medium text-[0.88rem] text-center">{category.name}</h3>
                </button>
              ))}
            </div>
            <button
              onClick={toggleDetails}
              onMouseEnter={() => setHoveredItem({ name: showDetails ? 'Hide Details' : 'Show Details' })}
              onMouseLeave={() => setHoveredItem(null)}
              className="w-full sm:w-auto px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors text-[0.88rem] flex items-center justify-center gap-1"
            >
              {showDetails ? 'Hide Details' : 'Show Details'}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={showDetails 
                    ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  }
                />
              </svg>
            </button>
          </div>
          {showDetails && (
            <div className="mt-2 p-2 bg-gray-50 rounded-md">
              <h3 className="font-medium text-blue-800 mb-1 text-[0.99rem]">
                {categories.find(cat => cat.id === selectedCategory)?.name}
              </h3>
              <p className="text-gray-600 text-[0.88rem]">
                {categories.find(cat => cat.id === selectedCategory)?.description}
              </p>
            </div>
          )}
        </div>
      )}
      
      {/* Main content area */}
      <div className={`flex flex-col lg:flex-row gap-6 ${isFullScreen ? 'h-screen' : ''}`}>
        {/* Left side - File list */}
        {!isFullScreen && (
          <div className="w-[95%] lg:w-1/5 mx-auto lg:mx-0">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-[1.1rem] font-semibold mb-4 text-blue-800">
                {categories.find(cat => cat.id === selectedCategory)?.name}
              </h2>
              <div className="space-y-2 max-h-[300px] lg:max-h-[600px] overflow-y-auto">
                {documents[selectedCategory]?.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-medium text-gray-700 text-[0.88rem] px-2">{category.category}</h3>
                    {category.items.map((doc, docIndex) => (
                      <div key={docIndex} className="w-full">
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => setSelectedFile(doc)}
                            onMouseEnter={() => setHoveredItem(doc)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                              selectedFile?.file === doc.file
                                ? 'bg-blue-100 text-blue-700'
                                : 'hover:bg-gray-100'
                            }`}
                          >
                            <h3 className="font-medium text-[0.88rem]">{doc.name}</h3>
                          </button>
                          <button
                            onClick={() => toggleDocDetails(doc.file)}
                            onMouseEnter={() => setHoveredItem({ name: showDocDetails[doc.file] ? 'Hide Details' : 'Show Details' })}
                            onMouseLeave={() => setHoveredItem(null)}
                            className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={showDocDetails[doc.file]
                                  ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                  : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                }
                              />
                            </svg>
                          </button>
                        </div>
                        {showDocDetails[doc.file] && (
                          <p className="text-[0.88rem] text-gray-600 px-4 py-1">{doc.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Right side - Content display */}
        <div className={`${isFullScreen ? 'w-full' : 'w-[95%] lg:w-4/5 mx-auto lg:mx-0'}`}>
          <div className="bg-white rounded-lg shadow-md px-6 py-1 h-full">
            {selectedFile ? (
              <div className="h-full flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h2 className="text-[1.1rem] font-semibold text-blue-800">{selectedFile.name}</h2>
                    <p className="text-[0.88rem] text-gray-600 mt-1">{selectedFile.description}</p>
                  </div>
                  <button
                    onClick={toggleFullScreen}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-[0.88rem]"
                  >
                    {isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
                  </button>
                </div>
                <iframe
                  src={`${categories.find(cat => cat.id === selectedCategory)?.path}/${selectedFile.file}`}
                  className={`w-full border-0 ${isFullScreen ? 'flex-1' : 'h-[650px]'}`}
                  title={selectedFile.name}
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-[600px] text-gray-500 overflow-hidden">
                <div className="text-center max-w-4xl px-4 overflow-y-auto max-h-[600px]">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to English Courses</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    Explore our comprehensive collection of English courses. From basic concepts to advanced structures,
                    we provide detailed explanations and examples to help you master English at every level.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 p-4 rounded-lg overflow-hidden">
                      <h3 className="font-semibold text-blue-800 mb-3 text-lg">Getting Started</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="break-words">Choose your level</li>
                        <li className="break-words">Select a course</li>
                        <li className="break-words">Follow the lessons</li>
                        <li className="break-words">Practice regularly</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg overflow-hidden">
                      <h3 className="font-semibold text-green-800 mb-3 text-lg">Features</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="break-words">Interactive lessons</li>
                        <li className="break-words">Practice exercises</li>
                        <li className="break-words">Progress tracking</li>
                        <li className="break-words">Fullscreen mode</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg overflow-hidden">
                      <h3 className="font-semibold text-purple-800 mb-3 text-lg">Learning Path</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="break-words">Beginner courses</li>
                        <li className="break-words">Intermediate skills</li>
                        <li className="break-words">Advanced concepts</li>
                        <li className="break-words">Professional mastery</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg overflow-hidden">
                    <h3 className="font-semibold text-gray-800 mb-4 text-xl">Available Categories</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-left">
                        <h4 className="font-medium text-blue-700 mb-2">Beginner Courses</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li className="break-words">• Basic English</li>
                          <li className="break-words">• Speaking Skills</li>
                          <li className="break-words">• Reading Skills</li>
                          <li className="break-words">• Basic Grammar</li>
                        </ul>
                      </div>
                      <div className="text-left">
                        <h4 className="font-medium text-green-700 mb-2">Intermediate Courses</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li className="break-words">• Complex Grammar</li>
                          <li className="break-words">• Writing Skills</li>
                          <li className="break-words">• Advanced Speaking</li>
                          <li className="break-words">• Communication</li>
                        </ul>
                      </div>
                      <div className="text-left">
                        <h4 className="font-medium text-purple-700 mb-2">Advanced Courses</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li className="break-words">• Professional English</li>
                          <li className="break-words">• Academic Writing</li>
                          <li className="break-words">• Exam Preparation</li>
                          <li className="break-words">• Business English</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-gray-500 italic break-words">
                    Hover over any topic on the left to preview its content, or click to start learning!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses; 