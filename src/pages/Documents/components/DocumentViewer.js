import React, { useState } from 'react';
import { ArrowsPointingOutIcon, ArrowsPointingInIcon } from '@heroicons/react/24/outline';

const DocumentViewer = ({ documentUrl, title }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Convert regular Google Drive URL to preview URL
  const getPreviewUrl = (url) => {
    if (!url) return '';
    
    // Handle PDF files
    if (url.toLowerCase().endsWith('.pdf')) {
      return url;
    }
    
    // Handle MS Word files and templates
    if (url.toLowerCase().endsWith('.doc') || 
        url.toLowerCase().endsWith('.docx') || 
        url.toLowerCase().endsWith('.dot')) {
      // Get the absolute URL for the document
      const absoluteUrl = window.location.origin + url;
      return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(absoluteUrl)}`;
    }

    // Handle XML files
    if (url.toLowerCase().endsWith('.xml')) {
      return url;
    }

    // Handle HTML/HTM files
    if (url.toLowerCase().endsWith('.html') || url.toLowerCase().endsWith('.htm')) {
      return url;
    }
    
    // Handle Google Drive URLs
    const fileId = url.match(/[-\w]{25,}/);
    if (!fileId) return url;
    return `https://docs.google.com/document/d/${fileId}/preview`;
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={`${isFullScreen ? 'fixed inset-0 z-50 bg-white' : 'w-full h-[800px]'} bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300`}>
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2>
        <button
          onClick={toggleFullScreen}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          title={isFullScreen ? "Exit Full Screen" : "Enter Full Screen"}
        >
          {isFullScreen ? (
            <ArrowsPointingInIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          ) : (
            <ArrowsPointingOutIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>
      <iframe
        src={getPreviewUrl(documentUrl)}
        className={`w-full ${isFullScreen ? 'h-[calc(100vh-4rem)]' : 'h-[calc(100%-4rem)]'}`}
        title={title}
        allow="autoplay"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default DocumentViewer; 