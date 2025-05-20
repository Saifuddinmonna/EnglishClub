import React from 'react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Basic English",
      level: "Beginner",
      duration: "8 weeks",
      description: "Learn the fundamentals of English language"
    },
    {
      id: 2,
      title: "Business English",
      level: "Intermediate",
      duration: "12 weeks",
      description: "Master English for professional settings"
    },
    {
      id: 3,
      title: "Advanced Communication",
      level: "Advanced",
      duration: "10 weeks",
      description: "Enhance your speaking and writing skills"
    },
  
  

  {
    id: 1,
    title: 'BCS English',
    description: 'Specialized English course for BCS exam preparation. Focus on grammar, vocabulary, and comprehension skills.',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=60',
    duration: '3 months',
    level: 'Advanced'
  },
  {
    id: 2,
    title: 'SSC English',
    description: 'Comprehensive English course for SSC students. Covers grammar, composition, and literature.',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60',
    duration: '6 months',
    level: 'Intermediate'
  },
  {
    id: 3,
    title: 'HSC English',
    description: 'Advanced English course for HSC students. Focus on advanced grammar, literature, and composition.',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60',
    duration: '6 months',
    level: 'Advanced'
  },
  {
    id: 4,
    title: 'Basic English',
    description: 'Perfect for beginners. Learn fundamental English skills including basic grammar, vocabulary, and conversation.',
    price: 6000,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60',
    duration: '3 months',
    level: 'Beginner'
  },
  {
    id: 5,
    title: 'Academic English',
    description: 'Prepare for higher education with our academic English course. Perfect for university-bound students.',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60',
    duration: '4 months',
    level: 'Advanced'
  }
];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="card p-6">
            <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {course.level}
              </span>
              <span className="text-gray-600 dark:text-gray-300">
                {course.duration}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {course.description}
            </p>
            <button className="btn btn-primary w-full">Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses; 