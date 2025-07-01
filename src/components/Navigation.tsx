
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  onHome: () => void;
  disabled: boolean;
}

export const Navigation = ({ currentSection, onNavigate, onHome, disabled }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', onClick: onHome },
    { id: 'about', label: 'About', onClick: () => onNavigate('about') },
    { id: 'gallery', label: 'Gallery', onClick: () => onNavigate('gallery') },
    { id: 'blogs', label: 'Blogs', onClick: () => onNavigate('blogs') },
    { id: 'careers', label: 'Careers', onClick: () => onNavigate('careers') },
    { id: 'contact', label: 'Contact', onClick: () => onNavigate('contact') },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    item.onClick();
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-30 border-b border-white/10">
      <div className="flex justify-between items-center py-3 px-4 md:py-4 md:px-6">
        {/* AadiGenX Logo/Brand with mixed fonts */}
        <div className="text-lg md:text-2xl font-bold">
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
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={item.onClick}
              disabled={disabled}
              className={`
                px-4 py-2 text-sm lg:text-lg font-semibold tracking-wide transition-all duration-300
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          disabled={disabled}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            disabled 
              ? 'text-white/50 cursor-not-allowed' 
              : 'text-white hover:bg-white/10'
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                disabled={disabled}
                className={`
                  w-full text-left px-4 py-3 text-lg font-semibold tracking-wide transition-all duration-300 rounded-lg
                  ${disabled 
                    ? 'text-white/50 cursor-not-allowed' 
                    : 'text-white hover:text-yellow-400 hover:bg-white/10'
                  }
                  ${currentSection === item.id ? 'text-yellow-400 bg-white/10' : ''}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
