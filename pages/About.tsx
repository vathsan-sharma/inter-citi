
import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Shield, Target, Users, CheckCircle, Award, History, TrendingUp, Heart, Plus, Minus, Quote, ChevronLeft, ChevronRight } from 'lucide-react';


const Counter: React.FC<{ value: string, label: string, delay?: number }> = ({ value, label, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="flex flex-col"
  >
    <span className="text-4xl font-black text-white">{value}</span>
    <span className="text-[10px] uppercase tracking-widest text-white/40">{label}</span>
  </motion.div>
);

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
      answer: "Inter-Citi Logistics Canada was established in 2001. We have over 25 years of experience in the logistics and transportation industry."
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
      answer: "Our heritage of over 25 years, our strategic 30,000 sq ft climate-controlled facility in Scarborough, and our relentless commitment to customer satisfaction through 24/7 dispatch support set us apart."
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
              Inter-Citi Logistics has been a trusted logistics provider serving clients across Canada since 2001. Over 25 years of excellence, engineered for the modern world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-8"
            >
              <Counter value="25+" label="Years of Expertise" delay={0.4} />
              <div className="w-px h-12 bg-white/10"></div>
              <Counter value="1.2M+" label="Deliveries" delay={0.5} />
              <div className="w-px h-12 bg-white/10"></div>
              <Counter value="10" label="Provinces" delay={0.6} />
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
              <div className="text-xs font-black uppercase tracking-widest text-slate-900">Est. 2001</div>
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
              <h2 className="hero-title text-slate-900 mb-12">
                25+ Years of <br/> <span className="text-slate-400 italic">Relentless</span> <br/> Service.
              </h2>
              <div className="space-y-8 text-slate-500 text-xl leading-relaxed font-light">
                <p>
                  Inter-Citi Logistics has been a trusted logistics provider serving clients across Canada since 2001. Over 25 years of excellence, we have earned a reputation for dependable service, fast turnaround times, and professional support.
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
                      "Delivering quality with every mile. Efficient logistics. Reliable service. Customer satisfaction in every delivery."
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

      {/* Founder Section */}
      <section className="py-24 md:py-48 bg-slate-50 relative overflow-hidden border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="hero-title text-4xl md:text-7xl text-slate-900 mb-12 tracking-tighter">
              Meet Our <br/> <span className="text-brand-blue italic">Founder.</span>
            </h2>
            <div className="space-y-8 text-slate-600 text-lg md:text-xl leading-relaxed">
              <p className="font-bold text-slate-900 text-2xl">Kula Sellathurai — President of Inter-Citi Logistics</p>
              <p>
                Kula Sellathurai is the President of Inter-Citi Logistics and a respected entrepreneur with decades of business leadership experience. He founded Inter-Citi Logistics in 2001 after recognizing a market need for industry-specific logistics solutions, and has since played a key role in building the company into a trusted logistics provider in Canada.
              </p>
              <p>
                Beyond his leadership at Inter-Citi Logistics, Kula has held several prominent roles in business and community organizations, including President of the Canada Sri Lanka Business Convention, President of the Sri Lanka Canada Business Council, Deputy Secretary General of the Global Federation of Sri Lankan Business Councils, and Past President of the Canadian Tamil Chamber of Commerce.
              </p>
              <p>
                His accomplishments have been recognized through numerous honours, including the Her Majesty Queen Elizabeth II Diamond Jubilee Medal, the Her Majesty Queen Elizabeth II Platinum Jubilee Medal, the His Majesty King Charles III Coronation Medal, and recognition as one of the Top 25 South Asian Entrepreneurs in Canada.
              </p>
            </div>
          </motion.div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden">
            <ValueCard icon={<Users />} title="Our Service" body="We are committed to operating with efficiency, professionalism, and full compliance with all rules and regulations. Every shipment is handled with care, accuracy, and accountability." delay={0.1} />
            <ValueCard icon={<Target />} title="Our People" body="Our people are the foundation of our success. We value our clients, support our employees, and foster a workplace built on respect, reliability, and performance." delay={0.2} />
            <ValueCard icon={<Heart />} title="Our Community" body="Giving back is part of who we are. We take pride in supporting and volunteering within our community, building connections that extend beyond logistics." delay={0.3} />
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-24 md:py-48 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="hero-title text-4xl md:text-8xl text-slate-900 tracking-tighter mb-12">
                Maintenance.
              </h2>
              <div className="space-y-6 text-slate-500 text-xl leading-relaxed mb-12 font-light">
                <p>
                  Reliable service begins with dependable equipment. Our vehicles and trailers are maintained through a strict inspection and service schedule to ensure consistent performance, safety, and reliability.
                </p>
                <p>
                  By upholding high maintenance standards, we support our commitment to delivering freight on time and with confidence. Clean, well-maintained equipment plays a key role in the quality and dependability of our service.
                </p>
                <p>
                  As technology continues to advance, we invest in late-model vehicles and maintain clear equipment age standards to strengthen efficiency, performance, and reliability across every journey.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-brand-blue/5 rounded-[3rem] blur-3xl"></div>
              <img 
                src="https://raw.githubusercontent.com/vathsan-sharma/inticiti-images/main/modern-automobile-mechanic-composition.jpg" 
                className="relative rounded-[3rem] shadow-2xl w-full aspect-square object-cover" 
                alt="Maintenance" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety & Compliance Section */}
      <section className="py-24 md:py-48 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-4 bg-brand-blue/5 rounded-[3rem] blur-3xl"></div>
              <img 
                src="https://raw.githubusercontent.com/vathsan-sharma/inticiti-images/main/factory-worker-holding-clipboard-checking-inventory-warehouse-storage-department.jpg" 
                className="relative rounded-[3rem] shadow-2xl w-full aspect-square object-cover" 
                alt="Safety and Compliance" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="hero-title text-4xl md:text-8xl text-slate-900 tracking-tighter mb-12">
                Safety & <br/> <span className="text-brand-blue italic">Compliance.</span>
              </h2>
              <div className="space-y-6 text-slate-500 text-xl leading-relaxed mb-12 font-light">
                <p>
                  Safety and compliance are fundamental to the way we operate. We hold our drivers to high professional standards to ensure every shipment is handled with care, responsibility, and reliability.
                </p>
                <p>
                  Through our partnership with a professional driver service, we maintain a strong focus on driver recruitment, training, and logbook auditing. Drivers also receive ongoing updates on safety procedures, border-crossing requirements, accident prevention, and emergency response practices.
                </p>
                <p>
                  Each driver completes a thorough orientation program and must meet strict qualification requirements, including a minimum age of 25 and at least two years of cross-border experience. Every trip is monitored and reviewed to help maintain compliance, service excellence, and customer confidence.
                </p>
              </div>
            </motion.div>
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

