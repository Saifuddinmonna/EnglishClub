// API Configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// AI Service Configuration
export const AI_CONFIG = {
  maxTokens: 1000,
  temperature: 0.7,
  model: 'gpt-3.5-turbo',
  timeout: 30000, // 30 seconds
};

// Error Messages
export const ERROR_MESSAGES = {
  AI_CONNECTION_FAILED: 'Failed to connect to AI service. Please try again later.',
  AI_SERVICE_UNAVAILABLE: 'AI service is currently unavailable. Please try again later.',
  INVALID_INPUT: 'Please provide valid input.',
  UNAUTHORIZED: 'Please sign in to use the AI assistant.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  AI_CONNECTED: 'Successfully connected to AI service.',
  GENERATION_COMPLETE: 'Generation complete.',
};

// UI Configuration
export const UI_CONFIG = {
  maxInputLength: 5000,
  minInputLength: 10,
  loadingTimeout: 5000,
}; 