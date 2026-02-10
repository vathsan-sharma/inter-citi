
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* About Column */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="text-2xl font-extrabold tracking-tighter text-white">INTER-CITI</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">Logistics</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 text-slate-500">
              Interciti Logistics specializes in one and two day LTL service throughout Canada and America since 1990. We keep your business in motion.
            </p>
            <div className="flex space-x-4">
              <SocialIcon label="Li" />
              <SocialIcon label="Tw" />
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Navigation</h3>
            <ul className="space-y-4 text-[13px] font-semibold">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/service-areas" className="hover:text-white transition-colors">Service Areas</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Get In Touch</h3>
            <ul className="space-y-4 text-[13px]">
              <li className="flex flex-col">
                <span className="text-slate-600 uppercase text-[10px] font-bold tracking-widest mb-1">Email</span>
                <a href="mailto:sales@inter-citi.com" className="text-white hover:text-blue-400 transition-colors">sales@inter-citi.com</a>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-600 uppercase text-[10px] font-bold tracking-widest mb-1">Toll Free</span>
                <a href="tel:1-800-871-4243" className="text-white hover:text-blue-400 transition-colors">1-800-871-4243</a>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-600 uppercase text-[10px] font-bold tracking-widest mb-1">Office</span>
                <span className="text-white">891 Rowntree Dairy Rd, <br/> Woodbridge, ON L4L 5W3</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/5">
            <h3 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Start Shipping</h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">Ready to experience the Interciti advantage? Get a fast quote today.</p>
            <Link to="/track-quote" className="block text-center bg-blue-600 text-white py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-blue-500 transition-colors">
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[11px] font-bold uppercase tracking-widest text-slate-600">
            All rights reserved © {new Date().getFullYear()} Interciti Logistics
          </div>
          <div className="flex space-x-8 text-[11px] font-bold uppercase tracking-widest">
            <Link to="/resources" className="text-slate-600 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/resources" className="text-slate-600 hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{label: string}> = ({ label }) => (
  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-[11px] font-bold text-slate-500 hover:bg-blue-600 hover:text-white transition-all cursor-pointer border border-white/5">
    {label}
  </div>
);

export default Footer;
