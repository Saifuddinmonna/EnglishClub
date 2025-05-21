import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {
  generateGrammarCorrection,
  generateVocabularySuggestions,
  generateWritingImprovement,
  generatePracticeQuestions,
  testAIConnection
} from '../../services/aiService';

const AIAssistant = () => {
  const { currentUser } = useAuth();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [mode, setMode] = useState('grammar');
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState('intermediate');
  const [aiStatus, setAiStatus] = useState('checking');

  useEffect(() => {
    if (currentUser) {
      testAI();
    } else {
      setAiStatus('error');
      setError('Please sign in to use the AI assistant');
    }
  }, [currentUser]);

  const testAI = async () => {
    try {
      setAiStatus('checking');
      await testAIConnection();
      setAiStatus('connected');
      setError('');
    } catch (err) {
      console.error('AI Test Failed:', err);
      setAiStatus('error');
      setError(err.message || 'AI service is not available. Please check your connection and try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      setError('Please sign in to use the AI assistant');
      return;
    }
    
    setLoading(true);
    setError('');
    setOutput('');

    try {
      let response;
      switch (mode) {
        case 'grammar':
          response = await generateGrammarCorrection(input);
          break;
        case 'vocabulary':
          response = await generateVocabularySuggestions(input);
          break;
        case 'writing':
          response = await generateWritingImprovement(input);
          break;
        case 'practice':
          response = await generatePracticeQuestions(topic, level);
          break;
        default:
          response = await generateGrammarCorrection(input);
      }
      setOutput(response);
    } catch (err) {
      setError(err.message || 'An error occurred while generating the response. Please try again.');
      console.error('AI Error:', err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI English Learning Assistant
          </h1>
          <p className="text-lg text-gray-600">
            Get instant feedback on your English writing and practice questions
          </p>
          <div className="mt-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
              <span className={`w-2 h-2 rounded-full mr-2 ${
                aiStatus === 'connected' ? 'bg-green-500' :
                aiStatus === 'error' ? 'bg-red-500' :
                'bg-yellow-500'
              }`}></span>
              {aiStatus === 'connected' ? 'AI Connected' :
               aiStatus === 'error' ? 'AI Error' :
               'Checking AI...'}
            </div>
            {aiStatus === 'error' && (
              <div className="mt-2">
                <button
                  onClick={testAI}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Retry Connection
                </button>
                <p className="text-sm text-red-600 mt-1">
                  {error}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <div className="flex space-x-4 mb-4">
              {['grammar', 'vocabulary', 'writing', 'practice'].map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`px-4 py-2 rounded-md ${
                    mode === m
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </button>
              ))}
            </div>

            {mode === 'practice' && (
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Topic
                  </label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="e.g., Present Perfect Tense"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Level
                  </label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode !== 'practice' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Enter your text
                  </label>
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder={
                      mode === 'grammar'
                        ? 'Enter text to check grammar...'
                        : mode === 'vocabulary'
                        ? 'Enter text to get vocabulary suggestions...'
                        : 'Enter text to improve writing...'
                    }
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={loading || (mode !== 'practice' && !input) || (mode === 'practice' && !topic)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400"
              >
                {loading ? 'Generating...' : 'Generate'}
              </button>
            </form>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-md">
              {error}
            </div>
          )}

          {output && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Response:</h3>
              <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap">
                {output}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAssistant; 