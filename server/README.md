# English Club Server

This is the backend server for the English Club application, built with Node.js, Express, and MongoDB.

## Features

- User authentication and authorization
- Role-based access control (Admin, Teacher, Student, Guest)
- Course management
- Document management
- Student recognition system

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Setup

1. Clone the repository
2. Navigate to the server directory:
   ```bash
   cd server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the server directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/english-club
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   ```
5. Start MongoDB service
6. Start the server:
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Authentication
- POST `/api/auth/signup` - Register a new user
- POST `/api/auth/signin` - Login user
- GET `/api/auth/me` - Get current user
- POST `/api/auth/logout` - Logout user

### Users
- GET `/api/users` - Get all users (admin only)
- GET `/api/users/:id` - Get user by ID
- PUT `/api/users/:id` - Update user
- DELETE `/api/users/:id` - Delete user (admin only)
- PUT `/api/users/:id/toggle-recognition` - Toggle student recognition (admin only)

### Courses
- GET `/api/courses` - Get all courses
- GET `/api/courses/:id` - Get course by ID
- POST `/api/courses` - Create course (teachers only)
- PUT `/api/courses/:id` - Update course
- DELETE `/api/courses/:id` - Delete course
- POST `/api/courses/:id/enroll` - Enroll in course (students only)
- POST `/api/courses/:id/unenroll` - Unenroll from course (students only)

### Documents
- GET `/api/documents` - Get all documents
- GET `/api/documents/:id` - Get document by ID
- POST `/api/documents` - Create document (teachers only)
- PUT `/api/documents/:id` - Update document
- DELETE `/api/documents/:id` - Delete document

## Error Handling

The API uses standard HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Security

- Passwords are hashed using bcrypt
- JWT tokens are used for authentication
- Role-based access control is implemented
- Input validation using express-validator
- CORS is enabled for the frontend application

## Development

To run the server in development mode with auto-reload:
```bash
npm run dev
```

## Production

To run the server in production mode:
```bash
npm start
```

## License

MIT 