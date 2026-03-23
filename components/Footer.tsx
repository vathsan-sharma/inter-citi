
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-red-600/5 blur-[120px] rounded-full -mt-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* About Column */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col mb-10">
              <div className="bg-white p-2 rounded-xl shadow-2xl inline-block w-fit mb-6">
                <img 
                  src="https://raw.githubusercontent.com/vathsan-sharma/imagess/main/Untitled%20design%20(30).png" 
                  alt="Inter-Citi Logistics Canada" 
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm leading-relaxed text-slate-500 font-light max-w-xs">
                Inter-Citi Logistics Canada specializes in fast, reliable, and cost-effective freight solutions throughout Canada. We keep your business in motion.
              </p>
            </div>
            <div className="flex space-x-4">
              <SocialIcon icon={<Linkedin className="w-4 h-4" />} />
              <SocialIcon icon={<Twitter className="w-4 h-4" />} />
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] mb-10 italic">Navigation</h3>
            <ul className="space-y-5 text-[13px] font-medium">
              <li><Link to="/" className="hover:text-red-500 transition-colors flex items-center gap-2 group">Home <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/about" className="hover:text-red-500 transition-colors flex items-center gap-2 group">About Us <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/services" className="hover:text-red-500 transition-colors flex items-center gap-2 group">Services <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/contact" className="hover:text-red-500 transition-colors flex items-center gap-2 group">Contact Us <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] mb-10 italic">Get In Touch</h3>
            <ul className="space-y-6 text-[13px]">
              <li className="flex flex-col">
                <span className="text-slate-600 uppercase text-[10px] font-bold tracking-widest mb-2">Email</span>
                <a href="mailto:info@inter-ciiti.com" className="text-white hover:text-red-500 transition-colors font-mono">info@inter-ciiti.com</a>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-600 uppercase text-[10px] font-bold tracking-widest mb-2">Phone</span>
                <a href="tel:(416) 410-6195" className="text-white hover:text-red-500 transition-colors font-mono">(416) 410-6195</a>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-600 uppercase text-[10px] font-bold tracking-widest mb-2">Office</span>
                <span className="text-white leading-relaxed">10 Thornmount Dr, <br/> Scarborough, ON M1B 3J4</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10 relative group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 blur-2xl -mr-12 -mt-12 group-hover:bg-red-600/20 transition-colors"></div>
            <h3 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] mb-6 italic">Start Shipping</h3>
            <p className="text-xs text-slate-500 mb-8 leading-relaxed font-light">Ready to experience the Inter-Citi advantage? Get a fast quote today.</p>
            <Link to="/contact" className="block text-center bg-red-600 text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-2xl shadow-red-600/20">
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
            All rights reserved © {new Date().getFullYear()} Inter-Citi Logistics Canada
          </div>
          <div className="flex space-x-10 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Link to="/about" className="text-slate-600 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/about" className="text-slate-600 hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{icon: React.ReactNode}> = ({ icon }) => (
  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-slate-500 hover:bg-red-600 hover:text-white transition-all cursor-pointer border border-white/10 group">
    <div className="group-hover:scale-110 transition-transform">
      {icon}
    </div>
  </div>
);

export default Footer;

