import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Button } from './Button';
import { SectionID } from '../types';
import { TeamSection } from './TeamSection';
import { Shirt, PenTool, Factory, Rocket, Lock, Globe, CheckCircle } from 'lucide-react';

interface FashionPageProps {
  scrollToSection: (id: SectionID) => void;
}

export const FashionPage: React.FC<FashionPageProps> = ({ scrollToSection }) => {
  const workflow = [
    { title: "Discovery", desc: "Align on vision, audience & market insights.", icon: Globe },
    { title: "Planning", desc: "Concept, themes & price points tailored to you.", icon: PenTool },
    { title: "Sampling", desc: "Prototypes & fitting. Perfecting quality before scale.", icon: Shirt },
    { title: "Production", desc: "Agile manufacturing with real-time QC updates.", icon: Factory },
    { title: "Launch", desc: "Warehousing, shipping & go-to-market support.", icon: Rocket },
  ];

  return (
    <div id={SectionID.TOP} className="w-full bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
         <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                 className="flex items-center gap-2 mb-6"
               >
                 <div className="h-px w-8 bg-merpara-coral"></div>
                 <span className="text-merpara-coral text-xs font-bold tracking-[0.2em] uppercase">
                   Influencer Fashion Program
                 </span>
               </motion.div>
               
               <motion.h1 
                 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                 className="text-6xl lg:text-8xl font-serif font-black text-merpara-dark leading-[0.9] mb-8"
               >
                 Brand Your <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-merpara-coral to-merpara-orange">Influence.</span>
               </motion.h1>
               
               <motion.p 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed font-light"
               >
                  Don't just sell merch. Build a legacy. We combine boutique design, agile production, and data-backed management to take your label from <b className="text-merpara-dark">concept to collection</b>.
               </motion.p>
               
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex gap-4">
                  <Button 
                    onClick={() => scrollToSection(SectionID.PROCESS)} 
                    className="bg-merpara-coral text-white hover:bg-black shadow-lg shadow-merpara-coral/20 px-10 py-4"
                  >
                    Start Journey
                  </Button>
               </motion.div>
            </div>
            
            <div className="relative h-[600px] lg:h-[700px] order-1 lg:order-2">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
                 className="absolute inset-0 rounded-none lg:rounded-tl-[100px] overflow-hidden shadow-2xl"
               >
                  {/* High-end fashion editorial shot to resonate with 'Brand Your Influence' */}
                  <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" alt="High-end Fashion Branding" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                  
                  {/* Floating Minimal Card */}
                  <div className="absolute bottom-0 left-0 bg-white p-8 pr-12 shadow-xl">
                      <p className="font-serif font-bold text-4xl mb-1 text-merpara-dark tracking-tighter">0-1</p>
                      <p className="text-xs text-merpara-coral font-bold uppercase tracking-[0.2em]">Incubation</p>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Workflow Section */}
      <section id={SectionID.PROCESS} className="py-32 bg-white relative">
          <div className="container mx-auto px-6">
             <div className="max-w-xl mb-20">
                <h2 className="text-5xl font-serif font-bold mb-6 text-merpara-dark">The Process</h2>
                <div className="h-1 w-20 bg-merpara-orange mb-6"></div>
                <p className="text-gray-500 text-lg">A transparent 5-step workflow designed for creators who want to own their supply chain.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                {/* Connecting Line */}
                <div className="absolute top-8 left-0 w-full h-px bg-gray-100 hidden md:block -z-10" />

                {workflow.map((step, i) => (
                   <div key={i} className="flex flex-col items-start group">
                      <div className="w-16 h-16 bg-white border-2 border-gray-100 flex items-center justify-center mb-8 group-hover:border-merpara-orange transition-colors duration-300 z-10">
                         {React.createElement(step.icon, { size: 24, className: "text-merpara-orange" })}
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-merpara-dark">{step.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                   </div>
                ))}
             </div>
          </div>
      </section>

      {/* Pricing / Fees Structure */}
      <section id={SectionID.PRICING} className="py-32 bg-merpara-gray">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
               <div>
                  <h2 className="text-5xl font-serif font-bold mb-8 text-merpara-dark">Fees Explained</h2>
                  <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                     We believe in a long-term partnership. Our fee structure is transparent with no hidden costs, prioritizing sustainable margins for your brand.
                  </p>
                  
                  <div className="space-y-12">
                     <div className="flex gap-6 group">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gray-300 shadow-sm flex-shrink-0 group-hover:text-merpara-dark transition-colors">
                           <Lock size={24} />
                        </div>
                        <div>
                           <h4 className="font-bold text-2xl mb-2 text-gray-400 group-hover:text-merpara-dark transition-colors">Production Costs</h4>
                           <p className="text-gray-400">Upfront payments cover actual manufacturing expenses. You pay what it costs. No markup.</p>
                        </div>
                     </div>
                     <div className="flex gap-6 group">
                        <div className="w-14 h-14 bg-merpara-coral rounded-full flex items-center justify-center text-white shadow-lg shadow-merpara-coral/30 flex-shrink-0">
                           <CheckCircle size={24} />
                        </div>
                        <div>
                           <h4 className="font-bold text-2xl mb-2 text-merpara-coral">Service Fees</h4>
                           <p className="text-gray-600">Transparent fees for design, operations support, and supply chain management.</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="relative pt-12">
                  <div className="bg-white p-12 shadow-2xl relative z-10">
                      <h3 className="text-3xl font-serif font-bold mb-8 text-merpara-dark">Why Merpara?</h3>
                      <ul className="space-y-6">
                         {[
                             'Full-Service: Concept to Collection', 
                             'Transparent: Real-time updates', 
                             'Flexible: Low MOQs for creators', 
                             'Supportive: Dedicated operations team'
                         ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-merpara-dark text-lg font-medium">
                               <div className="w-2 h-2 bg-merpara-orange rounded-full" />
                               {item}
                            </li>
                         ))}
                      </ul>
                      <div className="mt-12 pt-8 border-t border-gray-100">
                         <p className="font-serif italic text-2xl text-gray-400">"Your trusted global partner in fashion"</p>
                      </div>
                  </div>
                  <div className="absolute top-0 right-0 w-full h-full border-2 border-merpara-coral transform translate-x-4 -translate-y-4 -z-0" />
               </div>
            </div>
         </div>
      </section>

      {/* Team Section Filtered for Fashion */}
      <TeamSection filter="fashion" />
      
    </div>
  );
};