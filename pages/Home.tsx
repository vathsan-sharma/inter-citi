
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Shield, Clock, Globe, Truck, Warehouse, Package, BarChart3, Zap, Users2, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="overflow-x-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <motion.div style={{ opacity, scale }} className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src="https://raw.githubusercontent.com/vathsan-sharma/imagess/main/Truck.png" 
            alt="Intercity Logistics Canada" 
            className="w-full h-full object-cover"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.4)_100%)]"></div>
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-12 pb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Canada's Premier Logistics Partner
            </motion.div>

            <h1 className="hero-title text-[clamp(2.5rem,10vw,7rem)] text-white mb-8 leading-[0.85] tracking-tighter">
              Intercity <br/> Logistics <span className="text-blue-500">Canada</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-slate-300 mb-12 max-w-2xl font-medium leading-tight">
              Fast, reliable, and cost-effective freight solutions, delivered with care and confidence across the Canadian landscape.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <Link 
                to="/contact" 
                className="group relative overflow-hidden pill-button bg-blue-600 text-white pr-2 pl-10 py-3 flex items-center gap-6 font-bold tracking-tight hover:scale-105 transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)]"
              >
                <span className="relative z-10">Get a Quote</span>
                <div className="relative z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                   <ArrowRight className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              
              <Link 
                to="/services" 
                className="pill-button border border-white/20 text-white px-10 py-5 font-bold tracking-widest text-[12px] uppercase hover:bg-white/10 transition-all backdrop-blur-md hover:border-white/40"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
        </motion.div>
      </section>

      {/* Trust & Reliability Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Since 1990</span>
              <h2 className="hero-title text-4xl md:text-6xl text-slate-900 mb-8 leading-tight">
                Excellence in <br/> Canadian Logistics
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Intercity Logistics Canada has been at the forefront of the transportation industry, providing seamless freight solutions across the country. Our commitment to safety and efficiency is unmatched.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-blue-600 transition-colors">
                    <Shield className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Secure Transport</h4>
                    <p className="text-sm text-slate-500">Highest safety standards for your cargo.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-blue-600 transition-colors">
                    <Clock className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">On-Time Delivery</h4>
                    <p className="text-sm text-slate-500">Reliable scheduling for your supply chain.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
                alt="Logistics Operations" 
                className="rounded-[2.5rem] shadow-2xl border-8 border-white"
              />
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-10 -right-10 bg-blue-900 p-10 rounded-3xl text-white hidden md:block shadow-2xl border-4 border-white"
              >
                <div className="text-5xl font-black mb-1 tracking-tighter">30+</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-70">Years of Experience</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Bento Grid */}
      <section className="py-32 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
            >
              The Intercity Advantage
            </motion.span>
            <h2 className="hero-title text-4xl md:text-6xl mb-6">Why Choose Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BentoCard 
              className="md:col-span-2 md:row-span-2 bg-blue-600"
              icon={<Globe className="w-10 h-10" />}
              title="Nationwide Coverage"
              desc="From coast to coast, we cover every corner of Canada with our extensive network and local expertise."
              image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
            />
            <BentoCard 
              icon={<BarChart3 className="w-8 h-8" />}
              title="Real-time Tracking"
              desc="Full visibility into your shipments with advanced GPS tracking."
              bg="bg-slate-900"
            />
            <BentoCard 
              icon={<Zap className="w-8 h-8" />}
              title="Express Solutions"
              desc="When time is critical, our express services deliver."
              bg="bg-slate-800"
            />
            <BentoCard 
              className="md:col-span-1"
              icon={<Users2 className="w-8 h-8" />}
              title="Expert Team"
              desc="Dedicated professionals managing your freight 24/7."
              bg="bg-blue-900"
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center mb-20">
          <h2 className="hero-title text-4xl md:text-6xl text-slate-900 mb-6">Our Core Services</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tailored logistics solutions designed to meet the unique demands of the Canadian market.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Truck className="w-8 h-8" />}
              title="Express Courier Services"
              desc="Fast and reliable courier solutions for your most urgent shipments across Canada."
              image="https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=800"
            />
            <ServiceCard 
              icon={<Warehouse className="w-8 h-8" />}
              title="Warehousing and Distribution"
              desc="Secure, climate-controlled storage and efficient distribution management."
              image="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800"
            />
            <ServiceCard 
              icon={<Package className="w-8 h-8" />}
              title="Last Mile Solutions"
              desc="The final link in your supply chain, delivered with precision to your customer's doorstep."
              image="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=800"
            />
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="hero-title text-4xl md:text-6xl text-slate-900 mb-8 uppercase">Serving All of <br/> <span className="text-blue-600">Canada</span></h2>
              <p className="text-xl text-slate-600 mb-12">
                Our strategic hubs across the country allow us to provide rapid response times and reliable service to every province and territory.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City'].map((city) => (
                  <div key={city} className="flex items-center gap-3 text-slate-800 font-bold">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    {city}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" 
                className="rounded-3xl shadow-xl" 
                alt="Canada Logistics" 
              />
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1501700493717-9c99da9ff053?auto=format&fit=crop&q=80&w=600" 
                className="rounded-3xl shadow-xl mt-12" 
                alt="Canadian Freight" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-40 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <StatItem number="99.4%" label="On-Time Rate" sub="Reliability you can count on" />
            <StatItem number="250K+" label="Deliveries Yearly" sub="Moving Canada forward" />
            <StatItem number="100%" label="Canadian Owned" sub="Proudly local operations" />
            <StatItem number="24/7" label="Support" sub="Always here when you need us" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="hero-title text-4xl md:text-7xl mb-8 leading-tight">Ready to Move Your Freight?</h2>
          <p className="text-xl text-slate-600 mb-16 leading-relaxed">
            Contact Intercity Logistics Canada today for a customized quote and experience the difference of professional logistics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              to="/contact" 
              className="pill-button bg-blue-600 text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-blue-500 transition-all shadow-xl"
            >
              Contact Us Now
            </Link>
            <a 
              href="tel:(416) 410-6195" 
              className="pill-button border border-slate-200 text-slate-900 px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-slate-50 transition-all"
            >
              (416) 410-6195
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const BentoCard: React.FC<{icon: React.ReactNode, title: string, desc: string, className?: string, bg?: string, image?: string}> = ({ icon, title, desc, className = "", bg = "bg-white", image }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className={`relative p-10 rounded-[2.5rem] overflow-hidden flex flex-col justify-between min-h-[300px] ${bg} ${className} group`}
  >
    {image && (
      <div className="absolute inset-0 -z-10 opacity-40 group-hover:opacity-50 transition-opacity">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
      </div>
    )}
    <div className="relative z-10">
      <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 text-white">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 tracking-tight">{title}</h3>
      <p className="text-white/70 leading-relaxed font-medium">{desc}</p>
    </div>
  </motion.div>
);

const StatItem: React.FC<{number: string, label: string, sub: string}> = ({ number, label, sub }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center md:text-left"
  >
    <div className="text-6xl font-black mb-4 tracking-tighter text-blue-500">{number}</div>
    <div className="text-lg font-bold uppercase tracking-widest mb-2">{label}</div>
    <div className="text-slate-500 text-sm font-medium">{sub}</div>
  </motion.div>
);

const ServiceCard: React.FC<{icon: React.ReactNode, title: string, desc: string, image: string}> = ({ icon, title, desc, image }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 group"
  >
    <div className="h-64 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-colors"></div>
    </div>
    <div className="p-10">
      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
        {icon}
      </div>
      <h3 className="hero-title text-2xl text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-500 leading-relaxed mb-6">{desc}</p>
      <Link to="/services" className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-[11px] group">
        Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  </motion.div>
);

export default Home;
