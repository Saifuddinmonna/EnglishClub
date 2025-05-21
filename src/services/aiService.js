import axios from 'axios';
import { API_BASE_URL } from '../config';

// Test AI connection
export const testAIConnection = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/ai/test`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to connect to AI service');
  }
};

// Generate grammar correction
export const generateGrammarCorrection = async (text) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ai/grammar`, { text });
    return response.data.correction;
  } catch (error) {
    throw new Error('Failed to generate grammar correction');
  }
};

// Generate vocabulary suggestions
export const generateVocabularySuggestions = async (text) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ai/vocabulary`, { text });
    return response.data.suggestions;
  } catch (error) {
    throw new Error('Failed to generate vocabulary suggestions');
  }
};

// Generate writing improvement
export const generateWritingImprovement = async (text) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ai/writing`, { text });
    return response.data.improvement;
  } catch (error) {
    throw new Error('Failed to generate writing improvement');
  }
};

// Generate practice questions
export const generatePracticeQuestions = async (topic, level) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ai/practice`, { topic, level });
    return response.data.questions;
  } catch (error) {
    throw new Error('Failed to generate practice questions');
  }
}; 