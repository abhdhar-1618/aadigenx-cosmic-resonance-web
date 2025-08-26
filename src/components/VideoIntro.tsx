
import React, { useRef, useEffect, useState } from 'react';

interface VideoIntroProps {
  onComplete: () => void;
  onShowClickOverlay?: () => void;
}

export const VideoIntro = ({ onComplete, onShowClickOverlay }: VideoIntroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    console.log('VideoIntro component mounted');

    const video = videoRef.current;
    if (video) {
      console.log('Setting up video event listeners');
      
      // Set muted state from localStorage
      const savedMuted = localStorage.getItem('aadi_mute');
      video.muted = savedMuted === '1';
      
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
        console.log('Video ended, starting fade out and showing click overlay');
        setIsExiting(true);
        
        // Call onComplete immediately when video ends to enable navigation
        console.log('Calling onComplete to enable navigation');
        onComplete();
        
        // Show click overlay after 3 second fade
        setTimeout(() => {
          console.log('Video hidden, showing click overlay');
          if (onShowClickOverlay) {
            onShowClickOverlay();
          }
        }, 3000);
      };

      const handleError = (e: Event) => {
        console.log('Video error:', e);
        setVideoError(true);
        // Also call onComplete on error to ensure navigation works
        onComplete();
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
      };
    }
  }, [onComplete, onShowClickOverlay]);

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-[3000ms] ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Video element */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
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
            <h2 className="text-3xl mb-6 font-bold"><span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span></h2>
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
    </div>
  );
};
