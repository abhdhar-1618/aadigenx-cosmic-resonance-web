
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
    let timeoutId: NodeJS.Timeout;
    let skipTimerId: NodeJS.Timeout;

    // Auto-complete after 5 seconds regardless of video status
    const autoCompleteTimer = setTimeout(() => {
      console.log('Auto-completing intro after timeout');
      onComplete();
    }, 5000);

    if (video) {
      console.log('Video element found, setting up event listeners');
      
      const handleLoadedData = () => {
        console.log('Video loaded successfully');
        setIsLoading(false);
        clearTimeout(autoCompleteTimer);
      };

      const handleCanPlay = () => {
        console.log('Video can play');
        setIsLoading(false);
        clearTimeout(autoCompleteTimer);
      };

      const handleError = (e: Event) => {
        console.error('Video failed to load:', e);
        setHasError(true);
        setIsLoading(false);
        clearTimeout(autoCompleteTimer);
        // Complete immediately if video fails
        setTimeout(onComplete, 1000);
      };

      const handleEnded = () => {
        console.log('Video ended, completing intro');
        clearTimeout(autoCompleteTimer);
        setTimeout(onComplete, 500);
      };

      // Show skip button after 2 seconds
      skipTimerId = setTimeout(() => {
        setShowSkip(true);
      }, 2000);
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);
      video.addEventListener('ended', handleEnded);

      // Try to load the video
      video.load();
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
        video.removeEventListener('ended', handleEnded);
        clearTimeout(autoCompleteTimer);
        clearTimeout(skipTimerId);
      };
    } else {
      // If no video element, complete after 2 seconds
      timeoutId = setTimeout(() => {
        console.log('No video element found, completing intro');
        onComplete();
      }, 2000);
    }

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(autoCompleteTimer);
      clearTimeout(skipTimerId);
    };
  }, [onComplete]);

  const handleSkip = () => {
    console.log('User skipped intro');
    onComplete();
  };

  if (hasError) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl mb-4">Welcome to AadiGenX</h2>
          <p className="text-white/80 mb-4">Preparing your experience...</p>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
          <button
            onClick={handleSkip}
            className="mt-6 bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
          >
            Continue to Site
          </button>
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
            {showSkip && (
              <button
                onClick={handleSkip}
                className="mt-6 bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
              >
                Skip Intro
              </button>
            )}
          </div>
        </div>
      )}
      
      <video
        ref={videoRef}
        className={`w-full h-full object-contain ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        autoPlay
        muted
        playsInline
        preload="metadata"
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
