// src/services/aiService.js
import { API_BASE_URL } from '../config';

const generateAIResponse = async (mode, input, topic, level) => {
  try {
    const response = await fetch(`${API_BASE_URL}/.netlify/functions/generateAiResponse`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming you store the Firebase token in localStorage
      },
      body: JSON.stringify({ mode, input, topic, level })
    });

    if (!response.ok) {
      throw new Error('Failed to generate AI response');
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('AI Service Error:', error);
    throw error;
  }
};

export const generateGrammarCorrection = async (text) => {
  return generateAIResponse('grammar', text);
};

export const generateVocabularySuggestions = async (text) => {
  return generateAIResponse('vocabulary', text);
};

export const generateWritingImprovement = async (text) => {
  return generateAIResponse('writing', text);
};

export const generatePracticeQuestions = async (topic, level) => {
  return generateAIResponse('practice', null, topic, level);
};

export const testAIConnection = async () => {
  return generateAIResponse('test');
};