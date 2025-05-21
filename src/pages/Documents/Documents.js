import React, { useState } from 'react';
import DocumentViewer from '../../components/DocumentViewer/DocumentViewer';

const Documents = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const documents = [
    {
      id: 1,
      title: 'Cv',
      description: 'Comprehensive guide to English grammar rules and usage',
      type: 'doc',
      url: 'https://docs.google.com/document/d/1mPULAHvmf0eTkjd-ltx5aDlEt_S_A6hL/edit?usp=sharing&ouid=106856683926414141088&rtpof=true&sd=true'
    },
    {
      id: 2,
      title: '3 Forms of Verb',
      description: 'Complete list of verb forms for practice',
      type: 'docx',
      url: '/documents/3 forms of verb verbs for freehand writing (Expanded List).docx'
    },
    {
      id: 3,
      title: 'Writing Tips',
      description: 'Tips and tricks for better English writing',
      type: 'pdf',
      url: '/documents/writing-tips.pdf'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Study Materials</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Document List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Documents</h2>
            <div className="space-y-4">
              {documents.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => setSelectedDocument(doc)}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    selectedDocument?.id === doc.id
                      ? 'bg-blue-50 border-blue-500'
                      : 'bg-gray-50 hover:bg-gray-100 border-transparent'
                  } border-2`}
                >
                  <div className="flex items-center">
                    <div className={`p-2 rounded-lg mr-3 ${
                      doc.type === 'pdf' ? 'bg-red-100' : 'bg-blue-100'
                    }`}>
                      <svg
                        className={`w-6 h-6 ${
                          doc.type === 'pdf' ? 'text-red-600' : 'text-blue-600'
                        }`}
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
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{doc.title}</h3>
                      <p className="text-sm text-gray-600">{doc.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Document Viewer */}
        <div className="lg:col-span-2">
          {selectedDocument ? (
            <DocumentViewer documentUrl={selectedDocument.url} />
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-4"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Select a Document
              </h3>
              <p className="text-gray-600">
                Choose a document from the list to view its contents
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Documents; 