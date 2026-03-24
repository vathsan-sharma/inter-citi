
import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Shield, Target, Users, CheckCircle, Award, History, TrendingUp, Heart, Plus, Minus, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Inter-Citi has been our go-to for over a decade. Their reliability is unmatched in the Canadian market.",
      author: "David Chen",
      role: "Logistics Manager, Retail Corp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    },
    {
      quote: "Fast, efficient, and professional. They handle our delicate shipments with extreme care and precision.",
      author: "Sarah Jenkins",
      role: "Operations Director, Tech Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
    },
    {
      quote: "The real-time tracking and 24/7 support give us absolute peace of mind for our time-critical deliveries.",
      author: "Michael Ross",
      role: "Supply Chain Head, Global Manufacturing",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const faqs = [
    {
      question: "What areas do you cover?",
      answer: "We provide comprehensive delivery solutions across all Canadian provinces, including Ontario, Quebec, British Columbia, Alberta, Manitoba, Saskatchewan, Nova Scotia, New Brunswick, Newfoundland and Labrador, and Prince Edward Island. We do not offer international deliveries."
    },
    {
      question: "How long has Inter-Citi Logistics been in business?",
      answer: "Inter-Citi Logistics Canada was established in 1990. We have over three decades of experience in the logistics and transportation industry."
    },
    {
      question: "What types of services do you offer?",
      answer: "We specialize in Express Courier Services, Warehousing and Distribution, and Last Mile Solutions. Our services are tailored to meet the unique demands of the Canadian landscape."
    },
    {
      question: "Do you offer real-time tracking?",
      answer: "Yes, we utilize the latest real-time tracking technology to provide our clients with accurate and timely updates on their shipments."
    },
    {
      question: "What makes Inter-Citi different from other providers?",
      answer: "Our heritage of over 30 years, our strategic 30,000 sq ft climate-controlled facility in Scarborough, and our relentless commitment to customer satisfaction through 24/7 dispatch support set us apart."
    }
  ];

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="bg-slate-950 text-white selection:bg-brand-red selection:text-white">
      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden border-b border-white/5 px-6 lg:px-10">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?auto=format&fit=crop&q=80&w=2000" 
            alt="Logistics Background" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-32 pb-20 md:pt-48 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 mb-8 md:mb-12"
          >
            <span className="bg-brand-red w-2 h-2 rounded-full animate-pulse"></span>
            <span className="text-white/40 font-bold uppercase tracking-[0.5em] text-[7px] md:text-[9px]">Inter-Citi Logistics Canada</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="hero-title text-white mb-6 md:mb-8"
          >
            Our <span className="text-white/20 italic">Heritage.</span> <br/>
            Your <span className="text-white/20">Future.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hero-subtitle mb-8 md:mb-12 max-w-3xl"
          >
            Inter-Citi Logistics Canada is an industry-specific provider specializing in freight movement within Canada for over three decades.
          </motion.p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 md:py-48 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-brand-red font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-6 block"
              >
                The Story
              </motion.span>
              <h2 className="hero-title text-4xl md:text-8xl text-white tracking-tighter mb-12">
                Three Decades of <br/> <span className="text-brand-red italic">Relentless Service.</span>
              </h2>
              <div className="space-y-8 text-white/50 text-lg leading-relaxed">
                <p>
                  Since 1990, Inter-Citi Logistics has been a trusted logistics partner delivering efficient and dependable transportation solutions across Canada. We have built our reputation on providing high-quality courier services, transportation, and warehousing with fast one- and two-day delivery.
                </p>
                <p>
                  Backed by an established network and extensive industry expertise, we pride ourselves on offering reliable service, professional support, and tailored logistics solutions that help businesses operate with confidence.
                </p>
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red mb-8 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/40 text-sm leading-relaxed italic">
                  "To provide our clients with quality and efficiency services while offering ultimate customer satisfaction."
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-colors group md:mt-12"
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red mb-8 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Strategy</h3>
                <p className="text-white/40 text-sm leading-relaxed italic">
                  "Analyzing all transportation requirements to formulate unique plans that save time and money, backed by 24hr customer service dispatch."
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Spotlight */}
      <section className="py-24 md:py-48 bg-slate-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                  alt="Kula Sellathurai" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-12 rounded-[2.5rem] shadow-2xl text-slate-950 max-w-xs hidden md:block">
                 <h4 className="hero-title text-2xl mb-1 uppercase tracking-tighter">Kula Sellathurai</h4>
                 <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">President & Founder</p>
              </div>
            </motion.div>

            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-brand-red font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-6 block"
              >
                Leadership
              </motion.span>
              <h2 className="hero-title text-4xl md:text-8xl text-white tracking-tighter mb-12">
                Visionary <br/> <span className="text-brand-red italic">Guidance.</span>
              </h2>
              <div className="space-y-8 text-white/50 text-lg leading-relaxed">
                <p>
                  Kula Sellathurai established Inter-Citi Logistics in 1990 after identifying a critical gap in industry-specific logistics. His journey is defined by a relentless commitment to community and excellence.
                </p>
                <p>
                  A recipient of the Queen Elizabeth II Diamond Jubilee Medal and the Ontario Volunteer Award, Kula's leadership integrates high-level strategy with a deep sense of integrity.
                </p>
                <div className="pt-8 flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <Award className="text-brand-red w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Jubilee Medalist</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <History className="text-brand-red w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">30+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="py-24 md:py-48 bg-slate-950 relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-red font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-6 block"
            >
              Testimonials
            </motion.span>
            <h2 className="hero-title text-4xl md:text-8xl text-white tracking-tighter">
              Trusted by <br/> <span className="text-brand-red italic">Industry Leaders.</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-[3rem] text-center"
              >
                <Quote className="w-12 h-12 text-brand-red mx-auto mb-8 opacity-50" />
                <p className="text-xl md:text-3xl text-white/80 leading-relaxed mb-12 italic font-light">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div className="flex flex-col items-center">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].author}
                    className="w-16 h-16 rounded-full mb-4 grayscale"
                  />
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm">{testimonials[currentTestimonial].author}</h4>
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.2em]">{testimonials[currentTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-12">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 md:py-48 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hero-title text-4xl md:text-8xl text-white tracking-tighter"
            >
              Core <span className="text-brand-red italic">Values.</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden">
            <ValueCard icon={<Users />} title="Responsiveness" body="An on-going commitment to responding to client needs and market fluctuations." delay={0.1} />
            <ValueCard icon={<Target />} title="Flexibility" body="Innovative solutions customized to offer maximum reliability and cost-effectiveness." delay={0.2} />
            <ValueCard icon={<Shield />} title="Safety" body="Rigid service inspections and regular driver safety updates for a flawless record." delay={0.3} />
            <ValueCard icon={<CheckCircle />} title="Accuracy" body="Timely and accurate delivery supported by the latest real-time tracking technology." delay={0.4} />
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-24 md:py-48 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.05)_0%,transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-brand-red font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-6 block"
              >
                Infrastructure
              </motion.span>
              <h2 className="hero-title text-4xl md:text-8xl text-white tracking-tighter mb-12">
                Strategic <br/> <span className="text-brand-red italic">Capability.</span>
              </h2>
              <p className="text-white/60 text-xl leading-relaxed mb-12">
                Our 30,000 sq ft facility in Scarborough is climate-controlled and monitored 24/7, serving as a strategic hub for Just-in-Time distribution across the GTA and beyond.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-black text-white mb-2 tracking-tighter">30K</div>
                  <div className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/30">Square Feet</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-2 tracking-tighter">24/7</div>
                  <div className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/30">Monitoring</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1591768793355-74d7c869c3b7?auto=format&fit=crop&q=80&w=600" className="rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-500" alt="Fleet Safety" />
                <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem]">
                  <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-2">Compliance</h4>
                  <p className="text-white/40 text-xs">Rigid auditing for absolute safety compliance.</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="p-8 bg-brand-red rounded-[2rem] text-white">
                  <h4 className="font-bold uppercase text-[10px] tracking-widest mb-2">Training</h4>
                  <p className="text-white/80 text-xs">Continuous driver safety updates.</p>
                </div>
                <img src="https://images.unsplash.com/photo-1501700493717-9c99da9ff053?auto=format&fit=crop&q=80&w=600" className="rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-500" alt="Fleet Modernization" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-48 border-t border-white/5 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-red font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-6 block"
            >
              Support
            </motion.span>
            <h2 className="hero-title text-4xl md:text-8xl text-white tracking-tighter">
              Common <span className="text-brand-red italic">Questions.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-white/10 rounded-3xl overflow-hidden bg-white/5"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg md:text-xl font-bold text-white tracking-tight">{faq.question}</span>
                  {activeFaq === idx ? <Minus className="w-5 h-5 text-brand-red" /> : <Plus className="w-5 h-5 text-white/40" />}
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-white/50 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ValueCard: React.FC<{icon: React.ReactNode, title: string, body: string, delay?: number}> = ({ icon, title, body, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="p-12 bg-slate-950 hover:bg-white/5 transition-colors group"
  >
    <div className="w-12 h-12 bg-brand-red/10 rounded-2xl flex items-center justify-center mb-8 text-brand-red group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-white/40 text-sm leading-relaxed">{body}</p>
  </motion.div>
);

export default About;

