
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'Industries', path: '/industries' },
    { name: 'Resources', path: '/resources' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-glass border-b border-slate-200/50 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-12">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="flex flex-col">
                <span className={`text-2xl font-extrabold tracking-tighter leading-none transition-colors ${scrolled ? 'text-blue-900' : 'text-white'}`}>INTER-CITI</span>
                <span className={`text-[10px] font-bold uppercase tracking-[0.3em] mt-0.5 transition-colors ${scrolled ? 'text-blue-600' : 'text-blue-400'}`}>Logistics</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[12px] font-bold uppercase tracking-widest transition-all hover:opacity-100 ${
                  isActive(link.path) 
                    ? scrolled ? 'text-blue-700 opacity-100' : 'text-white opacity-100' 
                    : scrolled ? 'text-slate-600 opacity-70 hover:text-slate-900' : 'text-white opacity-70 hover:opacity-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/track-quote"
              className={`pill-button px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest border transition-all ${
                scrolled 
                  ? 'bg-blue-900 text-white border-blue-900 hover:bg-blue-800' 
                  : 'bg-white/10 text-white border-white/30 hover:bg-white hover:text-blue-900 hover:border-white'
              }`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 mt-3 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-6 pt-6 pb-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-lg font-bold uppercase tracking-tight ${
                  isActive(link.path) ? 'text-blue-700' : 'text-slate-800 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/track-quote"
              onClick={() => setIsOpen(false)}
              className="block mt-6 text-center bg-blue-900 text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
