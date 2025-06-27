
import React, { useRef, useEffect, useState } from 'react';

interface HeroSectionProps {
  hasNavigated: boolean;
}

export const HeroSection = ({ hasNavigated }: HeroSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [logoSpinning, setLogoSpinning] = useState(false);

  console.log('HeroSection rendered with hasNavigated:', hasNavigated);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;
    const logo = logoRef.current;

    if (hasNavigated && video) {
      console.log('Playing hero video due to navigation');
      video.currentTime = 0;
      video.play().then(() => {
        setShowVideo(true);
        setTimeout(() => {
          video.pause();
          setShowVideo(false);
        }, 4000);
      }).catch(console.error);
    }

    // Auto-trigger logo spinning after intro completes (when component first loads)
    if (!hasNavigated && logo) {
      setTimeout(() => {
        console.log('Auto-triggering logo animation after intro');
        handleLogoClick();
      }, 1000);
    }

    return () => {
      if (video) video.pause();
      if (audio) audio.pause();
    };
  }, [hasNavigated]);

  const handleLogoClick = () => {
    const audio = audioRef.current;
    const logo = logoRef.current;
    
    if (audio && logo) {
      console.log('Playing audio and starting logo animation');
      setLogoSpinning(true);
      audio.currentTime = 0;
      audio.play().then(() => {
        setIsPlaying(true);
        
        setTimeout(() => {
          setLogoSpinning(false);
          setIsPlaying(false);
          
          const video = videoRef.current;
          if (video) {
            setShowVideo(true);
            video.play().catch(console.error);
          }
        }, 11000);
      }).catch((error) => {
        console.error('Audio play failed:', error);
        setIsPlaying(false);
        setLogoSpinning(false);
      });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video - only show when triggered */}
      {showVideo && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          muted
          playsInline
          loop
        >
          <source src="https://github.com/abhdhar-1618/aadigenix-source-file/raw/main/COSMIC%20VIDEO.mp4" type="video/mp4" />
        </video>
      )}

      {/* Background Image - always visible unless video is playing */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${showVideo ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: 'url(https://github.com/abhdhar-1618/aadigenix-source-file/raw/main/Base.png)'
        }}
      />

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

      {/* Logo - clickable to trigger audio/video */}
      <div className="relative z-20 mb-8 animate-fade-in">
        <img
          ref={logoRef}
          src="https://github.com/abhdhar-1618/aadigenix-source-file/raw/main/Aadigenx%20Logo_Clear_BG.png"
          alt="AadiGenX Logo"
          className={`w-48 md:w-64 lg:w-80 h-auto transition-all duration-1000 cursor-pointer hover:scale-105 ${logoSpinning ? 'animate-spin' : ''}`}
          onClick={handleLogoClick}
        />
        {!isPlaying && !logoSpinning && (
          <p className="text-white/60 text-sm mt-4 animate-pulse">Click the logo to awaken</p>
        )}
      </div>

      {/* Audio - corrected file path */}
      <audio ref={audioRef} preload="auto">
        <source src="https://github.com/abhdhar-1618/aadigenix-source-file/raw/main/Om_Aum.ogg" type="audio/ogg" />
        <source src="https://github.com/abhdhar-1618/aadigenix-source-file/raw/main/Om_Aum.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
