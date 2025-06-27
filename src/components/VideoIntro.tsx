
import React, { useRef, useEffect, useState } from 'react';

interface VideoIntroProps {
  onComplete: () => void;
}

export const VideoIntro = ({ onComplete }: VideoIntroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      console.log('Video element found, setting up event listeners');
      
      const handleLoadedData = () => {
        console.log('Video loaded successfully');
        setIsLoading(false);
      };

      const handleError = (e: Event) => {
        console.error('Video failed to load:', e);
        setHasError(true);
        setIsLoading(false);
        // Auto-complete after 2 seconds if video fails
        setTimeout(onComplete, 2000);
      };

      const handleEnded = () => {
        console.log('Video ended, completing intro');
        setTimeout(onComplete, 1000);
      };

      // Show skip button after 3 seconds
      const skipTimer = setTimeout(() => {
        setShowSkip(true);
      }, 3000);
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('ended', handleEnded);
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('ended', handleEnded);
        clearTimeout(skipTimer);
      };
    }
  }, [onComplete]);

  const handleSkip = () => {
    console.log('User skipped intro');
    onComplete();
  };

  if (hasError) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl mb-4">Loading AadiGenX...</h2>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-2xl mb-4">Loading AadiGenX...</h2>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
          </div>
        </div>
      )}
      
      <video
        ref={videoRef}
        className={`w-full h-full object-contain ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        autoPlay
        muted
        playsInline
      >
        <source src="https://github.com/abhdhar-1618/aadigenix-source-file/raw/main/Aadigenx_intro_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {showSkip && !isLoading && (
        <button
          onClick={handleSkip}
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
        >
          Skip Intro
        </button>
      )}
    </div>
  );
};
