import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HorizontalNavigationProps {
  currentSection: string;
  disabled?: boolean;
}

export const HorizontalNavigation = ({ currentSection, disabled = false }: HorizontalNavigationProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  
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

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

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
    <nav className="fixed top-0 w-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur border-b border-black/10 dark:border-white/10 z-30">
      <div className="w-full max-w-6xl mx-auto px-2">
        <div className="flex justify-between items-center py-2 min-h-16 w-full">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-between items-center w-full">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className={`
                  flex-1 px-1 sm:px-2 py-2 text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 
                  rounded-lg text-center whitespace-nowrap min-w-0
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
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-between items-center w-full">
            <div className="font-semibold text-white">AadiGenX</div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400 p-2"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pb-3">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className={`
                  block px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-300 
                  rounded-lg mb-1
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
      </div>
    </nav>
  );
};