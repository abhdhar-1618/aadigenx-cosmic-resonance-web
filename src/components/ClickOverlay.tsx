
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
        <p className="text-xl font-light">Click to begin the journey</p>
        <p className="text-sm text-white/70 mt-2">Experience the ancient wisdom</p>
      </div>
    </div>
  );
};
