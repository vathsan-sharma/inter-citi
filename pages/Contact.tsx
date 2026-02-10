
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white pb-24">
      <section className="bg-slate-950 py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 text-center">
          <h1 className="hero-title text-5xl md:text-8xl mb-8 uppercase">Contact Us</h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Call today and experience why multitudes of companies depend on Interciti Logistics to keep their business in motion.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h2 className="hero-title text-3xl text-slate-900 mb-8 uppercase border-b border-slate-100 pb-4">Head Office</h2>
              <div className="space-y-8">
                <ContactInfo label="Local Phone" value="416-410-6195" />
                <ContactInfo label="Toll Free" value="1-800-871-4243" />
                <ContactInfo label="Email" value="info@inter-citi.com" />
                <ContactInfo label="Address" value="891 Rowntree Dairy Rd, Woodbridge, ON L4L 5W3, Canada" />
              </div>
            </div>
            
            <div className="bg-blue-900 text-white p-10 rounded-3xl">
              <h3 className="hero-title text-xl mb-4 uppercase">Sales Inquiries</h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">For fast quotes and custom logistical support strategies:</p>
              <div className="text-lg font-bold tracking-tight text-white mb-2 underline underline-offset-4 decoration-blue-500">sales@inter-citi.com</div>
              <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Available 24/7</div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-slate-50 p-12 md:p-16 rounded-3xl border border-slate-100 shadow-2xl">
            <h2 className="hero-title text-4xl text-slate-900 mb-10 uppercase">Message Dispatch</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-1">
                <FormLabel text="Name" />
                <input className="w-full bg-white border border-slate-100 p-4 rounded-2xl text-sm" placeholder="John Doe" />
              </div>
              <div className="md:col-span-1">
                <FormLabel text="Company" />
                <input className="w-full bg-white border border-slate-100 p-4 rounded-2xl text-sm" placeholder="Your Business" />
              </div>
              <div className="md:col-span-1">
                <FormLabel text="Email Address" />
                <input className="w-full bg-white border border-slate-100 p-4 rounded-2xl text-sm" placeholder="email@example.com" />
              </div>
              <div className="md:col-span-1">
                <FormLabel text="Phone Number" />
                <input className="w-full bg-white border border-slate-100 p-4 rounded-2xl text-sm" placeholder="416-000-0000" />
              </div>
              <div className="md:col-span-2">
                <FormLabel text="Inquiry Type" />
                <select className="w-full bg-white border border-slate-100 p-4 rounded-2xl text-sm">
                  <option>LTL Quote Request</option>
                  <option>IT Hardware Logistics</option>
                  <option>Bulk/Food Grade Transport</option>
                  <option>Just-In-Time Dispatch</option>
                  <option>Warehousing Support</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <FormLabel text="Your Message" />
                <textarea rows={6} className="w-full bg-white border border-slate-100 p-4 rounded-2xl text-sm" placeholder="Tell us about your shipment requirements..."></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="bg-slate-950 text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-slate-800 transition-all shadow-xl">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo: React.FC<{label: string, value: string}> = ({ label, value }) => (
  <div className="group">
    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 group-hover:text-blue-600 transition-colors">{label}</div>
    <div className="text-xl font-bold text-slate-900 uppercase tracking-tight">{value}</div>
  </div>
);

const FormLabel: React.FC<{text: string}> = ({ text }) => (
  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{text}</label>
);

export default Contact;
