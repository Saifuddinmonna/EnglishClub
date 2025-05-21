import React from 'react';
import { DocumentTextIcon, AcademicCapIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const Documents = () => {
  const studyMaterials = [
    {
      id: 1,
      title: 'Grammar Guide',
      description: 'Comprehensive guide to English grammar rules and usage',
      icon: DocumentTextIcon,
      category: 'Grammar'
    },
    {
      id: 2,
      title: 'Vocabulary Lists',
      description: 'Essential vocabulary for different proficiency levels',
      icon: BookOpenIcon,
      category: 'Vocabulary'
    },
    {
      id: 3,
      title: 'Writing Templates',
      description: 'Templates and examples for different types of writing',
      icon: AcademicCapIcon,
      category: 'Writing'
    }
  ];

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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studyMaterials.map((material) => {
            const Icon = material.icon;
            return (
              <div key={material.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{material.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{material.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-600 font-medium">{material.category}</span>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Documents; 