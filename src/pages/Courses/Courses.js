import React, { useState } from 'react';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('beginner');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const categories = [
    { id: 'beginner', name: 'Beginner Courses', path: '/documents/coursesPdf/beginnerCourses' },
    { id: 'intermediate', name: 'Intermediate Courses', path: '/documents/coursesPdf/intermediateCourses' },
    { id: 'advanced', name: 'Advanced Courses', path: '/documents/coursesPdf/advancedCourses' }
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
    <div className={`${isFullScreen ? 'fixed inset-0 z-50 bg-white' : 'container mx-auto px-1 py-0'}`}>
      {!isFullScreen && (
        <div className="mb-6">
          <h1 className="flex text-3xl mr-4 font-bold">English Courses <span className="text-lg text-gray-500">
            {hoveredItem && (
              <><span className="font-semibold ml-4">Preview:</span> {hoveredItem.name}</>
            )}
          </span></h1>
          <p className="text-gray-700 text-lg">for sub category</p>
        </div>
      )}
      
      {/* Categories at the top */}
      {!isFullScreen && (
        <div className="bg-white rounded-lg shadow-md p-2 mb-4">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSelectedFile(null);
                }}
                className={`px-3 py-1 rounded-md transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main content area */}
      <div className={`flex gap-4 ${isFullScreen ? 'h-screen' : ''}`}>
        {/* Left side - File list (20%) */}
        {!isFullScreen && (
          <div className="w-1/5">
            <div className="bg-white rounded-lg shadow-md p-2">
              <h2 className="text-xl font-semibold mb-2">Topics</h2>
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {documents[selectedCategory]?.map((category, index) => (
                  <div key={index} className="space-y-1">
                    <button
                      onClick={() => toggleCategory(category.category)}
                      className="w-full text-left px-2 py-1 rounded-md transition-colors text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center justify-between"
                    >
                      {category.category}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${expandedCategories[category.category] ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedCategories[category.category] && (
                      <div className="space-y-0.5 pl-4">
                        {category.items.map((doc, docIndex) => (
                          <button
                            key={docIndex}
                            onClick={() => setSelectedFile(doc)}
                            onMouseEnter={() => setHoveredItem(doc)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className={`w-full text-left px-2 py-1 rounded-md transition-colors text-sm truncate ${
                              selectedFile?.file === doc.file
                                ? 'bg-blue-100 text-blue-700'
                                : 'hover:bg-gray-100'
                            }`}
                          >
                            {doc.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Right side - Content display (80% or full width in fullscreen) */}
        <div className={`${isFullScreen ? 'w-full' : 'w-4/5'}`}>
          <div className="bg-white rounded-lg shadow-md p-4 h-full">
            {selectedFile ? (
              <div className="h-full flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold">{selectedFile.name}</h2>
                  <button
                    onClick={toggleFullScreen}
                    className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                  >
                    {isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
                  </button>
                </div>
                <iframe
                  src={`${categories.find(cat => cat.id === selectedCategory)?.path}/${selectedFile.file}`}
                  className={`w-full border-0 ${isFullScreen ? 'flex-1' : 'h-[600px]'}`}
                  title={selectedFile.name}
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-[600px] text-gray-500 overflow-hidden">
                {hoveredItem ? (
                  <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-md max-w-md z-10">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Preview</h3>
                    <p className="text-gray-700 break-words">{hoveredItem.name}</p>
                  </div>
                ) : null}
                <div className="text-center max-w-4xl px-4 overflow-y-auto max-h-[600px]">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to English Courses</h2>
                    <p className="text-gray-600 mb-6 text-lg">
                      Discover our comprehensive range of English courses designed to help you master the language at every level. 
                      From beginner basics to advanced professional skills, we offer structured learning paths with interactive content and practical exercises.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-blue-50 p-4 rounded-lg overflow-hidden">
                        <h3 className="font-semibold text-blue-800 mb-3 text-lg">Getting Started</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          <li className="break-words">Choose your level</li>
                          <li className="break-words">Select a course category</li>
                          <li className="break-words">Follow the learning path</li>
                          <li className="break-words">Complete exercises</li>
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
                          <li className="break-words">Beginner fundamentals</li>
                          <li className="break-words">Intermediate skills</li>
                          <li className="break-words">Advanced concepts</li>
                          <li className="break-words">Professional mastery</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg overflow-hidden">
                      <h3 className="font-semibold text-gray-800 mb-4 text-xl">Available Courses</h3>
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