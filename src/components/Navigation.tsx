
import React from 'react';

interface NavigationProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  onHome: () => void;
  disabled: boolean;
}

export const Navigation = ({ currentSection, onNavigate, onHome, disabled }: NavigationProps) => {
  const navItems = [
    { id: 'home', label: 'Home', onClick: onHome },
    { id: 'about', label: 'About', onClick: () => onNavigate('about') },
    { id: 'gallery', label: 'Gallery', onClick: () => onNavigate('gallery') },
    { id: 'careers', label: 'Careers', onClick: () => onNavigate('careers') },
    { id: 'contact', label: 'Contact', onClick: () => onNavigate('contact') },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-30 border-b border-white/10">
      <div className="flex justify-between items-center py-4 px-6">
        {/* AadiGenX Logo/Brand with mixed fonts */}
        <div className="text-2xl font-bold">
          <span className="aadigenx-brand">
            <span className="letter-A1">A</span>
            <span className="letter-a1">a</span>
            <span className="letter-a2">a</span>
            <span className="letter-d1">d</span>
            <span className="letter-i">i</span>
            <span className="letter-G">G</span>
            <span className="letter-e">e</span>
            <span className="letter-n">n</span>
            <span className="letter-X">X</span>
          </span>
        </div>
        
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={item.onClick}
              disabled={disabled}
              className={`
                px-6 py-2 text-lg font-semibold tracking-wide transition-all duration-300
                ${disabled 
                  ? 'text-white/50 cursor-not-allowed' 
                  : 'text-white hover:text-yellow-400 hover:bg-white/10 rounded-lg'
                }
                ${currentSection === item.id ? 'text-yellow-400 bg-white/10 rounded-lg' : ''}
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
