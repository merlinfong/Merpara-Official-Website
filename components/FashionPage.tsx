import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { SectionID } from '../types';
import { TeamSection } from './TeamSection';
import { Factory, Gem, Search, TrendingDown, Check, X } from 'lucide-react';

interface FashionPageProps {
  scrollToSection: (id: SectionID) => void;
}

export const FashionPage: React.FC<FashionPageProps> = ({ scrollToSection }) => {
  const workflowSteps = [
    { 
      title: "Vision Alignment", 
      desc: "We align with your audience DNA and market trends to define a winning brand strategy.", 
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop" 
    },
    { 
      title: "Curated Merchandising", 
      desc: "Developing tailored themes, pricing architecture, and SKU plans that balance creativity with commercial viability.", 
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" 
    },
    { 
      title: "Prototyping & Fit", 
      desc: "Turning sketches into reality. We iterate on fabrics and silhouettes until the fit is boutique-perfect.", 
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=2070&auto=format&fit=crop" 
    },
    { 
      title: "Agile Production", 
      desc: "Flexible manufacturing with Low MOQs. Track real-time QC reports and production status via our digital dashboard.", 
      image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=2070&auto=format&fit=crop" 
    },
    { 
      title: "Global Drop", 
      desc: "Seamless logistics to your warehouse. We support your go-to-market strategy for a high-impact launch day.", 
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
    },
  ];

  return (
    <div id={SectionID.TOP} className="w-full bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-12 overflow-hidden">
         <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Content Column */}
            <div className="order-2 lg:order-1 relative z-10">
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
                 className="text-6xl lg:text-[7.5rem] font-serif font-black text-merpara-dark leading-[0.85] mb-8 tracking-tighter"
               >
                 Brand Your <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-merpara-coral to-merpara-orange">Influence.</span>
               </motion.h1>
               
               <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed font-light space-y-4"
               >
                  <p className="font-bold text-merpara-dark text-xl">Don't just sell merch. Build a legacy.</p>
                  <p>
                    Transform your audience into a fashion empire with <span className="text-merpara-dark font-medium">100% brand ownership</span> and zero revenue sharing. We connect you directly to China's premier supply chain—offering boutique design, low MOQs, and agile production. From concept to collection, transparently.
                  </p>
               </motion.div>
               
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex gap-4">
                  <Button 
                    variant="secondary"
                    onClick={() => window.location.href='mailto:business@merpara.com'} 
                    className="bg-merpara-coral text-white hover:bg-black shadow-lg shadow-merpara-coral/20 px-10 py-5 text-base rounded-full transition-all duration-300"
                  >
                    Start My Brand
                  </Button>
               </motion.div>
            </div>
            
            {/* Right Hero Image: Concept to Collection Storytelling */}
            <div className="relative h-[650px] lg:h-[800px] order-1 lg:order-2">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }} 
                 animate={{ opacity: 1, scale: 1 }} 
                 transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                 className="relative w-full h-full"
               >
                  <div className="relative w-full h-full overflow-hidden rounded-[60px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.18)] bg-gray-100 flex flex-col sm:flex-row">
                      
                      {/* Left Side: Concept (Studio/Workstation) */}
                      <div className="relative flex-1 h-full overflow-hidden border-b-2 sm:border-b-0 sm:border-r-2 border-white/50 group">
                          <img 
                            src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2070&auto=format&fit=crop" 
                            alt="Design Sketches and Color Palettes" 
                            className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent opacity-60" />
                          
                          <div className="absolute top-10 left-10">
                             <div className="bg-white/90 backdrop-blur-xl p-5 rounded-2xl border border-white/20 shadow-2xl">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-merpara-dark opacity-50 mb-1">Phase 01</p>
                                <p className="font-serif font-black text-xl text-merpara-dark tracking-tight">The Concept</p>
                             </div>
                          </div>
                      </div>

                      {/* Right Side: Collection (Model / Finished Garment) */}
                      <div className="relative flex-1 h-full overflow-hidden group">
                          <img 
                            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2070&auto=format&fit=crop" 
                            alt="High Fashion Model in Finished Garment" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tl from-merpara-coral/20 to-transparent" />
                          
                          <div className="absolute bottom-10 right-10 text-right">
                             <div className="bg-merpara-coral text-white p-5 rounded-2xl shadow-2xl border border-white/10">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mb-1">Phase 05</p>
                                <p className="font-serif font-black text-xl tracking-tight">The Drop</p>
                             </div>
                          </div>
                      </div>

                      {/* Center Hub - Incubator Badge */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                         <motion.div 
                           initial={{ rotate: -5 }}
                           animate={{ rotate: 0 }}
                           transition={{ duration: 1, delay: 0.5 }}
                           className="bg-white p-10 px-14 rounded-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col items-center justify-center scale-75 md:scale-100"
                         >
                            <div className="relative">
                               <p className="font-serif font-black text-6xl text-merpara-dark tracking-tighter leading-none mb-2">0-1</p>
                               <div className="absolute -right-2 -top-2 w-4 h-4 bg-merpara-coral rounded-full animate-ping" />
                            </div>
                            <p className="text-[10px] text-merpara-coral font-black uppercase tracking-[0.5em] whitespace-nowrap">Incubation</p>
                         </motion.div>
                      </div>
                  </div>

                  <div className="absolute -top-16 -right-16 w-56 h-56 border border-merpara-orange/20 rounded-full -z-10 animate-[spin_20s_linear_infinite]" />
                  <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-merpara-coral/5 rounded-[80px] -rotate-12 -z-10 blur-2xl" />
               </motion.div>
            </div>
         </div>
      </section>

      {/* Workflow Section - Visual Flow / Zig-Zag Layout */}
      <section id={SectionID.PROCESS} className="py-32 bg-white relative">
          <div className="container mx-auto px-6">
             <div className="max-w-3xl mb-32 text-center mx-auto">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="text-5xl md:text-6xl font-serif font-bold mb-8 text-merpara-dark tracking-tight"
                >
                  Your Roadmap to Brand Ownership
                </motion.h2>
                <div className="h-1.5 w-24 bg-merpara-orange mb-8 mx-auto rounded-full"></div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                  className="text-gray-500 text-xl font-light leading-relaxed"
                >
                  We handle the complexity of global supply chains so you can focus on creativity. <br className="hidden md:block"/> A transparent, end-to-end journey designed for the modern creator.
                </motion.p>
             </div>

             <div className="flex flex-col gap-32 md:gap-56">
                {workflowSteps.map((step, i) => (
                   <div 
                      key={i} 
                      className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 lg:gap-32`}
                   >
                      <motion.div 
                        initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 w-full"
                      >
                         <div className="relative group">
                            <div className="aspect-[4/3] overflow-hidden rounded-[50px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] bg-gray-50">
                               <img 
                                  src={step.image} 
                                  alt={step.title} 
                                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" 
                               />
                               <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
                            </div>
                            <div className={`absolute -bottom-10 ${i % 2 === 0 ? '-right-10' : '-left-10'} w-48 h-48 border-2 border-merpara-coral/10 rounded-[40px] -z-10 hidden lg:block`} />
                         </div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex-1 text-center md:text-left"
                      >
                         <div className="inline-flex items-center gap-3 px-6 py-2 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-merpara-coral mb-8 shadow-sm">
                            <span className="w-1.5 h-1.5 bg-merpara-coral rounded-full animate-pulse" />
                            Step 0{i + 1}
                         </div>
                         <h3 className="text-4xl lg:text-6xl font-serif font-black mb-8 text-merpara-dark tracking-tighter leading-tight">
                            {step.title}
                         </h3>
                         <p className="text-xl text-gray-500 leading-relaxed font-light max-w-lg mx-auto md:mx-0">
                            {step.desc}
                         </p>
                      </motion.div>
                   </div>
                ))}
             </div>
          </div>
      </section>

      {/* Pricing / Fees Structure - Redesigned */}
      <section id={SectionID.PRICING} className="py-32 bg-merpara-gray">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
               <div>
                  <h2 className="text-5xl md:text-6xl font-serif font-black mb-8 text-merpara-dark tracking-tighter">Your Brand. <br/>Your Profits.</h2>
                  <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light">
                    Unlike traditional agencies, we don't take a cut of your sales. You keep <span className="text-merpara-dark font-medium">100% of the equity and revenue</span>. We simply charge for the value we deliver.
                  </p>
                  
                  <div className="space-y-16">
                     <div className="flex gap-8 group">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-merpara-dark shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] flex-shrink-0 group-hover:bg-merpara-dark group-hover:text-white transition-all duration-500">
                           <Factory size={28} />
                        </div>
                        <div>
                           <h4 className="font-bold text-2xl mb-3 text-merpara-dark tracking-tight">Manufacturing at Cost</h4>
                           <p className="text-gray-500 leading-relaxed">Direct Factory Pricing. You pay exactly what it costs to produce. Zero hidden markups on materials or labor.</p>
                        </div>
                     </div>
                     <div className="flex gap-8 group">
                        <div className="w-16 h-16 bg-merpara-coral rounded-2xl flex items-center justify-center text-white shadow-xl shadow-merpara-coral/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                           <Gem size={28} />
                        </div>
                        <div>
                           <h4 className="font-bold text-2xl mb-3 text-merpara-coral tracking-tight">Transparent Service Fee</h4>
                           <p className="text-gray-600 leading-relaxed font-medium italic">Flat Operations Fee.</p>
                           <p className="text-gray-500 leading-relaxed">A clear, upfront fee covering design, prototyping, and supply chain management. No surprises.</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="relative pt-12 group">
                  {/* VIP Style Card */}
                  <div className="bg-gradient-to-br from-white to-gray-50 p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] relative z-10 rounded-[40px] border border-white/60">
                      <div className="inline-block px-4 py-1.5 bg-merpara-orange/10 text-merpara-orange rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">Exclusive Benefits</div>
                      <h3 className="text-4xl font-serif font-black mb-10 text-merpara-dark tracking-tighter leading-tight">Why Creators Choose Us</h3>
                      <ul className="space-y-8">
                         {[
                             { icon: <X className="text-red-500" size={20} />, text: 'No Revenue Share' },
                             { icon: <Check className="text-green-500" size={20} />, text: '100% Brand Ownership' },
                             { icon: <TrendingDown className="text-merpara-blue" size={20} />, text: 'Low Risk (Low MOQs)' },
                             { icon: <Search className="text-merpara-purple" size={20} />, text: 'Real-Time Visibility' }
                         ].map((item, i) => (
                            <li key={i} className="flex items-center gap-5 text-merpara-dark text-xl font-bold tracking-tight">
                               <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-50">
                                  {item.icon}
                               </div>
                               {item.text}
                            </li>
                         ))}
                      </ul>
                      <div className="mt-16 pt-10 border-t border-gray-100">
                         <p className="font-serif italic text-2xl text-merpara-dark/40 leading-tight">"Build an asset, <br/>not just a merch line."</p>
                      </div>
                  </div>
                  {/* Decorative float element */}
                  <div className="absolute top-0 right-0 w-full h-full border-2 border-merpara-orange/20 transform translate-x-6 -translate-y-6 -z-0 rounded-[40px] group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700" />
               </div>
            </div>
         </div>
      </section>

      {/* Team Section Filtered for Fashion */}
      <TeamSection filter="fashion" />
      
    </div>
  );
};
