import React, { useRef, useEffect, useState } from 'react';

interface VideoIntroProps {
  onComplete: () => void;
}

export const VideoIntro = ({ onComplete }: VideoIntroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    console.log('VideoIntro component mounted');
    
    // Show skip button after 2 seconds
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 2000);

    // Auto-complete after 4 seconds regardless of video status
    const autoCompleteTimer = setTimeout(() => {
      console.log('Auto-completing intro after 4 seconds');
      onComplete();
    }, 4000);

    const video = videoRef.current;
    if (video) {
      console.log('Setting up video event listeners');
      
      const handleCanPlay = () => {
        console.log('Video can play, starting playback');
      };

      const handleEnded = () => {
        console.log('Video ended naturally');
        onComplete();
      };

      const handleError = (e: Event) => {
        console.log('Video error, will complete via timer:', e);
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('ended', handleEnded);
      video.addEventListener('error', handleError);

      // Try to play the video
      video.play().catch((error) => {
        console.log('Video play failed:', error);
      });

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('ended', handleEnded);
        video.removeEventListener('error', handleError);
        clearTimeout(skipTimer);
        clearTimeout(autoCompleteTimer);
      };
    }

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(autoCompleteTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    console.log('User skipped intro');
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-3xl mb-6 font-bold">AadiGenX</h2>
        <p className="text-white/80 mb-6">Welcome to the future</p>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-8"></div>
        
        {showSkip && (
          <button
            onClick={handleSkip}
            className="bg-yellow-400/20 backdrop-blur-md text-white px-6 py-3 rounded-lg hover:bg-yellow-400/30 transition-all duration-300 border border-yellow-400/30"
          >
            Enter Site
          </button>
        )}
      </div>

      {/* Hidden video element - keep for potential future use */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
        muted
        playsInline
        preload="none"
      >
        <source src="https://github.com/abhdhar-1618/aadigenix-source-file/raw/main/Aadigenx_intro_vid.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
