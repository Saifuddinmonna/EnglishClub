import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

// Function to get AI response for grammar correction
export const getGrammarCorrection = async (text) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Please correct the following English text and explain the corrections: ${text}`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting grammar correction:', error);
    throw error;
  }
};

// Function to get AI response for vocabulary suggestions
export const getVocabularySuggestions = async (text) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Please suggest better vocabulary words for the following text and explain why they are better: ${text}`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting vocabulary suggestions:', error);
    throw error;
  }
};

// Function to get AI response for writing improvement
export const getWritingImprovement = async (text) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Please improve the following text and explain the improvements: ${text}`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting writing improvement:', error);
    throw error;
  }
};

// Function to get AI response for practice questions
export const getPracticeQuestions = async (topic, level) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Generate 5 practice questions about ${topic} for ${level} level English learners. Include answers.`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting practice questions:', error);
    throw error;
  }
}; 