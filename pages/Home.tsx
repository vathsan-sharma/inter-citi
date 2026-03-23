
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Shield, Clock, Globe, Truck, Warehouse, Package, BarChart3, Zap, Users2, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="overflow-x-hidden bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden px-6 lg:px-10">
        {/* Background Video with Overlay */}
        <motion.div 
          style={{ y: videoY }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-110"
          >
            <source src="https://raw.githubusercontent.com/vathsan-sharma/inticiti-images/main/From%20KlickPin%20CF%20Pin%20on%20FAMCO.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </motion.div>

        <motion.div 
          style={{ y: textY, opacity, scale }}
          className="relative z-10 max-w-7xl mx-auto w-full pt-28 pb-32 md:pt-48 md:pb-64"
        >
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 mb-8 md:mb-12"
            >
              <span className="bg-brand-red w-2 h-2 rounded-full animate-pulse"></span>
              <span className="text-white/40 font-bold uppercase tracking-[0.5em] text-[7px] md:text-[9px]">Inter-Citi Logistics Canada</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="hero-title text-white mb-6 md:mb-8"
            >
              Smarter Transport. Faster Deliveries. <br />
              Nationwide Reach.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="hero-subtitle mb-8 md:mb-12 max-w-lg"
            >
              Experience technology-driven transport solutions built for speed, safety, and efficiency — from freight and logistics to last-mile delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-8"
            >
              <button className="bg-white text-slate-950 px-10 md:px-14 py-4 md:py-5 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest flex items-center gap-4 hover:bg-brand-red hover:text-white transition-all duration-500 group min-h-[44px] w-full sm:w-auto justify-center shadow-2xl">
                See How It Works
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </button>
              <Link to="/contact" className="text-white/60 font-bold uppercase tracking-widest text-[9px] md:text-[11px] hover:text-white transition-colors flex items-center gap-3 group min-h-[44px]">
                Request a Quote <span className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-white transition-all"></span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Stats & Controls */}
        <div className="absolute bottom-8 md:bottom-16 left-6 md:left-10 right-6 md:left-10 z-10 flex flex-col md:flex-row items-center md:items-end justify-end gap-6 md:gap-8">
          <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12 w-full md:w-auto">
            <div className="flex flex-col items-center md:items-end">
              <span className="text-2xl md:text-4xl font-black text-white tracking-tight mb-1">25+</span>
              <span className="text-[7px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 text-center md:text-right">Years of Expertise</span>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <span className="text-2xl md:text-4xl font-black text-white tracking-tight mb-1">1.2M+</span>
              <span className="text-[7px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 text-center md:text-right">Successful Deliveries</span>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <span className="text-2xl md:text-4xl font-black text-white tracking-tight mb-1">180+</span>
              <span className="text-[7px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 text-center md:text-right">Global Destinations</span>
            </div>
          </div>
        </div>
      </section>
      {/* Trust & Reliability Section */}
      <section className="py-16 md:py-32 bg-slate-950 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
              y: [0, 100, 0],
              opacity: [0.05, 0.2, 0.05]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]"
          />
        </div>
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-white/5 -z-10 skew-x-0 lg:skew-x-6 translate-x-0 lg:translate-x-1/4 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="w-8 md:w-12 h-[1px] bg-brand-red"></div>
                <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px]">Since 1990</span>
              </div>
              <h2 className="hero-title text-4xl md:text-7xl text-white mb-6 md:mb-10 leading-[0.9] tracking-tighter">
                Excellence in <br/> <span className="text-white/30">Canadian</span> Logistics
              </h2>
              <p className="text-lg md:text-xl text-white/60 mb-8 md:mb-12 leading-relaxed max-w-xl font-medium">
                Inter-Citi Logistics Canada has been at the forefront of the transportation industry, providing seamless freight solutions across the country. Our commitment to safety and efficiency is unmatched.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col gap-4 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all group backdrop-blur-sm">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-white group-hover:text-slate-950 transition-all">
                    <Shield className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 md:mb-2 uppercase tracking-tight text-sm md:text-base">Secure Transport</h4>
                    <p className="text-xs md:text-sm text-white/40 leading-relaxed">Highest safety standards for your cargo.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all group backdrop-blur-sm">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-white group-hover:text-slate-950 transition-all">
                    <Clock className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 md:mb-2 uppercase tracking-tight text-sm md:text-base">On-Time Delivery</h4>
                    <p className="text-xs md:text-sm text-white/40 leading-relaxed">Reliable scheduling for your supply chain.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative mt-12 lg:mt-0"
            >
              <div className="absolute -inset-6 md:-inset-10 bg-white/5 rounded-[2rem] md:rounded-[4rem] -z-10 rotate-3 backdrop-blur-3xl"></div>
              <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-white/10 aspect-video md:aspect-auto">
                <img 
                  src="https://raw.githubusercontent.com/vathsan-sharma/inticiti-images/main/01.jpg" 
                  alt="Logistics Operations" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
              </div>
              
              {/* Floating Stat */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 md:-bottom-10 -right-4 md:-right-10 bg-white p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] text-slate-950 shadow-2xl"
              >
                <div className="text-4xl md:text-6xl font-black mb-1 tracking-tighter">30+</div>
                <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">Years of Trust</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-10 bg-slate-950 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8">
          <span className="text-white/20 font-bold uppercase tracking-[0.4em] text-[7px] md:text-[8px] block text-center">Trusted by Industry Leaders</span>
        </div>
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 md:gap-24 mx-6 md:mx-12">
              <LogoPlaceholder name="Global Logistics" />
              <LogoPlaceholder name="North Star" />
              <LogoPlaceholder name="Swift Cargo" />
              <LogoPlaceholder name="Oceanic" />
              <LogoPlaceholder name="Summit" />
              <LogoPlaceholder name="Prime" />
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-32 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 md:mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-red font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-4 md:mb-6 block"
            >
              How it Works
            </motion.span>
            <h2 className="hero-title text-4xl md:text-8xl text-white tracking-tighter">Our <span className="text-white/20">Process</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            <ProcessStep 
              number="01"
              title="Request"
              desc="Submit your logistics requirements through our digital platform."
              icon={<Package className="w-6 h-6" />}
            />
            <ProcessStep 
              number="02"
              title="Optimize"
              desc="Our AI-driven system calculates the most efficient route and mode."
              icon={<Zap className="w-6 h-6" />}
            />
            <ProcessStep 
              number="03"
              title="Execute"
              desc="Your cargo is dispatched with real-time tracking enabled."
              icon={<Truck className="w-6 h-6" />}
            />
            <ProcessStep 
              number="04"
              title="Deliver"
              desc="Safe and timely arrival at the final destination, guaranteed."
              icon={<Globe className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us - Technical Grid Layout */}
      <section className="py-16 md:py-32 bg-slate-950 overflow-hidden relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-brand-red font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-4 md:mb-6 block"
              >
                The Inter-Citi Advantage
              </motion.span>
              <h2 className="hero-title text-4xl md:text-8xl text-white tracking-tighter">Why <span className="text-white/20">Choose Us?</span></h2>
            </div>
            <p className="text-white/40 text-sm md:text-base max-w-sm font-mono uppercase tracking-wider leading-relaxed">
              [SYSTEM_LOG]: DELIVERING UNPARALLELED PRECISION THROUGH ADVANCED LOGISTICS INFRASTRUCTURE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 rounded-3xl overflow-hidden">
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors group">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="font-mono text-white/20 text-xs">01 // NETWORK</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Nationwide Network</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Our extensive network spans across every province, ensuring your cargo reaches its destination, no matter how remote.
              </p>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Coverage: 100%</span>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 bg-brand-red rounded-full"></div>)}
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors group">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <span className="font-mono text-white/20 text-xs">02 // TECH</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Tech</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Real-time tracking and state-of-the-art logistics management systems keep you informed every step of the way.
              </p>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Uptime: 99.9%</span>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 bg-brand-red rounded-full"></div>)}
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 hover:bg-white/5 transition-colors group">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="font-mono text-white/20 text-xs">03 // SPEED</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Express Solutions</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                When time is of the essence, our express services provide the speed and reliability your business demands.
              </p>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Avg. Time: -24H</span>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 bg-brand-red rounded-full"></div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-32 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(225,29,72,0.05)_0%,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-6 md:gap-8">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-white/30 font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-4 md:mb-6 block"
              >
                Our Expertise
              </motion.span>
              <h2 className="hero-title text-4xl md:text-8xl text-white mb-4 md:mb-6 tracking-tighter">Core <span className="text-outline text-white">Services</span></h2>
            </div>
            <Link to="/services" className="group flex items-center gap-4 text-white font-bold tracking-widest text-[10px] md:text-[11px] uppercase">
              View All Services
              <span className="w-8 md:w-12 h-[1px] bg-white group-hover:w-16 md:group-hover:w-20 transition-all"></span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            <ServiceCard 
              icon={<Truck className="w-6 h-6 md:w-8 md:h-8" />}
              title="Express Courier"
              desc="Fast and reliable courier solutions for your most urgent shipments across Canada."
              image="https://raw.githubusercontent.com/vathsan-sharma/inticiti-images/main/05.jpg"
            />
            <ServiceCard 
              icon={<Warehouse className="w-6 h-6 md:w-8 md:h-8" />}
              title="Warehousing"
              desc="Secure, climate-controlled storage and efficient distribution management."
              image="https://raw.githubusercontent.com/vathsan-sharma/inticiti-images/main/06.jpg"
            />
            <ServiceCard 
              icon={<Package className="w-6 h-6 md:w-8 md:h-8" />}
              title="Last Mile"
              desc="The final link in your supply chain, delivered with precision to your customer's doorstep."
              image="https://raw.githubusercontent.com/vathsan-sharma/inticiti-images/main/01.jpg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-32 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
            <div className="lg:col-span-4">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-brand-red font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-4 md:mb-6 block"
              >
                Client Stories
              </motion.span>
              <h2 className="hero-title text-4xl md:text-7xl text-white mb-6 md:mb-10 leading-[0.9] tracking-tighter">
                What Our <br/> <span className="text-white/20">Partners Say</span>
              </h2>
              <div className="flex gap-2">
                <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all">
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
                <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <TestimonialCard 
                  quote="Inter-Citi has transformed our supply chain. Their reliability and real-time tracking are game-changers for our retail operations."
                  author="Sarah Jenkins"
                  role="Logistics Director, RetailCo"
                />
                <TestimonialCard 
                  quote="The level of professionalism and care they show for our high-value medical equipment is exceptional. Truly a trusted partner."
                  author="Michael Chen"
                  role="Operations Manager, MedTech Solutions"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="py-16 md:py-32 bg-slate-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-white/30 font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-4 md:mb-6 block"
              >
                Global Reach
              </motion.span>
              <h2 className="hero-title text-4xl md:text-8xl text-white mb-8 tracking-tighter">Connected <br/> <span className="text-white/20">World</span></h2>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-12 max-w-md">
                Our network extends far beyond borders. With strategic hubs in major global trade centers, we ensure your cargo moves seamlessly across continents.
              </p>
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">45+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">Countries</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">12</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">Global Hubs</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">24/7</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">Operations</span>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square md:aspect-video bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden group">
              {/* Dot Matrix Map Visualization */}
              <div className="absolute inset-0 p-12 grid grid-cols-20 grid-rows-10 gap-2 opacity-20">
                {[...Array(200)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                ))}
              </div>
              
              {/* Animated Pings */}
              <MapPing top="30%" left="20%" label="Vancouver" />
              <MapPing top="40%" left="45%" label="Toronto" />
              <MapPing top="35%" left="75%" label="London" />
              <MapPing top="60%" left="85%" label="Dubai" />
              <MapPing top="50%" left="30%" label="New York" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-32 bg-slate-950 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.1)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="hero-title text-4xl md:text-8xl text-white mb-6 md:mb-8 leading-tight tracking-tighter">Ready to Move <br/> <span className="text-white/20">Your Freight?</span></h2>
          <p className="text-lg md:text-xl text-white/60 mb-10 md:mb-16 leading-relaxed max-w-2xl mx-auto">
            Contact Inter-Citi Logistics Canada today for a customized quote and experience the difference of professional logistics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-brand-red text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-rose-700 transition-all shadow-2xl flex items-center justify-center gap-3 min-h-[44px]"
            >
              Contact Us Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="tel:(416) 410-6195" 
              className="w-full sm:w-auto bg-white/5 backdrop-blur-xl border border-white/10 text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-white/10 transition-all flex items-center justify-center min-h-[44px]"
            >
              (416) 410-6195
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{number: string, title: string, desc: string, icon: React.ReactNode, image: string}> = ({ number, title, desc, icon, image }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="group relative bg-white/5 rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm"
  >
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="p-8 md:p-12 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-6 md:mb-10">
            <div className="text-3xl md:text-4xl font-black text-white/10 group-hover:text-white transition-colors duration-500">{number}</div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-lg md:rounded-xl flex items-center justify-center shadow-sm group-hover:bg-white group-hover:text-slate-950 transition-all duration-500">
              {icon}
            </div>
          </div>
          <h3 className="hero-title text-2xl md:text-3xl text-white mb-3 md:mb-4">{title}</h3>
          <p className="text-sm md:text-base text-white/40 leading-relaxed font-medium">{desc}</p>
        </div>
        <div className="mt-8 md:mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px] group/link min-h-[44px]">
            Explore Service <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
          </Link>
        </div>
      </div>
      <div className="relative h-48 sm:h-64 md:h-auto overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-100" 
        />
        <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>
    </div>
  </motion.div>
);

