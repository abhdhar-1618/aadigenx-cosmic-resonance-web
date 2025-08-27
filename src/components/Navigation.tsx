import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  currentSection: string;
  disabled?: boolean;
}

export const Navigation = ({ currentSection, disabled = false }: NavigationProps) => {
  const navItems = [
    { id: 'home', label: 'Aadian', to: '/aadian' },
    { id: 'about', label: 'AadiTatva', to: '/about' },
    { id: 'naad', label: 'AadiNaad', to: '/naad' },
    { id: 'srijan', label: 'SrijanPeeth', to: '/srijan' },
    { id: 'kul', label: 'AadiKul', to: '/kul' },
    { id: 'gallery', label: 'DrisHyam', to: '/gallery' },
    { id: 'blogs', label: 'Blogs', to: '/blogs' },
    { id: 'careers', label: 'Careers', to: '/careers' },
    { id: 'contact', label: 'Contact', to: '/contact' },
  ];

  const renderNavText = (item: typeof navItems[0]) => {
    switch (item.id) {
      case 'home':
        return (
          <>
            <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">A</span><span className="samarkan">n</span>
          </>
        );
      case 'about':
        return (
          <>
            <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">T</span><span className="samarkan">atva</span>
          </>
        );
      case 'naad':
        return (
          <>
            <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">N</span><span className="samarkan">aad</span>
          </>
        );
      case 'srijan':
        return (
          <>
            <span className="calibri">S</span><span className="samarkan">rijan</span><span className="calibri">P</span><span className="samarkan">eeth</span>
          </>
        );
      case 'kul':
        return (
          <>
            <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">K</span><span className="samarkan">ul</span>
          </>
        );
      case 'gallery':
        return (
          <>
            <span className="calibri">D</span><span className="samarkan">ris</span><span className="calibri">H</span><span className="samarkan">yam</span>
          </>
        );
      case 'blogs':
        return (
          <>
            <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">P</span><span className="samarkan">ath</span>
          </>
        );
      case 'careers':
        return (
          <>
            <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">Y</span><span className="samarkan">atra</span>
          </>
        );
      case 'contact':
        return (
          <>
            <span className="calibri">Tat</span><span className="samarkan">Sutra</span>
          </>
        );
      default:
        return item.label;
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-none z-30">
      <div className="w-full max-w-6xl mx-auto px-2">
        {/* Responsive Grid Navigation Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1 sm:gap-2 px-2 py-2 min-h-16 place-items-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className={`
                px-1 py-1 text-xs sm:text-sm md:text-base font-semibold tracking-wide transition-all duration-300 
                rounded-lg text-center flex items-center justify-center h-8 sm:h-10 max-w-full
                ${disabled 
                  ? 'text-white/50 cursor-not-allowed pointer-events-none' 
                  : 'text-white hover:text-yellow-400 hover:bg-white/10'
                }
                ${currentSection === item.id ? 'text-yellow-400 bg-white/10' : ''}
              `}
            >
              <span className="leading-tight text-center break-words hyphens-auto">{renderNavText(item)}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};