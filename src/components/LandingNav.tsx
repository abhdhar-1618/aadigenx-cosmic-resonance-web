import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LandingNavProps {
  currentSection: string;
  disabled?: boolean;
}

export const LandingNav = ({ currentSection, disabled = false }: LandingNavProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
    <>
      <nav className="fixed top-0 w-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur border-b border-black/10 dark:border-white/10 z-30">
        <div className="w-full max-w-6xl mx-auto px-2">
          <div className="flex h-14 items-center justify-between">
            {/* Brand/Logo */}
            <div className="flex min-w-0 items-center gap-2">
              <Link
                to="/"
                className="font-semibold tracking-wide text-foreground"
                aria-label="AadiGenX Home"
              >
                AadiGenX
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex overflow-x-auto scrollbar-hide gap-2 max-w-[calc(100vw-360px)] px-2 py-1">
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

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sliding Panel */}
        <div
          className={`
            md:hidden overflow-hidden transition-[max-height,opacity] duration-300
            ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="w-full max-w-6xl mx-auto px-2 pb-3">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  className={`
                    px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-300 
                    rounded-lg text-center
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
      {/* Spacer to prevent content from sliding under fixed nav */}
      <div className="h-14" />
    </>
  );
};