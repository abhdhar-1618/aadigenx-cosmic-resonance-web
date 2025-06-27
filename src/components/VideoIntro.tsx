
import React, { useRef, useEffect } from 'react';

interface VideoIntroProps {
  onComplete: () => void;
}

export const VideoIntro = ({ onComplete }: VideoIntroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleEnded = () => {
        setTimeout(onComplete, 1000);
      };
      
      video.addEventListener('ended', handleEnded);
      return () => video.removeEventListener('ended', handleEnded);
    }
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        autoPlay
        muted
        playsInline
      >
        <source src="https://github.com/abhdhar-1618/aadigenix-source-file/raw/main/Aadigenx_intro_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
