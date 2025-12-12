import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Instagram, Youtube, Twitter, Facebook } from 'lucide-react';
import { PageView, SectionID } from '../types';
import { Button } from './Button';

interface LandingPageProps {
  setPage: (page: PageView) => void;
  scrollToSection: (id: SectionID) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ setPage, scrollToSection }) => {
  
  // Tag cloud data
  const tags = [
    { label: 'Creator affiliate', color: 'bg-merpara-coral/20 text-merpara-coral' },
    { label: 'End-to-end supply chain', color: 'bg-merpara-blue/20 text-merpara-blue' },
    { label: 'Fashion design', color: 'bg-merpara-purple/20 text-merpara-purple' },
    { label: 'Creator shortlisting', color: 'bg-merpara-orange/20 text-merpara-orange' },
    { label: 'Global logistics', color: 'bg-green-100 text-green-700' },
    { label: 'Creator payments', color: 'bg-red-100 text-red-600' },
    { label: 'Live campaign reporting', color: 'bg-merpara-blue/20 text-merpara-blue' },
    { label: 'Content feedback', color: 'bg-merpara-purple/20 text-merpara-purple' },
  ];

  return (
    <div className="w-full bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-6xl lg:text-8xl font-serif font-black text-merpara-dark leading-[0.95] mb-8"
            >
              We build <br/> brands
            </motion.h1>
            
            <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed max-w-lg">
              Founded by creators, we are a global incubation platform connecting East & West — built for creative, manufacturing & commerce.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
               <button 
                 onClick={() => scrollToSection(SectionID.CONTACT)}
                 className="group flex items-center gap-2 bg-merpara-coral text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-merpara-dark hover:shadow-lg"
               >
                 Get in touch
                 <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
               </button>
            </div>

            <p className="text-sm text-gray-400 font-medium mb-4">Supported Platforms</p>
            <div className="flex gap-3">
               {[Instagram, Youtube, Twitter, Facebook].map((Icon, i) => (
                 <div key={i} className="w-10 h-10 rounded-full bg-merpara-coral/10 flex items-center justify-center text-merpara-coral hover:bg-merpara-coral hover:text-white transition-colors cursor-default">
                    <Icon size={18} />
                 </div>
               ))}
            </div>
          </div>

          {/* Right Images - Grid Layout */}
          <div className="grid grid-cols-2 gap-4 h-[600px]">
             <motion.div 
               initial={{ y: 40, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="relative rounded-[40px] overflow-hidden mt-12 shadow-2xl"
             >
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" alt="Fashion" />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold text-merpara-dark">#FashionSupply</div>
             </motion.div>
             <motion.div 
               initial={{ y: 40, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="relative rounded-[40px] overflow-hidden mb-12 shadow-2xl"
             >
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" alt="Marketing" />
                 <div className="absolute top-6 right-6 bg-merpara-coral text-white px-4 py-2 rounded-xl text-xs font-bold">ROI Driven</div>
             </motion.div>
          </div>

        </div>
      </section>

      {/* 2. LOGO STRIP */}
      <section className="py-12 border-y border-gray-100">
         <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 text-gray-400 grayscale opacity-60">
            <span className="text-sm font-bold uppercase tracking-widest mr-4">We've worked with:</span>
            {/* Simple Text Logos for Demo Purposes - ideally SVGs */}
            <span className="font-serif text-2xl font-bold">VOGUE</span>
            <span className="font-sans text-2xl font-black">SHEIN</span>
            <span className="font-serif text-2xl font-bold italic">Revolve</span>
            <span className="font-sans text-2xl font-bold">PopMart</span>
            <span className="font-sans text-2xl font-bold tracking-tighter">TikTok</span>
         </div>
      </section>

      {/* 3. MISSION STATEMENT */}
      <section className="py-32 container mx-auto px-6 text-center">
         <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-merpara-dark max-w-5xl mx-auto leading-tight">
            From <span className="text-merpara-coral font-bold">concept</span> to <span className="text-merpara-blue font-bold">content</span>, we put creators at the heart of creativity, manufacturing, and commerce to drive performance across the funnel.
         </h2>
      </section>

      {/* 4. SERVICE CARDS */}
      <section className="pb-32 container mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div 
                onClick={() => setPage(PageView.FASHION)}
                className="bg-gray-50 rounded-[40px] p-10 hover:bg-gray-100 transition-colors cursor-pointer group"
            >
               <div className="w-12 h-12 rounded-2xl bg-merpara-coral/10 text-merpara-coral flex items-center justify-center mb-6 group-hover:bg-merpara-coral group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.4a1.6 1.6 0 0 0-1.6-1.6H5.22a1.6 1.6 0 0 0-1.6 1.6A1.6 1.6 0 0 0 2 5v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a1.6 1.6 0 0 0-1.62-1.6z"/><path d="M8 10a2 2 0 0 1-.26-3.96 2 2 0 0 1 3.26-1.87 2 2 0 0 1 2.22 3.82"/></svg>
               </div>
               <h3 className="text-2xl font-bold mb-4 font-serif">Supply Chain</h3>
               <p className="text-gray-500 leading-relaxed">
                  We craft collections that move culture. Boutique manufacturing delivers <span className="text-merpara-dark font-bold">premium quality</span> with low MOQs vs. standard factories.
               </p>
            </div>

            {/* Card 2 */}
            <div 
                onClick={() => setPage(PageView.MARKETING)}
                className="bg-gray-50 rounded-[40px] p-10 hover:bg-gray-100 transition-colors cursor-pointer group"
            >
               <div className="w-12 h-12 rounded-2xl bg-merpara-purple/10 text-merpara-purple flex items-center justify-center mb-6 group-hover:bg-merpara-purple group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>
               </div>
               <h3 className="text-2xl font-bold mb-4 font-serif">Marketing</h3>
               <p className="text-gray-500 leading-relaxed">
                  We orchestrate precision amplification. Creator content is <span className="text-merpara-dark font-bold">80% more efficient</span> at driving clicks than search ads.
               </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-[40px] p-10 hover:bg-gray-100 transition-colors cursor-pointer group">
               <div className="w-12 h-12 rounded-2xl bg-merpara-blue/10 text-merpara-blue flex items-center justify-center mb-6 group-hover:bg-merpara-blue group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
               </div>
               <h3 className="text-2xl font-bold mb-4 font-serif">Commerce</h3>
               <p className="text-gray-500 leading-relaxed">
                  We turn creator trust into measurable conversion. Creator-led content drives <span className="text-merpara-dark font-bold">3.3x higher ROI</span> compared to digital ads.
               </p>
            </div>

         </div>
      </section>

      {/* 5. TAG CLOUD / BESPOKE SOLUTIONS */}
      <section className="py-32 bg-[#fff1f0] overflow-hidden">
         <div className="container mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-merpara-dark mb-6">Bespoke creator-led solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
               Elevating the impact of creator marketing through our suite of creator-first solutions – all powered by partnerships, technology, and instinct.
            </p>
         </div>

         {/* Marquee Effect for Tags */}
         <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap py-4 flex gap-4">
               {[...tags, ...tags, ...tags].map((tag, i) => (
                  <span key={i} className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm ${tag.color}`}>
                     {tag.label}
                  </span>
               ))}
            </div>
             <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-4 flex gap-4">
               {[...tags, ...tags, ...tags].map((tag, i) => (
                  <span key={i} className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm ${tag.color}`}>
                     {tag.label}
                  </span>
               ))}
            </div>
         </div>
         
         {/* Second row reverse */}
         <div className="relative flex overflow-x-hidden mt-6">
            <div className="animate-marquee-reverse whitespace-nowrap py-4 flex gap-4">
               {[...tags.reverse(), ...tags, ...tags].map((tag, i) => (
                  <span key={i} className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm ${tag.color}`}>
                     {tag.label}
                  </span>
               ))}
            </div>
         </div>

         <style>{`
            .animate-marquee { animation: marquee 25s linear infinite; }
            .animate-marquee2 { animation: marquee2 25s linear infinite; }
            .animate-marquee-reverse { animation: marquee-reverse 25s linear infinite; }
            
            @keyframes marquee {
               0% { transform: translateX(0%); }
               100% { transform: translateX(-100%); }
            }
            @keyframes marquee2 {
               0% { transform: translateX(100%); }
               100% { transform: translateX(0%); }
            }
             @keyframes marquee-reverse {
               0% { transform: translateX(-100%); }
               100% { transform: translateX(0%); }
            }
         `}</style>
      </section>

      {/* 6. SCALE MEETS SUBSTANCE (Interactive Widget) */}
      <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                 <h2 className="text-5xl md:text-6xl font-serif font-medium mb-6">Where scale meets substance</h2>
                 <p className="text-gray-500">6,000+ campaigns delivered. 90,000+ creators contracted.</p>
              </div>

              <div className="bg-gray-100 rounded-[50px] p-4 lg:p-12 flex flex-col lg:flex-row overflow-hidden relative">
                  {/* Main Visual */}
                  <div className="flex-1 relative rounded-[40px] overflow-hidden h-[500px] shadow-xl">
                      <img src="https://images.unsplash.com/photo-1576185850227-1f72b7f814dd?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Campaign" />
                      <div className="absolute top-6 right-6 bg-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-merpara-coral animate-pulse" /> Live Campaign
                      </div>
                      
                      <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                         <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold border border-gray-200">
                            $2M+ Generated in earned talent value
                         </div>
                         <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold border border-gray-200">
                             37M Views driven
                         </div>
                      </div>
                  </div>

                  {/* Sidebar Tabs */}
                  <div className="w-full lg:w-32 flex lg:flex-col gap-2 mt-4 lg:mt-0 lg:ml-4">
                      <div className="flex-1 bg-[#ccff00] rounded-3xl flex items-center justify-center cursor-pointer hover:flex-[2] transition-all duration-300 relative group overflow-hidden" onClick={() => setPage(PageView.FASHION)}>
                         <span className="lg:-rotate-90 font-bold text-xl text-merpara-dark whitespace-nowrap">Fashion Supply</span>
                         <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors" />
                      </div>
                      <div className="flex-1 bg-merpara-blue rounded-3xl flex items-center justify-center cursor-pointer hover:flex-[2] transition-all duration-300 relative group overflow-hidden" onClick={() => setPage(PageView.MARKETING)}>
                         <span className="lg:-rotate-90 font-bold text-xl text-white whitespace-nowrap">Marketing</span>
                         <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors" />
                      </div>
                      <div className="flex-1 bg-merpara-coral rounded-3xl flex items-center justify-center cursor-pointer hover:flex-[2] transition-all duration-300 relative group overflow-hidden" onClick={() => scrollToSection(SectionID.TEAM)}>
                         <span className="lg:-rotate-90 font-bold text-xl text-white whitespace-nowrap">Our Team</span>
                         <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors" />
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 7. PRE-FOOTER */}
      <section className="py-20 text-center container mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
             Number 1 for recall & memory
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-merpara-dark mb-6 max-w-3xl mx-auto">
             The world's largest independent creator marketing specialist.
          </h2>
          <p className="text-gray-500 mb-12">We know the hustle, ingenuity, and creativity it takes to earn attention.</p>
          
          <div className="flex items-center justify-center gap-2 text-merpara-coral text-sm font-bold uppercase tracking-widest">
             Operating in <span className="border border-merpara-coral px-3 py-1 rounded-full">Los Angeles</span> <span className="border border-merpara-coral px-3 py-1 rounded-full">Guangzhou</span>
          </div>
      </section>

    </div>
  );
};