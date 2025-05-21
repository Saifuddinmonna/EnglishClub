// src/services/aiService.js
import { auth } from '../config/firebase'; // নিশ্চিত করুন আপনার firebase.js থেকে auth এক্সপোর্ট করা আছে

// Netlify Functions এর জন্য পাথ
const API_BASE_PATH = '/.netlify/functions';
const FUNCTION_NAME = 'generateAiResponse'; // আপনার Netlify Function ফাইলের নাম (netlify/functions/generateAiResponse.js)
const MAX_RETRIES = 2;
const RETRY_DELAY = 1000; // 1 second

// Get Firebase ID Token with retry logic
const getAuthToken = async (retryCount = 0) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error('Please sign in to use the AI assistant');
    }
    return await user.getIdToken(true); // Force refresh token
  } catch (error) {
    console.error('Error getting auth token:', error);
    if (retryCount < MAX_RETRIES) {
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      return getAuthToken(retryCount + 1);
    }
    throw new Error('Authentication failed. Please try signing in again.');
  }
};

// Generic API call function with retry logic
const callApi = async (payload, retryCount = 0) => {
  try {
    const token = await getAuthToken();
    const response = await fetch(`${API_BASE_PATH}/${FUNCTION_NAME}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      // If unauthorized and we haven't retried yet, try again
      if (response.status === 401 && retryCount < MAX_RETRIES) {
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
        return callApi(payload, retryCount + 1);
      }
      throw new Error(errorData.error || errorData.details || 'Failed to get AI response');
    }

    const data = await response.json();
    if (!data.result) {
      throw new Error('Invalid response from AI service');
    }
    return data.result;
  } catch (error) {
    console.error('API call error:', error);
    if (retryCount < MAX_RETRIES) {
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      return callApi(payload, retryCount + 1);
    }
    throw new Error(error.message || 'Failed to communicate with AI service');
  }
};

// Grammar correction
export const generateGrammarCorrection = async (input) => {
  if (!input || typeof input !== 'string') {
    throw new Error('Please provide valid text for grammar correction');
  }
  return await callApi({
    mode: 'grammar',
    input: input.trim()
  });
};

// Vocabulary suggestions
export const generateVocabularySuggestions = async (input) => {
  if (!input || typeof input !== 'string') {
    throw new Error('Please provide valid text for vocabulary suggestions');
  }
  return await callApi({
    mode: 'vocabulary',
    input: input.trim()
  });
};

// Writing improvement
export const generateWritingImprovement = async (input) => {
  if (!input || typeof input !== 'string') {
    throw new Error('Please provide valid text for writing improvement');
  }
  return await callApi({
    mode: 'writing',
    input: input.trim()
  });
};

// Practice questions
export const generatePracticeQuestions = async (topic, level) => {
  if (!topic || typeof topic !== 'string') {
    throw new Error('Please provide a valid topic');
  }
  if (!level || !['beginner', 'intermediate', 'advanced'].includes(level)) {
    throw new Error('Please select a valid difficulty level');
  }
  return await callApi({
    mode: 'practice',
    topic: topic.trim(),
    level
  });
};

// Test AI connection
export const testAIConnection = async () => {
  return await callApi({
    mode: 'test'
  });
};

// handleAIError ফাংশনটি আর সরাসরি ক্লায়েন্ট-সাইডে SDK এরর হ্যান্ডেল করবে না,
// কারণ এররগুলো এখন নেটওয়ার্ক/API কল থেকে আসবে।
// callApi ফাংশনের ভেতরের এরর হ্যান্ডলিং এবং প্রতিটি ফাংশনের catch ব্লক এটি প্রতিস্থাপন করবে।