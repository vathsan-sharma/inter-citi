
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      id: 'ltl',
      title: 'LTL Freight',
      desc: 'Our core service is one and two day Less-Than-Truckload freight throughout Canada and America, moving palletized freight efficiently between major centers and smaller communities.',
      features: ['Unbeatable transit times on key North American lanes', 'Coverage from large cities to small towns', 'Safe, economical delivery options', 'Modern visibility technology'],
      path: '/services/ltl',
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'time-critical',
      title: 'Time-Critical Just-in-Time',
      desc: 'From our Toronto office, we provide local time-critical services tailored to urgent delivery requirements, supporting just-in-time supply chains.',
      features: ['90-minute and 2-hour local delivery options', 'Same-day delivery before 5 pm (where available)', 'Emergency production line support', 'Fast response and local dispatch'],
      path: '/services/time-critical',
      image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'warehousing',
      title: 'Warehousing & Distribution',
      desc: 'Our secure, temperature-controlled warehouse supports regional staging, cross-docking, and distribution for North American shippers.',
      features: ['30,000 sq ft of heated storage space', '24/7 CCTV monitoring and alarm systems', 'Support for time-critical distribution', 'Strategically located hub in Toronto'],
      path: '/services/warehousing',
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'network',
      title: 'North America Network',
      desc: 'A well-established network of operating locations across Canada and the USA supports your ongoing delivery and distribution requirements.',
      features: ['Presence in major Canadian industrial hubs', 'Reach into key American metropolitan regions', 'Consistent cross-border lane schedules', 'Integrated domestic distribution'],
      path: '/service-areas',
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-slate-50 pb-24">
      <section className="bg-slate-900 py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20">
          <h1 className="hero-title text-5xl md:text-8xl mb-8">Integrated <br/> Services</h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
            Inter-citi provides a suite of freight and logistics services designed around North American LTL and time-critical delivery.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 -mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map(s => (
            <div key={s.id} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden group">
              <div className="aspect-[21/9] relative overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
              </div>
              <div className="p-12">
                <h2 className="hero-title text-3xl text-slate-900 mb-6 uppercase tracking-tight">{s.title}</h2>
                <p className="text-slate-500 mb-10 leading-relaxed">{s.desc}</p>
                
                <div className="mb-10">
                  <h3 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-6">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    {s.features.map((f, i) => (
                      <li key={i} className="flex items-start text-[13px] text-slate-600 font-medium">
                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-slate-50 flex justify-between items-center">
                  <Link 
                    to={s.path} 
                    className="inline-flex items-center text-slate-900 font-bold uppercase tracking-widest text-[11px] border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;
