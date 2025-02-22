"use client"; // Mark this as a Client Component

import { useState } from 'react';

export default function UpdateModal({ isOpen, onClose, onSave, initialRank, initialPercentile, initialScore }) {
  const [rank, setRank] = useState(initialRank);
  const [percentile, setPercentile] = useState(initialPercentile);
  const [score, setScore] = useState(initialScore);
  const [errors, setErrors] = useState({});
  const [warning, setWarning] = useState(''); // State for the warning message

  // Validate rank
  const validateRank = (value) => {
    if (value !== '' && !/^\d+$/.test(value)) {
      setErrors((prev) => ({ ...prev, rank: 'Rank must be a number.' }));
    } else {
      setErrors((prev) => ({ ...prev, rank: '' }));
    }
  };

  // Validate percentile
  const validatePercentile = (value) => {
    if (value !== '' && (!/^\d+$/.test(value) || value < 1 || value > 100)) {
      setErrors((prev) => ({ ...prev, percentile: 'Percentile must be between 1 and 100.' }));
    } else {
      setErrors((prev) => ({ ...prev, percentile: '' }));
    }
  };

  // Validate score
  const validateScore = (value) => {
    if (value !== '' && (!/^\d+$/.test(value) || value < 1 || value > 15)) {
      setErrors((prev) => ({ ...prev, score: 'Score must be between 1 and 15.' }));
    } else {
      setErrors((prev) => ({ ...prev, score: '' }));
    }
  };

  // Handle focus on next field
  const handleNextFieldFocus = (fieldName) => {
    if (fieldName === 'percentile' && errors.rank) {
      setWarning('Please correct the rank field before proceeding.');
    } else if (fieldName === 'score' && (errors.rank || errors.percentile)) {
      setWarning('Please correct the rank and percentile fields before proceeding.');
    } else {
      setWarning(''); // Clear warning if no errors
    }
  };

  const handleSave = () => {
    // Check if there are any errors
    if (errors.rank || errors.percentile || errors.score) {
      alert('Please fix the errors before saving.');
      return;
    }

    // Pass data to parent component
    onSave({ rank, percentile, score });

    // Close the modal
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[500px] shadow-lg">
        {/* Title */}
        <h2 className="text-xl font-bold mb-6 text-gray-800">Update Scores</h2>

        {/* Warning Message */}
        {warning && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-3 mb-4">
            <p>{warning}</p>
          </div>
        )}

        {/* Rank Input */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            {/* Number Pointer and Label */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">1</span>
              </div>
              <label className="text-gray-600">Update your rank</label>
            </div>

            {/* Input Field */}
            <div className="flex flex-col">
              <input
                type="text"
                value={rank}
                onChange={(e) => {
                  setRank(e.target.value);
                  validateRank(e.target.value);
                }}
                className={`w-40 p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.rank ? 'focus:ring-red-500 border-red-500' : 'focus:ring-blue-500'
                }`}
                placeholder="Enter rank"
              />
              {errors.rank && (
                <p className="text-red-500 text-xs mt-1">{errors.rank}</p>
              )}
            </div>
          </div>
        </div>

        {/* Percentile Input */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            {/* Number Pointer and Label */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">2</span>
              </div>
              <label className="text-gray-600">Update your percentile</label>
            </div>

            {/* Input Field */}
            <div className="flex flex-col">
              <input
                type="text"
                value={percentile}
                onChange={(e) => {
                  setPercentile(e.target.value);
                  validatePercentile(e.target.value);
                }}
                onFocus={() => handleNextFieldFocus('percentile')}
                className={`w-40 p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.percentile ? 'focus:ring-red-500 border-red-500' : 'focus:ring-blue-500'
                }`}
                placeholder="Enter percentile"
                disabled={!!errors.rank} // Disable if rank has an error
              />
              {errors.percentile && (
                <p className="text-red-500 text-xs mt-1">{errors.percentile}</p>
              )}
            </div>
          </div>
        </div>

        {/* Score Input */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            {/* Number Pointer and Label */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">3</span>
              </div>
              <label className="text-gray-600">Update your score</label>
            </div>

            {/* Input Field */}
            <div className="flex flex-col">
              <input
                type="text"
                value={score}
                onChange={(e) => {
                  setScore(e.target.value);
                  validateScore(e.target.value);
                }}
                onFocus={() => handleNextFieldFocus('score')}
                className={`w-40 p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.score ? 'focus:ring-red-500 border-red-500' : 'focus:ring-blue-500'
                }`}
                placeholder="Enter score"
                disabled={!!errors.rank || !!errors.percentile} // Disable if rank or percentile has an error
              />
              {errors.score && (
                <p className="text-red-500 text-xs mt-1">{errors.score}</p>
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-white text-gray-600 px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-100 transition-all duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}