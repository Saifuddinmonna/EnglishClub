import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import {
  UserGroupIcon,
  AcademicCapIcon,
  ChartBarIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

const AdminPanel = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { name: 'Total Students', value: '1,234', icon: UserGroupIcon },
    { name: 'Active Courses', value: '12', icon: AcademicCapIcon },
    { name: 'Teachers', value: '45', icon: UserGroupIcon },
    { name: 'Completion Rate', value: '85%', icon: ChartBarIcon },
  ];

  // Simulated student data - in real app, this would come from your backend
  useEffect(() => {
    const mockStudents = [
      { id: 1, email: 'student1@student.edu', firstName: 'John', lastName: 'Doe', isRecognized: false },
      { id: 2, email: 'student2@student.edu', firstName: 'Jane', lastName: 'Smith', isRecognized: true },
      { id: 3, email: 'student3@student.edu', firstName: 'Mike', lastName: 'Johnson', isRecognized: false },
    ];
    setStudents(mockStudents);
    setLoading(false);
  }, []);

  const toggleRecognition = (studentId) => {
    setStudents(students.map(student => 
      student.id === studentId 
        ? { ...student, isRecognized: !student.isRecognized }
        : student
    ));
  };

  const filteredStudents = students.filter(student =>
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Panel - Special Student Management</h1>
        
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search students by name or email..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Students Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {student.firstName} {student.lastName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{student.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      student.isRecognized 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {student.isRecognized ? 'Recognized' : 'Not Recognized'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => toggleRecognition(student.id)}
                      className={`px-4 py-2 rounded-md text-white ${
                        student.isRecognized
                          ? 'bg-red-600 hover:bg-red-700'
                          : 'bg-green-600 hover:bg-green-700'
                      }`}
                    >
                      {student.isRecognized ? 'Remove Recognition' : 'Mark as Special'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Instructions */}
        <div className="mt-8 p-4 bg-blue-50 rounded-md">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">Instructions</h2>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            <li>Use the search bar to find specific students</li>
            <li>Click "Mark as Special" to give a student access to special documents</li>
            <li>Click "Remove Recognition" to revoke special access</li>
            <li>Changes are saved automatically</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 