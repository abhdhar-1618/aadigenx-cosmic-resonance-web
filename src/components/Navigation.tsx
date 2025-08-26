
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface NavigationProps {
  currentSection: string;
  disabled?: boolean;
}

export const Navigation = ({ currentSection, disabled = false }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleNavClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-none z-30">
      <div className="flex justify-center items-center py-1 px-2 md:py-2 md:px-4 max-w-6xl mx-auto">
        {/* Desktop Navigation - XL screens and above */}
        <div className="hidden xl:flex flex-wrap gap-1 justify-center items-center max-w-full overflow-hidden">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className={`
                px-1 py-1 text-sm xl:text-base font-semibold tracking-wide transition-all duration-300 whitespace-nowrap
                ${disabled 
                  ? 'text-white/50 cursor-not-allowed pointer-events-none' 
                  : 'text-white hover:text-yellow-400 hover:bg-white/10 rounded-lg'
                }
                ${currentSection === item.id ? 'text-yellow-400 bg-white/10 rounded-lg' : ''}
              `}
             >
                {item.id === 'home' ? (
                  <>
                    <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">A</span><span className="samarkan">n</span>
                  </>
                ) : item.id === 'about' ? (
                  <>
                    <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">T</span><span className="samarkan">atva</span>
                  </>
                ) : item.id === 'naad' ? (
                  <>
                    <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">N</span><span className="samarkan">aad</span>
                  </>
                ) : item.id === 'srijan' ? (
                  <>
                    <span className="calibri">S</span><span className="samarkan">rijan</span><span className="calibri">P</span><span className="samarkan">eeth</span>
                  </>
                ) : item.id === 'kul' ? (
                  <>
                    <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">K</span><span className="samarkan">ul</span>
                  </>
                ) : item.id === 'gallery' ? (
                  <>
                    <span className="calibri">D</span><span className="samarkan">ris</span><span className="calibri">H</span><span className="samarkan">yam</span>
                  </>
                ) : item.id === 'blogs' ? (
                  <>
                    <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">P</span><span className="samarkan">ath</span>
                  </>
                ) : item.id === 'careers' ? (
                  <>
                    <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">Y</span><span className="samarkan">atra</span>
                  </>
                 ) : item.id === 'contact' ? (
                   <>
                     <span className="calibri">Tat</span><span className="samarkan">Sutra</span>
                   </>
                 ) : (
                  item.label
                )}
              </Link>
           ))}
        </div>

        {/* Medium screens - Horizontal scroll navigation */}
        <div className="hidden md:block xl:hidden w-full">
          <div className="relative">
            {/* Gradient fade on left */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
            
            {/* Scrollable container */}
            <div className="flex gap-2 px-4 py-2 overflow-x-auto scrollbar-hide justify-start items-center">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  className={`
                    flex-shrink-0 px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap rounded-lg
                    ${disabled 
                      ? 'text-white/50 cursor-not-allowed pointer-events-none' 
                      : 'text-white hover:text-yellow-400 hover:bg-white/10'
                    }
                    ${currentSection === item.id ? 'text-yellow-400 bg-white/10' : ''}
                  `}
                >
                  {item.id === 'home' ? (
                    <>
                      <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">A</span><span className="samarkan">n</span>
                    </>
                  ) : item.id === 'about' ? (
                    <>
                      <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">T</span><span className="samarkan">atva</span>
                    </>
                  ) : item.id === 'naad' ? (
                    <>
                      <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">N</span><span className="samarkan">aad</span>
                    </>
                  ) : item.id === 'srijan' ? (
                    <>
                      <span className="calibri">S</span><span className="samarkan">rijan</span><span className="calibri">P</span><span className="samarkan">eeth</span>
                    </>
                  ) : item.id === 'kul' ? (
                    <>
                      <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">K</span><span className="samarkan">ul</span>
                    </>
                  ) : item.id === 'gallery' ? (
                    <>
                      <span className="calibri">D</span><span className="samarkan">ris</span><span className="calibri">H</span><span className="samarkan">yam</span>
                    </>
                  ) : item.id === 'blogs' ? (
                    <>
                      <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">P</span><span className="samarkan">ath</span>
                    </>
                  ) : item.id === 'careers' ? (
                    <>
                      <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">Y</span><span className="samarkan">atra</span>
                    </>
                  ) : item.id === 'contact' ? (
                    <>
                      <span className="calibri">Tat</span><span className="samarkan">Sutra</span>
                    </>
                  ) : (
                    item.label
                  )}
                </Link>
              ))}
            </div>
            
            {/* Gradient fade on right */}
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />
          </div>
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
        <div className="md:hidden bg-black/60 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                onClick={handleNavClick}
                className={`
                  w-full text-left px-4 py-3 text-lg font-semibold tracking-wide transition-all duration-300 rounded-lg block
                  ${disabled 
                    ? 'text-white/50 cursor-not-allowed pointer-events-none' 
                    : 'text-white hover:text-yellow-400 hover:bg-white/10'
                  }
                  ${currentSection === item.id ? 'text-yellow-400 bg-white/10' : ''}
                `}
              >
                {item.id === 'home' ? (
                  <>
                    <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">A</span><span className="samarkan">n</span>
                  </>
                ) : item.id === 'about' ? (
                  <>
                    <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">T</span><span className="samarkan">atva</span>
                  </>
                ) : item.id === 'naad' ? (
                  <>
                    <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">N</span><span className="samarkan">aad</span>
                  </>
                ) : item.id === 'srijan' ? (
                  <>
                    <span className="calibri">S</span><span className="samarkan">rijan</span><span className="calibri">P</span><span className="samarkan">eeth</span>
                  </>
                ) : item.id === 'kul' ? (
                  <>
                    <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">K</span><span className="samarkan">ul</span>
                  </>
                ) : item.id === 'gallery' ? (
                  <>
                    <span className="calibri">D</span><span className="samarkan">ris</span><span className="calibri">H</span><span className="samarkan">yam</span>
                  </>
                ) : item.id === 'blogs' ? (
                  <>
                    <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">P</span><span className="samarkan">ath</span>
                  </>
                ) : item.id === 'careers' ? (
                  <>
                    <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">Y</span><span className="samarkan">atra</span>
                  </>
                ) : item.id === 'contact' ? (
                  <>
                    <span className="calibri">Tat</span><span className="samarkan">Sutra</span>
                  </>
                ) : (
                  item.label
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
