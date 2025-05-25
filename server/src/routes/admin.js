const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const Course = require('../models/Course');
const { auth, checkRole } = require('../middleware/auth');

const router = express.Router();

// Middleware to ensure admin access
router.use(auth, checkRole(['admin']));

// Get admin dashboard statistics
router.get('/dashboard', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const activeCourses = await Course.countDocuments({ status: 'active' });
    const contentItems = await Course.countDocuments(); // This should be replaced with actual content count
    const systemHealth = '100%'; // This should be replaced with actual system health check

    res.json({
      stats: {
        totalUsers,
        activeCourses,
        contentItems,
        systemHealth
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dashboard statistics' });
  }
});

// Get all users with pagination and filtering
router.get('/users', async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '', role = '', status = '' } = req.query;
    const query = {};

    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    if (role) query.role = role;
    if (status) query.status = status;

    const users = await User.find(query)
      .select('-password')
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await User.countDocuments(query);

    res.json({
      users,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

// Bulk user actions
router.post('/users/bulk-action', async (req, res) => {
  try {
    const { userIds, action } = req.body;

    switch (action) {
      case 'activate':
        await User.updateMany(
          { _id: { $in: userIds } },
          { $set: { status: 'active' } }
        );
        break;
      case 'deactivate':
        await User.updateMany(
          { _id: { $in: userIds } },
          { $set: { status: 'inactive' } }
        );
        break;
      case 'delete':
        await User.deleteMany({ _id: { $in: userIds } });
        break;
      default:
        return res.status(400).json({ message: 'Invalid action' });
    }

    res.json({ message: 'Bulk action completed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error performing bulk action' });
  }
});

// Update user
router.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, role, status } = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      { firstName, lastName, email, role, status },
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user' });
  }
});

// Delete user
router.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
});

// Get system settings
router.get('/settings', async (req, res) => {
  try {
    // This should fetch from a Settings model/collection
    const settings = {
      siteName: 'English Club',
      maintenanceMode: false,
      registrationEnabled: true,
      maxFileSize: 10, // MB
      allowedFileTypes: ['pdf', 'doc', 'docx', 'jpg', 'png'],
      emailNotifications: true
    };

    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching settings' });
  }
});

// Update system settings
router.put('/settings', async (req, res) => {
  try {
    const {
      siteName,
      maintenanceMode,
      registrationEnabled,
      maxFileSize,
      allowedFileTypes,
      emailNotifications
    } = req.body;

    // This should update a Settings model/collection
    const settings = {
      siteName,
      maintenanceMode,
      registrationEnabled,
      maxFileSize,
      allowedFileTypes,
      emailNotifications
    };

    res.json({ message: 'Settings updated successfully', settings });
  } catch (error) {
    res.status(500).json({ message: 'Error updating settings' });
  }
});

module.exports = router; 