import React from 'react';
import { Link } from 'react-router-dom';

interface HorizontalNavigationProps {
  currentSection: string;
  disabled?: boolean;
}

export const HorizontalNavigation = ({ currentSection, disabled = false }: HorizontalNavigationProps) => {
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
        {/* Horizontal Scroll Navigation Container */}
        <div className="flex overflow-x-auto scrollbar-hide py-2 gap-2 min-h-16 items-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className={`
                flex-shrink-0 px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-300 
                rounded-lg text-center whitespace-nowrap
                ${disabled 
                  ? 'text-white/50 cursor-not-allowed pointer-events-none' 
                  : 'text-white hover:text-yellow-400 hover:bg-white/10'
                }
                ${currentSection === item.id ? 'text-yellow-400 bg-white/10' : ''}
              `}
            >
              {renderNavText(item)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};