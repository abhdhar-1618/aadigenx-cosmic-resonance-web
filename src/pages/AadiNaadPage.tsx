import React from 'react';
import { Navigation } from '@/components/Navigation';

const AadiNaadPage = () => {
  return (
    <div className="min-h-screen scroll-background">
      <Navigation currentSection="naad" />
      <div className="pt-24 pb-12 px-4 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl">
          {/* Profile Scroll */}
          <div className="relative">
            {/* Scroll Background */}
            <div 
              className="relative bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl shadow-2xl overflow-hidden border-8 border-amber-800"
              style={{
                background: `linear-gradient(135deg, 
                  #d4a574 0%, 
                  #c9965f 15%, 
                  #be8a4a 30%, 
                  #b8834a 45%, 
                  #ad7a42 60%, 
                  #a67237 75%, 
                  #9e6b32 90%, 
                  #96632e 100%)`,
                boxShadow: `
                  inset 0 0 20px rgba(139, 69, 19, 0.3),
                  0 20px 40px rgba(0, 0, 0, 0.2),
                  0 0 0 3px #8B4513,
                  0 0 0 6px #A0522D
                `
              }}
            >
              {/* Scroll Texture Overlay */}
              <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-amber-900/10 to-transparent"></div>
              
              {/* Left Scroll Rod */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 rounded-l-full shadow-inner"></div>
              
              {/* Right Scroll Rod */}
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 rounded-r-full shadow-inner"></div>
              
              {/* Content */}
              <div className="px-16 py-8 relative z-10">
                {/* Empty scroll content */}
              </div>
              
              {/* Bottom Scroll Detail */}
              <div className="absolute bottom-2 right-8">
                <div className="w-6 h-6 bg-amber-900 rounded-full shadow-inner flex items-center justify-center">
                  <div className="w-3 h-3 bg-amber-700 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AadiNaadPage;