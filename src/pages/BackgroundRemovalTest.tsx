import React from 'react';
import { Navigation } from '@/components/Navigation';
import { BackgroundRemover } from '@/components/BackgroundRemover';

const BackgroundRemovalTest = () => {
  return (
    <div className="min-h-screen scroll-background">
      <Navigation currentSection="test" />
      
      <div className="fixed inset-0 pt-16 pb-16 overflow-hidden">
        <div className="h-full overflow-y-auto custom-scrollbar p-4 md:p-8">
          <div className="min-h-full bg-amber-800/20 backdrop-blur-sm rounded-2xl border border-amber-600/30 p-6 md:p-8 shadow-2xl">
            <BackgroundRemover />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundRemovalTest;