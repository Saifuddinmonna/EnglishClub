import React from 'react';

const allStudents = [
  {
    id: 1,
    name: "Rahima Akter",
    achievement: "IELTS 7.5",
    image: "/images/student/student-1.jpg",
    quote: "The personalized attention and expert guidance helped me achieve my dream IELTS score. The teachers are incredibly supportive!",
    course: "IELTS Preparation",
    year: "2023"
  },
  {
    id: 2,
    name: "Mohammad Fahim",
    achievement: "BCS Cadre",
    image: "/images/student/student-2.jpg",
    quote: "The BCS English course was comprehensive and well-structured. It played a crucial role in my BCS success.",
    course: "BCS English",
    year: "2023"
  },
  {
    id: 3,
    name: "Tahmina Rahman",
    achievement: "HSC A+",
    image: "/images/student/student-3.jpg",
    quote: "The HSC English course helped me understand complex literature and improve my writing skills significantly.",
    course: "HSC English",
    year: "2023"
  },
  {
    id: 4,
    name: "Sakib Hasan",
    achievement: "SSC A+",
    image: "/images/student/student-4.jpg",
    quote: "The structured approach and regular practice tests made English my strongest subject in SSC.",
    course: "SSC English",
    year: "2023"
  },
  // Add more students here
];

const Students = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Our Success Stories
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Discover how our students have transformed their lives through our English courses.
            Each story is a testament to dedication, hard work, and the right guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=60';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{student.name}</h3>
                  <p className="text-sm text-blue-200">{student.achievement}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 italic">"{student.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-blue-600 font-semibold">{student.course}</span>
                    <p className="text-sm text-gray-500 mt-1">Graduated: {student.year}</p>
                  </div>
                  <div className="flex space-x-2">
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Students; 