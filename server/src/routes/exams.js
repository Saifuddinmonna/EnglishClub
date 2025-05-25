const express = require('express');
const { body, validationResult } = require('express-validator');
const Exam = require('../models/Exam');
const { auth, checkRole } = require('../middleware/auth');

const router = express.Router();

// Get all exam types
router.get('/types', async (req, res) => {
  try {
    const examTypes = await Exam.distinct('type');
    res.json(examTypes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching exam types' });
  }
});

// Get exam syllabus by type
router.get('/syllabus/:type', async (req, res) => {
  try {
    const { type } = req.params;
    const syllabus = await Exam.findOne({ type }).select('syllabus');
    
    if (!syllabus) {
      return res.status(404).json({ message: 'Exam syllabus not found' });
    }
    
    res.json(syllabus);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching exam syllabus' });
  }
});

// Get practice questions
router.get('/practice/:type', async (req, res) => {
  try {
    const { type } = req.params;
    const { category, difficulty, limit = 10 } = req.query;
    
    const query = { type };
    if (category) query.category = category;
    if (difficulty) query.difficulty = difficulty;
    
    const questions = await Exam.find(query)
      .select('questions')
      .limit(parseInt(limit));
    
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching practice questions' });
  }
});

// Submit exam answers
router.post('/submit', auth, async (req, res) => {
  try {
    const { examId, answers } = req.body;
    const exam = await Exam.findById(examId);
    
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    
    // Calculate score
    let score = 0;
    const results = [];
    
    exam.questions.forEach((question, index) => {
      const isCorrect = question.correctAnswer === answers[index];
      if (isCorrect) score += question.marks;
      results.push({
        questionId: question._id,
        isCorrect,
        correctAnswer: question.correctAnswer
      });
    });
    
    // Save result
    const result = {
      user: req.user._id,
      exam: examId,
      score,
      totalMarks: exam.totalMarks,
      answers,
      results,
      completedAt: new Date()
    };
    
    await Exam.findByIdAndUpdate(examId, {
      $push: { results }
    });
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error submitting exam' });
  }
});

// Get exam results
router.get('/results', auth, async (req, res) => {
  try {
    const { examType, startDate, endDate } = req.query;
    const query = { user: req.user._id };
    
    if (examType) query['exam.type'] = examType;
    if (startDate || endDate) {
      query.completedAt = {};
      if (startDate) query.completedAt.$gte = new Date(startDate);
      if (endDate) query.completedAt.$lte = new Date(endDate);
    }
    
    const results = await Exam.find(query)
      .sort({ completedAt: -1 })
      .populate('exam', 'type title');
    
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching exam results' });
  }
});

// Get exam analytics
router.get('/analytics', auth, checkRole(['admin', 'teacher']), async (req, res) => {
  try {
    const { examType, startDate, endDate } = req.query;
    const query = {};
    
    if (examType) query['exam.type'] = examType;
    if (startDate || endDate) {
      query.completedAt = {};
      if (startDate) query.completedAt.$gte = new Date(startDate);
      if (endDate) query.completedAt.$lte = new Date(endDate);
    }
    
    const analytics = await Exam.aggregate([
      { $match: query },
      {
        $group: {
          _id: '$exam.type',
          averageScore: { $avg: '$score' },
          highestScore: { $max: '$score' },
          lowestScore: { $min: '$score' },
          totalAttempts: { $sum: 1 },
          passCount: {
            $sum: {
              $cond: [{ $gte: ['$score', '$exam.passingMarks'] }, 1, 0]
            }
          }
        }
      }
    ]);
    
    res.json(analytics);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching exam analytics' });
  }
});

module.exports = router; 