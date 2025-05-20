import React from 'react';

const Writings = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Writing Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">Writing Types</h2>
          <ul className="space-y-2">
            <li className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
              Essays
            </li>
            <li className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
              Letters
            </li>
            <li className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
              Reports
            </li>
            <li className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
              Creative Writing
            </li>
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">Writing Tools</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
              <h3 className="font-semibold mb-2">Writing Prompts</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Get daily writing prompts to practice your skills
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
              <h3 className="font-semibold mb-2">Writing Templates</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Access templates for different types of writing
              </p>
            </div>
            <button className="btn btn-primary w-full">Submit Your Writing</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writings; 