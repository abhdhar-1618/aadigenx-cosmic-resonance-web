
import React, { useRef, useEffect, useState } from 'react';

interface HeroSectionProps {
  hasNavigated: boolean;
  triggerAudioSequence?: boolean;
}

export const HeroSection = ({ hasNavigated, triggerAudioSequence }: HeroSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const [logoSpinning, setLogoSpinning] = useState(false);
  const [showBackgroundVideo, setShowBackgroundVideo] = useState(false);
  const [audioSequenceStarted, setAudioSequenceStarted] = useState(false);

  console.log('HeroSection rendered with hasNavigated:', hasNavigated, 'triggerAudioSequence:', triggerAudioSequence);

  // Handle audio sequence trigger from click overlay
  useEffect(() => {
    if (triggerAudioSequence && !audioSequenceStarted) {
      console.log('Starting audio and logo rotation sequence');
      setAudioSequenceStarted(true);
      setLogoSpinning(true);
      
      // Start audio
      const audio = audioRef.current;
      if (audio) {
        audio.muted = false;
        audio.currentTime = 0;
        audio.play().then(() => {
          console.log('Audio playing with logo rotation');
        }).catch(err => console.log("Audio blocked:", err));
      }
      
      // After 11 seconds, stop logo rotation and start background video sequence
      setTimeout(() => {
        console.log('Logo rotation complete, starting background video sequence');
        setLogoSpinning(false);
        setShowBackgroundVideo(true);
        
        const video = videoRef.current;
        if (video) {
          video.style.opacity = '1';
          video.currentTime = 0;
          
          setTimeout(() => {
            video.play().then(() => {
              console.log('Background video playing');
              
              // Stop video after 4 seconds and fade out
              setTimeout(() => {
                video.pause();
                video.style.opacity = '0';
                console.log('Background video sequence complete');
              }, 4000);
            });
          }, 300);
        }
      }, 11000);
    }
  }, [triggerAudioSequence, audioSequenceStarted]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Video - shows after logo rotation */}
      {showBackgroundVideo && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500"
          style={{ opacity: 0 }}
          muted
          playsInline
          preload="auto"
        >
          <source src="https://raw.githubusercontent.com/abhdhar-1618/aadigenix-source-file/main/Ancient%20Futuristic%20Fusion_simple_compose.mp4" type="video/mp4" />
        </video>
      )}

      {/* Audio element for the 11-second Om chanting */}
      <audio ref={audioRef} preload="auto" muted>
        <source src="https://raw.githubusercontent.com/abhdhar-1618/aadigenix-source-file/82e7377fadf5b621d8e9bf406221bdf4d1eb4efe/synced_aum_futuristic.ogg" type="audio/ogg" />
      </audio>

      {/* Cosmic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black/40 to-black/60 z-10" />

      {/* Welcome Text */}
      <div className="relative z-20 text-center mb-8 px-4 animate-fade-in">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-wide">
          प्राचीनानां निनादः भविष्यस्य संरचना
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-light">
          The Echo of the Ancient, The Architecture of the Future
        </p>
      </div>

      {/* Logo - rotates during audio sequence */}
      <div className="relative z-20 mb-8 animate-fade-in">
        <img
          ref={logoRef}
          src="https://github.com/abhdhar-1618/aadigenix-source-file/raw/main/Aadigenx%20Logo_Clear_BG.png"
          alt="AadiGenX Logo"
          className={`w-48 md:w-64 lg:w-80 h-auto transition-all duration-1000 ${logoSpinning ? 'animate-om-sync-rotation' : ''}`}
        />
      </div>

      {/* Scroll Indicator - only shown after the entire sequence completes */}
      {!logoSpinning && showBackgroundVideo && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      )}
    </div>
  );
};
