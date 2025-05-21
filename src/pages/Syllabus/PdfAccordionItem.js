import React from 'react';

// Reusable Accordion Item Component
export const AccordionItem = ({ id, title, overview, sections, isOpen, onToggle }) => {
  return (
    <div className="border border-slate-300 dark:border-slate-700 rounded-lg mb-3 shadow-md dark:shadow-slate-900/50">
      <button
        onClick={() => onToggle(id)}
        className="w-full flex justify-between items-center p-4 text-left bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-200 rounded-t-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-expanded={isOpen}
      >
        {/* Text color for accordion title */}
        <span className="font-semibold text-lg text-slate-800 dark:text-slate-100">{title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          } text-slate-600 dark:text-slate-300`} // Icon color
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* Background for accordion content area */}
        <div className="p-5 bg-white dark:bg-slate-800 rounded-b-lg">
          {/* Text color for overview */}
          <p className="text-slate-700 dark:text-slate-300 mb-4 italic whitespace-pre-line">{overview}</p>
          {sections.map((section, index) => (
            <div key={index} className="mb-4">
              {/* Text color for section titles (e.g., "Core Focus") */}
              <h4 className="font-semibold text-md text-indigo-600 dark:text-indigo-400 mb-2">{section.title}</h4>
              {/* Text color for section overview (if any) */}
              {section.overview && <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 italic">{section.overview}</p>}
              {section.points && (
                // Text color for list items
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 pl-4">
                  {section.points.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>
              )}
              {section.subSections && section.subSections.map((subSection, sIndex) => (
                <div key={sIndex} className="mt-3 pl-4 border-l-2 border-indigo-300 dark:border-indigo-600 ml-2 py-2">
                    {/* Text color for subsection titles */}
                    <h5 className="font-medium text-slate-800 dark:text-slate-200 mb-1">{subSection.subTitle}</h5>
                    {/* Text color for subsection overview (if any) */}
                    {subSection.overview && <p className="text-xs text-slate-600 dark:text-slate-400 mb-1 italic">{subSection.overview}</p>}
                    {subSection.points && (
                        // Text color for list items within subsections
                        <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 pl-4">
                            {subSection.points.map((point, pIndex) => (
                                <li key={pIndex}>{point}</li>
                            ))}
                        </ul>
                    )}
                </div>
              ))}
            </div>
          ))}
          {/* Text color for the note at the bottom */}
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
            *Note: Specific details, mark distributions, and assessment models are subject to finalization and official circulars by the National Curriculum and Textbook Board (NCTB), Bangladesh. Continuous Assessment (CA) is a key component of the new curriculum.
          </p>
        </div>
      </div>
    </div>
  );
};

// PDF Viewer Component
export const PDFViewer = ({ selectedPDF }) => {
  return (
    <div className="w-full h-[800px] bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
      <iframe
        src={`/SyllabusPdf/${selectedPDF}`}
        className="w-full h-full"
        title="Syllabus PDF Viewer"
      />
    </div>
  );
};