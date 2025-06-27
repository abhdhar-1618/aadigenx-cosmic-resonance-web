
import React from 'react';

interface ClickOverlayProps {
  onClick: () => void;
}

export const ClickOverlay = ({ onClick }: ClickOverlayProps) => {
  return (
    <div 
      className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <div className="text-center animate-pulse">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Tap to awaken the resonance…
        </h2>
        <div className="w-16 h-16 border-2 border-white/30 rounded-full mx-auto animate-ping"></div>
      </div>
    </div>
  );
};
