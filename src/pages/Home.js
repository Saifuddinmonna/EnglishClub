import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to English Club</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Stay updated with our latest courses and learning materials.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">Featured Courses</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Explore our most popular English learning courses.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">Learning Resources</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Access our comprehensive collection of learning materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home; 