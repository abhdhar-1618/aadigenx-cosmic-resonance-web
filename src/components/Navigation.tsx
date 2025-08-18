
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
    <nav className="w-full bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="flex justify-center items-center py-3 px-4 max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-2 justify-center items-center flex-wrap max-w-full">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className={`
                px-3 py-2 text-sm lg:text-base font-semibold tracking-wide transition-all duration-300 whitespace-nowrap rounded-lg
                ${disabled 
                  ? 'text-white/50 cursor-not-allowed pointer-events-none' 
                  : 'text-white hover:text-yellow-400 hover:bg-white/20'
                }
                ${currentSection === item.id ? 'text-yellow-400 bg-white/20' : ''}
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          disabled={disabled}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
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
        <div className="lg:hidden bg-black/80 backdrop-blur-md border-t border-white/20">
          <div className="px-4 py-3 space-y-2 max-h-[60vh] overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                onClick={handleNavClick}
                className={`
                  w-full text-left px-4 py-3 text-base font-semibold tracking-wide transition-all duration-300 rounded-lg block
                  ${disabled 
                    ? 'text-white/50 cursor-not-allowed pointer-events-none' 
                    : 'text-white hover:text-yellow-400 hover:bg-white/20'
                  }
                  ${currentSection === item.id ? 'text-yellow-400 bg-white/20' : ''}
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
