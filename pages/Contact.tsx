
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, Globe, Shield, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
  return (
    <div className="bg-white text-slate-900 min-h-screen selection:bg-brand-blue/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5 bg-brand-blue">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-accent/20 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 pt-40 pb-20 md:pt-56 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="hero-title text-white mb-6 md:mb-8"
            >
              Get In <span className="text-white/80 italic">Touch.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="hero-subtitle text-white/60 mb-8 md:mb-12 max-w-2xl"
            >
              Experience why companies across Canada depend on us to keep their business in motion.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="hero-title text-2xl md:text-4xl text-slate-900 tracking-tighter mb-8 italic">Contact Details</h2>
              
              <ContactCard 
                icon={<Phone className="w-5 h-5" />}
                label="Phone"
                value="(416) 410-6195"
                delay={0.1}
              />
              
              <ContactCard 
                icon={<Mail className="w-5 h-5" />}
                label="Email"
                value="info@inter-citi.com"
                delay={0.2}
              />
              
              <ContactCard 
                icon={<MapPin className="w-5 h-5" />}
                label="Headquarters"
                value="10 Thornmount Dr, Scarborough, ON M1B 3J4"
                delay={0.3}
              />
 
              <ContactCard 
                icon={<Clock className="w-5 h-5" />}
                label="Business Hours"
                value="Mon - Fri: 8:00 AM - 6:00 PM"
                delay={0.4}
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 blur-3xl -mr-16 -mt-16 group-hover:bg-brand-blue/20 transition-colors"></div>
              <h3 className="text-lg font-bold mb-4 italic tracking-tight text-slate-900">Sales Support</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed font-light">For fast quotes and custom logistical strategies:</p>
              <div className="text-xl font-bold text-slate-900 mb-2 font-mono">info@inter-citi.com</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue">Priority Response Channel</div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-slate-50 p-8 md:p-16 rounded-[3rem] border border-slate-100 shadow-2xl relative"
          >
            <div className="mb-12">
              <h2 className="hero-title text-4xl md:text-6xl text-slate-900 tracking-tighter mb-4 italic">Send a <span className="text-brand-blue">Message</span></h2>
              <p className="text-slate-500 font-light">Fill out the form below and our team will get back to you within 2 hours.</p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-1"
              >
                <FormLabel text="Full Name" />
                <input className="w-full bg-white border border-slate-200 p-5 rounded-2xl text-sm focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-400" placeholder="John Doe" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-1"
              >
                <FormLabel text="Company" />
                <input className="w-full bg-white border border-slate-200 p-5 rounded-2xl text-sm focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-400" placeholder="Your Business" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:col-span-1"
              >
                <FormLabel text="Email Address" />
                <input className="w-full bg-white border border-slate-200 p-5 rounded-2xl text-sm focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-400" placeholder="email@example.com" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="md:col-span-1"
              >
                <FormLabel text="Phone Number" />
                <input className="w-full bg-white border border-slate-200 p-5 rounded-2xl text-sm focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-400" placeholder="(416) 000-0000" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="md:col-span-2"
              >
                <FormLabel text="Service Required" />
                <div className="relative">
                  <select className="w-full bg-white border border-slate-200 p-5 rounded-2xl text-sm focus:ring-1 focus:ring-brand-blue outline-none transition-all appearance-none text-slate-600">
                    <option className="bg-white">Express Courier Services</option>
                    <option className="bg-white">Warehousing and Distribution</option>
                    <option className="bg-white">Last Mile Solutions</option>
                    <option className="bg-white">General Inquiry</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <Zap className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="md:col-span-2"
              >
                <FormLabel text="Your Message" />
                <textarea rows={5} className="w-full bg-white border border-slate-200 p-5 rounded-2xl text-sm focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-400" placeholder="How can we help you today?"></textarea>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="md:col-span-2 pt-4"
              >
                <button className="w-full md:w-auto bg-brand-blue text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-accent transition-all shadow-2xl shadow-brand-blue/20 flex items-center justify-center group">
                  Send Message
                  <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Section - Technical Control Center */}
      <section className="relative h-[700px] md:h-[900px] bg-slate-50 overflow-hidden group border-y border-slate-100">
        {/* Background Grid & Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-5" style={{ 
            backgroundImage: 'linear-gradient(to right, #002147 1px, transparent 1px), linear-gradient(to bottom, #002147 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,33,71,0.05)_0%,transparent_70%)]"></div>
          
          {/* Animated Scanning Line */}
          <motion.div 
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-px bg-brand-blue/20 shadow-[0_0_15px_rgba(0,33,71,0.1)] z-10"
          />
        </div>

        {/* The Map Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-24">
          <div className="relative w-full h-full max-w-6xl">
            {/* Stylized Canada Map */}
            <svg viewBox="0 0 1000 600" className="w-full h-full text-brand-blue/10" fill="currentColor">
              <path d="M150,450 L200,430 L250,460 L300,440 L350,420 L400,450 L450,430 L500,410 L550,440 L600,420 L650,400 L700,430 L750,410 L800,390 L850,420 L900,400 L950,380 L980,350 L950,300 L900,280 L850,300 L800,250 L750,280 L700,230 L650,260 L600,210 L550,240 L500,190 L450,220 L400,170 L350,200 L300,150 L250,180 L200,130 L150,160 L100,110 L50,140 L20,190 L50,240 L20,290 L50,340 L20,390 Z" />
            </svg>

            {/* Data Overlays */}
            <div className="absolute top-0 left-0 p-6 md:p-8 border-l border-t border-slate-200 rounded-tl-3xl backdrop-blur-sm bg-white/40 z-20">
              <div className="text-[10px] font-mono text-brand-blue uppercase tracking-widest mb-2">Network Status</div>
              <div className="text-2xl font-black text-slate-900 uppercase tracking-tight">Active Reach</div>
              <div className="mt-4 flex gap-2">
                {[1,2,3,4].map(i => <div key={i} className="w-1 h-4 bg-brand-blue/10 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ height: ['0%', '100%', '0%'] }}
                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                    className="w-full bg-brand-blue"
                  />
                </div>)}
              </div>
            </div>

            <div className="absolute top-0 right-0 p-6 md:p-8 border-r border-t border-slate-200 rounded-tr-3xl backdrop-blur-sm bg-white/40 text-right z-20">
              <div className="flex flex-col gap-2 items-end">
                {['Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba', 'Saskatchewan', 'Nova Scotia', 'New Brunswick', 'Newfoundland and Labrador', 'Prince Edward Island'].map((province) => (
                  <button 
                    key={province}
                    onMouseEnter={() => setHoveredProvince(province)}
                    onMouseLeave={() => setHoveredProvince(null)}
                    className={`text-[9px] font-bold uppercase tracking-widest transition-all ${
                      hoveredProvince === province ? 'text-brand-accent scale-110' : 'text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    {province}
                  </button>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 right-0 p-6 md:p-8 border-r border-b border-slate-200 rounded-br-3xl backdrop-blur-sm bg-white/40 text-right z-20">
              <div className="text-2xl font-black text-slate-900 uppercase tracking-tight">24/7 Ops</div>
              <div className="mt-4 text-[10px] font-mono text-slate-400">LAT: 56.1304° N // LONG: 106.3468° W</div>
            </div>

            {/* Pings */}
            <MapPing top="35%" left="15%" label="British Columbia" active={hoveredProvince === 'British Columbia'} />
            <MapPing top="48%" left="28%" label="Alberta" active={hoveredProvince === 'Alberta'} />
            <MapPing top="52%" left="38%" label="Saskatchewan" active={hoveredProvince === 'Saskatchewan'} />
            <MapPing top="55%" left="45%" label="Manitoba" active={hoveredProvince === 'Manitoba'} />
            <MapPing top="65%" left="58%" label="Ontario" active={hoveredProvince === 'Ontario'} />
            <MapPing top="60%" left="65%" label="Quebec" active={hoveredProvince === 'Quebec'} />
            <MapPing top="58%" left="75%" label="Nova Scotia" active={hoveredProvince === 'Nova Scotia'} />
            <MapPing top="55%" left="72%" label="New Brunswick" active={hoveredProvince === 'New Brunswick'} />
            <MapPing top="45%" left="85%" label="Newfoundland and Labrador" active={hoveredProvince === 'Newfoundland and Labrador'} />
            <MapPing top="52%" left="78%" label="Prince Edward Island" active={hoveredProvince === 'Prince Edward Island'} />
          </div>
        </div>

        {/* Floating Info Card */}
        <div className="absolute bottom-12 left-12 z-20 hidden md:block">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 bg-white/80 backdrop-blur-3xl border border-slate-200 rounded-[3rem] max-w-md shadow-2xl"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-blue/20">
                <Globe className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">National Hub</h3>
                <p className="text-brand-blue text-[10px] font-mono uppercase tracking-widest">Scarborough, Ontario</p>
              </div>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed font-light italic">
              "Strategically positioned to serve every major hub across Canada. Our network ensures your cargo moves seamlessly from coast to coast."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const MapPing: React.FC<{top: string, left: string, label: string, active?: boolean}> = ({ top, left, label, active }) => (
  <div className="absolute" style={{ top, left }}>
    <div className={`relative group/ping transition-all duration-500 ${active ? 'scale-150 z-20' : 'z-10'}`}>
      <div className={`w-2.5 h-2.5 rounded-full relative z-10 shadow-[0_0_15px_rgba(0,33,71,0.3)] transition-colors duration-500 ${active ? 'bg-brand-accent' : 'bg-brand-blue'}`}></div>
      <div className={`absolute inset-0 w-2.5 h-2.5 rounded-full animate-ping opacity-100 transition-colors duration-500 ${active ? 'bg-brand-accent' : 'bg-brand-blue'}`}></div>
      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap transition-all duration-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 group-hover/ping:opacity-100 translate-y-1'}`}>
        <span className={`text-[10px] font-black uppercase tracking-widest drop-shadow-sm transition-colors duration-500 ${active ? 'text-brand-accent' : 'text-slate-900/60'}`}>{label}</span>
      </div>
    </div>
  </div>
);

const ContactCard: React.FC<{icon: React.ReactNode, label: string, value: string, delay?: number}> = ({ icon, label, value, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="flex items-start gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-blue/30 transition-all group"
  >
    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <div>
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</div>
      <div className="text-lg font-bold text-slate-900 leading-tight tracking-tight">{value}</div>
    </div>
  </motion.div>
);

const FormLabel: React.FC<{text: string}> = ({ text }) => (
  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 ml-1">{text}</label>
);

export default Contact;

