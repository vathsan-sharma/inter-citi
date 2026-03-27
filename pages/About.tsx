
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
      answer: "We provide comprehensive delivery solutions across all Canadian provinces, including Ontario, Quebec, British Columbia, Alberta, Manitoba, Saskatchewan, Nova Scotia, New Brunswick, Newfoundland and Labrador, and Prince Edward Island."
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
    <div className="bg-white text-slate-900 selection:bg-brand-blue selection:text-white">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 z-0 lg:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?auto=format&fit=crop&q=80&w=2000" 
            alt="Logistics Background" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/0 via-brand-blue/40 to-brand-blue"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 pt-40 pb-20 md:pt-56 md:pb-32 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 lg:pl-12 order-2 lg:order-1">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="hero-title text-white mb-8"
            >
              Our Heritage. <br/>
              Your Future.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-white/60 text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-light"
            >
              Inter-Citi Logistics has been a trusted logistics partner serving customers across Canada since 1990. Over three decades of excellence, engineered for the modern world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-8"
            >
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white">30+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Years Experience</span>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Canadian Owned</span>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-square rounded-[4rem] overflow-hidden border-[12px] border-white/5 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Warehouse" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-blue/20"></div>
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl hidden md:block"
            >
              <Award className="w-10 h-10 text-brand-blue mb-4" />
              <div className="text-xs font-black uppercase tracking-widest text-slate-900">Est. 1990</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Narrative Section - Editorial Layout */}
      <section className="py-24 md:py-48 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <div className="text-brand-blue font-black text-sm uppercase tracking-[0.4em] mb-8">The Inter-Citi Story</div>
              <h2 className="hero-title text-slate-900 mb-12">
                Three Decades of <br/> <span className="text-slate-400 italic">Relentless</span> <br/> Service.
              </h2>
              <div className="space-y-8 text-slate-500 text-xl leading-relaxed font-light">
                <p>
                  Inter-Citi Logistics has been a trusted logistics partner serving customers across Canada since 1990. Over the years, we have earned a reputation for dependable service, fast turnaround times, and professional support.
                </p>
                <p>
                  With one- and two-day delivery, an established transportation network, and extensive industry expertise, we provide logistics solutions that are efficient, flexible, and reliable.
                </p>
              </div>
            </motion.div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-blue/5 rounded-[3rem] blur-3xl"></div>
                <div className="relative space-y-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-12 bg-slate-50 border border-slate-100 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all duration-500 group"
                  >
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center shadow-lg">
                        <Target className="w-7 h-7" />
                      </div>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tight">Our Mission</h3>
                    </div>
                    <p className="text-slate-500 text-lg leading-relaxed italic font-light">
                      "Delivering quality with every mile. To provide efficient, quality-driven logistics solutions with customer satisfaction at the center of everything we do."
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="p-12 bg-brand-blue text-white rounded-[3rem] shadow-2xl group"
                  >
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-14 h-14 bg-white text-brand-blue rounded-2xl flex items-center justify-center shadow-lg">
                        <TrendingUp className="w-7 h-7" />
                      </div>
                      <h3 className="text-3xl font-black tracking-tight">Our Vision</h3>
                    </div>
                    <p className="text-white/60 text-lg leading-relaxed italic font-light">
                      "To be the most trusted name in Canadian logistics, setting the standard for reliability and service excellence through innovation and integrity."
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="py-24 md:py-48 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="hero-title text-4xl md:text-8xl text-slate-900 tracking-tighter">
              Trusted by <br/> <span className="text-brand-blue italic">Industry Leaders.</span>
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
                className="bg-slate-50 border border-slate-100 p-10 md:p-16 rounded-[3rem] text-center"
              >
                <Quote className="w-12 h-12 text-brand-blue mx-auto mb-8 opacity-20" />
                <p className="text-xl md:text-3xl text-slate-600 leading-relaxed mb-12 italic font-light">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div className="flex flex-col items-center">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].author}
                    className="w-16 h-16 rounded-full mb-4 grayscale"
                  />
                  <h4 className="text-slate-900 font-bold uppercase tracking-widest text-sm">{testimonials[currentTestimonial].author}</h4>
                  <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em]">{testimonials[currentTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-12">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-900"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-900"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 md:py-48 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-24">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="hero-title text-4xl md:text-8xl text-white tracking-tighter"
              >
                Core <span className="text-white/80 italic">Values.</span>
              </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden">
            <ValueCard icon={<Users />} title="Our Service" body="We are committed to operating with efficiency, professionalism, and full compliance with all rules and regulations. Every shipment is handled with care, accuracy, and accountability." delay={0.1} />
            <ValueCard icon={<Target />} title="Our People" body="Our people are the foundation of our success. We value our partners, support our employees, and foster a workplace built on respect, reliability, and performance." delay={0.2} />
            <ValueCard icon={<Heart />} title="Our Community" body="Giving back is part of who we are. We take pride in supporting and volunteering within our community, building connections that extend beyond logistics." delay={0.3} />
            <ValueCard icon={<Shield />} title="Maintenance" body="Reliable service begins with dependable equipment. Our vehicles and trailers are maintained through a strict inspection and service schedule to ensure consistent performance, safety, and reliability." delay={0.4} />
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-24 md:py-48 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,33,71,0.03)_0%,transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="hero-title text-4xl md:text-8xl text-slate-900 tracking-tighter mb-12">
                Safety & <br/> <span className="text-brand-blue italic">Compliance.</span>
              </h2>
              <p className="text-slate-500 text-xl leading-relaxed mb-12">
                Safety and compliance are fundamental to the way we operate. We hold our drivers to high professional standards to ensure every shipment is handled with care, responsibility, and reliability.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">30K</div>
                  <div className="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-400">Square Feet</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">24/7</div>
                  <div className="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-400">Monitoring</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1591768793355-74d7c869c3b7?auto=format&fit=crop&q=80&w=600" className="rounded-[2rem] transition-all duration-500" alt="Fleet Safety" />
                <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2rem]">
                  <h4 className="text-slate-900 font-bold uppercase text-[10px] tracking-widest mb-2">Compliance</h4>
                  <p className="text-slate-500 text-xs">Rigid auditing for absolute safety compliance.</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="p-8 bg-brand-blue rounded-[2rem] text-white">
                  <h4 className="font-bold uppercase text-[10px] tracking-widest mb-2">Training</h4>
                  <p className="text-white/80 text-xs">Continuous driver safety updates.</p>
                </div>
                <img src="https://images.unsplash.com/photo-1501700493717-9c99da9ff053?auto=format&fit=crop&q=80&w=600" className="rounded-[2rem] transition-all duration-500" alt="Fleet Modernization" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-48 bg-brand-blue relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-24">
            <h2 className="hero-title text-4xl md:text-8xl text-white tracking-tighter">
              Common <span className="text-white/80 italic">Questions.</span>
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
                  {activeFaq === idx ? <Minus className="w-5 h-5 text-white/60" /> : <Plus className="w-5 h-5 text-white/40" />}
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
    className="p-12 bg-brand-blue hover:bg-white/5 transition-colors group"
  >
    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:bg-white group-hover:text-brand-blue transition-all duration-500">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-white/40 text-sm leading-relaxed">{body}</p>
  </motion.div>
);

export default About;

