import React, { useState } from 'react';
import { AccordionItem, PDFViewer } from './PdfAccordionItem';

const AcademicSyllabus = () => {
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

  const academicSyllabus = [
    {
      id: 'ncf-2021',
      title: 'New National Curriculum Framework (NCF) 2021',
      overview: 'General Philosophy for Classes 1-10 by 2025, Class 11 by 2026',
      content: [
        {
          title: 'NCF 2021 Overview',
          description: 'Comprehensive overview of the new curriculum framework',
          file: 'ncf-2021-overview.pdf'
        },
        {
          title: 'Implementation Guidelines',
          description: 'Detailed guidelines for implementing the new curriculum',
          file: 'ncf-2021-implementation.pdf'
        }
      ]
    },
    {
      id: 'primary',
      title: 'Classes 1–5 (Primary Level)',
      overview: 'New curriculum for primary education',
      content: [
        {
          title: 'Primary Level English',
          description: 'English curriculum for primary level',
          file: 'primary-english.pdf'
        },
        {
          title: 'Primary Level Mathematics',
          description: 'Mathematics curriculum for primary level',
          file: 'primary-math.pdf'
        }
      ]
    },
    {
      id: 'lower-secondary',
      title: 'Classes 6–8 (Lower Secondary)',
      overview: 'New curriculum for lower secondary education',
      content: [
        {
          title: 'Lower Secondary English',
          description: 'English curriculum for lower secondary level',
          file: 'lower-secondary-english.pdf'
        },
        {
          title: 'Lower Secondary Mathematics',
          description: 'Mathematics curriculum for lower secondary level',
          file: 'lower-secondary-math.pdf'
        }
      ]
    },
    {
      id: 'ssc',
      title: 'Classes 9–10 (SSC Level)',
      overview: 'New curriculum for SSC level by 2025',
      content: [
        {
          title: 'SSC English First Paper',
          description: 'English first paper curriculum for SSC level',
          file: 'ssc-english-first.pdf'
        },
        {
          title: 'SSC English Second Paper',
          description: 'English second paper curriculum for SSC level',
          file: 'ssc-english-second.pdf'
        }
      ]
    },
    {
      id: 'hsc-old',
      title: 'HSC (Classes 11-12) - Old Syllabus',
      overview: 'Old "Short" Syllabus for 2025 & 2026 Exams',
      content: [
        {
          title: 'HSC English First Paper',
          description: 'English first paper curriculum for HSC level',
          file: 'hsc-english-first.pdf'
        },
        {
          title: 'HSC English Second Paper',
          description: 'English second paper curriculum for HSC level',
          file: 'hsc-english-second.pdf'
        }
      ]
    },
    {
      id: 'hsc-new',
      title: 'HSC (Class 11 from 2026)',
      overview: 'New Curriculum for HSC 2028 Exams',
      content: [
        {
          title: 'New HSC English First Paper',
          description: 'New English first paper curriculum for HSC level',
          file: 'new-hsc-english-first.pdf'
        },
        {
          title: 'New HSC English Second Paper',
          description: 'New English second paper curriculum for HSC level',
          file: 'new-hsc-english-second.pdf'
        }
      ]
    }
  ];

  return (
    <div className={`${isFullScreen ? 'fixed inset-0 z-50 bg-white' : 'container mx-auto px-1 py-2'}`}>
      {!isFullScreen && (
        <div className="mb-2">
          <h1 className="flex text-2xl mr-2 font-bold">Academic Syllabus
            <span className="text-sm text-gray-700">
              {hoveredItem && (
                <><span className="font-semibold ml-2">Preview:</span> {hoveredItem.name}</>
              )}
            </span>
          </h1>
        </div>
      )}
      
      {/* Main content area */}
      <div className={`flex flex-col lg:flex-row gap-2 ${isFullScreen ? 'h-screen' : ''}`}>
        {/* Left side - File list */}
        {!isFullScreen && (
          <div className="w-full lg:w-1/5">
            <div className="bg-white rounded-lg shadow-md p-2">
              <h2 className="text-[1.1rem] font-semibold mb-2 text-blue-800">Syllabus Categories</h2>
              <div className="space-y-1 max-h-[300px] lg:max-h-[600px] overflow-y-auto">
                {academicSyllabus.map((section) => (
                  <div key={section.id} className="w-full">
                    <div className="flex items-center justify-between w-full">
                      <button
                        onClick={() => setSelectedFile(section)}
                        onMouseEnter={() => setHoveredItem(section)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className={`w-full text-left px-2 py-1 rounded-md transition-colors ${
                          selectedFile?.id === section.id
                            ? 'bg-blue-100 text-blue-700'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <h3 className="font-medium text-[0.88rem]">{section.title}</h3>
                      </button>
                      <button
                        onClick={() => toggleDocDetails(section.id)}
                        onMouseEnter={() => setHoveredItem({ name: showDocDetails[section.id] ? 'Hide Details' : 'Show Details' })}
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
                            d={showDocDetails[section.id]
                              ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                              : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            }
                          />
                        </svg>
                      </button>
                    </div>
                    {showDocDetails[section.id] && (
                      <p className="text-[0.88rem] text-gray-600 px-2 py-1 w-full">{section.overview}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Right side - Content display */}
        <div className={`${isFullScreen ? 'w-full' : 'w-full lg:w-4/5'}`}>
          <div className="bg-white rounded-lg shadow-md px-2 py-1 h-full">
            {selectedFile ? (
              <div className="h-full flex flex-col">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-2 gap-1">
                  <div className="w-full">
                    <h2 className="text-[1.1rem] font-semibold text-blue-800">{selectedFile.title}</h2>
                    <p className="text-[0.88rem] text-gray-600 mt-1">{selectedFile.overview}</p>
                  </div>
                  <button
                    onClick={toggleFullScreen}
                    className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={isFullScreen
                          ? "M9 9V4.5M9 9H4.5M15 9H19.5M15 9V4.5M15 15v4.5M15 15H4.5M15 15h4.5M9 15v4.5"
                          : "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                        }
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 overflow-auto">
                  {selectedFile.content.map((item, index) => (
                    <AccordionItem
                      key={index}
                      title={item.title}
                      description={item.description}
                      file={item.file}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Select a syllabus category to view its contents</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicSyllabus; 