// netlify/functions/generateAiResponse.js
const { GoogleGenerativeAI } = require('@google/generative-ai');
const admin = require('firebase-admin');

// Initialize Firebase Admin
const serviceAccount = JSON.parse(
  Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_BASE64, 'base64').toString()
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Initialize Google AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Get the authorization header
    const authHeader = event.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Unauthorized' })
      };
    }

    // Verify Firebase token
    const token = authHeader.split('Bearer ')[1];
    const decodedToken = await admin.auth().verifyIdToken(token);

    // Parse request body
    const { mode, input, topic, level } = JSON.parse(event.body);

    // Get the appropriate model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    let prompt;
    let response;

    switch (mode) {
      case 'grammar':
        prompt = `Please correct the grammar in the following text and explain the corrections: ${input}`;
        break;
      case 'vocabulary':
        prompt = `Please suggest vocabulary improvements for the following text and explain why: ${input}`;
        break;
      case 'writing':
        prompt = `Please improve the following text and explain the improvements: ${input}`;
        break;
      case 'practice':
        prompt = `Generate ${level} level practice questions about ${topic}`;
        break;
      case 'test':
        return {
          statusCode: 200,
          body: JSON.stringify({ result: 'AI service is active via Netlify Function' })
        };
      default:
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Invalid mode' })
        };
    }

    // Generate content
    const result = await model.generateContent(prompt);
    response = result.response.text();

    return {
      statusCode: 200,
      body: JSON.stringify({ result: response })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Internal server error',
        details: error.message 
      })
    };
  }
};