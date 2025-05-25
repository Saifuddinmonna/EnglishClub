const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  siteName: {
    type: String,
    required: true,
    default: 'English Club'
  },
  maintenanceMode: {
    type: Boolean,
    default: false
  },
  registrationEnabled: {
    type: Boolean,
    default: true
  },
  maxFileSize: {
    type: Number,
    default: 10, // MB
    min: 1,
    max: 100
  },
  allowedFileTypes: {
    type: [String],
    default: ['pdf', 'doc', 'docx', 'jpg', 'png']
  },
  emailNotifications: {
    enabled: {
      type: Boolean,
      default: true
    },
    smtp: {
      host: String,
      port: Number,
      secure: Boolean,
      auth: {
        user: String,
        pass: String
      }
    },
    templates: {
      welcome: {
        subject: String,
        body: String
      },
      passwordReset: {
        subject: String,
        body: String
      },
      courseEnrollment: {
        subject: String,
        body: String
      }
    }
  },
  security: {
    passwordPolicy: {
      minLength: {
        type: Number,
        default: 8
      },
      requireUppercase: {
        type: Boolean,
        default: true
      },
      requireLowercase: {
        type: Boolean,
        default: true
      },
      requireNumbers: {
        type: Boolean,
        default: true
      },
      requireSpecialChars: {
        type: Boolean,
        default: true
      },
      maxLoginAttempts: {
        type: Number,
        default: 5
      },
      lockoutDuration: {
        type: Number,
        default: 30 // minutes
      }
    },
    sessionTimeout: {
      type: Number,
      default: 60 // minutes
    },
    requireEmailVerification: {
      type: Boolean,
      default: true
    }
  },
  appearance: {
    theme: {
      primary: {
        type: String,
        default: '#3B82F6' // blue-500
      },
      secondary: {
        type: String,
        default: '#6B7280' // gray-500
      },
      accent: {
        type: String,
        default: '#10B981' // emerald-500
      }
    },
    logo: {
      url: String,
      alt: String
    },
    favicon: String
  },
  social: {
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String
  },
  analytics: {
    googleAnalyticsId: String,
    facebookPixelId: String
  },
  metadata: {
    lastModifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    version: {
      type: Number,
      default: 1
    }
  }
}, {
  timestamps: true
});

// Ensure only one settings document exists
settingsSchema.statics.getSettings = async function() {
  let settings = await this.findOne();
  if (!settings) {
    settings = await this.create({});
  }
  return settings;
};

// Method to update settings
settingsSchema.methods.updateSettings = async function(updates) {
  Object.keys(updates).forEach(key => {
    if (this.schema.paths[key]) {
      this[key] = updates[key];
    }
  });
  
  this.metadata.version += 1;
  await this.save();
};

// Method to toggle maintenance mode
settingsSchema.methods.toggleMaintenanceMode = async function() {
  this.maintenanceMode = !this.maintenanceMode;
  await this.save();
  return this.maintenanceMode;
};

// Method to update email templates
settingsSchema.methods.updateEmailTemplate = async function(templateName, subject, body) {
  if (!this.emailNotifications.templates[templateName]) {
    throw new Error('Invalid template name');
  }

  this.emailNotifications.templates[templateName] = {
    subject,
    body
  };

  await this.save();
};

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings; 