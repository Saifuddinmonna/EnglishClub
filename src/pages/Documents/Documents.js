import React, { useState } from 'react';
import DocumentViewer from './components/DocumentViewer';
import AddDocument from './components/AddDocument';
import { DocumentTextIcon, AcademicCapIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const Documents = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [showAddDocument, setShowAddDocument] = useState(false);
  const [studyMaterials, setStudyMaterials] = useState([
    {
      id: 1,
      title: '3 Forms of Verb - Expanded List (PDF)',
      description: 'Complete list of verbs in three forms for freehand writing practice - PDF version',
      icon: BookOpenIcon,
      category: 'Vocabulary',
      documentUrl: '/documents/vocabularyPdfs/3 forms of verb verbs for freehand writing (Expanded List).pdf'
    },
    {
      id: 2,
      title: '3 Forms of Verb - Expanded List (DOCX)',
      description: 'Complete list of verbs in three forms for freehand writing practice - Editable DOCX version',
      icon: DocumentTextIcon,
      category: 'Vocabulary',
      documentUrl: '/documents/vocabularyPdfs/3 forms of verb verbs for freehand writing (Expanded List).docx'
    },
    {
      id: 3,
      title: 'Completing a Story',
      description: 'Story completion exercise and examples',
      icon: DocumentTextIcon,
      category: 'Writing',
      documentUrl: '/documents/vocabularyPdfs/Completing a Story (AutoRecovered).xml'
    },
    {
      id: 4,
      title: 'Story Completion Template',
      description: 'Word template for story completion exercises',
      icon: DocumentTextIcon,
      category: 'Writing',
      documentUrl: '/documents/vocabularyPdfs/Completing a Story (AutoRecovered).dot'
    },
    {
      id: 5,
      title: 'Story Completion Web Version',
      description: 'HTML version of the story completion exercise',
      icon: DocumentTextIcon,
      category: 'Writing',
      documentUrl: '/documents/vocabularyPdfs/Completing a Story (AutoRecovered).htm'
    },
    {
      id: 6,
      title: 'Vocabulary Lists',
      description: 'Essential vocabulary for different proficiency levels',
      icon: BookOpenIcon,
      category: 'Vocabulary',
      documentUrl: 'https://example.com/vocabulary-lists.pdf'
    },
    {
      id: 7,
      title: 'Writing Templates',
      description: 'Templates and examples for different types of writing',
      icon: AcademicCapIcon,
      category: 'Writing',
      documentUrl: 'https://example.com/writing-templates.docx'
    },
    {
      id: 8,
      title: 'English Grammar PDF',
      description: 'Complete English grammar guide in PDF format',
      icon: BookOpenIcon,
      category: 'PDF',
      documentUrl: '/documents/english-grammar.pdf'
    },
    {
      id: 9,
      title: 'Vocabulary Practice PDF',
      description: 'Practice exercises for vocabulary building',
      icon: BookOpenIcon,
      category: 'PDF',
      documentUrl: '/documents/vocabulary-practice.pdf'
    }
  ]);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const newMaterials = Array.from(files).map((file, index) => {
      const fileType = file.name.split('.').pop().toLowerCase();
      let icon = DocumentTextIcon;
      let category = 'Document';

      if (fileType === 'pdf') {
        icon = BookOpenIcon;
        category = 'PDF';
      } else if (fileType === 'doc' || fileType === 'docx') {
        icon = AcademicCapIcon;
        category = 'Word Document';
      }

      return {
        id: studyMaterials.length + index + 1,
        title: file.name,
        description: `Uploaded ${fileType.toUpperCase()} document`,
        icon: icon,
        category: category,
        documentUrl: URL.createObjectURL(file)
      };
    });

    setStudyMaterials([...studyMaterials, ...newMaterials]);
  };

  const handleAddDocument = (newDocument) => {
    setStudyMaterials([...studyMaterials, newDocument]);
    setShowAddDocument(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Study Materials
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Access our comprehensive collection of study materials to enhance your English learning journey.
          </p>
          <div className="mt-4 space-x-4">
            <button
              onClick={() => setShowAddDocument(!showAddDocument)}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {showAddDocument ? 'Cancel' : 'Add New Document'}
            </button>
            <label className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer">
              Upload Files
              <input
                type="file"
                multiple
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar with document list */}
          <div className="lg:col-span-1 space-y-4">
            {showAddDocument ? (
              <AddDocument onAddDocument={handleAddDocument} />
            ) : (
              studyMaterials.map((material) => {
                const Icon = material.icon;
                return (
                  <div
                    key={material.id}
                    className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                      selectedDocument?.id === material.id
                        ? 'ring-2 ring-blue-500'
                        : 'hover:shadow-xl'
                    }`}
                    onClick={() => setSelectedDocument(material)}
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <Icon className="h-8 w-8 text-blue-600 mr-3" />
                        <h3 className="text-xl font-bold text-gray-900">{material.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{material.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-blue-600 font-medium">{material.category}</span>
                        <span className="text-sm text-gray-500">Click to view</span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Main content area */}
          <div className="lg:col-span-2">
            {selectedDocument ? (
              <DocumentViewer
                documentUrl={selectedDocument.documentUrl}
                title={selectedDocument.title}
              />
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center h-[800px] flex flex-col items-center justify-center">
                <svg
                  className="w-16 h-16 text-gray-400 mb-4"
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Select a Document to View
                </h3>
                <p className="text-gray-600">
                  Choose a study material from the sidebar to start learning
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents; 