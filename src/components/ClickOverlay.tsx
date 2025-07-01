
import React from 'react';

interface ClickOverlayProps {
  onStart: () => void;
  show: boolean;
}

export const ClickOverlay = ({ onStart, show }: ClickOverlayProps) => {
  if (!show) return null;

  return (
    <div 
      className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-opacity duration-500"
      onClick={onStart}
    >
      <div className="text-center text-white animate-pulse">
        <div className="mb-6">
          <div className="w-16 h-16 border-2 border-white/50 rounded-full mx-auto flex items-center justify-center mb-4 hover:border-yellow-400 transition-colors">
            <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
          </div>
        </div>
        <p className="text-xl font-light">Click to begin the journey</p>
        <p className="text-sm text-white/70 mt-2">Experience the ancient wisdom</p>
      </div>
    </div>
  );
};
