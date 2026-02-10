
import React from 'react';
import { Link } from 'react-router-dom';

const LTLFreight: React.FC = () => {
  return (
    <div className="bg-white pb-24">
      <section className="bg-slate-950 py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20">
          <Link to="/services" className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8 inline-block hover:opacity-70 transition-opacity">← Back to Services</Link>
          <h1 className="hero-title text-5xl md:text-8xl mb-8 uppercase">North American <br/> LTL Freight</h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
            Inter-citi’s LTL service focuses on one and two day transit across Canada and America, providing reliable, economical shipping for palletized freight.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-2">
            <section className="mb-24">
              <h2 className="hero-title text-4xl text-slate-900 mb-10 uppercase tracking-tight">When to Choose LTL</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Choose our LTL service when you need to move freight that does not require a full truckload but still demands dependable transit times and careful handling.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <CheckItem text="Palletized shipments" />
                <CheckItem text="Partial truckload volumes" />
                <CheckItem text="Regular outbound or inbound lanes" />
                <CheckItem text="Predictable, fast transit requirements" />
              </ul>
            </section>

            <section className="mb-24">
              <h2 className="hero-title text-4xl text-slate-900 mb-12 uppercase tracking-tight">How Our LTL Works</h2>
              <div className="space-y-12">
                <Step num="01" title="Pickup" body="We collect your shipment from your facility or warehouse within an agreed time window." />
                <Step num="02" title="Linehaul" body="Shipments move through our North American network using optimized routing to maintain short transit times." />
                <Step num="03" title="Delivery" body="Final-mile delivery is coordinated to meet your receiver’s requirements and dock hours." />
                <Step num="04" title="Visibility" body="Our customer service team provides status updates and support throughout the journey." />
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
             <div className="sticky top-32 space-y-8">
               <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                  <h3 className="hero-title text-2xl text-slate-900 mb-8 uppercase">Quote Info Needed</h3>
                  <ul className="space-y-4 mb-10">
                    {['Origin & Destination region', 'Number of pallets', 'Total weight and dimensions', 'Commodity description', 'Required delivery timeframe'].map((item, i) => (
                      <li key={i} className="text-sm text-slate-500 flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/track-quote" className="block text-center bg-blue-900 text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-blue-800 transition-colors">
                    Request an LTL Quote
                  </Link>
               </div>
               
               <div className="bg-slate-950 p-10 rounded-3xl text-white">
                  <h3 className="hero-title text-2xl text-blue-500 mb-6 uppercase">Key Benefits</h3>
                  <ul className="space-y-4 text-slate-400 text-sm">
                    <li>• One and two day service on core lanes</li>
                    <li>• Safe, economical delivery options</li>
                    <li>• Reach major cities to smaller towns</li>
                    <li>• Client-focused, responsive support</li>
                  </ul>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckItem: React.FC<{text: string}> = ({ text }) => (
  <li className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span className="text-sm font-bold uppercase tracking-tight text-slate-700">{text}</span>
  </li>
);

const Step: React.FC<{num: string, title: string, body: string}> = ({ num, title, body }) => (
  <div className="flex gap-10">
    <div className="hero-title text-5xl text-slate-100">{num}</div>
    <div>
      <h3 className="hero-title text-xl text-slate-900 mb-3 uppercase">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{body}</p>
    </div>
  </div>
);

export default LTLFreight;
