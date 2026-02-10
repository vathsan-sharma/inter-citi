
import React, { useState } from 'react';

const Resources: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const blogs = [
    { title: "How to Prepare Palletized Freight for LTL Shipping", summary: "Practical steps to package, label, and document palletized freight for smoother transit." },
    { title: "Understanding One and Two Day LTL Transit", summary: "An overview of how LTL networks operate to achieve fast transit times across North America." },
    { title: "When to Use Time-Critical Just-in-Time Delivery", summary: "Guidance on choosing between standard LTL and urgent, time-critical services." }
  ];

  const faqs = [
    { q: "What is LTL shipping?", a: "LTL stands for 'Less-Than-Truckload,' which allows multiple shippers to share space on a single trailer for smaller shipments." },
    { q: "How do I request a quote?", a: "You can request a quote by filling out our online form or contacting our operations team directly." },
    { q: "What information do I need to provide for a shipment?", a: "We require origin/destination, pallet count, total weight, dimensions, and commodity description." },
    { q: "How do I track my shipment?", a: "Use the 'Track Shipment' feature on our website with your PRO or tracking number." },
    { q: "What should I do if freight is damaged?", a: "Please note any damage on the BOL at delivery and contact our claims department within 24 hours." },
    { q: "How are transit times determined?", a: "Transit times are calculated based on lane distance, service level, and terminal processing schedules." }
  ];

  return (
    <div className="bg-slate-50 pb-24">
      <section className="bg-slate-950 py-32 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 pt-20">
          <h1 className="hero-title text-5xl md:text-8xl mb-8 uppercase">Resources</h1>
          <p className="text-xl text-slate-400 leading-relaxed">Explore practical resources to help you plan, prepare, and manage your North American shipments.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-24">
            <section>
              <h2 className="hero-title text-3xl text-slate-900 mb-12 uppercase border-b border-slate-200 pb-4">Articles & Insights</h2>
              <div className="space-y-8">
                {blogs.map((b, i) => (
                  <div key={i} className="group bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-2xl transition-all duration-500">
                    <h3 className="hero-title text-2xl text-slate-900 mb-4">{b.title}</h3>
                    <p className="text-slate-500 mb-8 leading-relaxed">{b.summary}</p>
                    <button className="text-blue-600 font-bold uppercase text-[10px] tracking-widest flex items-center gap-3">
                      Read Article <span className="w-8 h-[2px] bg-blue-100 group-hover:w-16 group-hover:bg-blue-600 transition-all"></span>
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="hero-title text-3xl text-slate-900 mb-12 uppercase border-b border-slate-200 pb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((f, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left p-8 flex justify-between items-center hover:bg-slate-50 transition-colors"
                    >
                      <span className="hero-title text-lg text-slate-900 uppercase">{f.q}</span>
                      <span className={`text-blue-600 font-bold transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                    </button>
                    {openFaq === i && (
                      <div className="px-8 pb-8 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-6">
                        {f.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-12">
               <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
                  <h3 className="hero-title text-2xl text-slate-900 mb-8 uppercase">Downloads</h3>
                  <div className="space-y-8">
                    <DownloadItem title="Credit Application Form" desc="Used for establishing new credit accounts with net terms." />
                    <DownloadItem title="New Account Setup Form" desc="Essential info for onboarding as a new Inter-citi partner." />
                    <DownloadItem title="Service Guide" desc="Overview of our services, lanes, and options." />
                    <DownloadItem title="Terms & Conditions" desc="Legal terms governing our transportation services." />
                  </div>
               </div>
               
               <div className="bg-blue-900 p-10 rounded-3xl text-white">
                  <h3 className="hero-title text-2xl mb-6 uppercase">Need Help?</h3>
                  <p className="text-blue-100 text-sm mb-8 leading-relaxed">Our support team is standing by to help you with documentation or route planning.</p>
                  <button className="w-full bg-white text-blue-900 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors">Contact Support</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DownloadItem: React.FC<{title: string, desc: string}> = ({ title, desc }) => (
  <div className="group cursor-pointer">
    <h4 className="hero-title text-sm text-slate-900 mb-2 uppercase group-hover:text-blue-600 transition-colors">{title}</h4>
    <p className="text-xs text-slate-400 mb-4">{desc}</p>
    <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-widest">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Download PDF
    </div>
  </div>
);

export default Resources;
