import React, { useState } from 'react';
import DocumentViewer from './components/DocumentViewer';
import { studyMaterials } from './data/studyMaterials';
import { DocumentTextIcon, AcademicCapIcon, BookOpenIcon, ChatBubbleLeftRightIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

const Documents = () => {
  const [selectedCategory, setSelectedCategory] = useState('grammar');
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
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

  const getIcon = (type) => {
    switch (type) {
      case 'grammar':
        return DocumentTextIcon;
      case 'vocabulary':
        return BookOpenIcon;
      case 'writing':
        return PencilSquareIcon;
      case 'speaking':
        return ChatBubbleLeftRightIcon;
      case 'examPreparation':
        return AcademicCapIcon;
      default:
        return DocumentTextIcon;
    }
  };

  return (
    <div className={`${isFullScreen ? 'fixed inset-0 z-50 bg-white' : 'container mx-auto px-1 py-0'}`}>
      {!isFullScreen && (
        <div className="mb-6">
          <h1 className="flex text-3xl mr-4 font-bold">Study Materials <span className="text-lg text-gray-500">
            {hoveredItem && (
              <><span className="font-semibold ml-4">Preview:</span> {hoveredItem.name}</>
            )}
          </span></h1>
        </div>
      )}
      
      {/* Categories at the top */}
      {!isFullScreen && (
        <div className="bg-white rounded-lg shadow-md p-2 mb-4">
          <div className="flex space-x-2">
            {Object.entries(studyMaterials).map(([key, material]) => {
              const Icon = material.icon;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedCategory(key);
                    setSelectedFile(null);
                    setSelectedSubCategory(null);
                  }}
                  className={`px-3 py-1 rounded-md transition-colors flex items-center ${
                    selectedCategory === key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {material.title}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main content area */}
      <div className={`flex gap-4 ${isFullScreen ? 'h-screen' : ''}`}>
        {/* Left side - File list (20%) */}
        {!isFullScreen && (
          <div className="w-1/5">
            <div className="bg-white rounded-lg shadow-md p-2">
              <h2 className="text-xl font-semibold mb-2">Categories</h2>
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {studyMaterials[selectedCategory]?.categories.map((category, index) => (
                  <div key={index} className="space-y-1">
                    <button
                      onClick={() => toggleCategory(category.name)}
                      className="w-full text-left px-2 py-1 rounded-md transition-colors text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center justify-between"
                    >
                      {category.name}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${expandedCategories[category.name] ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedCategories[category.name] && (
                      <div className="space-y-0.5 pl-4">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex}>
                            {item.category ? (
                              // For items with subcategories
                              <div className="space-y-1">
                                <div className="font-medium text-gray-600 text-sm py-1">
                                  {item.category}
                                </div>
                                {item.items.map((subItem, subIndex) => (
                                  <button
                                    key={subIndex}
                                    onClick={() => setSelectedFile({ ...subItem, path: category.path })}
                                    onMouseEnter={() => setHoveredItem(subItem)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    className={`w-full text-left px-2 py-1 rounded-md transition-colors text-sm truncate ${
                                      selectedFile?.file === subItem.file
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'hover:bg-gray-100'
                                    }`}
                                  >
                                    {subItem.name}
                                  </button>
                                ))}
                              </div>
                            ) : (
                              // For items without subcategories
                              <button
                                onClick={() => setSelectedFile({ ...item, path: category.path })}
                                onMouseEnter={() => setHoveredItem(item)}
                                onMouseLeave={() => setHoveredItem(null)}
                                className={`w-full text-left px-2 py-1 rounded-md transition-colors text-sm truncate ${
                                  selectedFile?.file === item.file
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'hover:bg-gray-100'
                                }`}
                              >
                                {item.name}
                              </button>
                            )}
                          </div>
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
                  src={`${selectedFile.path}/${selectedFile.file}`}
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
                    {hoveredItem.description && (
                      <p className="text-gray-600 text-sm mt-2">{hoveredItem.description}</p>
                    )}
                  </div>
                ) : null}
                <div className="text-center max-w-4xl px-4 overflow-y-auto max-h-[600px]">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Study Materials</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    Explore our comprehensive collection of English learning resources. 
                    From grammar rules to vocabulary lists, writing guides to speaking practice, 
                    we provide everything you need to master the English language.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 p-4 rounded-lg overflow-hidden">
                      <h3 className="font-semibold text-blue-800 mb-3 text-lg">Getting Started</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="break-words">Choose a category</li>
                        <li className="break-words">Browse materials</li>
                        <li className="break-words">Select content</li>
                        <li className="break-words">Start learning</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg overflow-hidden">
                      <h3 className="font-semibold text-green-800 mb-3 text-lg">Features</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="break-words">Interactive content</li>
                        <li className="break-words">Fullscreen mode</li>
                        <li className="break-words">Preview on hover</li>
                        <li className="break-words">Easy navigation</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg overflow-hidden">
                      <h3 className="font-semibold text-purple-800 mb-3 text-lg">Categories</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="break-words">Grammar Resources</li>
                        <li className="break-words">Vocabulary Lists</li>
                        <li className="break-words">Writing Guides</li>
                        <li className="break-words">Speaking Practice</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg overflow-hidden">
                    <h3 className="font-semibold text-gray-800 mb-4 text-xl">Available Resources</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Object.entries(studyMaterials).map(([key, material]) => {
                        const Icon = material.icon;
                        return (
                          <div key={key} className="text-left">
                            <div className="flex items-center mb-2">
                              <Icon className="w-5 h-5 text-blue-600 mr-2" />
                              <h4 className="font-medium text-blue-700">{material.title}</h4>
                            </div>
                            <p className="text-gray-600 text-sm mb-2">{material.description}</p>
                            <ul className="text-gray-600 space-y-1">
                              {material.categories.slice(0, 3).map((cat, index) => (
                                <li key={index} className="break-words">• {cat.name}</li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
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

export default Documents; 