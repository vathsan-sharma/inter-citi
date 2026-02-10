
import React from 'react';
import { Link } from 'react-router-dom';

const TimeCritical: React.FC = () => {
  return (
    <div className="bg-white pb-24">
      <section className="bg-blue-900 py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20">
          <Link to="/services" className="text-blue-300 text-[10px] font-black uppercase tracking-[0.4em] mb-8 inline-block hover:opacity-70 transition-opacity">← Back to Services</Link>
          <h1 className="hero-title text-5xl md:text-8xl mb-8 uppercase">Time-Critical <br/> Just-In-Time</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
            Local time-critical services designed to support urgent deliveries and just-in-time supply chains from our Toronto-based operations.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <h2 className="hero-title text-4xl text-slate-900 mb-8 uppercase tracking-tight">When Speed Matters</h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Use our time-critical services for shipments where every hour counts. We help keep production lines running, maintain inventory levels, and meet tight customer deadlines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <OptionCard title="90 Min" sub="Urgent Dispatch" />
              <OptionCard title="2 Hour" sub="Priority Move" />
              <OptionCard title="Same Day" sub="Before 5 PM" />
            </div>
          </div>
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=1200" 
               alt="Urgent Delivery" 
               className="rounded-3xl shadow-2xl grayscale"
             />
          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-16 border border-slate-100 text-center">
          <h2 className="hero-title text-4xl text-slate-900 mb-12 uppercase">Service Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold text-blue-600 uppercase text-xs tracking-widest mb-4">Fast Response</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Immediate response and dispatch from our local Toronto operations team.</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-600 uppercase text-xs tracking-widest mb-4">Local Expertise</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Experienced local drivers familiar with the region and the fastest transit routes.</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-600 uppercase text-xs tracking-widest mb-4">Full Integration</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Seamlessly links with our broader LTL network and warehousing solutions.</p>
            </div>
          </div>
          <div className="mt-16">
            <Link to="/contact" className="pill-button bg-blue-900 text-white px-12 py-4 font-bold uppercase tracking-widest text-sm inline-block shadow-2xl">
              Discuss a Time-Critical Shipment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const OptionCard: React.FC<{title: string, sub: string}> = ({ title, sub }) => (
  <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm text-center">
    <div className="hero-title text-2xl text-slate-900 mb-2">{title}</div>
    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{sub}</div>
  </div>
);

export default TimeCritical;
