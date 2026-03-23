
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Search, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex items-start justify-between gap-4">
        
        {/* Left Nav Links Pod */}
        <div className="hidden lg:flex items-center bg-slate-900/40 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl mt-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-bold uppercase tracking-widest transition-all hover:text-white px-4 py-2 rounded-lg ${
                  isActive(link.path) ? 'text-white bg-brand-red' : 'text-white/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Center Logo Pod - Drops from top, Image Only */}
        <div className="bg-white px-3 md:px-4 py-1.5 md:py-2 rounded-b-[1.2rem] md:rounded-b-[1.5rem] shadow-2xl flex items-center justify-center min-w-[80px] md:min-w-[140px] border-x border-b border-white/20">
          <Link to="/">
            <img 
              src="https://raw.githubusercontent.com/vathsan-sharma/imagess/main/Untitled%20design%20(30).png" 
              alt="Inter-Citi Logistics" 
              className="h-10 md:h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
        </div>

        {/* Right Buttons Pod */}
        <div className="hidden lg:flex items-center gap-3 mt-8">
          <button className="bg-white text-slate-950 px-6 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-slate-100 transition-all shadow-lg group">
            Tracking Package
            <div className="w-5 h-5 bg-slate-950 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </button>
          <Link to="/contact" className="bg-brand-red text-white px-6 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-rose-700 transition-all shadow-lg group">
            Get In touch with us
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <ArrowRight className="w-3 h-3 text-brand-red" />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden mt-4 md:mt-8">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="bg-slate-900/80 backdrop-blur-xl border border-white/10 p-3 md:p-4 rounded-xl md:rounded-2xl text-white flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 md:top-28 left-4 md:left-6 right-4 md:right-6 bg-slate-900 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 z-50">
          <div className="flex flex-col space-y-4 md:space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xs md:text-sm font-bold uppercase tracking-widest p-2 rounded-lg ${
                  isActive(link.path) ? 'text-brand-red bg-white/5' : 'text-white/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 md:pt-6 border-t border-white/10 flex flex-col gap-3 md:gap-4">
              <button className="bg-white text-slate-950 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-[10px] md:text-xs uppercase tracking-widest">
                Tracking Package
              </button>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-brand-red text-white py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-[10px] md:text-xs uppercase tracking-widest text-center">
                Get In touch with us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
