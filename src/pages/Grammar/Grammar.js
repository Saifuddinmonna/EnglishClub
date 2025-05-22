import React, { useState } from 'react';

const Grammar = () => {
  const [selectedCategory, setSelectedCategory] = useState('basic');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const categories = [
    { id: 'basic', name: 'Basic Grammar', path: '/documents/grammarPdf/basicGrammars' },
    { id: 'advanced', name: 'Advanced Grammar', path: '/documents/grammarPdf/advancedGrammars' },
    { id: 'academic', name: 'Academic Grammar', path: '/documents/grammarPdf/academicGrammar' }
  ];

  const documents = {
    basic: [
      { name: 'Parts of Speech', file: 'Parts Of Speech কাকে বলে.html' },
      { name: 'Tenses Overview', file: 'TENSE & CORRECT FORMS OF VERB & COMMON ERROR.html' },
      { name: 'Articles', file: 'Article Rules A to Z.html' },
      { name: 'Prepositions', file: 'Prepositions , overall concept of preposition.html' },
      { name: 'Pronouns', file: 'pronoun and ists classifications.html' },
      { name: 'Verbs', file: '3 forms of verb.html' },
      { name: 'Sentence Structure', file: 'Sentence কত প্রকার ও কি কি.html' },
      { name: 'Subject Verb Agreement', file: 'SUBJECT VERB AGREEMENT.html' },
      { name: 'Auxiliary Verbs', file: 'Auxiliary verb.html' },
      { name: 'Modal Verbs', file: 'modal auxiliary with meaning.html' },
      { name: 'Degrees of Comparison', file: 'DEGREE.html' },
      { name: 'Prefixes and Suffixes', file: 'Comprehensive Guide to English Prefixes and Suffixes.html' },
      { name: 'Relative Pronouns', file: 'RELATIVE PRONOUN.html' },
      { name: 'Causative Verbs', file: 'CAUSATIVE VERB এর ব্যবহার.html' },
      { name: 'Conditional Sentences', file: 'CONDITIONAL SENTENCE & CORRECT FORM OF VERBS.html' },
      { name: 'Completing Sentences', file: 'Completing Sentences level-1.2.html' },
      { name: 'Phrases and Clauses', file: 'PHRASE এবং CLAUSE এর.html' },
      { name: 'Case', file: 'Case.html' },
      { name: 'Let and Allow Usage', file: 'LET  ALLOW এর বিভিন্ন ব্যবহার.html' },
      { name: 'Whose as Possessive', file: 'WHOSE AS PROSSESSIVE.html' },
      { name: 'Whoever, Whatever, etc.', file: 'WHOEVER ,WHATEVER ,WHATSOEVER ,WHICHEVER ,WHEREVER ,WHENEVER ,HOWEVER.html' },
      { name: 'Which vs That', file: 'WHICH VS THAT AS RELATIVE.html' }
    ],
    advanced: [
      { name: 'Advanced Tenses', file: 'tense details 2.html' },
      { name: 'Conditional Sentences', file: 'CONDITIONAL SENTENCE & CORRECT FORM OF VERBS.html' },
      { name: 'Relative Clauses', file: 'RELATIVE PRONOUN.html' },
      { name: 'Causative Verbs', file: 'CAUSATIVE VERB এর ব্যবহার.html' }
    ],
    academic: [
      { name: 'Academic Writing', file: 'academic_writing.html' },
      { name: 'Research Paper Grammar', file: 'research_grammar.html' }
    ]
  };

  return (
    <div className={`${isFullScreen ? 'fixed inset-0 z-50 bg-white' : 'container mx-auto px-4 py-8'}`}>
      {!isFullScreen && (
        <h1 className="text-3xl font-bold mb-6">English Grammar</h1>
      )}
      
      {/* Categories at the top */}
      {!isFullScreen && (
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSelectedFile(null);
                }}
                className={`px-6 py-2 rounded-md transition-colors ${
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
      <div className={`flex gap-6 ${isFullScreen ? 'h-screen' : ''}`}>
        {/* Left side - File list (20%) */}
        {!isFullScreen && (
          <div className="w-1/5">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold mb-4">Topics</h2>
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {documents[selectedCategory]?.map((doc, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedFile(doc)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                      selectedFile?.file === doc.file
                        ? 'bg-blue-100 text-blue-700'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {doc.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Right side - Content display (65% or full width in fullscreen) */}
        <div className={`${isFullScreen ? 'w-full' : 'w-4/5'}`}>
          <div className="bg-white rounded-lg shadow-md p-6 h-full">
            {selectedFile ? (
              <div className="h-full flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold">{selectedFile.name}</h2>
                  <button
                    onClick={toggleFullScreen}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
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
              <div className="flex items-center justify-center h-[600px] text-gray-500">
                Select a topic from the left to view its content
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grammar; 