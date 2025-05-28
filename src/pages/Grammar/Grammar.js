import React, { useState } from 'react';
import { ArrowsPointingOutIcon, ArrowsPointingInIcon } from '@heroicons/react/24/outline';
import { AccordionItem, PDFViewer } from '../Syllabus/PdfAccordionItem';

const Grammar = () => {
  const [selectedCategory, setSelectedCategory] = useState('basic');
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
    { id: 'basic', name: 'Basic Grammar', path: '/documents/grammarPdf/basicGrammar' },
    { id: 'advanced', name: 'Advanced Grammar', path: '/documents/grammarPdf/advancedGrammar' },
    { id: 'academic', name: 'Academic Grammar', path: '/documents/grammarPdf/academicGrammar' }
  ];

  const documents = {
    basic: [
      {
        category: "Parts of Speech",
        items: [
          { name: 'Parts of Speech Overview', file: 'parts-of-speech-overview.pdf' },
          { name: 'Parts of Speech (Version 2)', file: 'parts-of-speech-v2.pdf' },
          { name: 'Parts of Speech (Version 3)', file: 'parts-of-speech-v3.pdf' },
          { name: 'Parts of Speech for Level', file: 'parts-of-speech-level.pdf' },
          { name: 'Parts of Speech Understanding Sheet', file: 'parts-of-speech-understanding.pdf' }
        ]
      },
      {
        category: "Verbs and Tenses",
        items: [
          { name: 'Auxiliary Verbs Overview', file: 'auxiliary-verbs-overview.pdf' },
          { name: 'Auxiliary Verbs and Modals', file: 'auxiliary-verbs-modals.pdf' },
          { name: 'Auxiliary Verbs Level 1', file: 'auxiliary-verbs-level1.pdf' },
          { name: 'Tense Classification', file: 'tense-classification.pdf' },
          { name: 'Tense in One Page', file: 'tense-one-page.pdf' }
        ]
      },
      {
        category: "Sentence Structure",
        items: [
          { name: 'Sentence Types', file: 'sentence-types.pdf' },
          { name: 'Subject Verb Agreement', file: 'subject-verb-agreement.pdf' },
          { name: 'Phrases and Clauses', file: 'phrases-clauses.pdf' },
          { name: 'Completing Sentences', file: 'completing-sentences.pdf' },
          { name: 'Conditional Sentences', file: 'conditional-sentences.pdf' }
        ]
      }
    ],
    advanced: [
      {
        category: "Advanced Grammar",
        items: [
          { name: 'Complex Structures', file: 'complex-structures.pdf' },
          { name: 'Advanced Tenses', file: 'advanced-tenses.pdf' },
          { name: 'Advanced Modals', file: 'advanced-modals.pdf' },
          { name: 'Advanced Clauses', file: 'advanced-clauses.pdf' }
        ]
      }
    ],
    academic: [
      {
        category: "Academic Grammar",
        items: [
          { name: 'Academic Writing', file: 'academic-writing.pdf' },
          { name: 'Research Papers', file: 'research-papers.pdf' },
          { name: 'Thesis Writing', file: 'thesis-writing.pdf' },
          { name: 'Citation Styles', file: 'citation-styles.pdf' }
        ]
      }
    ]
  };

  return (
    <div className={`${isFullScreen ? 'fixed inset-0 z-50 bg-white' : 'container mx-auto px-2 py-2 sm:px-4 sm:py-8'}`}>
      {!isFullScreen && (
        <h1 className="text-[1.1rem] font-bold mb-2 sm:mb-4 text-blue-800 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">English Grammar</h1>
      )}
      
      {/* Categories at the top */}
      {!isFullScreen && (
        <div className="bg-white rounded-xl shadow-lg p-2 sm:p-4 mb-2 sm:mb-6 border border-gray-100">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 sm:mb-4 gap-2 sm:gap-4">
            <div className="flex flex-wrap gap-1 sm:gap-2 w-full sm:w-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setSelectedFile(null);
                  }}
                  className={`w-full sm:w-auto px-3 py-2 rounded-lg transition-all duration-300 text-[0.88rem] font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                  }`}
                >
                  <h3 className="font-medium text-[0.88rem] text-center">{category.name}</h3>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Main content area */}
      <div className={`flex flex-col lg:flex-row gap-2 sm:gap-6 ${isFullScreen ? 'h-screen' : ''}`}> 
        {/* Left side - File list */}
        {!isFullScreen && (
          <div className="w-[98%] lg:w-1/5 mx-auto lg:mx-0">
            <div className="bg-white rounded-xl shadow-lg p-2 sm:p-4 border border-gray-100">
              <h2 className="text-[1.05rem] font-semibold mb-2 sm:mb-4 text-blue-800 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {categories.find(cat => cat.id === selectedCategory)?.name}
              </h2>
              <div className="space-y-1 sm:space-y-2 max-h-[220px] sm:max-h-[300px] lg:max-h-[600px] overflow-y-auto">
                {documents[selectedCategory]?.map((category, index) => (
                  <div key={index} className="w-full">
                    <button
                      onClick={() => toggleCategory(category.category)}
                      className="w-full text-left px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium text-gray-700 hover:bg-gray-50 border border-gray-100 hover:border-gray-200 flex items-center justify-between shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                    >
                      {category.category}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${expandedCategories[category.category] ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedCategories[category.category] && (
                      <div className="space-y-1 pl-2 sm:pl-4 mt-1">
                        {category.items.map((doc, docIndex) => (
                          <button
                            key={docIndex}
                            onClick={() => setSelectedFile(doc)}
                            onMouseEnter={() => setHoveredItem(doc)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 text-sm truncate shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${
                              selectedFile?.file === doc.file
                                ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200'
                                : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-100 hover:border-gray-200'
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

        {/* Right side - Content display */}
        <div className={`${isFullScreen ? 'w-full' : 'w-[98%] lg:w-4/5 mx-auto lg:mx-0'}`}>
          <div className="bg-white rounded-xl shadow-lg px-3 py-2 sm:px-6 sm:py-3 h-full border border-gray-100">
            {selectedFile ? (
              <div className="h-full flex flex-col">
                <div className="flex justify-between items-center mb-2 sm:mb-4">
                  <div>
                    <h2 className="text-[1.05rem] font-semibold text-blue-800 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{selectedFile.name}</h2>
                  </div>
                  <button
                    onClick={toggleFullScreen}
                    className="px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-[0.88rem] font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                  >
                    {isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
                  </button>
                </div>
                <div className="flex-1 overflow-auto">
                  <PDFViewer file={selectedFile.file} />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-[300px] sm:h-[600px] text-gray-500 overflow-hidden">
                {hoveredItem ? (
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white p-3 sm:p-4 rounded-xl shadow-lg max-w-md z-10 border border-gray-100">
                    <h3 className="text-lg font-semibold mb-1 sm:mb-2 text-blue-800 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Preview</h3>
                    <p className="text-gray-700 break-words">{hoveredItem.name}</p>
                  </div>
                ) : null}
                <div className="text-center max-w-4xl px-2 sm:px-4 overflow-y-auto max-h-[300px] sm:max-h-[600px]">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Welcome to English Grammar</h2>
                  <p className="text-gray-600 mb-2 sm:mb-6 text-base sm:text-lg">
                    Explore our comprehensive collection of grammar resources designed to help you master English grammar. 
                    From basic concepts to advanced structures, we provide detailed guides, examples, and practice materials.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 p-4 rounded-lg overflow-hidden">
                      <h3 className="font-semibold text-blue-800 mb-3 text-lg">Getting Started</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="break-words">Choose your grammar level</li>
                        <li className="break-words">Browse grammar topics</li>
                        <li className="break-words">Select a guide to read</li>
                        <li className="break-words">Practice with examples</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg overflow-hidden">
                      <h3 className="font-semibold text-green-800 mb-3 text-lg">Features</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="break-words">Step-by-step guides</li>
                        <li className="break-words">Grammar rules</li>
                        <li className="break-words">Example sentences</li>
                        <li className="break-words">Interactive learning</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg overflow-hidden">
                      <h3 className="font-semibold text-purple-800 mb-3 text-lg">Learning Path</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="break-words">Start with basics</li>
                        <li className="break-words">Move to advanced</li>
                        <li className="break-words">Explore academic</li>
                        <li className="break-words">Master grammar</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg overflow-hidden">
                    <h3 className="font-semibold text-gray-800 mb-4 text-xl">Available Categories</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-left">
                        <h4 className="font-medium text-blue-700 mb-2">Basic Grammar</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li className="break-words">• Parts of Speech</li>
                          <li className="break-words">• Verbs and Tenses</li>
                          <li className="break-words">• Sentence Structure</li>
                          <li className="break-words">• Basic Rules</li>
                        </ul>
                      </div>
                      <div className="text-left">
                        <h4 className="font-medium text-green-700 mb-2">Advanced Grammar</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li className="break-words">• Complex Structures</li>
                          <li className="break-words">• Advanced Tenses</li>
                          <li className="break-words">• Advanced Modals</li>
                          <li className="break-words">• Advanced Clauses</li>
                        </ul>
                      </div>
                      <div className="text-left">
                        <h4 className="font-medium text-purple-700 mb-2">Academic Grammar</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li className="break-words">• Academic Writing</li>
                          <li className="break-words">• Research Papers</li>
                          <li className="break-words">• Thesis Writing</li>
                          <li className="break-words">• Citation Styles</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grammar; 