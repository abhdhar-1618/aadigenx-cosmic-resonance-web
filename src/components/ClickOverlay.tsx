
import React from 'react';

interface ClickOverlayProps {
  onClick: () => void;
}

export const ClickOverlay = ({ onClick }: ClickOverlayProps) => {
  console.log('ClickOverlay rendered');
  
  return (
    <div 
      className="fixed inset-0 z-40 bg-gradient-to-br from-teal-900/40 via-purple-900/60 to-black/80 backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      {/* Background geometric patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 border border-teal-400/30 rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rotate-12"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 border border-yellow-400/30 -rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-teal-400/30 rotate-45"></div>
      </div>

      {/* Main content container */}
      <div className="text-center z-10 px-4">
        {/* AADIGENX Brand */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider text-gray-400/80 mb-2">
            AADIGENX
          </h1>
        </div>

        {/* Main message */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-light text-white mb-4 tracking-wide">
            Tap to awaken the resonance...
          </h2>
          <p className="text-lg md:text-xl text-gray-300/80 font-light tracking-wider">
            प्राचीनानां निनादः भविष्यस्य संरचना
          </p>
        </div>

        {/* Click instruction */}
        <p className="text-white/60 text-lg animate-pulse">
          Click anywhere to continue
        </p>
      </div>

      {/* Ambient light effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};
