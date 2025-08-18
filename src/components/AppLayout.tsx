import React from 'react';
import { Navigation } from '@/components/Navigation';

interface AppLayoutProps {
  children: React.ReactNode;
  currentSection: string;
  disabled?: boolean;
}

export const AppLayout = ({ children, currentSection, disabled = false }: AppLayoutProps) => {
  return (
    <div className="min-h-screen scroll-background">
      {/* Top Rolling Bar - Navigation */}
      <div className="fixed top-0 w-full z-30">
        <Navigation currentSection={currentSection} disabled={disabled} />
      </div>

      {/* Main Content Area - constrained between top and bottom bars */}
      <div className="fixed inset-0 pt-20 pb-20 overflow-hidden">
        <div className="h-full overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>

      {/* Bottom Rolling Bar - Tagline + Logo */}
      <div className="fixed bottom-0 w-full bg-transparent backdrop-blur-sm z-20">
        <div className="flex justify-center items-center py-3 px-4 max-w-6xl mx-auto border-t border-white/10">
          <div className="flex items-center gap-4">
            <div className="text-white font-bold text-lg md:text-xl calibri">
              प्राचीनानां निनादः भविष्यस्य संरचना
            </div>
            <div className="w-8 h-8 bg-amber-500/20 border border-amber-500/40 rounded-full flex items-center justify-center">
              <span className="text-amber-400 text-sm font-bold">॰</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};