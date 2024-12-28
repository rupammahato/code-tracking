'use client'

import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#091F46] to-[#37729C] text-[#E9E4DE]">
      <div className="text-center space-y-8">
        <div className="animate-pulse">
          <h1 className="text-6xl font-extrabold tracking-widest mb-4">Coming Soon</h1>
        </div>
        <div>
          <p className="italic text-lg text-[#EFBF6A]">Stay tuned for something amazing!</p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
