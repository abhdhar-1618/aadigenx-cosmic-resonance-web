import React from 'react';
import { Navigation } from '@/components/Navigation';

const AadiNaadPage = () => {
  return (
    <div className="min-h-screen scroll-background">
      <Navigation currentSection="naad" />
      
      {/* Content with proper spacing */}
      <div className="pt-32 pb-20 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">N</span><span className="samarkan">aad</span>
          </h1>
          <p className="text-xl text-muted-foreground">Coming Soon</p>
        </div>
      </div>
      
      {/* Bottom Roll Bar Text */}
      <div className="fixed bottom-0 w-full bg-black/[0.02] backdrop-blur-sm z-10 border-t border-white/[0.02]">
        <div className="flex justify-center items-center py-2 px-2 md:py-3 md:px-4 max-w-6xl mx-auto">
          <div className="text-white font-bold text-xl" style={{ fontSize: '1.25rem' }}>
            प्राचीनानां निनादः भविष्यस्य संरचना
          </div>
        </div>
      </div>
    </div>
  );
};

export default AadiNaadPage;