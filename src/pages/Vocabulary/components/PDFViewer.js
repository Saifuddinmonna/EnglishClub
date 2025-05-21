import React from 'react';

const PDFViewer = ({ selectedPDF, pdfFiles }) => {
  // Find the selected PDF's drive link
  const selectedPdfData = pdfFiles.find(pdf => pdf.filename === selectedPDF);
  const driveLink = selectedPdfData?.driveLink;

  return (
    <div className="w-full h-[800px] bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
      {driveLink ? (
        <iframe
          src={driveLink}
          className="w-full h-full"
          title="Vocabulary PDF Viewer"
          allow="autoplay"
        />
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-slate-600 dark:text-slate-400">PDF not available</p>
        </div>
      )}
    </div>
  );
};

export default PDFViewer; 