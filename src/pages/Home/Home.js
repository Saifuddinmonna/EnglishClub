import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { FaGraduationCap, FaUsers, FaCertificate, FaGlobe } from 'react-icons/fa';
import StudentProfiles from '../Students/StudentProfiles/StudentProfiles';

const carouselItems = [
  {
    image: '/images/english-class-bd.jpg',
    title: 'Master English in Bangladesh',
    description: 'Join our expert-led classes designed specifically for Bangladeshi learners. Learn from native speakers and experienced local teachers.',
    gradient: 'from-blue-600/80 to-purple-600/80'
  },
  {
    image: '/images/ielts-preparation.jpg',
    title: 'IELTS & TOEFL Preparation',
    description: 'Specialized courses for Bangladeshi students preparing for international exams. Achieve your dream score with our proven methods.',
    gradient: 'from-green-600/80 to-teal-600/80'
  },
  {
    image: '/images/business-english.jpg',
    title: 'Business English for Professionals',
    description: 'Enhance your career prospects with our business English courses tailored for Bangladesh\'s corporate environment.',
    gradient: 'from-red-600/80 to-orange-600/80'
  }
];

const courses = [
  {
    id: 1,
    title: "Basic English",
    level: "Beginner",
    duration: "8 weeks",
    description: "Learn the fundamentals of English language",
    price: 6000,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60'
  },
  
  {
    id: 3,
    title: "Advanced Communication",
    level: "Advanced",
    duration: "10 weeks",
    description: "Enhance your speaking and writing skills",
    price: 15000,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 4,
    title: "SSC English",
    level: "Intermediate",
    duration: "6 months",
    description: "Comprehensive English course for SSC students. Covers grammar, composition, and literature.",
    price: 8000,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 5,
    title: "HSC English",
    level: "Advanced",
    duration: "6 months",
    description: "Advanced English course for HSC students. Focus on advanced grammar, literature, and composition.",
    price: 10000,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 6,
    title: "BCS English",
    level: "Advanced",
    duration: "6 months",
    description: "Specialized English course for BCS exam preparation. Focus on grammar, vocabulary, and comprehension skills.",
    price: 15000,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 7,
    title: "Academic English",
    level: "Advanced",
    duration: "4 months",
    description: "Prepare for higher education with our academic English course. Perfect for university-bound students.",
    price: 18000,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60'
  }
];

const stats = [
  { icon: FaGraduationCap, value: '10,000+', label: 'Students Trained' },
  { icon: FaUsers, value: '50+', label: 'Expert Teachers' },
  { icon: FaCertificate, value: '95%', label: 'Success Rate' },
  { icon: FaGlobe, value: '15+', label: 'Countries' }
];

const studentTestimonials = [
  {
    id: 1,
    name: "Rahima Akter",
    achievement: "IELTS 7.5",
    image: "/images/student/student-1.jpg",
    quote: "The personalized attention and expert guidance helped me achieve my dream IELTS score. The teachers are incredibly supportive!",
    course: "IELTS Preparation"
  },
  {
    id: 2,
    name: "Mohammad Fahim",
    achievement: "BCS Cadre",
    image: "/images/student/student-2.jpg",
    quote: "The BCS English course was comprehensive and well-structured. It played a crucial role in my BCS success.",
    course: "BCS English"
  },
  {
    id: 3,
    name: "Tahmina Rahman",
    achievement: "HSC A+",
    image: "/images/student/student-3.jpg",
    quote: "The HSC English course helped me understand complex literature and improve my writing skills significantly.",
    course: "HSC English"
  },
  {
    id: 4,
    name: "Sakib Hasan",
    achievement: "SSC A+",
    image: "/images/student/student-4.jpg",
    quote: "The structured approach and regular practice tests made English my strongest subject in SSC.",
    course: "SSC English"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="space-y-16 animate-fadeIn">
      {/* Hero Banner Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 transition-opacity duration-500 ease-in-out"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          <img
            src={carouselItems[currentSlide].image}
            alt={carouselItems[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${carouselItems[currentSlide].gradient}`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4 transform transition-all duration-500 ease-out">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {carouselItems[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                {carouselItems[currentSlide].description}
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all"
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all"
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform transition-all duration-500 hover:scale-105"
              >
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 transform transition-all duration-500">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Popular English Courses in Bangladesh
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Join thousands of successful Bangladeshi students who have improved their English skills with our specialized courses. 
            Whether you're preparing for IELTS, looking to enhance your business communication, or starting your English learning journey, 
            we have the perfect course for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="course-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col">
                <div className="relative group h-48">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=60';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-blue-600">৳{course.price.toLocaleString()}</p>
                    <div className="text-sm text-gray-500">
                      <span className="mr-4">⏱️ {course.duration}</span>
                      <span>📚 {course.level}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">
            Explore All Courses
          </button>
        </div>

        <StudentProfiles />
      </section>
    </div>
  );
} 