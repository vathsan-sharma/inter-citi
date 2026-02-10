
import React from 'react';

const Industries: React.FC = () => {
  const industries = [
    {
      name: 'Manufacturing',
      body: 'Manufacturers rely on consistent, dependable transportation to keep production lines running smoothly. Our LTL and time-critical services help move raw materials, components, and finished goods on predictable schedules.'
    },
    {
      name: 'Retail & eCommerce',
      body: 'Retailers and eCommerce businesses depend on timely replenishment to keep shelves stocked and customers satisfied. We support palletized freight movements into distribution centers and retail locations.'
    },
    {
      name: 'Automotive',
      body: 'Automotive supply chains require reliable flows of parts and components. Our combination of LTL and time-critical solutions helps minimize downtime and maintain production continuity.'
    },
    {
      name: 'Industrial Equipment',
      body: 'Shipments of industrial machinery and equipment often involve specialized handling and time-sensitive delivery windows. We work with you to plan safe, efficient transport across North America.'
    }
  ];

  return (
    <div className="bg-white pb-24">
      <section className="bg-slate-950 py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20">
          <h1 className="hero-title text-5xl md:text-8xl mb-8 uppercase">Industries <br/> We Serve</h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
            Inter-citi supports a range of industries with tailored LTL and time-critical solutions aligned to sector-specific demands.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, i) => (
            <div key={i} className="bg-slate-50 rounded-3xl p-12 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
              <h2 className="hero-title text-3xl text-slate-900 mb-8 uppercase tracking-tight group-hover:text-blue-600">{ind.name}</h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-10">
                {ind.body}
              </p>
              <div className="w-10 h-[2px] bg-slate-200 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
