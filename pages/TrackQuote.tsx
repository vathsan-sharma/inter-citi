
import React from 'react';

const TrackQuote: React.FC = () => {
  return (
    <div className="bg-white pb-24">
      <section className="bg-slate-950 py-32 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 pt-20">
          <h1 className="hero-title text-5xl md:text-8xl mb-8 uppercase">Shipment <br/> Portal</h1>
          <p className="text-xl text-slate-400 leading-relaxed">Use this page to request a quote, track existing shipments, or book a pickup with Inter-citi.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 -mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Track Shipment */}
        <div className="lg:col-span-1 bg-white p-10 rounded-3xl shadow-2xl border border-slate-100">
          <h2 className="hero-title text-2xl text-slate-900 mb-6 uppercase">Track Shipment</h2>
          <p className="text-slate-500 text-sm mb-8">Enter your PRO or tracking number to view current status and key milestones.</p>
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Tracking / PRO Number</label>
              <input 
                type="text" 
                placeholder="Ex: 12345678" 
                className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
              />
            </div>
            <button className="w-full bg-slate-950 text-white py-4 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-slate-800 transition-all">Track</button>
          </div>
        </div>

        {/* Get a Quote */}
        <div className="lg:col-span-2 bg-white p-12 rounded-3xl shadow-2xl border border-slate-100">
          <h2 className="hero-title text-3xl text-slate-900 mb-8 uppercase border-b border-slate-50 pb-6">Get a Quote</h2>
          <p className="text-slate-500 mb-10 text-sm">Provide the details below and our team will respond with a quote tailored to your shipment.</p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormInput label="Company Name" placeholder="Your Business" />
            <FormInput label="Contact Name" placeholder="Full Name" />
            <FormInput label="Email Address" placeholder="email@example.com" type="email" />
            <FormInput label="Phone Number" placeholder="[PHONE]" />
            <FormInput label="Origin Region" placeholder="City, State/Prov" />
            <FormInput label="Destination Region" placeholder="City, State/Prov" />
            <FormInput label="Pallet Count" placeholder="Number of pallets" type="number" />
            <FormInput label="Total Weight" placeholder="Lbs / Kgs" />
            <div className="md:col-span-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Service Type</label>
              <select className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>LTL Freight</option>
                <option>Time-Critical Just-in-Time</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <FormInput label="Commodity Description" placeholder="What are you shipping?" />
            </div>
            <div className="md:col-span-2 pt-6">
              <button className="bg-blue-600 text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-blue-500 transition-all shadow-xl">
                Get Quote
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Book a Pickup */}
      <div className="max-w-4xl mx-auto px-6 mt-32">
        <div className="bg-slate-50 p-16 rounded-3xl border border-slate-100">
          <h2 className="hero-title text-4xl text-slate-900 mb-6 uppercase text-center">Book a Pickup</h2>
          <p className="text-slate-500 text-center mb-12 max-w-lg mx-auto">If you already ship with Inter-citi, you can request a pickup using the form below.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <FormInput label="Account Number" placeholder="Ex: IC-12345" light />
            <FormInput label="Pickup Address" placeholder="Street, City" light />
            <FormInput label="Pickup Date" type="date" light />
            <FormInput label="Time Window" placeholder="Ex: 9am - 4pm" light />
          </div>
          <div className="text-center">
            <button className="bg-slate-900 text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-slate-800 transition-all">Submit Pickup Request</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormInput: React.FC<{label: string, placeholder?: string, type?: string, light?: boolean}> = ({ label, placeholder, type = "text", light }) => (
  <div>
    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder} 
      className={`w-full ${light ? 'bg-white' : 'bg-slate-50'} border border-slate-100 p-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`} 
    />
  </div>
);

export default TrackQuote;
