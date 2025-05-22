import React, { useState } from 'react';
import { bangladeshSyllabus } from './SyllabusData';
import { AccordionItem, PDFViewer } from './PdfAccordionItem';

const Syllabus = () => {
  const [selectedCategory, setSelectedCategory] = useState('academic');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showDocDetails, setShowDocDetails] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(bangladeshSyllabus[0]?.id || null);
  const [selectedPDF, setSelectedPDF] = useState('hsc_english-1st-paper-2023.pdf');

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

  const handleToggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const categories = [
    { 
      id: 'academic', 
      name: 'Academic Syllabus', 
      path: '/documents/syllabus',
      description: 'Comprehensive academic syllabus for different levels'
    },
    { 
      id: 'exam', 
      name: 'Exam Preparation', 
      path: '/documents/examPreparation',
      description: 'Detailed exam preparation materials and guidelines'
    },
    { 
      id: 'nctb', 
      name: 'NCTB Syllabus', 
      path: '/documents/nctb',
      description: 'Official National Curriculum and Textbook Board syllabus'
    },
    { 
      id: 'bcs', 
      name: 'BCS Syllabus', 
      path: '/documents/syllabuss',
      description: 'Bangladesh Civil Service (BCS) examination syllabus and guidelines'
    }
  ];

  const documents = {
    academic: bangladeshSyllabus.map(section => ({
      name: section.title,
      file: section.id,
      description: section.overview,
      content: section
    })),
    exam: [
      { 
        name: 'IELTS Preparation', 
        file: 'ielts_preparation.html',
        description: 'Complete IELTS exam preparation guide'
      },
      { 
        name: 'TOEFL Preparation', 
        file: 'toefl_preparation.html',
        description: 'TOEFL exam preparation materials'
      }
    ],
    nctb: [
      { 
        name: 'NCTB Guidelines', 
        file: 'nctb_guidelines.html',
        description: 'Official NCTB curriculum guidelines'
      }
    ],
    bcs: [
      {
        name: 'BCS Syllabus',
        file: 'bcsSyllabus.html',
        description: 'Complete BCS examination syllabus and guidelines'
      }
    ]
  };

  const pdfOptions = [
    { value: 'hsc_english-1st-paper-2023.pdf', label: 'HSC English 1st Paper 2023' },
    { value: 'english-2nd-paper-2023.pdf', label: 'English 2nd Paper 2023' },
    { value: '4.-ssc_english-2-2023.pdf', label: 'SSC English 2 2023' },
    { value: '4.-English-2_HSC-2022.pdf', label: 'English 2 HSC 2022' },
    { value: '3.-ssc_english-1-2023.pdf', label: 'SSC English 1 2023' },
    { value: '3.-English-1_HSC-2022.pdf', label: 'English 1 HSC 2022' },
  ];

  return (
    <div className={`${isFullScreen ? 'fixed inset-0 z-50 bg-white' : 'container mx-auto px-4 py-8'}`}>
      {!isFullScreen && (
        <div className="mb-6">
          <h1 className="flex text-2xl mr-4 font-bold">Course & Academic Syllabus 
            <span className="text-sm text-gray-700">
              {hoveredItem && (
                <><span className="font-semibold ml-4">Preview:</span> {hoveredItem.name}</>
              )}
            </span>
          </h1>
        </div>
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
                  onMouseEnter={() => setHoveredItem(category)}
                  onMouseLeave={() => setHoveredItem(null)}
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
              onMouseEnter={() => setHoveredItem({ name: showDetails ? 'Hide Details' : 'Show Details' })}
              onMouseLeave={() => setHoveredItem(null)}
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
                        onMouseEnter={() => setHoveredItem(doc)}
                        onMouseLeave={() => setHoveredItem(null)}
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
                        onMouseEnter={() => setHoveredItem({ name: showDocDetails[doc.file] ? 'Hide Details' : 'Show Details' })}
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
                {selectedCategory === 'academic' ? (
                  <div className="flex-1 overflow-y-auto p-4">
                    {selectedFile.content.sections.map((section, index) => (
                      <div key={index} className="mb-6">
                        <h3 className="text-lg font-semibold text-blue-700 mb-3">{section.title}</h3>
                        {section.overview && (
                          <p className="text-gray-600 mb-3">{section.overview}</p>
                        )}
                        {section.points && (
                          <ul className="list-disc list-inside space-y-2 text-gray-600">
                            {section.points.map((point, pointIndex) => (
                              <li key={pointIndex}>{point}</li>
                            ))}
                          </ul>
                        )}
                        {section.subSections && (
                          <div className="ml-4 mt-4">
                            {section.subSections.map((subSection, subIndex) => (
                              <div key={subIndex} className="mb-4">
                                <h4 className="font-medium text-blue-600 mb-2">{subSection.subTitle}</h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-600">
                                  {subSection.points.map((point, pointIndex) => (
                                    <li key={pointIndex}>{point}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <iframe
                    src={`${categories.find(cat => cat.id === selectedCategory)?.path}/${selectedFile.file}`}
                    className={`w-full border-0 ${isFullScreen ? 'flex-1' : 'h-[650px]'}`}
                    title={selectedFile.name}
                  />
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center h-[600px] text-gray-500 overflow-hidden">
                <div className="text-center max-w-4xl px-4 overflow-y-auto max-h-[600px]">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Syllabus Section</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    Explore our comprehensive collection of academic syllabi and exam preparation materials. 
                    From SSC to university admission tests, we've got you covered with detailed guidelines and resources.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 p-4 rounded-lg overflow-hidden">
                      <h3 className="font-semibold text-blue-800 mb-3 text-lg">Academic Syllabus</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="break-words">SSC Syllabus</li>
                        <li className="break-words">HSC Syllabus</li>
                        <li className="break-words">BCS Syllabus</li>
                        <li className="break-words">University Admission</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg overflow-hidden">
                      <h3 className="font-semibold text-green-800 mb-3 text-lg">Exam Preparation</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="break-words">IELTS Preparation</li>
                        <li className="break-words">TOEFL Preparation</li>
                        <li className="break-words">Practice Tests</li>
                        <li className="break-words">Study Materials</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg overflow-hidden">
                      <h3 className="font-semibold text-purple-800 mb-3 text-lg">NCTB Resources</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li className="break-words">Official Guidelines</li>
                        <li className="break-words">Curriculum Updates</li>
                        <li className="break-words">Textbook Information</li>
                        <li className="break-words">Exam Patterns</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg overflow-hidden">
                    <h3 className="font-semibold text-gray-800 mb-4 text-xl">PDF Resources</h3>
                    <div className="max-w-xl mx-auto">
                      <select
                        value={selectedPDF}
                        onChange={(e) => setSelectedPDF(e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        {pdfOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mt-4">
                      <PDFViewer selectedPDF={selectedPDF} />
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <a 
                      href="https://nctb.portal.gov.bd/site/page/d01e72b0-8ecd-4c81-bffd-c9e117b7fdad/-"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
                    >
                      Visit Official NCTB Website
                    </a>
                    <p className="text-sm text-gray-600 mt-3">
                      For the most definitive, detailed, and up-to-date syllabi, please always refer to the NCTB.
                    </p>
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

export default Syllabus;