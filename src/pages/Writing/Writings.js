import React, { useState } from 'react';

const Writings = () => {
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
    { id: 'basic', name: 'Basic Writing', path: '/documents/writingPdf/basicWriting' },
    { id: 'advanced', name: 'Advanced Writing', path: '/documents/writingPdf/advancedWriting' },
    { id: 'academic', name: 'Academic Writing', path: '/documents/writingPdf/academicWriting' }
  ];

  const documents = {
    basic: [
      {
        category: "Paragraph Writing",
        items: [
          { name: 'Introduction to Paragraphs', file: 'introduction_to_paragraphs.html' },
          { name: 'Paragraph Structure', file: 'paragraph_structure.html' },
          { name: 'Topic Sentences', file: 'topic_sentences.html' },
          { name: 'Supporting Details', file: 'supporting_details.html' },
          { name: 'Concluding Sentences', file: 'concluding_sentences.html' }
        ]
      },
      {
        category: "Essay Writing",
        items: [
          { name: 'Essay Types', file: 'essay_types.html' },
          { name: 'Essay Structure', file: 'essay_structure.html' },
          { name: 'Introduction Writing', file: 'introduction_writing.html' },
          { name: 'Body Paragraphs', file: 'body_paragraphs.html' },
          { name: 'Conclusion Writing', file: 'conclusion_writing.html' }
        ]
      },
      {
        category: "Creative Writing",
        items: [
          { name: 'Story Writing Basics', file: 'story_writing_basics.html' },
          { name: 'Character Development', file: 'character_development.html' },
          { name: 'Plot Structure', file: 'plot_structure.html' },
          { name: 'Setting Description', file: 'setting_description.html' },
          { name: 'Dialogue Writing', file: 'dialogue_writing.html' }
        ]
      }
    ],
    advanced: [
      {
        category: "Advanced Writing",
        items: [
          { name: 'Complex Essays', file: 'complex_essays.html' },
          { name: 'Research Writing', file: 'research_writing.html' },
          { name: 'Critical Analysis', file: 'critical_analysis.html' },
          { name: 'Argumentative Writing', file: 'argumentative_writing.html' }
        ]
      }
    ],
    academic: [
      {
        category: "Academic Writing",
        items: [
          { name: 'Research Papers', file: 'research_papers.html' },
          { name: 'Literature Reviews', file: 'literature_reviews.html' },
          { name: 'Thesis Writing', file: 'thesis_writing.html' },
          { name: 'Citation Styles', file: 'citation_styles.html' }
        ]
      }
    ]
  };

  return (
    <div className={`${isFullScreen ? 'fixed inset-0 z-50 bg-white' : 'container mx-auto px-1 py-0'}`}>
      {!isFullScreen && (
        <div className="mb-6">
          <h1 className="flex text-3xl mr-4 font-bold">English Writing <span className="text-lg text-gray-500">
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to English Writing</h2>
                    <p className="text-gray-600 mb-6 text-lg">
                      Discover our comprehensive collection of writing resources designed to help you master English writing skills. 
                      From basic paragraph writing to advanced academic composition, we provide detailed guides, examples, and practice materials.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-blue-50 p-4 rounded-lg overflow-hidden">
                        <h3 className="font-semibold text-blue-800 mb-3 text-lg">Getting Started</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          <li className="break-words">Choose your writing level</li>
                          <li className="break-words">Browse writing topics</li>
                          <li className="break-words">Select a guide to read</li>
                          <li className="break-words">Practice with examples</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg overflow-hidden">
                        <h3 className="font-semibold text-green-800 mb-3 text-lg">Features</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          <li className="break-words">Step-by-step guides</li>
                          <li className="break-words">Writing templates</li>
                          <li className="break-words">Example compositions</li>
                          <li className="break-words">Interactive learning</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg overflow-hidden">
                        <h3 className="font-semibold text-purple-800 mb-3 text-lg">Learning Path</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          <li className="break-words">Start with paragraphs</li>
                          <li className="break-words">Move to essay writing</li>
                          <li className="break-words">Explore creative writing</li>
                          <li className="break-words">Master academic writing</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg overflow-hidden">
                      <h3 className="font-semibold text-gray-800 mb-4 text-xl">Available Categories</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-left">
                          <h4 className="font-medium text-blue-700 mb-2">Basic Writing</h4>
                          <ul className="text-gray-600 space-y-1">
                            <li className="break-words">• Paragraph Writing</li>
                            <li className="break-words">• Essay Writing</li>
                            <li className="break-words">• Creative Writing</li>
                            <li className="break-words">• Basic Structure</li>
                          </ul>
                        </div>
                        <div className="text-left">
                          <h4 className="font-medium text-green-700 mb-2">Advanced Writing</h4>
                          <ul className="text-gray-600 space-y-1">
                            <li className="break-words">• Complex Essays</li>
                            <li className="break-words">• Research Writing</li>
                            <li className="break-words">• Critical Analysis</li>
                            <li className="break-words">• Argumentative Writing</li>
                          </ul>
                        </div>
                        <div className="text-left">
                          <h4 className="font-medium text-purple-700 mb-2">Academic Writing</h4>
                          <ul className="text-gray-600 space-y-1">
                            <li className="break-words">• Research Papers</li>
                            <li className="break-words">• Literature Reviews</li>
                            <li className="break-words">• Thesis Writing</li>
                            <li className="break-words">• Citation Styles</li>
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

export default Writings;