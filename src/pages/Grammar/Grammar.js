import React, { useState } from 'react';

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
    { id: 'basic', name: 'Basic Grammar', path: '/documents/grammarPdf/basicGrammars' },
    { id: 'advanced', name: 'Advanced Grammar', path: '/documents/grammarPdf/advancedGrammars' },
    { id: 'academic', name: 'Academic Grammar', path: '/documents/grammarPdf/academicGrammar' }
  ];

  const documents = {
    basic: [
      // 1. Parts of Speech
      {
        category: "Parts of Speech",
        items: [
          { name: 'Parts of Speech Overview', file: 'Parts Of Speech কাকে বলে.html' },
          { name: 'Parts of Speech (Version 2)', file: 'Parts Of Speech কাকে বলেv2.html' },
          { name: 'Parts of Speech (Version 3)', file: 'Parts Of Speech কাকে বলেv3.html' },
          { name: 'Parts of Speech for Level', file: 'Parts Of Speech For Level.html' },
          { name: 'Parts of Speech Understanding Sheet', file: 'Parts of Speech understanding sheet for teaching.html' },
          { name: 'Parts of Speech in Rhyme', file: 'Parts of Speech খুব সহজে শিখুন ছন্দে ছন্দে _ for week and class vi - vii students.html' },
          { name: 'Parts of Speech Easy Method', file: 'Parts of Speech সহজে বোঝানোর জন্য একটি সহজ কৌশল for labib.html' }
        ]
      },
      // 2. Verbs and Tenses
      {
        category: "Verbs and Tenses",
        items: [
          { name: 'Auxiliary Verbs Overview', file: 'Auxiliary verb.html' },
          { name: 'Auxiliary Verbs (Version 2)', file: 'Auxiliary verb v2 for weak student.html' },
          { name: 'Auxiliary Verbs and Modals', file: 'AUXILIARY VERB and modals for weak stufent.html' },
          { name: 'Auxiliary Verbs Level 1', file: 'Auxiliary Verbs and Modals level-1.html' },
          { name: 'Auxiliary Verbs Level 1 (Version 2)', file: 'Auxiliary Verb and Modals level-1 version-2.html' },
          { name: 'Tense Classification', file: 'TENSE এর শ্রেণিবিভাগ.html' },
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
      // 3. Pronouns
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
      // 4. Prepositions and Articles
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
      // 5. Sentence Structure
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
      // 6. Word Formation
      {
        category: "Word Formation",
        items: [
          { name: 'Prefixes and Suffixes', file: 'suffix and prefix and position of part of speech.html' },
          { name: 'Prefixes and Suffixes Level 2', file: 'Prefixes and suffix level 2.html' },
          { name: 'Common Prefixes and Suffixes', file: 'Common Prefixes and suffix.html' },
          { name: 'Comprehensive Guide to Prefixes and Suffixes', file: 'Comprehensive Guide to English Prefixes and Suffixes.html' }
        ]
      },
      // 7. Other Topics
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
          { name: 'Advanced Tenses', file: 'tense details 2.html' },
          { name: 'Conditional Sentences', file: 'CONDITIONAL SENTENCE & CORRECT FORM OF VERBS.html' },
          { name: 'Relative Clauses', file: 'RELATIVE PRONOUN.html' },
          { name: 'Causative Verbs', file: 'CAUSATIVE VERB এর ব্যবহার.html' }
        ]
      }
    ],
    academic: [
      {
        category: "Academic Grammar",
        items: [
          { name: 'Academic Writing', file: 'academic_writing.html' },
          { name: 'Research Paper Grammar', file: 'research_grammar.html' }
        ]
      }
    ]
  };

  return (
    <div className={`${isFullScreen ? 'fixed inset-0 z-50 bg-white' : 'container mx-auto px-0.5 py-0'}`}>
      {!isFullScreen && (
        <div className="mb-1">
          <h1 className="flex text-2xl mr-1 font-bold">English Grammar 
            <span className="text-sm text-gray-700">
              {hoveredItem && (
                <><span className="font-semibold ml-1">Preview:</span> {hoveredItem.name}</>
              )}
            </span>
          </h1>
        </div>
      )}
      
      {/* Categories at the top */}
      {!isFullScreen && (
        <div className="bg-white rounded-lg shadow-md p-1 mb-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-1 gap-1">
            <div className="flex flex-col sm:flex-row gap-0.5 w-full">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setSelectedFile(null);
                  }}
                  onMouseEnter={() => setHoveredItem(category)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`w-full px-1.5 py-0.5 rounded-md transition-colors text-[0.88rem] ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
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
      <div className={`flex flex-col lg:flex-row gap-1 ${isFullScreen ? 'h-screen' : ''}`}>
        {/* Left side - File list */}
        {!isFullScreen && (
          <div className="w-full lg:w-1/5">
            <div className="bg-white rounded-lg shadow-md p-1">
              <h2 className="text-[1.1rem] font-semibold mb-1 text-blue-800">Topics</h2>
              <div className="space-y-0.5 max-h-[300px] lg:max-h-[600px] overflow-y-auto">
                {documents[selectedCategory]?.map((category, index) => (
                  <div key={index} className="space-y-0.5">
                    <button
                      onClick={() => toggleCategory(category.category)}
                      className="w-full text-left px-1.5 py-0.5 rounded-md transition-colors text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center justify-between"
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
                      <div className="space-y-0.5 pl-2">
                        {category.items.map((doc, docIndex) => (
                          <button
                            key={docIndex}
                            onClick={() => setSelectedFile(doc)}
                            onMouseEnter={() => setHoveredItem(doc)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className={`w-full text-left px-1.5 py-0.5 rounded-md transition-colors text-sm truncate ${
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

        {/* Right side - Content display */}
        <div className={`${isFullScreen ? 'w-full fixed inset-0 z-50 bg-white' : 'w-full lg:w-3/10'}`}>
          <div className={`bg-white rounded-lg shadow-md px-1 py-0.5 ${isFullScreen ? 'h-screen' : 'h-full'}`}>
            {selectedFile ? (
              <div className={`h-full flex flex-col ${isFullScreen ? 'h-screen' : ''}`}>
                <div className="flex flex-col sm:flex-row justify-between items-center mb-1 gap-0.5">
                  <div className="w-full">
                    <h2 className="text-[1.1rem] font-semibold text-blue-800 truncate">{selectedFile.name}</h2>
                  </div>
                  <button
                    onClick={toggleFullScreen}
                    className="w-full sm:w-auto px-1.5 py-0.5 bg-[rgb(252,99,2)] text-white rounded-md hover:bg-[rgb(252,99,2)]/90 transition-colors text-[0.88rem]"
                  >
                    {isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
                  </button>
                </div>
                <iframe
                  src={`${categories.find(cat => cat.id === selectedCategory)?.path}/${selectedFile.file}`}
                  className={`w-full border-0 ${isFullScreen ? 'flex-1 h-[calc(100vh-4rem)]' : 'h-[650px]'}`}
                  title={selectedFile.name}
                />
              </div>
            ) : (
              <div className={`flex items-center justify-center ${isFullScreen ? 'h-screen' : 'h-[600px]'} text-gray-500 overflow-hidden`}>
                {hoveredItem ? (
                  <div className="absolute top-2 right-2 bg-white p-2 rounded-lg shadow-md max-w-[90%] z-10">
                    <h3 className="text-lg font-semibold mb-1 text-gray-800">Preview</h3>
                    <p className="text-gray-700 break-words">{hoveredItem.name}</p>
                  </div>
                ) : null}
                <div className="text-center w-full px-2 overflow-y-auto max-h-[600px]">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to English Grammar Learning</h2>
                  <p className="text-gray-600 mb-3 text-base">
                    Explore our comprehensive collection of grammar resources designed to help you master English grammar.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-2 mb-3">
                    <div className="bg-blue-50 p-2 rounded-lg overflow-hidden">
                      <h3 className="font-semibold text-blue-800 mb-1 text-base">Getting Started</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-0.5 text-sm">
                        <li className="break-words">Choose a category from the top menu</li>
                        <li className="break-words">Browse through the topics</li>
                        <li className="break-words">Click to view content</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-2 rounded-lg overflow-hidden">
                    <h3 className="font-semibold text-gray-800 mb-1 text-base">Available Categories</h3>
                    <div className="text-left">
                      <h4 className="font-medium text-blue-700 mb-0.5 text-sm">Basic Grammar</h4>
                      <ul className="text-gray-600 space-y-0.5 text-sm">
                        <li className="break-words">• Parts of Speech</li>
                        <li className="break-words">• Verbs and Tenses</li>
                      </ul>
                    </div>
                  </div>

                  <p className="mt-2 text-gray-500 italic break-words text-sm">
                    Hover over any topic to preview its content!
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

export default Grammar; 