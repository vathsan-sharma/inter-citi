
import React from 'react';
import { Link } from 'react-router-dom';

const Warehousing: React.FC = () => {
  return (
    <div className="bg-white pb-24">
      <section className="bg-slate-950 py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20">
          <Link to="/services" className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8 inline-block hover:opacity-70 transition-opacity">← Back to Services</Link>
          <h1 className="hero-title text-5xl md:text-8xl mb-8 uppercase">Warehousing <br/> & Distribution</h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
            Our secure, heated warehouse provides a base for your inventory and distribution activities in North America.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
           <div className="order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1200" alt="Warehouse facility" className="rounded-3xl shadow-2xl grayscale" />
           </div>
           <div className="order-1 lg:order-2">
              <h2 className="hero-title text-4xl text-slate-900 mb-10 uppercase tracking-tight">Facility Features</h2>
              <ul className="space-y-8">
                <li className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center font-bold text-blue-600 border border-slate-100">01</div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-2">30,000 sq ft Space</h4>
                    <p className="text-slate-500 text-sm">Large climate-controlled heated storage space for your palletized goods.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center font-bold text-blue-600 border border-slate-100">02</div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-2">24/7 Security</h4>
                    <p className="text-slate-500 text-sm">Constant CCTV monitoring and a state-of-the-art alarm system for total protection.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center font-bold text-blue-600 border border-slate-100">03</div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-2">Distribution Bays</h4>
                    <p className="text-slate-500 text-sm">Dedicated loading bays optimized for rapid inbound and outbound LTL flows.</p>
                  </div>
                </li>
              </ul>
           </div>
        </div>

        <div className="bg-slate-950 text-white rounded-3xl p-16 shadow-2xl">
          <div className="max-w-3xl">
            <h2 className="hero-title text-4xl mb-8 uppercase text-blue-500">How We Support Your Business</h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Use our facility as a regional hub for cross-dock operations, short-term storage, and scheduled outbound deliveries. We integrate warehousing and transport to create smoother, more efficient flows.
            </p>
            <Link to="/contact" className="pill-button bg-white text-slate-950 px-12 py-4 font-bold uppercase tracking-widest text-sm inline-block">
              Talk to Us About Warehousing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warehousing;
