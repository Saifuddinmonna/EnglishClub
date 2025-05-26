import React, { useState } from 'react';
import { ArrowsPointingOutIcon, ArrowsPointingInIcon } from '@heroicons/react/24/outline';

const Grammar = () => {
  const [selectedCategory, setSelectedCategory] = useState('basic');
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
      id: 'basic', 
      name: 'Basic Grammar', 
      path: '/documents/grammarPdf/basicGrammars',
      description: 'Essential grammar rules and concepts for beginners'
    },
    { 
      id: 'advanced', 
      name: 'Advanced Grammar', 
      path: '/documents/grammarPdf/advancedGrammars',
      description: 'Complex grammar structures and advanced concepts'
    },
    { 
      id: 'academic', 
      name: 'Academic Grammar', 
      path: '/documents/grammarPdf/academicGrammar',
      description: 'Grammar for academic writing and research'
    }
  ];

  const documents = {
    basic: [
      {
        category: "Parts of Speech",
        items: [
          { 
            name: 'Parts of Speech Overview', 
            file: 'Parts Of Speech কাকে বলে.html',
            description: 'Comprehensive overview of all parts of speech'
          },
          { 
            name: 'Parts of Speech (Version 2)', 
            file: 'Parts Of Speech কাকে বলেv2.html',
            description: 'Alternative explanation of parts of speech'
          },
          { 
            name: 'Parts of Speech (Version 3)', 
            file: 'Parts Of Speech কাকে বলেv3.html',
            description: 'Updated version with examples'
          },
          { name: 'Parts of Speech for Level', file: 'Parts Of Speech For Level.html' },
          { name: 'Parts of Speech Understanding Sheet', file: 'Parts of Speech understanding sheet for teaching.html' },
          { name: 'Parts of Speech in Rhyme', file: 'Parts of Speech খুব সহজে শিখুন ছন্দে ছন্দে _ for week and class vi - vii students.html' },
          { name: 'Parts of Speech Easy Method', file: 'Parts of Speech সহজে বোঝানোর জন্য একটি সহজ কৌশল for labib.html' }
        ]
      },
      {
        category: "Verbs and Tenses",
        items: [
          { 
            name: 'Auxiliary Verbs Overview', 
            file: 'Auxiliary verb.html',
            description: 'Understanding auxiliary verbs and their usage'
          },
          { 
            name: 'Auxiliary Verbs (Version 2)', 
            file: 'Auxiliary verb v2 for weak student.html',
            description: 'Alternative explanation of auxiliary verbs'
          },
          { 
            name: 'Auxiliary Verbs and Modals', 
            file: 'AUXILIARY VERB and modals for weak stufent.html',
            description: 'Understanding auxiliary verbs and modals'
          },
          { 
            name: 'Auxiliary Verbs Level 1', 
            file: 'Auxiliary Verbs and Modals level-1.html',
            description: 'Basic level of auxiliary verbs and modals'
          },
          { 
            name: 'Auxiliary Verbs Level 1 (Version 2)', 
            file: 'Auxiliary Verb and Modals level-1 version-2.html',
            description: 'Alternative explanation of auxiliary verbs and modals'
          },
          { 
            name: 'Tense Classification', 
            file: 'TENSE এর শ্রেণিবিভাগ.html',
            description: 'Detailed classification of English tenses'
          },
          { name: 'Tense in One Page', file: 'tense in one page basic.html' },
          { name: 'Tense Details', file: 'tense details 2.html' },
          { name: 'Tense and Verb Forms', file: 'TENSE & CORRECT FORMS OF VERB & COMMON ERROR.html' },
          { name: '3 Forms of Verb', file: '3 forms of verb.html' },
          { name: '3 Forms of Verb (Expanded)', file: '3 forms of verb verbs for freehand writing (Expanded List).html' },
          { name: 'Causative Verbs', file: 'CAUSATIVE VERB এর ব্যবহার.html' },
          { name: 'Causative Verbs (Version 2)', file: 'CAUSATIVE VERB এর ব্যবহার v2.html' },
          { name: 'Causative Verbs (Editing)', file: 'CAUSATIVE VERB এর ব্যবহার editing.html' },
          { name: 'Modal Auxiliaries', file: 'modal auxiliary with meaning.html' }
        ]
      },
      {
        category: "Pronouns",
        items: [
          { name: 'Pronoun Overview', file: 'pronoun and ists classifications.html' },
          { name: 'Pronoun Definition', file: 'Pronoun কাকে বলে.html' },
          { name: 'Personal Pronouns', file: 'Personal Pronoun.html' },
          { name: 'Personal Pronouns Level 2', file: 'Personal pronouns level 2.html' },
          { name: 'Relative Pronouns', file: 'RELATIVE PRONOUN.html' },
          { name: 'Which vs That', file: 'WHICH VS THAT AS RELATIVE.html' },
          { name: 'Whose as Possessive', file: 'WHOSE AS PROSSESSIVE.html' },
          { name: 'Whoever, Whatever, etc.', file: 'WHOEVER ,WHATEVER ,WHATSOEVER ,WHICHEVER ,WHEREVER ,WHENEVER ,HOWEVER.html' }
        ]
      },
      {
        category: "Prepositions and Articles",
        items: [
          { name: 'Prepositions Overview', file: 'Prepositions , overall concept of preposition.html' },
          { name: 'Prepositions for Kids', file: 'preposition for kid.html' },
          { name: 'Prepositions for Class 5', file: 'Preposition for class 5.html' },
          { name: 'Preposition Techniques', file: 'PREPOSITION ,TECHNIQUE for answering in the examination .html' },
          { name: '51 Prepositions at a Glance', file: '51 টি PREPOSITION এর মানে এক নজরে.html' },
          { name: 'Article Rules A to Z', file: 'Article Rules A to Z.html' },
          { name: 'Article Rules A to Z (Version 3)', file: 'Article Rules A to Zv3.html' },
          { name: 'Article Practice', file: 'article for practice.html' }
        ]
      },
      {
        category: "Sentence Structure",
        items: [
          { name: 'Sentence Types', file: 'Sentence কত প্রকার ও কি কি.html' },
          { name: 'Subject Verb Agreement', file: 'SUBJECT VERB AGREEMENT.html' },
          { name: 'Phrases and Clauses', file: 'PHRASE এবং CLAUSE এর.html' },
          { name: 'Phrases and Clauses Details', file: 'PHRASE এবং CLAUSE এর details.html' },
          { name: 'Completing Sentences', file: 'Completing Sentences level-1.2.html' },
          { name: 'Completing Sentences (Rewrite)', file: 'completing sentence rewrite version.html' },
          { name: 'Conditional Sentences', file: 'CONDITIONAL SENTENCE & CORRECT FORM OF VERBS.html' }
        ]
      },
      {
        category: "Word Formation",
        items: [
          { name: 'Prefixes and Suffixes', file: 'suffix and prefix and position of part of speech.html' },
          { name: 'Prefixes and Suffixes Level 2', file: 'Prefixes and suffix level 2.html' },
          { name: 'Common Prefixes and Suffixes', file: 'Common Prefixes and suffix.html' },
          { name: 'Comprehensive Guide to Prefixes and Suffixes', file: 'Comprehensive Guide to English Prefixes and Suffixes.html' }
        ]
      },
      {
        category: "Other Topics",
        items: [
          { name: 'Case', file: 'Case.html' },
          { name: 'Degrees of Comparison', file: 'DEGREE.html' },
          { name: 'Let and Allow Usage', file: 'LET  ALLOW এর বিভিন্ন ব্যবহার.html' },
          { name: 'Steps of Learning Grammar', file: 'Steps of Learning Grammar.html' },
          { name: 'Steps of Learning Grammar (Print Version)', file: 'Steps of Learning Grammar and auxiliary verb for printing.html' },
          { name: 'English Learning Magic Class', file: 'English Learning Magic Class.html' }
        ]
      }
    ],
    advanced: [
      {
        category: "Advanced Grammar",
        items: [
          { 
            name: 'Advanced Tenses', 
            file: 'tense details 2.html',
            description: 'Complex tense structures and usage'
          },
          { 
            name: 'Conditional Sentences', 
            file: 'CONDITIONAL SENTENCE & CORRECT FORM OF VERBS.html',
            description: 'Understanding conditional sentences'
          },
          { name: 'Relative Clauses', file: 'RELATIVE PRONOUN.html' },
          { name: 'Causative Verbs', file: 'CAUSATIVE VERB এর ব্যবহার.html' }
        ]
      }
    ],
    academic: [
      {
        category: "Academic Grammar",
        items: [
          { 
            name: 'Academic Writing', 
            file: 'academic_writing.html',
            description: 'Grammar for academic writing'
          },
          { 
            name: 'Research Paper Grammar', 
            file: 'research_grammar.html',
            description: 'Grammar rules for research papers'
          }
        ]
      }
    ]
  };

  return (
    <div className={`${isFullScreen ? 'fixed inset-0 z-50 bg-white' : 'container mx-auto px-4 py-8'}`}>
      {!isFullScreen && (
        <h1 className="text-[1.1rem] font-bold mb-4 text-blue-800">English Grammar</h1>
      )}
      
      {/* Categories at the top */}
      {!isFullScreen && (
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setSelectedFile(null);
                  }}
                  className={`w-full sm:w-auto px-3 py-1.5 rounded-md transition-colors text-[0.88rem] ${
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
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors text-[0.88rem] flex items-center gap-1 w-full sm:w-auto justify-center"
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
                {hoveredItem ? (
                  <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-md max-w-md z-10">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Preview</h3>
                    <p className="text-gray-700 break-words">{hoveredItem.name}</p>
                  </div>
                ) : null}
                <div className="text-center max-w-4xl px-4 overflow-y-auto max-h-[600px]">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to English Grammar</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    Explore our comprehensive collection of grammar resources. From basic concepts to advanced structures,
                    we provide detailed explanations and examples to help you master English grammar.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 p-4 rounded-lg overflow-hidden">
                      <h3 className="font-semibold text-blue-800 mb-3 text-lg">Getting Started</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="break-words">Choose your level</li>
                        <li className="break-words">Select a grammar topic</li>
                        <li className="break-words">Study the concepts</li>
                        <li className="break-words">Practice with examples</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg overflow-hidden">
                      <h3 className="font-semibold text-green-800 mb-3 text-lg">Features</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="break-words">Detailed explanations</li>
                        <li className="break-words">Interactive examples</li>
                        <li className="break-words">Practice exercises</li>
                        <li className="break-words">Fullscreen mode</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg overflow-hidden">
                      <h3 className="font-semibold text-purple-800 mb-3 text-lg">Learning Path</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="break-words">Basic grammar rules</li>
                        <li className="break-words">Intermediate concepts</li>
                        <li className="break-words">Advanced structures</li>
                        <li className="break-words">Academic grammar</li>
                      </ul>
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