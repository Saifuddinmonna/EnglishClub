import React from 'react';

const Students = () => {
  const students = [
    {
      id: 1,
      name: "John Doe",
      level: "Intermediate",
      progress: 75,
      lastActive: "2 days ago"
    },
    {
      id: 2,
      name: "Jane Smith",
      level: "Beginner",
      progress: 45,
      lastActive: "1 day ago"
    },
    {
      id: 3,
      name: "Mike Johnson",
      level: "Advanced",
      progress: 90,
      lastActive: "5 days ago"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 gap-6">
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">Student Progress</h2>
          <div className="space-y-4">
            {students.map((student) => (
              <div key={student.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{student.name}</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {student.lastActive}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {student.level}
                  </span>
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${student.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {student.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="btn btn-primary">Add New Student</button>
            <button className="btn btn-secondary">Generate Reports</button>
            <button className="btn btn-secondary">View Attendance</button>
            <button className="btn btn-secondary">Send Notifications</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students; 