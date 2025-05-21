// src/services/aiService.js
import { auth } from '../config/firebase'; // নিশ্চিত করুন আপনার firebase.js থেকে auth এক্সপোর্ট করা আছে

// Netlify Functions এর জন্য পাথ
const API_BASE_PATH = '/.netlify/functions';
const FUNCTION_NAME = 'generateAiResponse'; // আপনার Netlify Function ফাইলের নাম (netlify/functions/generateAiResponse.js)

// Get Firebase ID Token
const getAuthToken = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error('No authenticated user');
    }
    return await user.getIdToken();
  } catch (error) {
    console.error('Error getting auth token:', error);
    throw error;
  }
};

// Generic API call function
const callApi = async (payload) => {
  try {
    const token = await getAuthToken();
    const response = await fetch('/.netlify/functions/generateAiResponse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to get AI response');
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};

// Grammar correction
export const generateGrammarCorrection = async (input) => {
  try {
    return await callApi({
      mode: 'grammar',
      input
    });
  } catch (error) {
    throw new Error('Failed to generate grammar correction');
  }
};

// Vocabulary suggestions
export const generateVocabularySuggestions = async (input) => {
  try {
    return await callApi({
      mode: 'vocabulary',
      input
    });
  } catch (error) {
    throw new Error('Failed to generate vocabulary suggestions');
  }
};

// Writing improvement
export const generateWritingImprovement = async (input) => {
  try {
    return await callApi({
      mode: 'writing',
      input
    });
  } catch (error) {
    throw new Error('Failed to generate writing improvement');
  }
};

// Practice questions
export const generatePracticeQuestions = async (topic, level) => {
  try {
    return await callApi({
      mode: 'practice',
      topic,
      level
    });
  } catch (error) {
    throw new Error('Failed to generate practice questions');
  }
};

// Test AI connection
export const testAIConnection = async () => {
  try {
    return await callApi({
      mode: 'test'
    });
  } catch (error) {
    throw new Error('Failed to test AI connection');
  }
};

// handleAIError ফাংশনটি আর সরাসরি ক্লায়েন্ট-সাইডে SDK এরর হ্যান্ডেল করবে না,
// কারণ এররগুলো এখন নেটওয়ার্ক/API কল থেকে আসবে।
// callApi ফাংশনের ভেতরের এরর হ্যান্ডলিং এবং প্রতিটি ফাংশনের catch ব্লক এটি প্রতিস্থাপন করবে।