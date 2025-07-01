
import React, { useRef, useEffect, useState } from 'react';

interface VideoIntroProps {
  onComplete: () => void;
  onAudioStart?: () => void;
}

export const VideoIntro = ({ onComplete, onAudioStart }: VideoIntroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    console.log('VideoIntro component mounted');

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
        console.log('Video ended, starting audio and logo rotation sequence');
        startAudioSequence();
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
      };
    }
  }, []);

  const startAudioSequence = () => {
    console.log('Starting audio sequence');
    
    // Start fading out immediately after video ends
    setIsExiting(true);
    
    // Trigger logo rotation and audio immediately
    if (onAudioStart) {
      onAudioStart();
    }
    
    const audio = audioRef.current;
    if (audio) {
      console.log('Playing audio for 11 seconds');
      audio.currentTime = 0;
      audio.play().then(() => {
        // After 11 seconds, complete the intro sequence
        setTimeout(() => {
          console.log('Audio sequence complete');
          onComplete();
        }, 11000);
      }).catch((error) => {
        console.log('Audio play failed:', error);
        // Still complete after 11 seconds even if audio fails
        setTimeout(() => {
          onComplete();
        }, 11000);
      });
    } else {
      // If no audio, still wait 11 seconds
      setTimeout(() => {
        onComplete();
      }, 11000);
    }
  };

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-[2000ms] ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Video element */}
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

      {/* Audio element for the 11-second sequence */}
      <audio ref={audioRef} preload="auto">
        <source src="https://raw.githubusercontent.com/abhdhar-1618/aadigenix-source-file/82e7377fadf5b621d8e9bf406221bdf4d1eb4efe/synced_aum_futuristic.ogg" type="audio/ogg" />
      </audio>

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
    </div>
  );
};
