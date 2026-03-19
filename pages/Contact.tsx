
import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white pb-24">
      <section className="bg-slate-950 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold mb-8 uppercase tracking-tighter"
          >
            Contact <span className="text-blue-500">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Experience why companies across Canada depend on Intercity Logistics to keep their business in motion.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8 uppercase tracking-tight">Get In Touch</h2>
              
              <ContactCard 
                icon={<Phone className="w-6 h-6 text-blue-600" />}
                label="Phone"
                value="(416) 410-6195"
              />
              
              <ContactCard 
                icon={<Mail className="w-6 h-6 text-blue-600" />}
                label="Email"
                value="info@inter-ciiti.com"
              />
              
              <ContactCard 
                icon={<MapPin className="w-6 h-6 text-blue-600" />}
                label="Address"
                value="10 Thornmount Dr, Scarborough, ON M1B 3J4"
              />

              <ContactCard 
                icon={<Clock className="w-6 h-6 text-blue-600" />}
                label="Hours"
                value="Mon - Fri: 8:00 AM - 6:00 PM"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl -mr-16 -mt-16"></div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Sales Support</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">For fast quotes and custom logistical strategies:</p>
              <div className="text-lg font-bold text-blue-400 mb-2">sales@inter-ciiti.com</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Available for urgent dispatch</div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-inner"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-10 tracking-tight">Send a Message</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-1">
                <FormLabel text="Full Name" />
                <input className="w-full bg-white border border-slate-200 p-5 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="md:col-span-1">
                <FormLabel text="Company" />
                <input className="w-full bg-white border border-slate-200 p-5 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Your Business" />
              </div>
              <div className="md:col-span-1">
                <FormLabel text="Email Address" />
                <input className="w-full bg-white border border-slate-200 p-5 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="email@example.com" />
              </div>
              <div className="md:col-span-1">
                <FormLabel text="Phone Number" />
                <input className="w-full bg-white border border-slate-200 p-5 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="(416) 000-0000" />
              </div>
              <div className="md:col-span-2">
                <FormLabel text="Service Required" />
                <select className="w-full bg-white border border-slate-200 p-5 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none">
                  <option>Express Courier Services</option>
                  <option>Warehousing and Distribution</option>
                  <option>Last Mile Solutions</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <FormLabel text="Your Message" />
                <textarea rows={5} className="w-full bg-white border border-slate-200 p-5 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="How can we help you today?"></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="bg-blue-600 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-lg flex items-center">
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ContactCard: React.FC<{icon: React.ReactNode, label: string, value: string}> = ({ icon, label, value }) => (
  <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-slate-50 shadow-sm hover:shadow-md transition-shadow">
    <div className="p-3 bg-blue-50 rounded-xl">
      {icon}
    </div>
    <div>
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</div>
      <div className="text-lg font-bold text-slate-900 leading-tight">{value}</div>
    </div>
  </div>
);

const FormLabel: React.FC<{text: string}> = ({ text }) => (
  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 ml-1">{text}</label>
);

export default Contact;
