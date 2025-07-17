import React, { useState, useEffect, useRef } from 'react';
import medallionImage from '@/assets/medallion.png';

interface DivineTempleProps {
  onNavigationReady: () => void;
}

export const DivineTemple = ({ onNavigationReady }: DivineTempleProps) => {
  const [phase, setPhase] = useState<'temple' | 'medallion' | 'circuits' | 'navigation'>('temple');
  const [medallionVisible, setMedallionVisible] = useState(false);
  const [circuitsVisible, setCircuitsVisible] = useState(false);
  const [navigationVisible, setNavigationVisible] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const navItems = [
    'AadiAn', 'AadiTattva', 'AadiNaad', 'SrijanPeeth', 'Drishyam', 
    'TatSutra', 'AadiKul', 'AadiPath', 'AadiVrit'
  ];

  useEffect(() => {
    // Start the divine sequence
    const initializeTemple = async () => {
      // Phase 1: Temple doors opening (3 seconds)
      setTimeout(() => {
        setPhase('medallion');
        setMedallionVisible(true);
        
        // Start Om chant
        if (audioRef.current) {
          audioRef.current.volume = 0.4;
          audioRef.current.play().catch(console.log);
        }
      }, 3000);

      // Phase 2: Medallion pulse with Om (4 seconds)
      setTimeout(() => {
        setPhase('circuits');
        setCircuitsVisible(true);
      }, 7000);

      // Phase 3: Circuit illumination (3 seconds)
      setTimeout(() => {
        setPhase('navigation');
        setNavigationVisible(true);
        onNavigationReady();
      }, 10000);
    };

    initializeTemple();
  }, [onNavigationReady]);

  const handleNavClick = (item: string) => {
    setActiveNavItem(item);
    
    // Simulate navigation activation
    setTimeout(() => {
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 600);
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById('content-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Phase 1: Temple Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        {/* Placeholder for temple doors video */}
        <source src="/temple-doors.mp4" type="video/mp4" />
      </video>

      {/* Om Chant Audio */}
      <audio ref={audioRef} loop>
        <source src="/om-chant.mp3" type="audio/mp3" />
      </audio>

      {/* Sacred Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/30 via-black/50 to-black/70" />

      {/* Phase 2: Centered Medallion */}
      {medallionVisible && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className={`transition-all duration-1000 ${phase === 'medallion' ? 'animate-divine-pulse' : ''}`}>
            <img
              src={medallionImage}
              alt="AadiGenX Sacred Medallion"
              className="w-32 md:w-48 lg:w-64 h-auto"
            />
          </div>
        </div>
      )}

      {/* Phase 3: Circuit Board Illumination */}
      {circuitsVisible && (
        <div className="absolute inset-0 z-10">
          {/* Golden circuit lines emanating from center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-96 h-96">
              {/* Horizontal circuits */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-circuit-flow" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-circuit-flow" style={{ animationDelay: '1s' }} />
              
              {/* Vertical circuits */}
              <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent animate-circuit-flow" style={{ animationDelay: '1.5s' }} />
              
              {/* Diagonal circuits */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rotate-45 origin-left animate-circuit-flow" style={{ animationDelay: '2s' }} />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent -rotate-45 origin-left animate-circuit-flow" style={{ animationDelay: '2.5s' }} />
            </div>
          </div>
        </div>
      )}

      {/* Phase 4: Horizontal Navigation Bar */}
      {navigationVisible && (
        <div className="absolute bottom-24 left-0 right-0 z-30">
          <div className="flex items-center justify-center px-4">
            <div className="flex items-center space-x-6 text-white font-samarkan text-sm md:text-base lg:text-lg overflow-x-auto scrollbar-hide">
              {navItems.map((item, index) => (
                <React.Fragment key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`whitespace-nowrap transition-all duration-300 hover:animate-golden-glow ${
                      activeNavItem === item 
                        ? 'text-yellow-400 animate-nav-activate' 
                        : 'hover:text-yellow-400'
                    }`}
                  >
                    {item}
                  </button>
                  {index < navItems.length - 1 && (
                    <span className="text-white/60">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      {navigationVisible && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <button
            onClick={handleScrollDown}
            className="flex flex-col items-center text-white/70 hover:text-yellow-400 transition-colors duration-300"
          >
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center mb-2">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce" />
            </div>
            <div className="text-xs font-light">Scroll</div>
          </button>
        </div>
      )}
    </div>
  );
};