
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
    { id: 'home', label: 'Aadian', isExternal: true, href: 'https://aadigenix.com/' },
    { id: 'about', label: 'AdiTatva', to: '/about' },
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
    <nav className="fixed top-0 w-full bg-black/[0.02] backdrop-blur-sm z-30 border-b border-white/[0.02]">
      <div className="flex justify-end items-center py-3 px-4 md:py-4 md:px-6">
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            item.isExternal ? (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  px-4 py-2 text-sm lg:text-lg font-semibold tracking-wide transition-all duration-300
                  ${disabled 
                    ? 'text-white/50 cursor-not-allowed pointer-events-none' 
                    : 'text-white hover:text-yellow-400 hover:bg-white/10 rounded-lg'
                  }
                `}
                >
                  {item.id === 'home' ? (
                    <>
                      <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">A</span><span className="samarkan">n</span>
                    </>
                  ) : (
                    item.label
                  )}
                </a>
            ) : (
              <Link
                key={item.id}
                to={item.to}
                className={`
                  px-4 py-2 text-sm lg:text-lg font-semibold tracking-wide transition-all duration-300
                  ${disabled 
                    ? 'text-white/50 cursor-not-allowed pointer-events-none' 
                    : 'text-white hover:text-yellow-400 hover:bg-white/10 rounded-lg'
                  }
                  ${currentSection === item.id ? 'text-yellow-400 bg-white/10 rounded-lg' : ''}
                `}
               >
                 {item.id === 'about' ? (
                   <>
                     <span className="calibri">A</span><span className="samarkan">di</span><span className="calibri">T</span><span className="samarkan">atva</span>
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
                     <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">S</span><span className="samarkan">etu</span>
                   </>
                 ) : (
                   item.label
                 )}
               </Link>
            )
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
        <div className="md:hidden bg-black/60 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              item.isExternal ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    w-full text-left px-4 py-3 text-lg font-semibold tracking-wide transition-all duration-300 rounded-lg block
                    ${disabled 
                      ? 'text-white/50 cursor-not-allowed pointer-events-none' 
                      : 'text-white hover:text-yellow-400 hover:bg-white/10'
                    }
                  `}
                >
                  {item.id === 'home' ? (
                    <>
                      <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">A</span><span className="samarkan">n</span>
                    </>
                  ) : (
                    item.label
                  )}
                </a>
              ) : (
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
                  {item.id === 'about' ? (
                    <>
                      <span className="calibri">A</span><span className="samarkan">di</span><span className="calibri">T</span><span className="samarkan">atva</span>
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
                      <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">S</span><span className="samarkan">etu</span>
                    </>
                  ) : (
                    item.label
                  )}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
