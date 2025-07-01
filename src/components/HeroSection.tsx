
import React, { useRef, useEffect, useState } from 'react';

interface HeroSectionProps {
  hasNavigated: boolean;
  triggerLogoSpin?: boolean;
}

export const HeroSection = ({ hasNavigated, triggerLogoSpin }: HeroSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const [logoSpinning, setLogoSpinning] = useState(false);
  const [showBackgroundVideo, setShowBackgroundVideo] = useState(false);

  console.log('HeroSection rendered with hasNavigated:', hasNavigated, 'triggerLogoSpin:', triggerLogoSpin);

  // Handle logo spinning trigger from the intro sequence
  useEffect(() => {
    if (triggerLogoSpin && !logoSpinning) {
      console.log('Starting logo rotation for 11 seconds');
      setLogoSpinning(true);
      
      // After 11 seconds, stop spinning and start background video animation
      setTimeout(() => {
        console.log('Logo rotation complete, starting background video');
        setLogoSpinning(false);
        setShowBackgroundVideo(true);
        
        const video = videoRef.current;
        if (video) {
          video.style.opacity = '1';
          video.currentTime = 0;
          
          setTimeout(() => {
            video.play().then(() => {
              // Play for 4 seconds then pause and fade out
              setTimeout(() => {
                video.pause();
                video.style.opacity = '0';
              }, 4000);
            }).catch(console.error);
          }, 300);
        }
      }, 11000);
    }
  }, [triggerLogoSpin, logoSpinning]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video - starts invisible, becomes visible during sequence */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000"
        style={{ opacity: 0 }}
        muted
        playsInline
        preload="auto"
      >
        <source src="https://raw.githubusercontent.com/abhdhar-1618/aadigenix-source-file/main/Ancient%20Futuristic%20Fusion_simple_compose.mp4" type="video/mp4" />
      </video>

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

      {/* Logo - spins during the 11-second audio sequence */}
      <div className="relative z-20 mb-8 animate-fade-in">
        <img
          ref={logoRef}
          src="https://github.com/abhdhar-1618/aadigenix-source-file/raw/main/Aadigenx%20Logo_Clear_BG.png"
          alt="AadiGenX Logo"
          className={`w-48 md:w-64 lg:w-80 h-auto transition-all duration-1000 ${logoSpinning ? 'animate-spin' : ''}`}
        />
      </div>

      {/* Scroll Indicator - only shown after the sequence completes */}
      {showBackgroundVideo && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      )}
    </div>
  );
};
