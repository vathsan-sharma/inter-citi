
import React from 'react';

const Careers: React.FC = () => {
  return (
    <div className="bg-white pb-24">
      <section className="bg-slate-950 py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20">
          <h1 className="hero-title text-5xl md:text-8xl mb-8 uppercase">Careers at <br/> Inter-citi</h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
            As Inter-citi grows, we create opportunities for professionals who share our commitment to safety and service.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <h2 className="hero-title text-4xl text-slate-900 mb-8 uppercase">Why Work With Us</h2>
            <ul className="space-y-6">
              <BenefitItem text="Safety-first culture in everything we do" />
              <BenefitItem text="Stable, growing logistics business network" />
              <BenefitItem text="Diverse paths across driving, ops, and warehousing" />
              <BenefitItem text="Supportive teams and clear, professional expectations" />
            </ul>
          </div>
          <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100">
            <h3 className="hero-title text-2xl text-slate-900 mb-8 uppercase">Career Paths</h3>
            <div className="space-y-10">
              <PathItem title="Drivers" body="Professional driving with a focus on safety, punctuality, and positive customer interaction." />
              <PathItem title="Dock & Warehouse" body="Material handling, accuracy, and supporting local time-critical operations." />
              <PathItem title="Office & Operations" body="Scheduling, customer service, and precision shipment coordination." />
            </div>
          </div>
        </div>

        <section>
          <h2 className="hero-title text-3xl text-slate-900 mb-12 uppercase border-b border-slate-100 pb-4">Current Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <JobCard title="AZ Driver – Regional LTL" loc="Regional Hub" />
            <JobCard title="Warehouse Associate – Night Shift" loc="Toronto Facility" />
            <JobCard title="Customer Service Rep – Freight" loc="Operations Center" />
          </div>
          
          <div className="bg-blue-900 rounded-3xl p-16 text-center text-white">
            <h2 className="hero-title text-4xl mb-8 uppercase">Join the Team</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-xl mx-auto leading-relaxed">Submit your CV and interest to our hiring team. We are always looking for talented logistics professionals.</p>
            <button className="pill-button bg-white text-blue-900 px-12 py-4 font-bold uppercase tracking-widest text-sm shadow-2xl">
              Apply Now
            </button>
            <p className="mt-8 text-blue-300 text-xs font-bold uppercase tracking-widest">Send Resume to [EMAIL]</p>
          </div>
        </section>
      </div>
    </div>
  );
};

const BenefitItem: React.FC<{text: string}> = ({ text }) => (
  <li className="flex items-center gap-4">
    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
    <span className="text-lg text-slate-600 font-medium">{text}</span>
  </li>
);

const PathItem: React.FC<{title: string, body: string}> = ({ title, body }) => (
  <div>
    <h4 className="hero-title text-sm text-blue-600 mb-2 uppercase">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
  </div>
);

const JobCard: React.FC<{title: string, loc: string}> = ({ title, loc }) => (
  <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
    <h4 className="hero-title text-lg text-slate-900 mb-2 uppercase group-hover:text-blue-600 transition-colors">{title}</h4>
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">{loc}</p>
    <button className="text-[10px] font-black text-slate-950 uppercase tracking-widest border-b-2 border-slate-950 pb-1 group-hover:text-blue-600 group-hover:border-blue-600 transition-all">View Details</button>
  </div>
);

export default Careers;
