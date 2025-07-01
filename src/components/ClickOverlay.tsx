
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
      <div className="text-center text-white animate-pulse px-4">
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-2">Click to begin the journey</p>
        <p className="text-sm md:text-base text-white/70">Experience the ancient wisdom</p>
      </div>
    </div>
  );
};
