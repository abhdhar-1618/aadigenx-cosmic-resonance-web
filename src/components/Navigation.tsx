
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

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

  return (
    <nav className="fixed top-0 left-0 right-0 w-full h-[84px] bg-black/10 z-30">
      {/* Desktop Navigation */}
      <div className="hidden lg:grid grid-cols-9 h-full items-center justify-items-center">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.to}
            className={`
              w-full h-full flex items-center justify-center text-lg font-bold tracking-wide transition-all duration-300 whitespace-nowrap
              ${disabled 
                ? 'text-white/50 cursor-not-allowed pointer-events-none' 
                : 'text-white hover:text-yellow-400'
              }
              ${currentSection === item.id ? 'text-yellow-400' : ''}
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

      {/* Mobile Navigation - Horizontally Scrollable */}
      <div className="lg:hidden flex h-full items-center px-2 overflow-x-auto overflow-y-hidden scrollbar-hide">
        <div className="flex items-center space-x-1 min-w-max">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className={`
                flex-shrink-0 px-3 py-2 min-h-[44px] flex items-center justify-center font-bold tracking-wide transition-all duration-300 whitespace-nowrap rounded
                ${disabled 
                  ? 'text-white/50 cursor-not-allowed pointer-events-none' 
                  : 'text-white hover:text-yellow-400 hover:bg-white/10'
                }
                ${currentSection === item.id ? 'text-yellow-400 bg-white/10' : ''}
              `}
              style={{ fontSize: 'clamp(12px, 3.5vw, 14px)' }}
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
      </nav>
    );
   };
