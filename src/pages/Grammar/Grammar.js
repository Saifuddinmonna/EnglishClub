import React from 'react';

const Grammar = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">English Grammar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Grammar Topics */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Parts of Speech</h2>
          <ul className="space-y-2">
            <li>Nouns</li>
            <li>Pronouns</li>
            <li>Verbs</li>
            <li>Adjectives</li>
            <li>Adverbs</li>
            <li>Prepositions</li>
            <li>Conjunctions</li>
            <li>Interjections</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Tenses</h2>
          <ul className="space-y-2">
            <li>Present Simple</li>
            <li>Present Continuous</li>
            <li>Present Perfect</li>
            <li>Past Simple</li>
            <li>Past Continuous</li>
            <li>Past Perfect</li>
            <li>Future Simple</li>
            <li>Future Perfect</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Sentence Structure</h2>
          <ul className="space-y-2">
            <li>Simple Sentences</li>
            <li>Compound Sentences</li>
            <li>Complex Sentences</li>
            <li>Compound-Complex Sentences</li>
            <li>Active Voice</li>
            <li>Passive Voice</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Grammar; 