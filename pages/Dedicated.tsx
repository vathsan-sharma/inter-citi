
import React from 'react';
import { Link } from 'react-router-dom';

const Dedicated: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-slate-900 py-16 text-white px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/services" className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 inline-block hover:text-blue-300">← Back to Services</Link>
          <h1 className="text-4xl md:text-5xl font-bold uppercase">Dedicated & Contract Carriage</h1>
          <p className="text-lg text-slate-300 mt-4">Tailored capacity for your most consistent and high-volume freight lanes.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 uppercase border-l-4 border-blue-600 pl-4">Overview</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            For shippers with predictable freight volumes and recurring lanes, standard LTL rates and availability can become an administrative and financial burden. Interciti's Dedicated Carriage solutions provide you with contracted capacity and equipment that functions as a seamless extension of your own fleet.
          </p>
          <p className="text-slate-600 mb-6 leading-relaxed">
            By committing to a dedicated structure, you lock in capacity and costs, allowing for more accurate budgeting and superior operational control over your supply chain.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-10 uppercase text-center">Is Dedicated Right for You?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="font-bold text-blue-900 uppercase mb-4">Ideal Profile</h3>
              <ul className="space-y-4">
                {['Consistent weekly lane volumes', 'Predictable delivery windows', 'Specialized handling requirements', 'Multiple stop requirements', 'High value or sensitive cargo'].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-700">
                    <span className="text-blue-600 mr-2">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="font-bold text-blue-900 uppercase mb-4">Benefits</h3>
              <ul className="space-y-4">
                {['Guaranteed capacity in tight markets', 'Predictable long-term costs', 'Dedicated equipment pools', 'Customized loading/unloading SOPs', 'Deep integration with our ops team'].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-700">
                    <span className="text-blue-600 mr-2">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-20 border-t border-slate-200 pt-16">
          <h2 className="text-2xl font-bold mb-6 uppercase">How We Structure Solutions</h2>
          <div className="prose prose-slate max-w-none text-slate-600">
            <p className="mb-4">
              Our process begins with a comprehensive lane analysis. We look at your historical shipping data, volume fluctuations, and delivery requirements to design a network that maximizes efficiency and minimizes empty miles.
            </p>
            <p>
              Once a design is agreed upon, we implement dedicated resources—from drivers to equipment—to service your account exclusively. This level of partnership ensures that your freight is handled by a team that knows your business as well as you do.
            </p>
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-block bg-blue-900 text-white px-12 py-4 rounded font-bold uppercase hover:bg-blue-800 transition-all shadow-xl">Talk to Our Team</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dedicated;
