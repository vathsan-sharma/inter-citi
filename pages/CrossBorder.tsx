
import React from 'react';
import { Link } from 'react-router-dom';

const CrossBorder: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-slate-900 py-16 text-white px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/services" className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 inline-block hover:text-blue-300">← Back to Services</Link>
          <h1 className="text-4xl md:text-5xl font-bold uppercase">Cross-Border Canada-USA</h1>
          <p className="text-lg text-slate-300 mt-4">Removing friction from binational supply chains with expert LTL management.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 uppercase">Smooth Border Crossings</h2>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <p>
              Crossing the border shouldn't be a bottleneck for your business. Interciti has spent years refining the protocols required to move LTL freight seamlessly between Canada and the United States. Our drivers are well-versed in border security protocols, and our operations team works closely with customs brokers to ensure every shipment is cleared before it reaches the gate.
            </p>
            <p>
              We act as a bridge, managing the complexities of documentation and coordination so that your transit times remain consistent, regardless of the direction of travel.
            </p>
          </div>
        </section>

        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase text-blue-900">Features & Benefits</h3>
            <ul className="space-y-3">
              {['Dedicated cross-border lanes', 'Customs-ready documentation support', 'Pre-arrival clearing coordination', 'C-TPAT / PIP compliant carrier', 'Real-time border status tracking'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-slate-700">
                  <span className="text-blue-600 mr-3">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-lg font-bold mb-4 uppercase text-slate-900">Shipper Responsibilities</h3>
            <p className="text-xs text-slate-500 mb-4 uppercase tracking-tighter">Required for smooth clearance:</p>
            <ul className="space-y-3 text-sm text-slate-600 font-medium">
              <li>• Commercial Invoice</li>
              <li>• Detailed Packing List</li>
              <li>• Customs Broker Information</li>
              <li>• Certificate of Origin (where applicable)</li>
            </ul>
          </div>
        </section>

        <div className="text-center bg-slate-100 py-12 px-6 rounded-2xl border-2 border-dashed border-slate-300">
          <h2 className="text-xl font-bold mb-4 uppercase tracking-tight">Need a Cross-Border Strategy?</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">Contact our international logistics specialists to discuss your specific lanes and documentation needs.</p>
          <Link to="/contact" className="bg-blue-900 text-white px-10 py-4 rounded font-bold uppercase hover:bg-blue-800 transition-all shadow-md">Discuss Cross-Border Shipments</Link>
        </div>
      </div>
    </div>
  );
};

export default CrossBorder;
