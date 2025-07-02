
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
    { id: 'home', label: 'Home', isExternal: true, href: 'https://aadigenix.com/' },
    { id: 'about', label: 'About', to: '/about' },
    { id: 'gallery', label: 'Gallery', to: '/gallery' },
    { id: 'blogs', label: 'Blogs', to: '/blogs' },
    { id: 'careers', label: 'Careers', to: '/careers' },
    { id: 'contact', label: 'Contact', to: '/contact' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-30 border-b border-white/10">
      <div className="flex justify-between items-center py-3 px-4 md:py-4 md:px-6">
        {/* AadiGenX Logo/Brand with mixed fonts */}
        <Link 
          to="/" 
          className="text-lg md:text-2xl font-bold hover:opacity-80 transition-opacity cursor-pointer"
        >
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
        </Link>
        
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
                {item.label}
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
                {item.label}
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
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
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
                  {item.label}
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
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
