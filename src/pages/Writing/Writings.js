import React, { useState, Fragment } from 'react';
import { writingCategories, writingTools } from './WritingData';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  LightBulbIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const Writings = () => {
  const [openCategory, setOpenCategory] = useState(writingCategories[0]?.id || null);

  const toggleCategory = (id) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  const iconMap = {
    AcademicCapIcon,
    BriefcaseIcon,
    LightBulbIcon,
    DocumentTextIcon,
    CheckCircleIcon
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Writing Resources
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore our comprehensive writing resources and tools to enhance your English writing skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Writing Categories */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Writing Categories
              </h2>
              <div className="space-y-6">
                {writingCategories.map((category) => {
                  const IconComponent = iconMap[category.icon];
                  const isOpen = openCategory === category.id;
                  return (
                    <div key={category.id} className="border rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center">
                          {IconComponent && (
                            <IconComponent className="w-6 h-6 text-blue-600 mr-3" />
                          )}
                          <div className="text-left">
                            <h3 className="font-semibold text-gray-900">{category.title}</h3>
                            <p className="text-sm text-gray-600">{category.description}</p>
                          </div>
                        </div>
                        {isOpen ? (
                          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronRightIcon className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="p-4 bg-white">
                          <ul className="space-y-3">
                            {category.tasks.map((task, index) => (
                              <li key={index} className="flex items-start">
                                <span className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-600 rounded-full mr-3"></span>
                                <div>
                                  <h4 className="font-medium text-gray-900">{task.name}</h4>
                                  <p className="text-sm text-gray-600">{task.details}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Writing Tools */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Writing Tools
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {writingTools.map((tool) => {
                  const ToolIcon = iconMap[tool.icon];
                  return (
                    <a
                      key={tool.id}
                      href={tool.link}
                      className="block p-4 rounded-lg border hover:border-blue-500 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start">
                        {ToolIcon && (
                          <ToolIcon className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                        )}
                        <div>
                          <h3 className="font-semibold text-gray-900">{tool.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{tool.description}</p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writings;