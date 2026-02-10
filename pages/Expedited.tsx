
import React from 'react';
import { Link } from 'react-router-dom';

const Expedited: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-blue-900 py-16 text-white px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/services" className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-4 inline-block hover:text-white">← Back to Services</Link>
          <h1 className="text-4xl md:text-5xl font-bold uppercase">Expedited & Guaranteed</h1>
          <p className="text-lg text-blue-100 mt-4">Priority handling for your most time-sensitive freight.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 uppercase text-slate-900">When Speed Matters</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Standard LTL isn't always fast enough. For shipments that carry high opportunity costs or represent a critical link in production, Interciti offers Expedited and Guaranteed options. We bypass standard consolidation delays to get your cargo on the first available power unit moving toward your destination.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <UseCase icon="⚙️" title="Production" desc="Critical machine parts to keep lines running." />
            <UseCase icon="📦" title="Replenishment" desc="Urgent stock for high-demand retail cycles." />
            <UseCase icon="🏗️" title="Projects" desc="Time-critical materials for job sites." />
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6 uppercase">Service Tiers</h2>
            <ul className="space-y-6">
              <li className="flex">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold shrink-0 mr-4">E</div>
                <div>
                  <h4 className="font-bold uppercase text-slate-900">Priority Expedited</h4>
                  <p className="text-sm text-slate-600">The fastest ground transit available with priority loading and unloading at every terminal.</p>
                </div>
              </li>
              <li className="flex">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold shrink-0 mr-4">G</div>
                <div>
                  <h4 className="font-bold uppercase text-slate-900">Service Guaranteed</h4>
                  <p className="text-sm text-slate-600">Standard transit with a delivery time guarantee. If it's late, we make it right.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-slate-900 text-white p-8 rounded-xl">
            <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-blue-400">How to Book</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 shrink-0">1</span>
                <span>Call or quote online and select the 'Expedited' checkbox.</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 shrink-0">2</span>
                <span>Receive immediate confirmation and a priority tracking number.</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 shrink-0">3</span>
                <span>Track your shipment in real-time until it reaches the consignee.</span>
              </li>
            </ol>
            <Link to="/track-quote" className="mt-8 block bg-blue-600 text-center py-3 rounded font-bold uppercase hover:bg-blue-500 transition-all">Request Expedited Options</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const UseCase: React.FC<{icon: string, title: string, desc: string}> = ({ icon, title, desc }) => (
  <div className="text-center p-6 border border-slate-200 rounded-xl">
    <div className="text-4xl mb-4">{icon}</div>
    <h4 className="font-bold text-slate-900 uppercase text-sm mb-2">{title}</h4>
    <p className="text-xs text-slate-500">{desc}</p>
  </div>
);

export default Expedited;
