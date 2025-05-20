import React from 'react';

const Vocabulary = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Vocabulary Learning</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">Word Lists</h2>
          <ul className="space-y-2">
            <li className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
              Basic Vocabulary
            </li>
            <li className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
              Advanced Vocabulary
            </li>
            <li className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
              Business English
            </li>
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">Practice Exercises</h2>
          <div className="space-y-4">
            <button className="btn btn-primary w-full">Word Matching</button>
            <button className="btn btn-primary w-full">Fill in the Blanks</button>
            <button className="btn btn-primary w-full">Word Definitions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vocabulary; 