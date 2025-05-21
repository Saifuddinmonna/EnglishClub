import React, { useState } from 'react';
import PDFViewer from './components/PDFViewer';
import PDFList from './components/PDFList';
import { pdfFiles } from './data/pdfFiles';

const Vocabulary = () => {
  const [selectedPDF, setSelectedPDF] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-slate-800 dark:text-slate-100">Vocabulary Learning</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar with PDF list */}
        <PDFList 
          pdfFiles={pdfFiles}
          selectedPDF={selectedPDF}
          onSelectPDF={setSelectedPDF}
        />

        {/* Main content area */}
        <div className="w-full md:w-3/4">
          {selectedPDF ? (
            <PDFViewer selectedPDF={selectedPDF} pdfFiles={pdfFiles} />
          ) : (
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 text-center">
              <svg
                className="w-16 h-16 mx-auto mb-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                Select a PDF to View
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Choose a vocabulary PDF from the sidebar to start learning
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vocabulary; 