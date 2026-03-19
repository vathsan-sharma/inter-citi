
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Truck, Warehouse, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      id: 'express-courier',
      title: 'Express Courier Services',
      desc: 'Fast, reliable, and secure courier solutions across Canada. We specialize in time-sensitive deliveries that keep your business moving at the speed of commerce.',
      features: ['Same-day local delivery', 'Next-day regional shipping', 'Real-time tracking and visibility', 'Secure handling of sensitive items'],
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'warehousing',
      title: 'Warehousing and Distribution',
      desc: 'Strategic storage and distribution solutions from our Scarborough hub. Our facilities are designed for efficiency, security, and scalability.',
      features: ['Temperature-controlled storage', 'Inventory management systems', 'Cross-docking services', '24/7 CCTV monitoring'],
      icon: <Warehouse className="w-8 h-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'last-mile',
      title: 'Last Mile Solutions',
      desc: 'The final step in the delivery process is the most critical. We provide seamless last-mile delivery that ensures your customers receive their orders on time, every time.',
      features: ['Residential and commercial delivery', 'White-glove service options', 'Route optimization technology', 'Flexible delivery windows'],
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-slate-50 pb-24">
      <section className="bg-slate-900 py-40 text-white overflow-hidden relative">
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 -left-1/4 w-1/2 h-full bg-blue-600/20 blur-[120px] rounded-full"
          ></motion.div>
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 15, repeat: Infinity, delay: 2 }}
            className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-slate-600/20 blur-[120px] rounded-full"
          ></motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-6"
            >
              Our Expertise
            </motion.span>
            <h1 className="text-6xl md:text-9xl font-bold mb-10 tracking-tighter leading-[0.8]">
              Our <br/> <span className="text-blue-500">Services</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-400 max-w-3xl leading-tight font-medium">
              Specialized logistics solutions engineered for the unique demands of the Canadian landscape.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 -mt-32 relative z-20">
        <div className="grid grid-cols-1 gap-16">
          {services.map((s, idx) => (
            <motion.div 
              key={s.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row group hover:shadow-blue-500/10 transition-shadow duration-500"
            >
              <div className="lg:w-1/2 relative overflow-hidden h-80 lg:h-auto">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5 }}
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent"></div>
                <div className="absolute top-8 left-8 p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white">
                  {s.icon}
                </div>
              </div>
              
              <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                   <div className="text-[12rem] font-black leading-none">0{idx + 1}</div>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-none">{s.title}</h2>
                <p className="text-slate-600 text-xl mb-12 leading-relaxed font-medium">{s.desc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {s.features.map((f, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      whileHover={{ x: 5 }}
                      className="flex items-center text-slate-800 font-bold text-sm tracking-tight"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                      {f}
                    </motion.div>
                  ))}
                </div>

                <div className="pt-10 border-t border-slate-100">
                  <Link to="/contact" className="inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-blue-600 transition-all group/btn">
                    Get Started 
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-[3rem] p-16 text-white shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"
          ></motion.div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to optimize your logistics?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Contact our team today for a custom solution tailored to your business needs in Canada.
            </p>
            <Link to="/contact" className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-blue-50 transition-all shadow-lg">
              Get a Custom Quote
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicesOverview;
