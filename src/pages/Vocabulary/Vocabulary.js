import React, { useState } from 'react';

const Vocabulary = () => {
  const [selectedCategory, setSelectedCategory] = useState('basic');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showDocDetails, setShowDocDetails] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
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

  const categories = [
    { 
      id: 'basic', 
      name: 'Basic Vocabulary', 
      path: '/documents/vocabularyPdfs/Basic Vocabulary',
      description: 'Essential vocabulary for everyday communication'
    },
    { 
      id: 'advanced', 
      name: 'Advanced Vocabulary', 
      path: '/documents/vocabularyPdfs/Advanced Vocabulary',
      description: 'Complex words and expressions for fluent English'
    },
    { 
      id: 'business', 
      name: 'Business English', 
      path: '/documents/vocabularyPdfs/Business English',
      description: 'Professional vocabulary for the workplace'
    },
    { 
      id: 'academic', 
      name: 'Academic Vocabulary', 
      path: '/documents/vocabularyPdfs/Academic Vocabulary',
      description: 'Vocabulary for academic writing and research'
    },
    { 
      id: 'ielts', 
      name: 'IELTS Vocabulary', 
      path: '/documents/vocabularyPdfs/IELTS Vocabulary',
      description: 'Essential vocabulary for IELTS preparation'
    }
  ];

  const documents = {
    basic: [
      { 
        name: '3 Forms of Verbs', 
        file: '3formOfVerbs.html',
        description: 'Complete list of verbs with their three forms'
      },
      { 
        name: 'Expanded Verb List', 
        file: '3 forms of verb verbs for freehand writing (Expanded List).docx',
        description: 'Comprehensive list of verbs for practice and learning'
      }
    ],
    advanced: [
      { 
        name: 'Advanced Verbs', 
        file: 'advanced_verbs.html',
        description: 'Complex verbs and their usage'
      }
    ],
    business: [
      { 
        name: 'Business Terms', 
        file: 'business_terms.html',
        description: 'Common business vocabulary and expressions'
      }
    ],
    academic: [
      { 
        name: 'Academic Terms', 
        file: 'academic_terms.html',
        description: 'Vocabulary for academic writing'
      }
    ],
    ielts: [
      { 
        name: 'IELTS Words', 
        file: 'ielts_words.html',
        description: 'Essential vocabulary for IELTS success'
      }
    ]
  };

  return (
    <div className={`${isFullScreen ? 'fixed inset-0 z-50 bg-white' : 'container mx-auto px-4 py-8'}`}>
      {!isFullScreen && (
        <h1 className="text-[1.1rem] font-bold mb-4 text-blue-800">English Vocabulary</h1>
      )}
      
      {/* Categories at the top */}
      {!isFullScreen && (
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setSelectedFile(null);
                  }}
                  className={`px-3 py-1.5 rounded-md transition-colors text-[0.88rem] ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  <h3 className="font-medium text-[0.88rem]">{category.name}</h3>
                </button>
              ))}
            </div>
            <button
              onClick={toggleDetails}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors text-[0.88rem] flex items-center gap-1"
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
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <h3 className="font-medium text-blue-800 mb-2 text-[0.99rem]">
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
      <div className={`flex gap-6 ${isFullScreen ? 'h-screen' : ''}`}>
        {/* Left side - File list (20%) */}
        {!isFullScreen && (
          <div className="w-1/5">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-[1.1rem] font-semibold mb-4 text-blue-800">
                {categories.find(cat => cat.id === selectedCategory)?.name}
              </h2>
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {documents[selectedCategory]?.map((doc, index) => (
                  <div key={index} className="w-full">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => setSelectedFile(doc)}
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
            </div>
          </div>
        )}

        {/* Right side - Content display (65% or full width in fullscreen) */}
        <div className={`${isFullScreen ? 'w-full' : 'w-4/5'}`}>
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
                {hoveredItem ? (
                  <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-md max-w-md z-10">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Preview</h3>
                    <p className="text-gray-700 break-words">{hoveredItem.name}</p>
                  </div>
                ) : null}
                <div className="text-center max-w-4xl px-4 overflow-y-auto max-h-[600px]">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to English Vocabulary</h2>
                    <p className="text-gray-600 mb-6 text-lg">
                      Explore our comprehensive collection of vocabulary resources designed to enhance your English language skills. 
                      From basic words to advanced expressions, we provide detailed lists, examples, and learning materials for every level.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-blue-50 p-4 rounded-lg overflow-hidden">
                        <h3 className="font-semibold text-blue-800 mb-3 text-lg">Getting Started</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          <li className="break-words">Choose your vocabulary level</li>
                          <li className="break-words">Browse word categories</li>
                          <li className="break-words">Study word lists</li>
                          <li className="break-words">Practice with examples</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg overflow-hidden">
                        <h3 className="font-semibold text-green-800 mb-3 text-lg">Features</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          <li className="break-words">Word definitions</li>
                          <li className="break-words">Usage examples</li>
                          <li className="break-words">Practice exercises</li>
                          <li className="break-words">Interactive learning</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg overflow-hidden">
                        <h3 className="font-semibold text-purple-800 mb-3 text-lg">Learning Path</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          <li className="break-words">Start with basic words</li>
                          <li className="break-words">Progress to advanced terms</li>
                          <li className="break-words">Learn business vocabulary</li>
                          <li className="break-words">Master academic terms</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg overflow-hidden">
                      <h3 className="font-semibold text-gray-800 mb-4 text-xl">Available Categories</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-left">
                          <h4 className="font-medium text-blue-700 mb-2">Basic Vocabulary</h4>
                          <ul className="text-gray-600 space-y-1">
                            <li className="break-words">• Essential Words</li>
                            <li className="break-words">• Common Phrases</li>
                            <li className="break-words">• Daily Expressions</li>
                            <li className="break-words">• Basic Verbs</li>
                          </ul>
                        </div>
                        <div className="text-left">
                          <h4 className="font-medium text-green-700 mb-2">Advanced Vocabulary</h4>
                          <ul className="text-gray-600 space-y-1">
                            <li className="break-words">• Complex Terms</li>
                            <li className="break-words">• Idioms</li>
                            <li className="break-words">• Phrasal Verbs</li>
                            <li className="break-words">• Advanced Expressions</li>
                          </ul>
                        </div>
                        <div className="text-left">
                          <h4 className="font-medium text-purple-700 mb-2">Specialized Vocabulary</h4>
                          <ul className="text-gray-600 space-y-1">
                            <li className="break-words">• Business Terms</li>
                            <li className="break-words">• Academic Words</li>
                            <li className="break-words">• IELTS Vocabulary</li>
                            <li className="break-words">• Professional Terms</li>
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

export default Vocabulary; 