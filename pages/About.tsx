
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-950 py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20">
          <h1 className="hero-title text-5xl md:text-8xl mb-8 uppercase">Our <br/> Heritage</h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
            Interciti Logistics is an industry-specific provider specializing in freight movement within North America since 1990.
          </p>
        </div>
      </section>

      {/* Overview & Mission */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
            <div>
              <h2 className="hero-title text-3xl md:text-4xl text-slate-900 mb-8 uppercase">Our Mission</h2>
              <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-blue-600 pl-8">
                “To provide our clients with quality and efficiency services while offering ultimate customer satisfaction.”
              </p>
            </div>
            <div>
              <h2 className="hero-title text-3xl md:text-4xl text-slate-900 mb-8 uppercase">Our Strategy</h2>
              <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-blue-600 pl-8">
                “Analyzing all transportation requirements to formulate unique plans that save time and money, backed by 24hr customer service dispatch.”
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-slate-100 pt-16">
            <ValueItem num="01" title="Responsiveness" body="An on-going commitment to responding to client needs and market fluctuations." />
            <ValueItem num="02" title="Flexibility" body="Innovative solutions customized to offer maximum reliability and cost-effectiveness." />
            <ValueItem num="03" title="Safety" body="Rigid service inspections and regular driver safety updates for a flawless record." />
            <ValueItem num="04" title="Accuracy" body="Timely and accurate delivery supported by the latest real-time tracking technology." />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Kula Sellathurai" 
                className="rounded-3xl shadow-2xl grayscale"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-10 rounded-2xl shadow-xl max-w-xs">
                 <h4 className="hero-title text-xl mb-1 uppercase">Kula Sellathurai</h4>
                 <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">President & Founder</p>
              </div>
            </div>
            <div>
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Leadership</span>
              <h2 className="hero-title text-4xl md:text-6xl text-slate-900 mb-10 leading-tight">Visionary <br/> Guidance</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>Kula Sellathurai, President of Interciti Logistics, is a serial entrepreneur who established the company in 1990 after identifying a critical gap in industry-specific logistics.</p>
                <p>A staple in the Toronto community, Kula has received the Her Majesty Queen Elizabeth II Diamond Jubilee Medal in 2012 and the Volunteer Award from the Government of Ontario. He is also a former President and Director of the Canadian Tamil Chamber of Commerce.</p>
                <p>Under his leadership, Interciti has grown from a local provider to a North American mainstay, defined by the core values of community, integrity, and relentless service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet & Drivers */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="hero-title text-4xl md:text-6xl text-slate-900 mb-10 leading-tight uppercase">Driver Safety & <br/> Compliance</h2>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed">
                Our drivers are the key to on-time quality service. We enforce a high standard, requiring a minimum of 2 years cross-border experience and professional certification.
              </p>
              <ul className="space-y-8">
                <li className="flex gap-4">
                   <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                   <div>
                     <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-2">Orientation & Auditing</h4>
                     <p className="text-sm text-slate-500">Extensive orientation programs and outsourced log book auditing for absolute compliance.</p>
                   </div>
                </li>
                <li className="flex gap-4">
                   <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                   <div>
                     <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-2">Continuous Training</h4>
                     <p className="text-sm text-slate-500">Regular updates on border crossing protocols, accident prevention, and emergency response guidelines.</p>
                   </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1591768793355-74d7c869c3b7?auto=format&fit=crop&q=80&w=600" className="rounded-2xl grayscale" alt="Fleet Safety" />
              <img src="https://images.unsplash.com/photo-1501700493717-9c99da9ff053?auto=format&fit=crop&q=80&w=600" className="rounded-2xl grayscale mt-12" alt="Fleet Modernization" />
            </div>
          </div>
        </div>
      </section>

      {/* Warehousing Capability */}
      <section className="py-32 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-24">
            <h2 className="hero-title text-4xl md:text-7xl mb-8 uppercase">Secure Storage</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Our 30,000 sq ft facility in Woodbridge is climate-controlled and monitored 24/7, serving as a strategic cross-dock for Just-in-Time distribution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureBox title="30,000 sq ft" body="Ample climate-controlled space for palletized inventory and IT hardware." />
            <FeatureBox title="24/7 Monitoring" body="CCTV and advanced security for absolute peace of mind." />
            <FeatureBox title="Woodbridge Hub" body="Strategically located near major shipping lanes for rapid deployment." />
          </div>
        </div>
      </section>
    </div>
  );
};

const ValueItem: React.FC<{num: string, title: string, body: string}> = ({ num, title, body }) => (
  <div>
    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6 block">{num}</span>
    <h3 className="hero-title text-xl text-slate-900 mb-4 uppercase">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
  </div>
);

const FeatureBox: React.FC<{title: string, body: string}> = ({ title, body }) => (
  <div className="p-12 border border-white/5 bg-white/5 rounded-3xl hover:bg-white/10 transition-colors">
    <h3 className="hero-title text-2xl text-blue-500 mb-6">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
  </div>
);

export default About;
