
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Truck, Warehouse, MapPin, ArrowRight, CheckCircle2, Shield, Globe, Zap } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      id: 'express-courier',
      title: 'Express Courier Services',
      subtitle: 'Time-Critical Logistics',
      desc: 'Fast, reliable, and secure courier solutions across Canada. We specialize in time sensitive deliveries that keep your business moving at the speed of commerce.',
      features: ['Same-day local delivery', 'Next-day regional shipping', 'Real-time tracking and visibility', 'Secure handling of sensitive items'],
      icon: <Truck className="w-8 h-8 text-white" />,
      image: "https://raw.githubusercontent.com/vathsan-sharma/inticiti-images/main/08.jpg",
      stats: { label: 'On-Time Rate', value: '99.9%' }
    },
    {
      id: 'warehousing',
      title: 'Warehousing and Distribution',
      subtitle: 'Strategic Storage Solutions',
      desc: 'Strategic storage and distribution solutions from our Scarborough hub. Our facilities are designed for efficiency, security, and scalability.',
      features: ['Temperature-controlled storage', 'Inventory management systems', 'Cross-docking services', '24/7 CCTV monitoring'],
      icon: <Warehouse className="w-8 h-8 text-white" />,
      image: "https://raw.githubusercontent.com/vathsan-sharma/inticiti-images/main/07.jpg",
      stats: { label: 'Storage Capacity', value: '50k+ sqft' }
    },
    {
      id: 'last-mile',
      title: 'Last Mile Solutions',
      subtitle: 'The Final Connection',
      desc: 'The final step in the delivery process is the most critical. We provide seamless last-mile delivery that ensures your customers receive their orders on time, every time.',
      features: ['Residential and commercial delivery', 'White-glove service options', 'Route optimization technology', 'Flexible delivery windows'],
      icon: <MapPin className="w-8 h-8 text-white" />,
      image: "https://raw.githubusercontent.com/vathsan-sharma/inticiti-images/main/09.jpg",
      stats: { label: 'Daily Deliveries', value: '5k+' }
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen selection:bg-brand-blue/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5 bg-brand-blue">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/20 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 pt-40 pb-20 md:pt-56 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="hero-title text-white mb-6 md:mb-8"
            >
              Logistics <span className="text-white/80 italic">Redefined.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="hero-subtitle text-white/60 mb-8 md:mb-12 max-w-2xl"
            >
              Specialized logistics solutions engineered for the unique demands of the Canadian landscape. Precision, speed, and absolute reliability.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-32">
            {services.map((s, idx) => (
              <motion.div 
                key={s.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-4 bg-brand-blue/5 rounded-[2rem] blur-2xl group-hover:bg-brand-blue/10 transition-colors duration-700"></div>
                  <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-[2rem] border border-slate-100">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.5 }}
                      src={s.image} 
                      alt={s.title} 
                      className="w-full h-full object-cover transition-all duration-700" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent opacity-60"></div>
                    
                    {/* Floating Stat Card */}
                    <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-white/60 text-xs uppercase tracking-widest mb-1">{s.stats.label}</p>
                          <p className="text-3xl font-bold font-mono text-white">{s.stats.value}</p>
                        </div>
                        <div className="p-3 bg-brand-blue rounded-xl">
                          {s.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="mb-8">
                    <span className="text-brand-blue font-mono text-sm mb-4 block tracking-widest uppercase">{s.subtitle}</span>
                    <h2 className="hero-title text-4xl md:text-6xl text-slate-900 tracking-tighter mb-8 italic">{s.title}</h2>
                    <p className="text-slate-500 text-xl mb-12 leading-relaxed font-light">{s.desc}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    {s.features.map((f, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                        className="flex items-start gap-4 group/item"
                      >
                        <div className="mt-1 w-5 h-5 rounded-full border border-brand-blue/30 flex items-center justify-center group-hover/item:border-brand-blue transition-colors">
                          <CheckCircle2 className="w-3 h-3 text-brand-blue opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-slate-600 font-medium text-sm tracking-tight">{f}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-6 text-slate-900 group/link"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.3em]">Inquire Now</span>
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover/link:bg-brand-blue group-hover/link:border-brand-blue group-hover/link:text-white transition-all duration-500">
                      <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 bg-brand-blue border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Shield className="w-6 h-6" />, title: 'Secure Handling', desc: 'Advanced monitoring and secure chain of custody for every shipment.' },
              { icon: <Globe className="w-6 h-6" />, title: 'National Reach', desc: 'Seamless logistics network spanning from coast to coast across Canada.' },
              { icon: <Zap className="w-6 h-6" />, title: 'Rapid Response', desc: 'Real-time optimization and 24/7 support for time-critical needs.' }
            ].map((cap, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-white/10 hover:border-white/50 transition-colors group bg-white/5"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-brand-blue transition-all duration-500">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 italic tracking-tight text-white">{cap.title}</h3>
                <p className="text-white/40 leading-relaxed font-light">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center relative overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 blur-[160px] rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="hero-title text-5xl md:text-8xl text-slate-900 tracking-tighter mb-8 italic">Ready to <span className="text-brand-blue">optimize?</span></h2>
          <p className="text-xl text-slate-500 mb-12 font-light">
            Contact our team today for a custom solution tailored to your business needs in Canada.
          </p>
          <Link to="/contact" className="inline-block bg-brand-blue text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-accent transition-all shadow-2xl shadow-brand-blue/20">
            Set up an account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;

