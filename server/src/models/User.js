const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'teacher', 'student', 'guest'],
    default: 'guest'
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'suspended'],
    default: 'active'
  },
  lastLogin: {
    type: Date,
    default: null
  },
  profilePicture: {
    type: String,
    default: null
  },
  phoneNumber: {
    type: String,
    trim: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    zipCode: String
  },
  preferences: {
    emailNotifications: {
      type: Boolean,
      default: true
    },
    language: {
      type: String,
      default: 'en'
    },
    theme: {
      type: String,
      default: 'light'
    }
  },
  metadata: {
    registrationDate: {
      type: Date,
      default: Date.now
    },
    lastPasswordChange: {
      type: Date,
      default: Date.now
    },
    failedLoginAttempts: {
      type: Number,
      default: 0
    },
    accountLocked: {
      type: Boolean,
      default: false
    },
    lockExpires: {
      type: Date,
      default: null
    }
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw error;
  }
};

// Method to update last login
userSchema.methods.updateLastLogin = async function() {
  this.lastLogin = new Date();
  await this.save();
};

// Method to increment failed login attempts
userSchema.methods.incrementFailedLoginAttempts = async function() {
  this.metadata.failedLoginAttempts += 1;
  
  // Lock account after 5 failed attempts
  if (this.metadata.failedLoginAttempts >= 5) {
    this.metadata.accountLocked = true;
    this.metadata.lockExpires = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes
  }
  
  await this.save();
};

// Method to reset failed login attempts
userSchema.methods.resetFailedLoginAttempts = async function() {
  this.metadata.failedLoginAttempts = 0;
  this.metadata.accountLocked = false;
  this.metadata.lockExpires = null;
  await this.save();
};

// Method to check if account is locked
userSchema.methods.isAccountLocked = function() {
  if (!this.metadata.accountLocked) return false;
  
  if (this.metadata.lockExpires && this.metadata.lockExpires > new Date()) {
    return true;
  }
  
  // If lock has expired, reset the lock
  this.metadata.accountLocked = false;
  this.metadata.lockExpires = null;
  this.metadata.failedLoginAttempts = 0;
  this.save();
  
  return false;
};

// Method to get public profile
userSchema.methods.getPublicProfile = function() {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

const User = mongoose.model('User', userSchema);

module.exports = User; 