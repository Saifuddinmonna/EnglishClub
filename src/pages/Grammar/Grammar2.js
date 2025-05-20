import React from 'react';

const Grammar = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Grammar Lessons</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">Basic Grammar</h2>
          <ul className="space-y-2">
            <li className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
              Parts of Speech
            </li>
            <li className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
              Tenses
            </li>
            <li className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
              Sentence Structure
            </li>
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">Advanced Grammar</h2>
          <ul className="space-y-2">
            <li className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
              Conditionals
            </li>
            <li className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
              Reported Speech
            </li>
            <li className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
              Passive Voice
            </li>
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">Practice Tests</h2>
          <div className="space-y-4">
            <button className="btn btn-primary w-full">Grammar Quiz</button>
            <button className="btn btn-primary w-full">Error Correction</button>
            <button className="btn btn-primary w-full">Sentence Formation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grammar; 