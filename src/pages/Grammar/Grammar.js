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
    <div className={`${isFullScreen ? 'fixed inset-0 z-50 bg-white' : 'container mx-auto px-1 py-0'}`}>
      {!isFullScreen && (
        <div className="mb-2">
          <h1 className="flex text-2xl mr-4 font-bold">English Grammar <span className="text-lg text-gray-500"> {hoveredItem && (
            // <div className="  bg-gray-50 rounded-md">
            //   <p className="text-gray-700 text-lg">
                <><span className="font-semibold ml-4">Preview:</span> {hoveredItem.name}</>
            //   </p>
            // </div>
           
          )}</span></h1>
         
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

        {/* Right side - Content display (65% or full width in fullscreen) */}
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to English Grammar Learning</h2>
                    <p className="text-gray-600 mb-6 text-lg">
                      Explore our comprehensive collection of grammar resources designed to help you master English grammar. 
                      From basic concepts to advanced topics, we've got you covered with detailed explanations, examples, and practice materials.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-blue-50 p-4 rounded-lg overflow-hidden">
                        <h3 className="font-semibold text-blue-800 mb-3 text-lg">Getting Started</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          <li className="break-words">Choose a category from the top menu</li>
                          <li className="break-words">Browse through the topics on the left</li>
                          <li className="break-words">Click on any topic to view its content</li>
                          <li className="break-words">Use fullscreen mode for better reading</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg overflow-hidden">
                        <h3 className="font-semibold text-green-800 mb-3 text-lg">Features</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          <li className="break-words">Interactive content viewing</li>
                          <li className="break-words">Fullscreen mode available</li>
                          <li className="break-words">Organized by difficulty levels</li>
                          <li className="break-words">Quick preview on hover</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg overflow-hidden">
                        <h3 className="font-semibold text-purple-800 mb-3 text-lg">Learning Path</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          <li className="break-words">Start with Basic Grammar</li>
                          <li className="break-words">Progress to Advanced topics</li>
                          <li className="break-words">Master Academic writing</li>
                          <li className="break-words">Practice with examples</li>
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
                            <li className="break-words">• Pronouns</li>
                            <li className="break-words">• Prepositions</li>
                          </ul>
                        </div>
                        <div className="text-left">
                          <h4 className="font-medium text-green-700 mb-2">Advanced Grammar</h4>
                          <ul className="text-gray-600 space-y-1">
                            <li className="break-words">• Complex Tenses</li>
                            <li className="break-words">• Conditional Sentences</li>
                            <li className="break-words">• Relative Clauses</li>
                            <li className="break-words">• Advanced Structures</li>
                          </ul>
                        </div>
                        <div className="text-left">
                          <h4 className="font-medium text-purple-700 mb-2">Academic Grammar</h4>
                          <ul className="text-gray-600 space-y-1">
                            <li className="break-words">• Academic Writing</li>
                            <li className="break-words">• Research Papers</li>
                            <li className="break-words">• Formal Language</li>
                            <li className="break-words">• Citations</li>
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

export default Grammar; 