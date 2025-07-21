
import React from 'react';
import { cn } from '@/lib/utils';

interface ScrollBarProps {
  children: React.ReactNode;
  position: 'top' | 'bottom';
  className?: string;
}

export const ScrollBar = ({ children, position, className }: ScrollBarProps) => {
  return (
    <div className={cn(
      "fixed w-full z-30",
      position === 'top' ? 'top-0' : 'bottom-0',
      className
    )}>
      {/* Scroll background with parchment-like styling */}
      <div className="relative">
        {/* Main scroll background */}
        <div className={cn(
          "bg-gradient-to-r from-amber-50/95 via-yellow-50/95 to-amber-50/95",
          "backdrop-blur-sm",
          "border-amber-200/50",
          "shadow-lg shadow-amber-900/20",
          position === 'top' ? 'border-b' : 'border-t',
          position === 'top' ? 'rounded-b-lg' : 'rounded-t-lg'
        )}>
          {/* Aged paper texture overlay */}
          <div className={cn(
            "absolute inset-0 opacity-10",
            "bg-gradient-to-r from-amber-800/10 via-transparent to-amber-800/10",
            position === 'top' ? 'rounded-b-lg' : 'rounded-t-lg'
          )} />
          
          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
        
        {/* Scroll edge shadows for depth */}
        <div className={cn(
          "absolute left-0 right-0 h-2 bg-gradient-to-r from-amber-900/20 via-amber-700/10 to-amber-900/20",
          position === 'top' ? 'top-full' : 'bottom-full'
        )} />
      </div>
    </div>
  );
};
