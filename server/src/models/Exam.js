const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  options: [{
    type: String,
    required: true
  }],
  correctAnswer: {
    type: String,
    required: true
  },
  explanation: {
    type: String,
    required: true
  },
  marks: {
    type: Number,
    required: true,
    default: 1
  },
  category: {
    type: String,
    required: true,
    enum: ['grammar', 'vocabulary', 'reading', 'writing', 'listening', 'speaking']
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['easy', 'medium', 'hard']
  }
});

const resultSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  totalMarks: {
    type: Number,
    required: true
  },
  answers: [{
    type: String,
    required: true
  }],
  results: [{
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question'
    },
    isCorrect: {
      type: Boolean,
      required: true
    },
    correctAnswer: {
      type: String,
      required: true
    }
  }],
  completedAt: {
    type: Date,
    default: Date.now
  }
});

const examSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['SSC', 'HSC', 'BCS', 'University Admission', 'IELTS']
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  syllabus: {
    type: String,
    required: true
  },
  duration: {
    type: Number, // in minutes
    required: true
  },
  totalMarks: {
    type: Number,
    required: true
  },
  passingMarks: {
    type: Number,
    required: true
  },
  questions: [questionSchema],
  results: [resultSchema],
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt timestamp before saving
examSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Add indexes for better query performance
examSchema.index({ type: 1 });
examSchema.index({ 'questions.category': 1 });
examSchema.index({ 'questions.difficulty': 1 });
examSchema.index({ 'results.user': 1 });
examSchema.index({ 'results.completedAt': -1 });

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam; 