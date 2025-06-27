
import React from 'react';

interface ClickOverlayProps {
  onClick: () => void;
}

export const ClickOverlay = ({ onClick }: ClickOverlayProps) => {
  console.log('ClickOverlay rendered');
  
  return (
    <div 
      className="fixed inset-0 z-40 bg-gradient-to-br from-purple-900/80 via-black/90 to-black/80 backdrop-blur-md flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <div className="text-center animate-pulse">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-wide">
          Tap to awaken the resonance…
        </h2>
        <div className="relative mx-auto w-24 h-24">
          <div className="absolute inset-0 border-2 border-yellow-400/30 rounded-full animate-ping"></div>
          <div className="absolute inset-2 border-2 border-yellow-400/50 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 bg-yellow-400/20 rounded-full"></div>
        </div>
        <p className="text-white/60 mt-4 text-lg">Click anywhere to continue</p>
      </div>
    </div>
  );
};
