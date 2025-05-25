const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    required: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  duration: {
    type: Number, // in weeks
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['draft', 'active', 'archived'],
    default: 'draft'
  },
  enrollmentStatus: {
    type: String,
    enum: ['open', 'closed', 'waitlist'],
    default: 'open'
  },
  maxStudents: {
    type: Number,
    default: 50
  },
  currentEnrollment: {
    type: Number,
    default: 0
  },
  prerequisites: [{
    type: String
  }],
  objectives: [{
    type: String
  }],
  syllabus: [{
    week: Number,
    title: String,
    description: String,
    materials: [{
      title: String,
      type: String,
      url: String
    }]
  }],
  materials: [{
    title: String,
    type: String,
    url: String,
    description: String,
    uploadDate: {
      type: Date,
      default: Date.now
    }
  }],
  schedule: {
    startDate: Date,
    endDate: Date,
    sessions: [{
      day: String,
      time: String,
      duration: Number, // in minutes
      type: {
        type: String,
        enum: ['lecture', 'workshop', 'discussion', 'exam']
      }
    }]
  },
  ratings: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    review: String,
    date: {
      type: Date,
      default: Date.now
    }
  }],
  averageRating: {
    type: Number,
    default: 0
  },
  enrolledStudents: [{
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    enrollmentDate: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      enum: ['active', 'completed', 'dropped'],
      default: 'active'
    },
    progress: {
      type: Number,
      default: 0
    },
    lastAccessed: Date
  }],
  metadata: {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    lastModifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    version: {
      type: Number,
      default: 1
    },
    isPublished: {
      type: Boolean,
      default: false
    },
    publishDate: Date
  }
}, {
  timestamps: true
});

// Method to calculate average rating
courseSchema.methods.calculateAverageRating = async function() {
  if (this.ratings.length === 0) {
    this.averageRating = 0;
    return;
  }

  const sum = this.ratings.reduce((acc, curr) => acc + curr.rating, 0);
  this.averageRating = sum / this.ratings.length;
  await this.save();
};

// Method to check if course is full
courseSchema.methods.isFull = function() {
  return this.currentEnrollment >= this.maxStudents;
};

// Method to add student to course
courseSchema.methods.enrollStudent = async function(studentId) {
  if (this.isFull()) {
    throw new Error('Course is full');
  }

  const isAlreadyEnrolled = this.enrolledStudents.some(
    enrollment => enrollment.student.toString() === studentId.toString()
  );

  if (isAlreadyEnrolled) {
    throw new Error('Student is already enrolled');
  }

  this.enrolledStudents.push({
    student: studentId,
    status: 'active'
  });

  this.currentEnrollment += 1;
  await this.save();
};

// Method to remove student from course
courseSchema.methods.unenrollStudent = async function(studentId) {
  const enrollmentIndex = this.enrolledStudents.findIndex(
    enrollment => enrollment.student.toString() === studentId.toString()
  );

  if (enrollmentIndex === -1) {
    throw new Error('Student is not enrolled in this course');
  }

  this.enrolledStudents.splice(enrollmentIndex, 1);
  this.currentEnrollment -= 1;
  await this.save();
};

// Method to update student progress
courseSchema.methods.updateStudentProgress = async function(studentId, progress) {
  const enrollment = this.enrolledStudents.find(
    enrollment => enrollment.student.toString() === studentId.toString()
  );

  if (!enrollment) {
    throw new Error('Student is not enrolled in this course');
  }

  enrollment.progress = progress;
  enrollment.lastAccessed = new Date();
  await this.save();
};

const Course = mongoose.model('Course', courseSchema);

module.exports = Course; 