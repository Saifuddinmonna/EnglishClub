import React, { useState } from 'react';
import { bangladeshSyllabus } from './SyllabusData'; // Assuming SyllabusData.js is in the same directory

// Reusable Accordion Item Component
const AccordionItem = ({ id, title, overview, sections, isOpen, onToggle }) => {
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


const Syllabus = () => {
  const [openAccordion, setOpenAccordion] = useState(bangladeshSyllabus[0]?.id || null);

  const handleToggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    // Simplified page background for better base contrast
    <div className="container mx-auto px-2 sm:px-4 py-8 bg-slate-100 dark:bg-slate-900 min-h-screen">
      {/* Main page title color */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-slate-900 dark:text-slate-50 tracking-tight">
        Course & Academic Syllabus
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
        {/* Card 1: Beginner English */}
        {/* Card background and shadow */}
        <div className="bg-white dark:bg-slate-800 shadow-xl dark:shadow-slate-950/50 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
          {/* Card title color and border */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-700 dark:text-sky-400 border-b-2 border-sky-200 dark:border-sky-700 pb-2">
            Level 1: Beginner English
          </h2>
          <div className="space-y-4">
            {/* Module background */}
            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-md shadow-sm">
              {/* Module title color */}
              <h3 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">Module 1: Basics</h3>
              {/* Module list item color */}
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300">
                <li>Introduction to English Alphabet</li>
                <li>Basic Greetings and Introductions</li>
                <li>Numbers and Colors</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-md shadow-sm">
              <h3 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">Module 2: Daily Life</h3>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300">
                <li>Family and Friends</li>
                <li>Daily Activities</li>
                <li>Food and Drinks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 2: Intermediate English */}
        <div className="bg-white dark:bg-slate-800 shadow-xl dark:shadow-slate-950/50 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-700 dark:text-sky-400 border-b-2 border-sky-200 dark:border-sky-700 pb-2">
            Level 2: Intermediate English
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-md shadow-sm">
              <h3 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">Module 1: Communication</h3>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300">
                <li>Advanced Conversations</li>
                <li>Business Communication Essentials</li>
                <li>Social Interactions & Etiquette</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-md shadow-sm">
              <h3 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">Module 2: Professional Skills</h3>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300">
                {/* Text color for the link to academic syllabus */}
                <li className="font-bold text-indigo-600 dark:text-indigo-400">Detailed Academic Syllabus (Bangladesh NCTB) <span className="text-xs text-slate-500 dark:text-slate-400">(Expand Below)</span></li>
                <li>Writing Professional Emails</li>
                <li>Presentation Skills Fundamentals</li>
                <li>Interview Preparation Basics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* New Section for Bangladesh Academic Syllabus */}
      {/* Main card background for NCTB section */}
      <div className="mt-12 p-4 md:p-6 bg-white dark:bg-slate-800 shadow-2xl dark:shadow-slate-950/70 rounded-xl">
        {/* Title color for NCTB section */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-indigo-700 dark:text-indigo-400">
          Bangladesh National English Syllabus (NCTB)
        </h2>
        {/* Paragraph text color for NCTB section */}
        <p className="text-center text-slate-700 dark:text-slate-300 mb-8 px-2">
          Comprehensive overview of the English language curriculum for classes 1-12 for the years 2025-2026,
          reflecting the New National Curriculum Framework (NCF) 2021 phased implementation.
        </p>
        <div>
          {bangladeshSyllabus.map((item) => (
            <AccordionItem
              key={item.id}
              id={item.id}
              title={item.title}
              overview={item.overview}
              sections={item.sections}
              isOpen={openAccordion === item.id}
              onToggle={handleToggleAccordion}
            />
          ))}
        </div>
         <div className="mt-8 text-center">
            <a 
                href="http://www.nctb.gov.bd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
                Visit Official NCTB Website
            </a>
            {/* Text color for the small note under the button */}
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                For the most definitive, detailed, and up-to-date syllabi, please always refer to the NCTB.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;