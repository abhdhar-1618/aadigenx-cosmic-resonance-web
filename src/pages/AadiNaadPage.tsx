import React from 'react';
import { Navigation } from '@/components/Navigation';

const AadiNaadPage = () => {
  return (
    <div className="min-h-screen scroll-background">
      <Navigation currentSection="naad" />
      <div className="pt-24 pb-12 px-4 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl">
          {/* Clean Background */}
          <div className="relative">
            <div className="relative bg-transparent">
              {/* Content */}
              <div className="px-8 py-8 relative z-10">
                {/* Empty content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AadiNaadPage;