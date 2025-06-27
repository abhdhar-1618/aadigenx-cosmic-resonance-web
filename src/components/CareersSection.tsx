
import React from 'react';

export const CareersSection = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-purple-900/20 via-black to-black">
      <div className="text-center px-4">
        <div className="bg-black/40 backdrop-blur-md rounded-lg p-12 border border-white/10 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            <span className="text-yellow-400">C</span>areers
          </h1>
          <div className="text-2xl md:text-3xl text-white/80 mb-6">
            <span className="font-light">C</span>
            <span className="font-bold">oming </span>
            <span className="font-light">S</span>
            <span className="font-bold">oon</span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-purple-400 mx-auto rounded-full animate-pulse"></div>
          <p className="text-white/60 mt-6 text-lg">
            Opportunities to join our mission of bridging ancient wisdom with future AI are coming soon.
          </p>
        </div>
      </div>
    </div>
  );
};
