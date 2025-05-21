import React, { useState } from 'react';
import { bangladeshSyllabus } from './SyllabusData';
import { AccordionItem, PDFViewer } from './PdfAccordionItem';

const Syllabus = () => {
  const [openAccordion, setOpenAccordion] = useState(bangladeshSyllabus[0]?.id || null);
  const [selectedPDF, setSelectedPDF] = useState('hsc_english-1st-paper-2023.pdf');

  const handleToggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
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
    <div className="container mx-auto px-2 sm:px-4 py-8 bg-slate-100 dark:bg-slate-900 min-h-screen">
      {/* Main page title color */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-slate-900 dark:text-slate-50 tracking-tight">
        Course & Academic Syllabus
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
        {/* Card 1: Beginner English */}
        <div className="bg-white dark:bg-slate-800 shadow-xl dark:shadow-slate-950/50 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-sky-700 dark:text-sky-400 border-b-2 border-sky-200 dark:border-sky-700 pb-2">
            Level 1: Beginner English
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-md shadow-sm">
              <h3 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">Module 1: Basics</h3>
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
                <li className="font-bold text-indigo-600 dark:text-indigo-400">Detailed Academic Syllabus (Bangladesh NCTB) <span className="text-xs text-slate-500 dark:text-slate-400">(Expand Below)</span></li>
                <li>Writing Professional Emails</li>
                <li>Presentation Skills Fundamentals</li>
                <li>Interview Preparation Basics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer Section */}
      <div className="mt-12 p-4 md:p-6 bg-white dark:bg-slate-800 shadow-2xl dark:shadow-slate-950/70 rounded-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-indigo-700 dark:text-indigo-400">
          View Syllabus PDFs
        </h2>
        <p className="text-center text-slate-700 dark:text-slate-300 mb-6">
          Select a syllabus PDF to view directly in your browser
        </p>
        
        <div className="max-w-xl mx-auto mb-6">
          <select
            value={selectedPDF}
            onChange={(e) => setSelectedPDF(e.target.value)}
            className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {pdfOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <PDFViewer selectedPDF={selectedPDF} />
      </div>

      {/* Bangladesh Academic Syllabus Section */}
      <div className="mt-12 p-4 md:p-6 bg-white dark:bg-slate-800 shadow-2xl dark:shadow-slate-950/70 rounded-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-indigo-700 dark:text-indigo-400">
          Bangladesh National English Syllabus (NCTB)
        </h2>
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
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
            For the most definitive, detailed, and up-to-date syllabi, please always refer to the NCTB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;