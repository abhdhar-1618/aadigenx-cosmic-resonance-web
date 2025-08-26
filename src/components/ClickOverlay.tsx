
import React from 'react';

interface ClickOverlayProps {
  onStart: () => void;
  show: boolean;
  isMuted: boolean;
  onToggleVolume: () => void;
}

export const ClickOverlay = ({ onStart, show, isMuted, onToggleVolume }: ClickOverlayProps) => {
  if (!show) return null;

  const handleVolumeToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the main overlay click
    onToggleVolume();
  };

  return (
    <div 
      className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-opacity duration-500"
      onClick={onStart}
    >
      {/* Volume Toggle Button - Upper Right Corner */}
      <button 
        onClick={handleVolumeToggle}
        className={`fixed top-4 right-4 z-50 p-2 rounded-full transition-all duration-300 cursor-pointer
          ${isMuted ? 'opacity-50 hover:opacity-70' : 'opacity-90 hover:opacity-100'}
          hover:bg-white/10 backdrop-blur-sm
        `}
        aria-label={isMuted ? "Unmute audio" : "Mute audio"}
      >
        <img
          src="https://github.com/abhdhar-1618/aadigenix-source-file/raw/main/Aadigenx%20Logo_Clear_BG.png"
          alt="Volume Toggle"
          className="w-8 h-8 md:w-10 md:h-10"
        />
      </button>

      <div className="text-center text-white animate-pulse px-4">
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-2">Click to begin the journey</p>
        <p className="text-sm md:text-base text-white/70">Experience the ancient wisdom</p>
      </div>
    </div>
  );
};
