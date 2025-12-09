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
    <div id={SectionID.TOP} className="w-full">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
         <div className="absolute inset-0 bg-gray-50 -z-10" />
         <div className="absolute right-0 top-0 w-1/2 h-full bg-merpara-blue/5 hidden lg:block" />
         
         <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
               <motion.span 
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                 className="inline-block px-3 py-1 bg-black text-white text-xs font-bold tracking-widest uppercase mb-6 rounded-sm"
               >
                 Influencer Fashion Program
               </motion.span>
               <motion.h1 
                 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                 className="text-6xl lg:text-8xl font-serif font-medium text-merpara-dark leading-none mb-6"
               >
                 Brand Your <br/>
                 <span className="italic text-gray-400">Influence.</span>
               </motion.h1>
               <motion.p 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed"
               >
                  Create your own fashion label from 0 to 1. We combine boutique design, agile production, and data-backed management for your scalable success.
               </motion.p>
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex gap-4">
                  <Button onClick={() => scrollToSection(SectionID.PROCESS)} className="bg-black text-white hover:bg-gray-800 shadow-none">Start Journey</Button>
               </motion.div>
            </div>
            
            <div className="relative h-[600px] hidden lg:block">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
                 className="absolute inset-0 rounded-[40px] overflow-hidden"
               >
                  <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop" alt="Fashion Design" className="w-full h-full object-cover" />
                  
                  {/* Floating Card */}
                  <GlassCard className="absolute bottom-8 right-8 w-64 p-6 bg-white/80 backdrop-blur-xl">
                      <p className="font-serif italic text-2xl mb-2">"Unique Style"</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Powered by China's Leading Supply Chain</p>
                  </GlassCard>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Workflow Section */}
      <section id={SectionID.PROCESS} className="py-24 bg-white relative">
          <div className="container mx-auto px-6">
             <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold mb-4">From Concept to Collection</h2>
                <p className="text-gray-500">A transparent 5-step workflow designed for creators.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {workflow.map((step, i) => (
                   <div key={i} className="flex flex-col items-center text-center group">
                      <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                         {React.createElement(step.icon, { size: 28 })}
                      </div>
                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-500 px-2">{step.desc}</p>
                   </div>
                ))}
             </div>
          </div>
      </section>

      {/* Pricing / Fees Structure */}
      <section id={SectionID.PRICING} className="py-24 bg-gray-50">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-4xl font-serif font-bold mb-6">Service Fees Explained</h2>
                  <p className="text-lg text-gray-600 mb-8">
                     We believe in a long-term partnership. Our fee structure is transparent with no hidden costs, prioritizing sustainable margins for your brand.
                  </p>
                  
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="w-12 h-12 bg-merpara-blue/10 rounded-full flex items-center justify-center text-merpara-blue flex-shrink-0">
                           <Lock size={20} />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg">Production Costs</h4>
                           <p className="text-gray-500">Upfront payments cover actual manufacturing expenses. You pay what it costs.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-12 h-12 bg-merpara-coral/10 rounded-full flex items-center justify-center text-merpara-coral flex-shrink-0">
                           <CheckCircle size={20} />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg">Service Fees</h4>
                           <p className="text-gray-500">Transparent fees for design, operations support, and supply chain management.</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-merpara-blue/20 to-merpara-purple/20 rounded-full blur-[100px]" />
                  <GlassCard className="p-10 relative">
                      <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Merpara?</h3>
                      <ul className="space-y-4">
                         {['Full-Service: Concept to Collection', 'Transparent: Real-time updates', 'Flexible: Low MOQs for creators', 'Supportive: Dedicated operations team'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-700 bg-white/50 p-3 rounded-lg">
                               <div className="w-2 h-2 bg-merpara-blue rounded-full" />
                               {item}
                            </li>
                         ))}
                      </ul>
                      <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                         <p className="font-serif italic text-gray-400">"Your trusted global partner in fashion"</p>
                      </div>
                  </GlassCard>
               </div>
            </div>
         </div>
      </section>

      {/* Team Section Filtered for Fashion */}
      <TeamSection filter="fashion" />
      
    </div>
  );
};