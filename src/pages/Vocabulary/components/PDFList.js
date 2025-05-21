import React from 'react';

const PDFListItem = ({ title, filename, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 mb-2 rounded-lg transition-all duration-200 ${
        isSelected
          ? 'bg-indigo-600 text-white'
          : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-600'
      }`}
    >
      <div className="flex items-center">
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
        <span className="font-medium">{title}</span>
      </div>
    </button>
  );
};

const PDFList = ({ pdfFiles, selectedPDF, onSelectPDF }) => {
  return (
    <div className="w-full md:w-1/4 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Vocabulary PDFs</h2>
      <div className="space-y-2">
        {pdfFiles.map((pdf) => (
          <PDFListItem
            key={pdf.filename}
            title={pdf.title}
            filename={pdf.filename}
            isSelected={selectedPDF === pdf.filename}
            onClick={() => onSelectPDF(pdf.filename)}
          />
        ))}
      </div>
    </div>
  );
};

export default PDFList; 