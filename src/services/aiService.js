// src/services/aiService.js
import { GEMINI_API_KEY, GEMINI_API_URL } from '../config/aiConfig';

const generateAIResponse = async (prompt) => {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error('Failed to generate AI response');
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('AI Service Error:', error);
    throw error;
  }
};

export const generateGrammarCorrection = async (text) => {
  const prompt = `Please correct the grammar in the following text and explain the corrections: ${text}`;
  return generateAIResponse(prompt);
};

export const generateVocabularySuggestions = async (text) => {
  const prompt = `Please suggest better vocabulary words for the following text and explain why they are better: ${text}`;
  return generateAIResponse(prompt);
};

export const generateWritingImprovement = async (text) => {
  const prompt = `Please improve the following text to make it more professional and engaging: ${text}`;
  return generateAIResponse(prompt);
};

export const generatePracticeQuestions = async (topic, level) => {
  const prompt = `Generate 5 practice questions about ${topic} for ${level} level English learners. Include the answers.`;
  return generateAIResponse(prompt);
};

export const testAIConnection = async () => {
  try {
    await generateAIResponse('Test connection');
    return true;
  } catch (error) {
    console.error('AI Connection Test Failed:', error);
    throw new Error('Failed to connect to AI service');
  }
};