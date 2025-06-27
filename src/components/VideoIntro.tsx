
import React, { useRef, useEffect, useState } from 'react';

interface VideoIntroProps {
  onComplete: () => void;
}

export const VideoIntro = ({ onComplete }: VideoIntroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showSkip, setShowSkip] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    console.log('VideoIntro component mounted');
    
    // Show skip button after 2 seconds
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 2000);

    // Auto-complete after 15 seconds to allow full video playback
    const autoCompleteTimer = setTimeout(() => {
      console.log('Auto-completing intro after 15 seconds');
      handleComplete();
    }, 15000);

    const video = videoRef.current;
    if (video) {
      console.log('Setting up video event listeners');
      
      const handleCanPlay = () => {
        console.log('Video can play, starting playback');
        setVideoLoaded(true);
        video.play().catch((error) => {
          console.log('Video play failed:', error);
          setVideoError(true);
        });
      };

      const handleLoadedData = () => {
        console.log('Video data loaded');
        setVideoLoaded(true);
      };

      const handleEnded = () => {
        console.log('Video ended naturally');
        handleComplete();
      };

      const handleError = (e: Event) => {
        console.log('Video error:', e);
        setVideoError(true);
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('ended', handleEnded);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadeddata', handleLoadedData);
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
  }, []);

  const handleComplete = () => {
    console.log('Starting intro exit animation');
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 500); // Wait for fade out animation
  };

  const handleSkip = () => {
    console.log('User skipped intro');
    handleComplete();
  };

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      {/* Video element - now visible and properly configured */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
        autoPlay
      >
        <source src="https://raw.githubusercontent.com/abhdhar-1618/aadigenix-source-file/main/Vedic_Temple_Splendor_remix_02.mp4" type="video/mp4" />
      </video>

      {/* Fallback content shown when video fails to load or while loading */}
      {(!videoLoaded || videoError) && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl mb-6 font-bold">AadiGenX</h2>
            <p className="text-white/80 mb-6">Welcome to the future</p>
            {!videoError && (
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-8"></div>
            )}
            {videoError && (
              <p className="text-red-400 mb-6">Video loading failed, continuing...</p>
            )}
          </div>
        </div>
      )}

      {/* Skip button overlay */}
      {showSkip && !isExiting && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in">
          <button
            onClick={handleSkip}
            className="bg-yellow-400/20 backdrop-blur-md text-white px-6 py-3 rounded-lg hover:bg-yellow-400/30 transition-all duration-300 border border-yellow-400/30"
          >
            Enter Site
          </button>
        </div>
      )}
    </div>
  );
};
