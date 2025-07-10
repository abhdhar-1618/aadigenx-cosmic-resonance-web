
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
    <nav className="fixed top-0 w-full z-30 py-2">
      {/* Wooden scroll bar */}
      <div className="mx-4 md:mx-8 relative">
        <div 
          className="bg-gradient-to-b from-amber-700 via-amber-600 to-amber-800 rounded-full h-12 md:h-16 shadow-lg border-2 border-amber-900/50 relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(135deg, 
              #b45309 0%, 
              #d97706 15%, 
              #f59e0b 30%, 
              #d97706 45%, 
              #b45309 60%, 
              #92400e 75%, 
              #b45309 90%, 
              #d97706 100%)`
          }}
        >
          {/* Wood grain texture overlay */}
          <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-amber-900/30 to-transparent"></div>
          
          {/* Left wooden end cap */}
          <div className="absolute left-0 top-0 h-full w-8 md:w-12 bg-gradient-radial from-amber-600 to-amber-900 rounded-full border-r border-amber-900/50"></div>
          
          {/* Right wooden end cap */}
          <div className="absolute right-0 top-0 h-full w-8 md:w-12 bg-gradient-radial from-amber-600 to-amber-900 rounded-full border-l border-amber-900/50"></div>
          
          <div className="flex justify-between items-center h-full px-8 md:px-16 relative z-10">
            {/* AadiGenX Logo/Brand with mixed fonts */}
            <Link 
              to="/" 
              className="text-sm md:text-lg lg:text-xl font-bold hover:opacity-80 transition-opacity cursor-pointer text-white drop-shadow-lg"
            >
              <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">G</span><span className="samarkan">en</span><span className="calibri">X</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      px-3 py-1 text-sm lg:text-base font-bold tracking-wide transition-all duration-300 text-white drop-shadow-lg
                      ${disabled 
                        ? 'text-white/50 cursor-not-allowed pointer-events-none' 
                        : 'hover:text-yellow-200 hover:scale-105'
                      }
                      ${currentSection === item.id ? 'text-yellow-200 scale-105' : ''}
                    `}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.id}
                    to={item.to}
                    className={`
                      px-3 py-1 text-sm lg:text-base font-bold tracking-wide transition-all duration-300 text-white drop-shadow-lg
                      ${disabled 
                        ? 'text-white/50 cursor-not-allowed pointer-events-none' 
                        : 'hover:text-yellow-200 hover:scale-105'
                      }
                      ${currentSection === item.id ? 'text-yellow-200 scale-105' : ''}
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
                  : 'text-white hover:text-yellow-200'
              }`}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4">
          <div className="bg-gradient-to-b from-amber-700 via-amber-600 to-amber-800 rounded-2xl p-4 border-2 border-amber-900/50 shadow-lg">
            <div className="space-y-2">
              {navItems.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      w-full text-center px-4 py-3 text-base font-bold tracking-wide transition-all duration-300 rounded-lg block text-white drop-shadow-lg
                      ${disabled 
                        ? 'text-white/50 cursor-not-allowed pointer-events-none' 
                        : 'hover:text-yellow-200 hover:bg-amber-800/50'
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
                      w-full text-center px-4 py-3 text-base font-bold tracking-wide transition-all duration-300 rounded-lg block text-white drop-shadow-lg
                      ${disabled 
                        ? 'text-white/50 cursor-not-allowed pointer-events-none' 
                        : 'hover:text-yellow-200 hover:bg-amber-800/50'
                      }
                      ${currentSection === item.id ? 'text-yellow-200 bg-amber-800/50' : ''}
                    `}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
