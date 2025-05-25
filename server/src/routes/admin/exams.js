const express = require('express');
const { body, validationResult } = require('express-validator');
const Exam = require('../../models/Exam');
const { auth, checkRole } = require('../../middleware/auth');

const router = express.Router();

// Middleware to ensure admin access
router.use(auth, checkRole(['admin']));

// Create a new exam
router.post('/', [
  body('type').isIn(['SSC', 'HSC', 'BCS', 'University Admission', 'IELTS']),
  body('title').notEmpty(),
  body('description').notEmpty(),
  body('syllabus').notEmpty(),
  body('duration').isInt({ min: 1 }),
  body('totalMarks').isInt({ min: 1 }),
  body('passingMarks').isInt({ min: 1 }),
  body('questions').isArray().notEmpty(),
  body('questions.*.text').notEmpty(),
  body('questions.*.options').isArray().notEmpty(),
  body('questions.*.correctAnswer').notEmpty(),
  body('questions.*.explanation').notEmpty(),
  body('questions.*.marks').isInt({ min: 1 }),
  body('questions.*.category').isIn(['grammar', 'vocabulary', 'reading', 'writing', 'listening', 'speaking']),
  body('questions.*.difficulty').isIn(['easy', 'medium', 'hard'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const exam = new Exam(req.body);
    await exam.save();
    res.status(201).json(exam);
  } catch (error) {
    res.status(500).json({ message: 'Error creating exam' });
  }
});

// Update an exam
router.put('/:id', [
  body('type').optional().isIn(['SSC', 'HSC', 'BCS', 'University Admission', 'IELTS']),
  body('title').optional().notEmpty(),
  body('description').optional().notEmpty(),
  body('syllabus').optional().notEmpty(),
  body('duration').optional().isInt({ min: 1 }),
  body('totalMarks').optional().isInt({ min: 1 }),
  body('passingMarks').optional().isInt({ min: 1 }),
  body('isActive').optional().isBoolean()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const exam = await Exam.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    res.json(exam);
  } catch (error) {
    res.status(500).json({ message: 'Error updating exam' });
  }
});

// Delete an exam
router.delete('/:id', async (req, res) => {
  try {
    const exam = await Exam.findByIdAndDelete(req.params.id);
    
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    
    res.json({ message: 'Exam deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting exam' });
  }
});

// Add questions to an exam
router.post('/:id/questions', [
  body('questions').isArray().notEmpty(),
  body('questions.*.text').notEmpty(),
  body('questions.*.options').isArray().notEmpty(),
  body('questions.*.correctAnswer').notEmpty(),
  body('questions.*.explanation').notEmpty(),
  body('questions.*.marks').isInt({ min: 1 }),
  body('questions.*.category').isIn(['grammar', 'vocabulary', 'reading', 'writing', 'listening', 'speaking']),
  body('questions.*.difficulty').isIn(['easy', 'medium', 'hard'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const exam = await Exam.findByIdAndUpdate(
      req.params.id,
      { $push: { questions: { $each: req.body.questions } } },
      { new: true, runValidators: true }
    );

    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    res.json(exam);
  } catch (error) {
    res.status(500).json({ message: 'Error adding questions' });
  }
});

// Update a question in an exam
router.put('/:examId/questions/:questionId', [
  body('text').optional().notEmpty(),
  body('options').optional().isArray().notEmpty(),
  body('correctAnswer').optional().notEmpty(),
  body('explanation').optional().notEmpty(),
  body('marks').optional().isInt({ min: 1 }),
  body('category').optional().isIn(['grammar', 'vocabulary', 'reading', 'writing', 'listening', 'speaking']),
  body('difficulty').optional().isIn(['easy', 'medium', 'hard'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const exam = await Exam.findById(req.params.examId);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    const question = exam.questions.id(req.params.questionId);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    Object.assign(question, req.body);
    await exam.save();

    res.json(exam);
  } catch (error) {
    res.status(500).json({ message: 'Error updating question' });
  }
});

// Delete a question from an exam
router.delete('/:examId/questions/:questionId', async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.examId);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    exam.questions.pull(req.params.questionId);
    await exam.save();

    res.json(exam);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting question' });
  }
});

// Get exam statistics
router.get('/statistics', async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const query = {};
    
    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) query.createdAt.$gte = new Date(startDate);
      if (endDate) query.createdAt.$lte = new Date(endDate);
    }
    
    const statistics = await Exam.aggregate([
      { $match: query },
      {
        $group: {
          _id: '$type',
          totalExams: { $sum: 1 },
          totalQuestions: { $sum: { $size: '$questions' } },
          averageQuestions: { $avg: { $size: '$questions' } },
          totalAttempts: { $sum: { $size: '$results' } },
          averageScore: { $avg: { $avg: '$results.score' } },
          passRate: {
            $avg: {
              $cond: [
                { $gt: [{ $size: '$results' }, 0] },
                {
                  $divide: [
                    {
                      $size: {
                        $filter: {
                          input: '$results',
                          as: 'result',
                          cond: { $gte: ['$$result.score', '$passingMarks'] }
                        }
                      }
                    },
                    { $size: '$results' }
                  ]
                },
                0
              ]
            }
          }
        }
      }
    ]);
    
    res.json(statistics);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching exam statistics' });
  }
});

module.exports = router; 