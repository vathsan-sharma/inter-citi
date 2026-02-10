
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Optimized Hero Background - High Visibility */}
        <div className="absolute inset-0">
          <img 
            src="https://raw.githubusercontent.com/vathsan-collab/furniture1/main/Gemini_Generated_Image_g96lkeg96lkeg96l.png" 
            alt="Interciti Logistics Premium Freight" 
            className="w-full h-full object-cover transition-transform duration-[30s] hover:scale-105"
            loading="eager"
          />
          {/* Refined Overlays for maximum visibility while maintaining text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-12 pb-24">
          <div className="max-w-4xl">
            <h1 className="hero-title text-[clamp(2.5rem,8vw,5.5rem)] text-white mb-10 text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000 drop-shadow-lg">
              One and Two Day LTL <br className="hidden md:block"/> Across Canada <br className="hidden md:block"/> and the USA
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-6 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 drop-shadow-md">
              Interciti Logistics provides fast, reliable Less-Than-Truckload freight service from major cities to small towns across North America since 1990.
            </p>
            <p className="text-sm md:text-base text-slate-200 mb-12 max-w-xl leading-relaxed opacity-90 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 drop-shadow-sm">
              90-minute, 2-hour, or same-day local delivery options. We find a way to get it there on time, every time.
            </p>

            <div className="flex flex-wrap items-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
              <Link 
                to="/track-quote" 
                className="group pill-button bg-blue-600 text-white pr-2 pl-8 py-2 flex items-center gap-4 font-bold tracking-tight hover:scale-105 hover:bg-blue-500 transition-all shadow-2xl"
              >
                Request Quote
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                   <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
              
              <Link 
                to="/track-quote" 
                className="pill-button border border-white/40 text-white px-8 py-3.5 font-bold tracking-widest text-[12px] uppercase hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Track Shipment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Divisions */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Specialized Solutions</span>
              <h2 className="hero-title text-4xl md:text-6xl text-slate-900 leading-tight">Industry-Specific <br/> Logistics Expertise</h2>
            </div>
            <Link to="/services" className="text-slate-900 font-bold uppercase tracking-widest text-[11px] border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
              Explore All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100 group">
              <h3 className="hero-title text-3xl text-slate-900 mb-6 uppercase group-hover:text-blue-600 transition-colors">IT Hardware Logistics</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Expert transportation of IT hardware including computers, servers, and printers. We provide Just-in-Time service with on-demand storage to eliminate your overhead.
              </p>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-tighter text-slate-400">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Server & Hardware Relocation</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Secure Tech Storage</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100 group">
              <h3 className="hero-title text-3xl text-slate-900 mb-6 uppercase group-hover:text-blue-600 transition-colors">Bulk Transportation</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Specialized in the food industry, primarily moving edible oils. We employ latest safety methods and are fully compliant with all industry regulations.
              </p>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-tighter text-slate-400">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Food-Grade Compliant</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> High-Tech Safety Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <ValuePillar 
              title="It Makes Sense"
              body="We analyze all of your transportation requirements and formulate a unique plan designed to save you both time and money."
            />
            <ValuePillar 
              title="Time Matters"
              body="Time sensitive shipments hinge on delivery. We offer 24hr customer service dispatch and 90min local delivery options."
            />
            <ValuePillar 
              title="Technology Counts"
              body="Real-time tracking allows us to monitor your shipment at all times, enabling swift redirection should the need arise."
            />
            <ValuePillar 
              title="Superior Service"
              body="Our qualified personnel handle your shipment with professionalism from pickup to delivery. Your satisfaction is our #1 goal."
            />
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-24">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block text-center lg:text-left">Integrated Logistics</span>
            <h2 className="hero-title text-4xl md:text-6xl text-slate-900 leading-tight text-center lg:text-left">The Solution to All Your <br className="hidden lg:block"/> Transportation Needs</h2>
            <p className="mt-8 text-xl text-slate-500 max-w-2xl leading-relaxed text-center lg:text-left">
              Interciti Logistics offers total logistical support. We customize and provide innovative solutions offering flexibility and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             <PremiumServiceCard 
              num="01"
              title="LTL Freight"
              desc="One and two day Less-Than-Truckload service moving palletized freight efficiently across major North American hubs."
              path="/services/ltl"
              image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
             />
             <PremiumServiceCard 
              num="02"
              title="Temperature Control"
              desc="Specialized temperature-controlled vans for sensitive food-grade or pharmaceutical shipments."
              path="/services/ltl"
              image="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800"
             />
             <PremiumServiceCard 
              num="03"
              title="Warehousing"
              desc="30,000 sq ft of heated, monitored storage secured 24/7 with state-of-the-art alarm systems."
              path="/services/warehousing"
              image="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800"
             />
             <PremiumServiceCard 
              num="04"
              title="Just-In-Time"
              desc="Local delivery in 90 minutes, 2 hours, or same day before 5pm. When your shipment needs to be there, we find a way."
              path="/services/time-critical"
              image="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=800"
             />
          </div>
        </div>
      </section>

      {/* Performance & Trust */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="hero-title text-4xl md:text-6xl text-slate-900 mb-8 leading-tight uppercase">Performance You <br/> Can Depend On</h2>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed">
                Our reputation as a client-focused organization is a direct result of our ongoing commitment to responsiveness and safety.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-16 border-t border-slate-100 pt-12">
                <div>
                  <div className="stat-number text-5xl text-blue-900 mb-2">99.4%</div>
                  <div className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">On-Time Deliveries</div>
                </div>
                <div>
                  <div className="stat-number text-5xl text-blue-900 mb-2">250K+</div>
                  <div className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Annual Shipments</div>
                </div>
                <div>
                  <div className="stat-number text-5xl text-blue-900 mb-2">1990</div>
                  <div className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Established</div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <p className="text-lg text-slate-900 font-medium italic mb-4">
                  “Interciti understands the value of time. They find a way to get it there, on time, every time.”
                </p>
                <div className="text-[11px] font-bold uppercase tracking-widest text-blue-600">
                  — Valued Logistics Partner
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?auto=format&fit=crop&q=80&w=1200" 
                alt="Logistics Operations" 
                className="rounded-3xl shadow-2xl grayscale"
              />
              <div className="absolute -bottom-10 -left-10 bg-blue-900 p-12 rounded-3xl text-white hidden md:block max-w-xs shadow-2xl">
                <h3 className="hero-title text-3xl mb-4 uppercase">Direct LTL</h3>
                <p className="text-blue-100 text-sm mb-8 leading-relaxed">We bypass standard delays to move your cargo on the first available power unit.</p>
                <Link to="/track-quote" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest">Request Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-32 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="hero-title text-4xl md:text-7xl mb-8 leading-tight">Ready to Keep Your Business in Motion?</h2>
          <p className="text-xl text-slate-400 mb-16 leading-relaxed">
            Call today and experience why multitudes of companies depend on Interciti Logistics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              to="/track-quote" 
              className="pill-button bg-blue-600 text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-blue-500 transition-all shadow-xl"
            >
              Get Started
            </Link>
            <a 
              href="tel:1-800-871-4243" 
              className="pill-button border border-white/20 text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-slate-950 transition-all"
            >
              1-800-871-4243
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const ValuePillar: React.FC<{title: string, body: string}> = ({ title, body }) => (
  <div className="group">
    <div className="w-12 h-[2px] bg-blue-600 mb-6 transition-all group-hover:w-20"></div>
    <h3 className="hero-title text-2xl text-slate-900 mb-6 uppercase tracking-tight">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
  </div>
);

const PremiumServiceCard: React.FC<{num: string, title: string, desc: string, image: string, path: string}> = ({ num, title, desc, image, path }) => (
  <Link to={path} className="group relative aspect-[3/4] bg-slate-900 rounded-3xl overflow-hidden block">
    <img 
      src={image} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
    <div className="absolute top-8 left-8">
      <span className="text-blue-500 font-black text-sm tracking-widest opacity-80">{num}</span>
    </div>
    <div className="absolute bottom-10 left-10 right-10">
      <h3 className="hero-title text-2xl text-white mb-4 transition-transform duration-500 group-hover:-translate-y-2 uppercase">{title}</h3>
      <p className="text-slate-300 text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0 leading-relaxed">
        {desc}
      </p>
      <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-blue-500 transition-all duration-700"></div>
    </div>
  </Link>
);

export default Home;
