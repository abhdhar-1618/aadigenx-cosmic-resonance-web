import React, { useState, useEffect } from 'react';

interface ClickOverlayProps {
  onStart: () => void;
  show: boolean;
}

export const ClickOverlay = ({ onStart, show }: ClickOverlayProps) => {
  if (!show) return null;

  // State to track whether audio is muted
  const [muted, setMuted] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('aadi_mute') === '1';
    }
    return false;
  });

  // Apply the muted state to all video elements whenever it changes
  useEffect(() => {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      (video as HTMLVideoElement).muted = muted;
    });
  }, [muted]);

  // Toggle mute when the button is clicked
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMuted = !muted;
    setMuted(newMuted);
    try {
      localStorage.setItem('aadi_mute', newMuted ? '1' : '0');
    } catch (err) {}
    // Update all videos on the page with the new muted state
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      (video as HTMLVideoElement).muted = newMuted;
    });
  };


  return (
    <div
      className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm flex items-center justify-center"
      onClick={onStart}
    >
      {/* Volume toggle button with mini logo */}
      <button
        className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60"
        onClick={toggleMute}
        aria-label={muted ? 'Unmute' : 'Mute'}
      >
        {/* Use your mini logo here. Adjust the path if needed. */}
        <img src="/logo.svg" alt="Volume Toggle" className="w-6 h-6" />
      </button>

      <div className="text-center text-white animate-pulse px-4">
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-2">
          Tap to awaken the resonance
        </p>
        <p className="text-sm md:text-base text-white/70">
          Experience the journey
        </p>
      </div>
    </div>
  );
};
