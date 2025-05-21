import React, { useState, useEffect } from 'react';

const DocumentViewer = ({ documentUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fileType, setFileType] = useState('');

  useEffect(() => {
    // Reset states when documentUrl changes
    setIsLoading(true);
    setError(null);

    // Determine file type
    const extension = documentUrl.split('.').pop().toLowerCase();
    setFileType(extension);

    // Cleanup function
    return () => {
      setIsLoading(false);
      setError(null);
    };
  }, [documentUrl]);

  const handleError = (error) => {
    console.error('Document viewer error:', error);
    setError('Failed to load document. Please try again later.');
    setIsLoading(false);
  };

  const renderDocument = () => {
    if (fileType === 'pdf') {
      return (
        <iframe
          src={`${documentUrl}#toolbar=0`}
          className="w-full h-full"
          onLoad={() => setIsLoading(false)}
          onError={handleError}
          title="PDF Document"
        />
      );
    } else if (['doc', 'docx'].includes(fileType)) {
      return (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          <svg
            className="w-16 h-16 text-blue-600 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h3 className="text-xl font-semibold mb-2">Word Document</h3>
          <p className="text-gray-600 mb-4">
            This document can be viewed by downloading it.
          </p>
          <a
            href={documentUrl}
            download
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.open(documentUrl, '_blank');
            }}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Open Document
          </a>
        </div>
      );
    } else {
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-600">Unsupported file type</p>
        </div>
      );
    }
  };

  if (error) {
    return (
      <div className="w-full h-full min-h-[600px] bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
        <div className="text-center p-6">
          <svg
            className="w-16 h-16 text-red-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <p className="text-red-600 font-medium">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
      {isLoading && (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}
      <div className={`${isLoading ? 'hidden' : 'block'} h-full`}>
        {renderDocument()}
      </div>
    </div>
  );
};

export default DocumentViewer; 