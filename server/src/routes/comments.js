const express = require('express');
const { body, validationResult } = require('express-validator');
const Comment = require('../models/Comment');
const { auth } = require('../middleware/auth');

const router = express.Router();

// Get comments for a course
router.get('/course/:courseId', async (req, res) => {
  try {
    const { courseId } = req.params;
    const { page = 1, limit = 10, sort = '-createdAt' } = req.query;

    const comments = await Comment.find({
      course: courseId,
      parentComment: null,
      isDeleted: false
    })
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .populate('user', 'firstName lastName email')
      .populate({
        path: 'likes',
        select: 'firstName lastName'
      });

    const total = await Comment.countDocuments({
      course: courseId,
      parentComment: null,
      isDeleted: false
    });

    res.json({
      comments,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comments' });
  }
});

// Get replies for a comment
router.get('/:commentId/replies', async (req, res) => {
  try {
    const { commentId } = req.params;
    const { page = 1, limit = 10, sort = 'createdAt' } = req.query;

    const replies = await Comment.find({
      parentComment: commentId,
      isDeleted: false
    })
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .populate('user', 'firstName lastName email')
      .populate({
        path: 'likes',
        select: 'firstName lastName'
      });

    const total = await Comment.countDocuments({
      parentComment: commentId,
      isDeleted: false
    });

    res.json({
      replies,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching replies' });
  }
});

// Create a new comment
router.post('/', auth, [
  body('content').trim().notEmpty().withMessage('Comment content is required'),
  body('courseId').notEmpty().withMessage('Course ID is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { content, courseId, parentCommentId } = req.body;

    const comment = new Comment({
      content,
      user: req.user._id,
      course: courseId,
      parentComment: parentCommentId || null
    });

    await comment.save();
    await comment.populate('user', 'firstName lastName email');

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Error creating comment' });
  }
});

// Update a comment
router.put('/:commentId', auth, [
  body('content').trim().notEmpty().withMessage('Comment content is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { commentId } = req.params;
    const { content } = req.body;

    const comment = await Comment.findOne({
      _id: commentId,
      user: req.user._id,
      isDeleted: false
    });

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    comment.content = content;
    comment.isEdited = true;
    await comment.save();

    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Error updating comment' });
  }
});

// Delete a comment (soft delete)
router.delete('/:commentId', auth, async (req, res) => {
  try {
    const { commentId } = req.params;

    const comment = await Comment.findOne({
      _id: commentId,
      user: req.user._id,
      isDeleted: false
    });

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    comment.isDeleted = true;
    await comment.save();

    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting comment' });
  }
});

// Like/Unlike a comment
router.post('/:commentId/like', auth, async (req, res) => {
  try {
    const { commentId } = req.params;
    const userId = req.user._id;

    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    const likeIndex = comment.likes.indexOf(userId);
    if (likeIndex === -1) {
      comment.likes.push(userId);
    } else {
      comment.likes.splice(likeIndex, 1);
    }

    await comment.save();
    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Error updating like status' });
  }
});

// Get user's comments
router.get('/user/me', auth, async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const comments = await Comment.find({
      user: req.user._id,
      isDeleted: false
    })
      .sort('-createdAt')
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .populate('course', 'title')
      .populate('parentComment', 'content');

    const total = await Comment.countDocuments({
      user: req.user._id,
      isDeleted: false
    });

    res.json({
      comments,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user comments' });
  }
});

module.exports = router; 