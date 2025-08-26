import React from 'react';
import { Navigation } from '@/components/Navigation';
import { CareersSection } from '@/components/CareersSection';

const CareersPage = () => {
  return (
    <div className="min-h-screen scroll-background">
      <Navigation currentSection="careers" />
      
      {/* Main Content Area - constrained within scroll design */}
      <div className="pt-16 pb-20 px-4 md:px-8">
        <div className="min-h-screen bg-amber-800/20 backdrop-blur-sm rounded-2xl border border-amber-600/30 shadow-2xl p-6 md:p-8">
          <CareersSection />
        </div>
      </div>
      
      {/* Bottom Roll Bar */}
      <div className="fixed bottom-0 w-full z-10">
        <div className="w-full h-16 bg-gradient-to-r from-amber-900/40 via-amber-800/60 to-amber-900/40 backdrop-blur-sm border-t border-amber-600/30">
          <div className="flex justify-center items-center h-full max-w-6xl mx-auto px-4">
            <div className="text-white font-bold text-lg md:text-xl">
              प्राचीनानां निनादः भविष्यस्य संरचना
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;