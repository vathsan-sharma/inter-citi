
import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, Globe, Shield, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen selection:bg-red-500/30">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-600/10 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.2em]">Available 24/7 for Urgent Dispatch</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-9xl font-bold mb-10 tracking-tighter leading-[0.85] uppercase italic font-serif">
              GET IN <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">TOUCH</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              Experience why companies across Canada depend on Inter-Citi Logistics to keep their business in motion.
            </p>
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
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold uppercase italic tracking-tight mb-8">Contact Details</h2>
              
              <ContactCard 
                icon={<Phone className="w-5 h-5" />}
                label="Phone"
                value="(416) 410-6195"
              />
              
              <ContactCard 
                icon={<Mail className="w-5 h-5" />}
                label="Email"
                value="info@inter-ciiti.com"
              />
              
              <ContactCard 
                icon={<MapPin className="w-5 h-5" />}
                label="Headquarters"
                value="10 Thornmount Dr, Scarborough, ON M1B 3J4"
              />
 
              <ContactCard 
                icon={<Clock className="w-5 h-5" />}
                label="Business Hours"
                value="Mon - Fri: 8:00 AM - 6:00 PM"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-3xl -mr-16 -mt-16 group-hover:bg-red-600/20 transition-colors"></div>
              <h3 className="text-lg font-bold mb-4 uppercase italic tracking-tight">Sales Support</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">For fast quotes and custom logistical strategies:</p>
              <div className="text-xl font-bold text-white mb-2 font-mono">sales@inter-ciiti.com</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500">Priority Response Channel</div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white/5 p-8 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl relative"
          >
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4 uppercase italic tracking-tight">Send a Message</h2>
              <p className="text-slate-400 font-light">Fill out the form below and our team will get back to you within 2 hours.</p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-1">
                <FormLabel text="Full Name" />
                <input className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm focus:ring-1 focus:ring-red-600 outline-none transition-all placeholder:text-slate-600" placeholder="John Doe" />
              </div>
              <div className="md:col-span-1">
                <FormLabel text="Company" />
                <input className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm focus:ring-1 focus:ring-red-600 outline-none transition-all placeholder:text-slate-600" placeholder="Your Business" />
              </div>
              <div className="md:col-span-1">
                <FormLabel text="Email Address" />
                <input className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm focus:ring-1 focus:ring-red-600 outline-none transition-all placeholder:text-slate-600" placeholder="email@example.com" />
              </div>
              <div className="md:col-span-1">
                <FormLabel text="Phone Number" />
                <input className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm focus:ring-1 focus:ring-red-600 outline-none transition-all placeholder:text-slate-600" placeholder="(416) 000-0000" />
              </div>
              <div className="md:col-span-2">
                <FormLabel text="Service Required" />
                <div className="relative">
                  <select className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm focus:ring-1 focus:ring-red-600 outline-none transition-all appearance-none text-slate-300">
                    <option className="bg-slate-900">Express Courier Services</option>
                    <option className="bg-slate-900">Warehousing and Distribution</option>
                    <option className="bg-slate-900">Last Mile Solutions</option>
                    <option className="bg-slate-900">General Inquiry</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <Zap className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <FormLabel text="Your Message" />
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-sm focus:ring-1 focus:ring-red-600 outline-none transition-all placeholder:text-slate-600" placeholder="How can we help you today?"></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button className="w-full md:w-auto bg-red-600 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all shadow-2xl shadow-red-600/20 flex items-center justify-center group">
                  Send Message
                  <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Placeholder / Visual */}
      <section className="h-[400px] relative border-t border-white/5 overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
          alt="Map" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center animate-bounce shadow-2xl shadow-red-600/50">
            <MapPin className="w-6 h-6 text-white" />
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactCard: React.FC<{icon: React.ReactNode, label: string, value: string}> = ({ icon, label, value }) => (
  <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-red-600/30 transition-all group">
    <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{label}</div>
      <div className="text-lg font-bold text-white leading-tight tracking-tight">{value}</div>
    </div>
  </div>
);

const FormLabel: React.FC<{text: string}> = ({ text }) => (
  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 ml-1">{text}</label>
);

export default Contact;

