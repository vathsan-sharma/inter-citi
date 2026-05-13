
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
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
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-10 pt-4 md:pt-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 md:gap-8">
        
        {/* Left Nav Links - The only part with the "menu bar" styling */}
        <div className="hidden lg:flex items-center flex-1">
          <div className="bg-brand-blue/40 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-2xl shadow-2xl flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-bold uppercase tracking-widest transition-all hover:text-white px-4 py-2 rounded-lg ${
                  isActive(link.path) ? 'text-white bg-brand-blue/60 backdrop-blur-sm' : 'text-white/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Center Logo - Large and without background container */}
        <div className="flex items-center justify-center">
          <Link to="/" className="block">
            <motion.img 
              whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 15px rgba(255,255,255,0.3))" }}
              transition={{ type: "spring", stiffness: 400, damping: 14 }}
              src="https://raw.githubusercontent.com/vathsan-sharma/imagess/main/Untitled%20design%20(30).png" 
              alt="Inter-Citi Logistics" 
              className="h-16 md:h-32 w-auto object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </Link>
        </div>

        {/* Right Buttons - Floating without bar */}
        <div className="hidden lg:flex items-center gap-3 flex-1 justify-end">
          <Link to="/contact" className="bg-brand-blue text-white px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-brand-accent transition-all shadow-xl group hover:scale-105">
            Set up an account
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowRight className="w-3 h-3 text-brand-blue" />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle - Small background for better contrast */}
        <div className="lg:hidden ml-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white flex items-center justify-center p-3 bg-brand-blue/40 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 md:top-32 left-4 md:left-6 right-4 md:right-6 bg-brand-blue border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 z-50">
          <div className="flex flex-col space-y-4 md:space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xs md:text-sm font-bold uppercase tracking-widest p-2 rounded-lg ${
                  isActive(link.path) ? 'text-white bg-white/10' : 'text-white/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 md:pt-6 border-t border-white/10 flex flex-col gap-3 md:gap-4">
              <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-white text-brand-blue py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-[10px] md:text-xs uppercase tracking-widest text-center shadow-xl">
                Set up an account
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
