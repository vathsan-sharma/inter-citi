
import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveMap from '../components/InteractiveMap';

const ServiceAreas: React.FC = () => {
  return (
    <div className="bg-white pb-24">
      {/* Hero Header */}
      <section className="bg-slate-950 py-32 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 relative z-10">
          <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Reach</span>
          <h1 className="hero-title text-5xl md:text-8xl mb-8 uppercase leading-none">North American <br/> Network</h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
            From our central hub in Woodbridge, Ontario, we maintain a disciplined network of lanes connecting major industrial centers across Canada and the USA.
          </p>
        </div>
      </section>

      {/* Network Overview & Map */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center mb-24">
          <div className="lg:col-span-1">
            <h2 className="hero-title text-3xl text-slate-900 mb-6 uppercase tracking-tight">Strategically <br/> Positioned</h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Our network isn't just about dots on a map; it's about transit efficiency. We strategically position terminals to facilitate 24-48 hour deliveries on primary North American lanes.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">HQ</div>
                <div>
                  <div className="text-xs font-black uppercase text-slate-900 tracking-wider">Main Operations Hub</div>
                  <div className="text-sm text-slate-500">Woodbridge (Toronto), ON</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">LTL</div>
                <div>
                  <div className="text-xs font-black uppercase text-slate-900 tracking-wider">LTL Service Range</div>
                  <div className="text-sm text-slate-500">Continental USA & Canada</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <InteractiveMap />
          </div>
        </div>

        {/* Transit Corridors Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="hero-title text-4xl text-slate-900 uppercase mb-4">Core Transit Corridors</h2>
            <p className="text-slate-500">Typical LTL transit times for our most frequent industrial lanes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CorridorCard origin="Toronto" destination="Chicago, IL" time="1-2 Days" />
            <CorridorCard origin="Montreal" destination="New Jersey / NY" time="1-2 Days" />
            <CorridorCard origin="Toronto" destination="Montreal, QC" time="Next Day" />
            <CorridorCard origin="Vancouver" destination="Seattle, WA" time="Next Day" />
            <CorridorCard origin="Toronto" destination="Detroit, MI" time="Next Day" />
            <CorridorCard origin="Calgary" destination="Denver, CO" time="2 Days" />
            <CorridorCard origin="Toronto" destination="Atlanta, GA" time="2-3 Days" />
            <CorridorCard origin="Toronto" destination="Los Angeles, CA" time="3-4 Days" />
          </div>
        </div>

        {/* Regional Focus Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
          <div className="space-y-20">
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="hero-title text-3xl text-slate-900 uppercase">Canada Coverage</h2>
              </div>
              <p className="text-slate-500 leading-relaxed text-lg mb-10">
                Operating a robust network across all Canadian provinces. We specialize in connecting the Ontario manufacturing heartland to major distribution hubs in Quebec, the West, and the Maritimes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <AreaTag text="Greater Toronto (HQ)" />
                 <AreaTag text="Montreal & Corridor" />
                 <AreaTag text="Vancouver & GVA" />
                 <AreaTag text="Calgary / Edmonton Hubs" />
                 <AreaTag text="Winnipeg Distribution" />
                 <AreaTag text="Atlantic Canada Gateway" />
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L16 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h2 className="hero-title text-3xl text-slate-900 uppercase">USA Coverage</h2>
              </div>
              <p className="text-slate-500 leading-relaxed text-lg mb-10">
                We provide deep penetration into the US market, with daily cross-border departures. Our established network covers all major metropolitan industrial regions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <AreaTag text="Northeast / Tri-State" />
                 <AreaTag text="Midwest Industrial Belt" />
                 <AreaTag text="Southeast Distribution" />
                 <AreaTag text="Texas & Southwest" />
                 <AreaTag text="California Hubs" />
                 <AreaTag text="Pacific Northwest" />
              </div>
            </section>
          </div>

          <div className="sticky top-32">
            <div className="bg-slate-950 text-white rounded-3xl p-12 shadow-2xl overflow-hidden relative mb-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <h2 className="hero-title text-3xl text-blue-500 mb-8 uppercase">Seamless Borders</h2>
              <p className="text-slate-400 mb-10 leading-relaxed">
                As cross-border specialists, we eliminate the friction from international LTL. Our drivers are qualified by all Federal Safety guidelines and have minimum 2-year cross-border experience.
              </p>
              
              <ul className="space-y-6 mb-12">
                 <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold uppercase tracking-tight">Pre-Arrival Customs Clearing</span>
                 </li>
                 <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold uppercase tracking-tight">C-TPAT / PIP Compliance</span>
                 </li>
                 <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold uppercase tracking-tight">Real-Time Transit Tracking</span>
                 </li>
              </ul>

              <Link to="/track-quote" className="block text-center bg-white text-slate-950 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all">
                Check My Lane
              </Link>
            </div>

            <div className="bg-blue-600 text-white rounded-3xl p-10 shadow-xl">
               <h3 className="hero-title text-xl mb-4 uppercase">Toronto Direct</h3>
               <p className="text-blue-100 text-sm leading-relaxed mb-6">
                 Local time-critical Just-In-Time service for Southern Ontario. 90-minute and 2-hour dispatch available from Woodbridge.
               </p>
               <a href="tel:1-800-871-4243" className="font-black text-2xl tracking-tighter">1-800-871-4243</a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-50 py-32 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="hero-title text-4xl md:text-6xl mb-8 uppercase text-slate-950">We Cover <br/> Your Lanes</h2>
          <p className="text-xl text-slate-500 mb-12">Whether you are shipping between major cities or small towns, we find a way to get it there on time.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/track-quote" className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-blue-500 transition-all shadow-xl">Request Quote</Link>
            <Link to="/contact" className="border border-slate-200 text-slate-900 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-slate-950 hover:text-white transition-all">Contact Ops</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const AreaTag: React.FC<{text: string}> = ({ text }) => (
  <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-[11px] font-bold uppercase tracking-widest text-slate-700 flex items-center gap-3 hover:bg-white hover:shadow-md hover:border-blue-200 transition-all group">
    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></div>
    {text}
  </div>
);

const CorridorCard: React.FC<{origin: string, destination: string, time: string}> = ({ origin, destination, time }) => (
  <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
    <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4">
      <span>{origin}</span>
      <span className="text-slate-300">→</span>
      <span>{destination}</span>
    </div>
    <div className="hero-title text-2xl text-slate-950 uppercase mb-1">{time}</div>
    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Typical LTL Transit</div>
  </div>
);

export default ServiceAreas;
