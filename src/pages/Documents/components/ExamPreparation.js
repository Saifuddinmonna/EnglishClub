import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/24/outline';

const ExamPreparation = ({ selectedFile, onSelectFile, isPremium = false }) => {
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  const handleFileSelect = (file) => {
    if (file.isPremium && !isPremium) {
      setShowPremiumModal(true);
      return;
    }
    onSelectFile(file);
  };

  return (
    <div className="space-y-4">
      {/* Premium Content Modal */}
      {showPremiumModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex items-center justify-center mb-4">
              <LockClosedIcon className="w-12 h-12 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Premium Content</h3>
            <p className="text-gray-600 text-center mb-4">
              This content is available for premium members only. Upgrade your account to access:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Full-length mock tests</li>
              <li>Detailed analysis and feedback</li>
              <li>Expert guidance and tips</li>
              <li>Practice materials and resources</li>
            </ul>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowPremiumModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
              <button
                onClick={() => {
                  // Handle premium upgrade
                  setShowPremiumModal(false);
                }}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
              >
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* File Content */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">{selectedFile.name}</h2>
        {selectedFile.isPremium && !isPremium ? (
          <div className="text-center py-8">
            <LockClosedIcon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">This content is available for premium members only.</p>
            <button
              onClick={() => setShowPremiumModal(true)}
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            >
              Upgrade to Premium
            </button>
          </div>
        ) : (
          <div className="prose max-w-none">
            {/* Content will be loaded here */}
            <iframe
              src={`${selectedFile.path}/${selectedFile.file}`}
              className="w-full h-[600px] border-0"
              title={selectedFile.name}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamPreparation; 