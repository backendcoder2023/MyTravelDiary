import React from 'react';

const FeedbackForm = () => {
  return (
    <div className="min-h-screen bg-green-600 flex items-center justify-center">
      <div className="bg-green-200 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Rate your overall satisfaction with our fitness program</h2>
        <div className="flex justify-between mb-4">
          {Array(5).fill().map((_, i) => (
            <span key={i} className="text-3xl cursor-pointer">☆</span>
          ))}
        </div>
        <h2 className="text-xl font-bold mb-4">Did the fitness program meet your wellness goals?</h2>
        <div className="flex justify-between mb-4">
          {Array(5).fill().map((_, i) => (
            <span key={i} className="text-3xl cursor-pointer">☆</span>
          ))}
        </div>
        <h2 className="text-xl font-bold mb-4">How would you rate the expertise of our fitness trainers?</h2>
        <div className="flex justify-between mb-4">
          {Array(5).fill().map((_, i) => (
            <span key={i} className="text-3xl cursor-pointer">☆</span>
          ))}
        </div>
        <h2 className="text-xl font-bold mb-4">Any suggestions for improving our fitness program?</h2>
        <textarea
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
          placeholder="Type your comments here"
        />
        <button className="w-full bg-yellow-400 text-white py-2 rounded-lg shadow-md hover:bg-yellow-500">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FeedbackForm;
