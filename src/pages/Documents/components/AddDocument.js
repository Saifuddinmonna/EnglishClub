import React, { useState } from 'react';
import { DocumentTextIcon, AcademicCapIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const AddDocument = ({ onAddDocument }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Grammar');
  const [documentUrl, setDocumentUrl] = useState('');
  const [icon, setIcon] = useState('DocumentTextIcon');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newDocument = {
      id: Date.now(), // Generate unique ID
      title,
      description,
      category,
      documentUrl,
      icon: icon === 'DocumentTextIcon' ? DocumentTextIcon : 
            icon === 'AcademicCapIcon' ? AcademicCapIcon : BookOpenIcon
    };

    onAddDocument(newDocument);
    
    // Reset form
    setTitle('');
    setDescription('');
    setCategory('Grammar');
    setDocumentUrl('');
    setIcon('DocumentTextIcon');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Document</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Grammar">Grammar</option>
            <option value="Vocabulary">Vocabulary</option>
            <option value="Writing">Writing</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Document URL</label>
          <input
            type="url"
            value={documentUrl}
            onChange={(e) => setDocumentUrl(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter PDF or MS Word document URL"
            required
          />
          <p className="mt-1 text-sm text-gray-500">
            Enter the URL of your PDF (.pdf) or MS Word (.doc, .docx) document
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
          <select
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="DocumentTextIcon">Document</option>
            <option value="AcademicCapIcon">Academic</option>
            <option value="BookOpenIcon">Book</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Document
        </button>
      </form>
    </div>
  );
};

export default AddDocument; 