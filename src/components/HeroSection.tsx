
import React, { useRef, useEffect, useState } from 'react';

interface HeroSectionProps {
  hasNavigated: boolean;
}

export const HeroSection = ({ hasNavigated }: HeroSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;
    const logo = logoRef.current;

    if (hasNavigated && video) {
      video.currentTime = 0;
      video.play();
      setTimeout(() => {
        video.pause();
      }, 4000);
    }

    // Audio and logo animation logic
    const handleAudioPlay = () => {
      if (audio && logo) {
        audio.currentTime = 0;
        audio.play().then(() => {
          setIsPlaying(true);
          logo.classList.add('animate-spin');
          
          setTimeout(() => {
            logo.classList.remove('animate-spin');
            setIsPlaying(false);
            if (video) {
              video.style.opacity = '1';
              video.play();
            }
          }, 11000);
        }).catch(console.error);
      }
    };

    return () => {
      if (video) video.pause();
      if (audio) audio.pause();
    };
  }, [hasNavigated]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
        muted
        playsInline
        loop
      >
        <source src="https://github.com/abhdhar-1618/aadigenix-source-file/raw/main/COSMIC%20VIDEO.mp4" type="video/mp4" />
      </video>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: hasNavigated 
            ? 'none' 
            : 'url(https://github.com/abhdhar-1618/aadigenix-source-file/raw/main/Base.png)'
        }}
      />

      {/* Cosmic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black/60 to-black/80" />

      {/* Welcome Text */}
      <div className="relative z-10 text-center mb-8 px-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-wide">
          प्राचीनानां निनादः भविष्यस्य संरचना
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-light">
          The Echo of the Ancient, The Architecture of the Future
        </p>
      </div>

      {/* Logo */}
      <div className="relative z-10 mb-8">
        <img
          ref={logoRef}
          src="https://github.com/abhdhar-1618/aadigenix-source-file/raw/main/Aadigenx%20Logo_Clear_BG.png"
          alt="AadiGenX Logo"
          className="w-48 md:w-64 lg:w-80 h-auto transition-transform duration-1000"
        />
      </div>

      {/* Audio */}
      <audio ref={audioRef} preload="auto">
        <source src="https://github.com/abhdhar-1618/aadigenix-source-file/raw/main/Om_Aum.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
