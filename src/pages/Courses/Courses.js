import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { DEV_TEST_API_BASE_URL } from '../../api/serverApiForTestingInLocalhost';

const API_BASE = `${DEV_TEST_API_BASE_URL}/courses`;

const CATEGORY_OPTIONS = [
  'all',
  'grammar',
  'vocabulary',
  'speaking',
  'listening',
  'reading',
  'writing',
  'business',
  'academic',
  'conversation',
  'exam_preparation',
];

const fetchCourses = async (category) => {
  const params = {};
  if (category && category !== 'all') params.category = category;
  const res = await axios.get(API_BASE, { params });
  return res.data.data;
};

// Course Details Modal Component
const CourseDetails = ({ course, isOpen, onClose }) => {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h2>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                  {course.category?.name || course.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                  {course.level}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  course.status === 'published' 
                    ? 'bg-green-100 text-green-700' 
                    : course.status === 'draft'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {course.status}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Course Image */}
          <div className="mb-6">
            <img 
              src={"https://i.postimg.cc/cHNGVD65/Screenshot-2025-06-27-051850.jpg"} 
              alt={course.title} 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Course Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Course Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-gray-600">Instructor: {course.instructor?.name || course.instructor || 'TBA'}</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">Duration: {course.duration}</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span className="text-gray-600">Price: {course.price === 0 ? 'Free' : `$${course.price}`}</span>
                </div>
                {course.modules && (
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="text-gray-600">{course.modules.length} modules</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Course Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">Created: {new Date(course.createdAt).toLocaleDateString()}</span>
                </div>
                {course.updatedAt && (
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span className="text-gray-600">Updated: {new Date(course.updatedAt).toLocaleDateString()}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Requirements */}
          {course.requirements && course.requirements.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Requirements</h3>
              <ul className="space-y-2">
                {course.requirements.map((req, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Learning Outcomes */}
          {course.learningOutcomes && course.learningOutcomes.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">What you'll learn</h3>
              <ul className="space-y-2">
                {course.learningOutcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Full Description */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Course Description</h3>
            <div 
              className="prose prose-sm max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: course.description || 'No description available.' }}
            />
          </div>

          {/* Modules */}
          {course.modules && course.modules.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Course Modules</h3>
              <div className="space-y-2">
                {course.modules.map((module, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg p-3">
                    <h4 className="font-medium text-gray-900 mb-1">
                      Module {i + 1}: {module.title}
                    </h4>
                    {module.description && (
                      <p className="text-sm text-gray-600">{module.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Enroll Now
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeImageIndex, setActiveImageIndex] = useState({});
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const { data: courses, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['public-courses', selectedCategory],
    queryFn: () => fetchCourses(selectedCategory),
  });

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleImageChange = (courseId, direction) => {
    const course = courses.find(c => c._id === courseId);
    if (!course) return;
    
    const allImages = getAllCourseImages(course);
    if (allImages.length <= 1) return;
    
    setActiveImageIndex(prev => {
      const currentIndex = prev[courseId] || 0;
      let newIndex;
      
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % allImages.length;
      } else {
        newIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
      }
      
      return { ...prev, [courseId]: newIndex };
    });
  };

  const setImageIndex = (courseId, index) => {
    setActiveImageIndex(prev => ({ ...prev, [courseId]: index }));
  };

  const openCourseDetails = (course) => {
    setSelectedCourse(course);
    setIsDetailsOpen(true);
  };

  const closeCourseDetails = () => {
    setIsDetailsOpen(false);
    setSelectedCourse(null);
  };

  // Helper function to get course image
  const getCourseImage = (course) => {
    if (course.images && course.images.length > 0) {
      return course.images[0].url;
    }
    if (course.thumbnail) {
      return course.thumbnail;
    }
    return '/images/course-placeholder.jpg'; // Default placeholder
  };

  // Helper function to get all course images
  const getAllCourseImages = (course) => {
    const images = [];
    
    // Add images from images array
    if (course.images && course.images.length > 0) {
      course.images.forEach(img => {
        if (img.url) {
          images.push(img.url);
        }
      });
    }
    
    // Add thumbnail if it exists
    if (course.thumbnail) {
      images.push(course.thumbnail);
    }
    
    return images;
  };

  // Helper function to format description
  const formatDescription = (description) => {
    if (!description) return '';
    // Remove HTML tags and limit length
    const text = description.replace(/<[^>]*>/g, '');
    return text.length > 150 ? text.substring(0, 150) + '...' : text;
  };

  if (isLoading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
  
  if (isError) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-red-500 text-xl mb-4">{error?.message || 'Failed to fetch courses'}</div>
        <button 
          onClick={() => refetch()} 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Courses</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover comprehensive English learning courses designed to enhance your language skills
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="appearance-none bg-white border-2 border-gray-300 rounded-lg px-6 py-3 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 font-medium"
            >
              {CATEGORY_OPTIONS.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1).replace('_', ' ')}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses && courses.length > 0 ? (
            courses.map((course) => (
              <div key={course._id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Course Image */} 
                <div className="relative h-48 bg-gray-200">
                  {(() => {
                    const allImages = getAllCourseImages(course);
                    const currentIndex = activeImageIndex[course._id] || 0;
                    const currentImage = allImages[currentIndex] || '/images/course-placeholder.jpg';
                    
                    return (
                      <>
                        <img src={"https://i.postimg.cc/cHNGVD65/Screenshot-2025-06-27-051850.jpg"} alt={course.title} className="w-full h-full object-cover" />
                        
                        {/* Navigation Arrows */}
                        {allImages.length > 1 && (
                          <>
                            <button
                              onClick={() => handleImageChange(course._id, 'prev')}
                              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 transition-all"
                            >
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <button
                              onClick={() => handleImageChange(course._id, 'next')}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 transition-all"
                            >
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                            
                            {/* Image Counter */}
                            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                              {currentIndex + 1} / {allImages.length}
                            </div>
                            
                            {/* Image Dots */}
                            {allImages.length > 1 && (
                              <div className="absolute bottom-2 right-2 flex space-x-1">
                                {allImages.map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setImageIndex(course._id, index)}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                      index === currentIndex 
                                        ? 'bg-white' 
                                        : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </>
                    );
                  })()}
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.status === 'published' 
                        ? 'bg-green-100 text-green-800' 
                        : course.status === 'draft'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {course.status}
                    </span>
                  </div>
                  {/* Price Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                      {course.price === 0 ? 'Free' : `$${course.price}`}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  {/* Category and Level */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium">
                      {course.category?.name || course.category}
                    </span>
                    <span className="px-2 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-medium">
                      {course.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {course.title}
                  </h3>

                  {/* Instructor */}
                  <div className="flex items-center mb-3 text-sm text-gray-600">
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {course.instructor?.name || course.instructor || 'Instructor TBA'}
                  </div>

                  {/* Duration */}
                  <div className="flex items-center mb-3 text-sm text-gray-600">
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {formatDescription(course.description)}
                  </p>

                  {/* Requirements */}
                  {course.requirements && course.requirements.length > 0 && (
                    <div className="mb-3">
                      <h4 className="font-semibold text-sm text-gray-900 mb-1">Requirements:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {course.requirements.slice(0, 2).map((req, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-500 mr-1">•</span>
                            {req}
                          </li>
                        ))}
                        {course.requirements.length > 2 && (
                          <li className="text-blue-600 text-xs">+{course.requirements.length - 2} more</li>
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Learning Outcomes */}
                  {course.learningOutcomes && course.learningOutcomes.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-900 mb-1">What you'll learn:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {course.learningOutcomes.slice(0, 2).map((out, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-500 mr-1">✓</span>
                            {out}
                          </li>
                        ))}
                        {course.learningOutcomes.length > 2 && (
                          <li className="text-green-600 text-xs">+{course.learningOutcomes.length - 2} more</li>
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Modules Count */}
                  {course.modules && course.modules.length > 0 && (
                    <div className="flex items-center mb-4 text-sm text-gray-600">
                      <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      {course.modules.length} modules
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button 
                      onClick={() => openCourseDetails(course)}
                      className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                    >
                      View Details
                    </button>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                      Enroll Now
                    </button>
                  </div>

                  {/* Created Date */}
                  <div className="text-xs text-gray-400 mt-3 text-center">
                    Created {new Date(course.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="h-16 w-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600">Try selecting a different category or check back later.</p>
            </div>
          )}
        </div>
      </div>

      {/* Course Details Modal */}
      <CourseDetails 
        course={selectedCourse} 
        isOpen={isDetailsOpen} 
        onClose={closeCourseDetails} 
      />
    </div>
  );
};

export default Courses; 