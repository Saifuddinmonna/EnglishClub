const express = require('express');
const { body, validationResult } = require('express-validator');
const Document = require('../models/Document');
const Course = require('../models/Course');
const { auth, checkRole } = require('../middleware/auth');

const router = express.Router();

// Get all documents (filtered by course and visibility)
router.get('/', auth, async (req, res) => {
  try {
    const query = {};
    
    // Filter by course if provided
    if (req.query.courseId) {
      query.course = req.query.courseId;
    }
    
    // Filter by visibility
    if (req.user.role === 'student') {
      query.$or = [
        { isPublic: true },
        { uploadedBy: req.user._id }
      ];
    }

    const documents = await Document.find(query)
      .populate('uploadedBy', 'firstName lastName email')
      .populate('course', 'title');
    
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching documents' });
  }
});

// Get document by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const document = await Document.findById(req.params.id)
      .populate('uploadedBy', 'firstName lastName email')
      .populate('course', 'title');
    
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }

    // Check if user has access to the document
    if (!document.isPublic && 
        document.uploadedBy._id.toString() !== req.user._id.toString() && 
        req.user.role !== 'admin' && 
        req.user.role !== 'teacher') {
      return res.status(403).json({ message: 'Not authorized to access this document' });
    }
    
    res.json(document);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching document' });
  }
});

// Create document
router.post('/', auth, checkRole(['teacher', 'admin']), [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('description').trim().notEmpty().withMessage('Description is required'),
  body('fileUrl').notEmpty().withMessage('File URL is required'),
  body('fileType').isIn(['pdf', 'doc', 'docx', 'txt', 'image']).withMessage('Invalid file type'),
  body('course').notEmpty().withMessage('Course ID is required'),
  body('isPublic').isBoolean().withMessage('isPublic must be a boolean')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Verify course exists
    const course = await Course.findById(req.body.course);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Verify user is the teacher of the course or admin
    if (req.user.role !== 'admin' && course.teacher.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to add documents to this course' });
    }

    const document = new Document({
      ...req.body,
      uploadedBy: req.user._id
    });

    await document.save();
    res.status(201).json(document);
  } catch (error) {
    res.status(500).json({ message: 'Error creating document' });
  }
});

// Update document
router.put('/:id', auth, [
  body('title').optional().trim().notEmpty(),
  body('description').optional().trim().notEmpty(),
  body('isPublic').optional().isBoolean()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }

    // Only allow teacher or admin to update document
    if (req.user.role !== 'admin' && document.uploadedBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this document' });
    }

    const updates = Object.keys(req.body);
    const allowedUpdates = ['title', 'description', 'isPublic'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
      return res.status(400).json({ message: 'Invalid updates' });
    }

    updates.forEach(update => document[update] = req.body[update]);
    await document.save();

    res.json(document);
  } catch (error) {
    res.status(500).json({ message: 'Error updating document' });
  }
});

// Delete document
router.delete('/:id', auth, async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }

    // Only allow teacher or admin to delete document
    if (req.user.role !== 'admin' && document.uploadedBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this document' });
    }

    await document.remove();
    res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting document' });
  }
});

module.exports = router; 