const ServiceCard: React.FC<{icon: React.ReactNode, title: string, desc: string, image: string}> = ({ icon, title, desc, image }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white/5 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-lg border border-white/10 group backdrop-blur-sm"
  >
    <div className="h-48 sm:h-64 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
      <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors"></div>
    </div>
    <div className="p-8 md:p-10">
      <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-white group-hover:bg-white group-hover:text-slate-950 transition-all">
        {icon}
      </div>
      <h3 className="hero-title text-xl md:text-2xl text-white mb-3 md:mb-4">{title}</h3>
      <p className="text-sm md:text-base text-white/40 leading-relaxed mb-6">{desc}</p>
      <Link to="/services" className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] md:text-[11px] group min-h-[44px]">
        Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  </motion.div>
);

export default Home;

const LogoPlaceholder: React.FC<{name: string}> = ({ name }) => (
  <div className="flex items-center gap-3 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default">
    <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg flex items-center justify-center">
      <Globe className="w-4 h-4 md:w-5 md:h-5 text-white" />
    </div>
    <span className="text-white font-black uppercase tracking-tighter text-lg md:text-xl">{name}</span>
  </div>
);

const ProcessStep: React.FC<{number: string, title: string, desc: string, icon: React.ReactNode}> = ({ number, title, desc, icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative flex flex-col items-center text-center group"
  >
    <div className="w-20 h-20 md:w-24 md:h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-8 relative z-10 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500 shadow-2xl">
      <div className="text-white group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-slate-950 rounded-full flex items-center justify-center text-[10px] font-black shadow-xl">
        {number}
      </div>
    </div>
    <h3 className="hero-title text-xl md:text-2xl text-white mb-3">{title}</h3>
    <p className="text-xs md:text-sm text-white/40 leading-relaxed max-w-[200px]">{desc}</p>
  </motion.div>
);

const TestimonialCard: React.FC<{quote: string, author: string, role: string}> = ({ quote, author, role }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[3rem] relative group hover:bg-white/10 transition-all duration-500"
  >
    <div className="text-brand-red mb-8">
      <Zap className="w-8 h-8 fill-brand-red" />
    </div>
    <p className="text-lg md:text-2xl text-white font-medium leading-relaxed mb-10 italic">"{quote}"</p>
    <div>
      <h4 className="text-white font-bold uppercase tracking-widest text-xs md:text-sm mb-1">{author}</h4>
      <p className="text-white/40 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">{role}</p>
    </div>
  </motion.div>
);

const MapPing: React.FC<{top: string, left: string, label: string}> = ({ top, left, label }) => (
  <div className="absolute" style={{ top, left }}>
    <div className="relative">
      <div className="w-3 h-3 bg-brand-red rounded-full relative z-10"></div>
      <div className="absolute inset-0 w-3 h-3 bg-brand-red rounded-full animate-ping opacity-75"></div>
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap">
        <span className="text-[8px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{label}</span>
      </div>
    </div>
  </div>
);
