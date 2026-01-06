import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Youtube, Facebook } from 'lucide-react';
import { PageView, SectionID } from '../types';

interface LandingPageProps {
  setPage: (page: PageView) => void;
  scrollToSection: (id: SectionID) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ setPage, scrollToSection }) => {
  
  // Tag cloud data - Updated
  const tags = [
    { label: 'Creator sourcing', color: 'bg-merpara-coral/10 text-merpara-coral' },
    { label: 'Creator outreach', color: 'bg-merpara-blue/10 text-merpara-blue' },
    { label: 'Brief & creative direction', color: 'bg-merpara-purple/10 text-merpara-purple' },
    { label: 'Content review', color: 'bg-merpara-orange/10 text-merpara-orange' },
    { label: 'Usage & whitelisting', color: 'bg-green-100 text-green-700' },
    { label: 'Creator contracting', color: 'bg-gray-100 text-gray-700' },
    { label: 'Creator payments', color: 'bg-merpara-coral/10 text-merpara-coral' },
    { label: 'Live campaign reporting', color: 'bg-merpara-blue/10 text-merpara-blue' },
    { label: 'Post-campaign analysis', color: 'bg-merpara-purple/10 text-merpara-purple' },
    { label: 'Product seeding', color: 'bg-merpara-orange/10 text-merpara-orange' },
    { label: 'Sampling & QC', color: 'bg-green-100 text-green-700' },
    { label: 'Manufacturing', color: 'bg-gray-100 text-gray-700' },
    { label: 'Global logistics', color: 'bg-merpara-coral/10 text-merpara-coral' },
    { label: 'Brand incubation', color: 'bg-merpara-blue/10 text-merpara-blue' },
  ];

  // Global Social Partners Data with Custom SVGs for accuracy (TikTok, X)
  const socialPartners = [
    { name: 'YouTube', icon: <Youtube size={20} /> },
    { name: 'Instagram', icon: <Instagram size={20} /> },
    { name: 'Facebook', icon: <Facebook size={20} /> },
    { 
      name: 'TikTok', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-[20px] h-[20px]" fill="currentColor">
          <path d="M12.525.02c1.31 0 2.59.32 3.72.93a6.83 6.83 0 0 1 2.38 2.22 8.35 8.35 0 0 1 .98 2.8c.03.18.04.35.04.53v2.88c-.62-.2-1.23-.48-1.82-.84a8.1 8.1 0 0 1-2.07-1.82c-.44-.52-.8-1.1-1.07-1.73v10.51a6.52 6.52 0 0 1-1.06 3.6 6.64 6.64 0 0 1-6.64 3.04 6.64 6.64 0 0 1-5.18-5.18 6.64 6.64 0 0 1 3.04-6.64c.55-.33 1.15-.56 1.78-.69v2.1c-.34.07-.67.19-.97.37a4.52 4.52 0 1 0 5.8 6.4c.18-.3.3-.63.37-.97V0h1.93z"/>
        </svg>
      )
    },
    { 
      name: 'X', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.489h2.04L6.476 2.857h-2.18l13.313 17.785z"/>
        </svg>
      )
    },
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
              className="text-6xl lg:text-7xl font-serif font-black text-merpara-dark leading-[1.1] mb-8"
            >
              Bridging Markets, <br/> Empowering Growth
            </motion.h1>
            
            <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed">
              Founded in Shenzhen and headquartered in the Greater Bay Area, Merpara is a global team with over a decade of expertise in cross-border commerce and influencer marketing. We bridge East and West by combining China’s agile supply chain with deep local market insights in the US and Latin America. Whether driving ROI for established brands or incubating new influencer labels, we are your transparent, long-term strategic partner dedicated to measurable success.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
               <button 
                 onClick={() => scrollToSection(SectionID.CONTACT)}
                 className="group flex items-center gap-2 bg-merpara-coral text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-merpara-dark hover:shadow-lg shadow-merpara-coral/25"
               >
                 Get in touch
                 <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
               </button>
               <button 
                 onClick={() => window.location.href='mailto:jenny@merpara.com'}
                 className="flex items-center gap-2 bg-gray-100 text-merpara-dark px-8 py-4 rounded-full font-bold transition-all hover:bg-gray-200"
               >
                 Join Creator Pool
               </button>
            </div>

            <p className="text-sm text-gray-400 font-medium mb-4 uppercase tracking-wider">Global Partners of</p>
            <div className="flex flex-wrap gap-4">
               {socialPartners.map((platform, i) => (
                 <div 
                   key={i} 
                   title={platform.name}
                   className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-merpara-coral hover:text-white transition-all duration-300 cursor-default"
                 >
                    {platform.icon}
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
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" alt="Creator Fashion" />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold text-merpara-dark">#FashionSupply</div>
             </motion.div>
             <motion.div 
               initial={{ y: 40, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="relative rounded-[40px] overflow-hidden mb-12 shadow-2xl"
             >
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" alt="ROI Dashboard" />
                 <div className="absolute top-6 right-6 bg-merpara-coral text-white px-4 py-2 rounded-xl text-xs font-bold">ROI Driven</div>
             </motion.div>
          </div>

        </div>
      </section>

      {/* 2. LOGO STRIP */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/50">
         <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 text-gray-500 opacity-80">
            <span className="text-xs font-bold uppercase tracking-widest mr-4">We've worked with:</span>
            <span className="font-sans text-xl font-bold tracking-tight">ZAFUL</span>
            <span className="font-serif text-xl font-bold italic">dresslily</span>
            <span className="font-sans text-xl font-extrabold">Ulike</span>
            <span className="font-sans text-xl font-bold tracking-widest">TORRAS</span>
            <span className="font-serif text-xl font-medium">Soneven</span>
            <span className="font-sans text-xl font-bold">INIA</span>
         </div>
      </section>

      {/* 3. MISSION STATEMENT + CARDS */}
      <section className="py-24 container mx-auto px-6">
         <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-merpara-dark mb-6 leading-tight">
                From concept to conversion, we build <span className="text-merpara-coral font-bold">creator-led growth</span> across the funnel.
            </h2>
            <p className="text-xl text-gray-500 font-light">
                Merpara connects creators, performance strategy, and a world-class Made-in-China supply chain to help brands and creator-led businesses scale—efficiently, transparently, and with measurable ROI.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
                onClick={() => setPage(PageView.FASHION)}
                className="bg-gray-50 rounded-[40px] p-10 hover:bg-gray-100 transition-colors cursor-pointer group border border-transparent hover:border-gray-200"
            >
               <div className="w-12 h-12 rounded-2xl bg-merpara-coral/10 text-merpara-coral flex items-center justify-center mb-6 group-hover:bg-merpara-coral group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.4a1.6 1.6 0 0 0-1.6-1.6H5.22a1.6 1.6 0 0 0-1.6 1.6A1.6 1.6 0 0 0 2 5v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a1.6 1.6 0 0 0-1.62-1.6z"/><path d="M8 10a2 2 0 0 1-.26-3.96 2 2 0 0 1 3.26-1.87 2 2 0 0 1 2.22 3.82"/></svg>
               </div>
               <h3 className="text-2xl font-bold mb-4 font-serif">Supply Chain</h3>
               <p className="text-gray-500 leading-relaxed text-sm">
                  Turn ideas into real products with a turnkey fashion supply chain—design support, sampling, manufacturing, QC, and global logistics, all coordinated by Merpara.
               </p>
            </div>

            <div 
                onClick={() => setPage(PageView.MARKETING)}
                className="bg-gray-50 rounded-[40px] p-10 hover:bg-gray-100 transition-colors cursor-pointer group border border-transparent hover:border-gray-200"
            >
               <div className="w-12 h-12 rounded-2xl bg-merpara-purple/10 text-merpara-purple flex items-center justify-center mb-6 group-hover:bg-merpara-purple group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>
               </div>
               <h3 className="text-2xl font-bold mb-4 font-serif">Influencer Marketing</h3>
               <p className="text-gray-500 leading-relaxed text-sm">
                  ROI-driven creator campaigns powered by data, advanced tools, and local market insight—from creator sourcing and briefing to execution, reporting, and optimization.
               </p>
            </div>

            <div className="bg-gray-50 rounded-[40px] p-10 hover:bg-gray-100 transition-colors cursor-pointer group border border-transparent hover:border-gray-200">
               <div className="w-12 h-12 rounded-2xl bg-merpara-blue/10 text-merpara-blue flex items-center justify-center mb-6 group-hover:bg-merpara-blue group-hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
               </div>
               <h3 className="text-2xl font-bold mb-4 font-serif">Commerce</h3>
               <p className="text-gray-500 leading-relaxed text-sm">
                  Conversion-first systems that connect content to sales—trackable links, promo codes, performance dashboards, and iterative improvement for scalable growth.
               </p>
            </div>
         </div>
      </section>

      {/* 5. TAG CLOUD / BESPOKE SOLUTIONS */}
      <section className="py-24 bg-[#fff1f0] overflow-hidden">
         <div className="container mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-merpara-dark mb-6">Bespoke creator-led solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
               A modular suite of creator-first capabilities—designed to move faster, stay transparent, and deliver measurable outcomes.
            </p>
         </div>

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
         
         <style>{`
            .animate-marquee { animation: marquee 35s linear infinite; }
            .animate-marquee2 { animation: marquee2 35s linear infinite; }
            
            @keyframes marquee {
               0% { transform: translateX(0%); }
               100% { transform: translateX(-100%); }
            }
            @keyframes marquee2 {
               0% { transform: translateX(100%); }
               100% { transform: translateX(0%); }
            }
         `}</style>
      </section>

      {/* 6. WHERE STRATEGY MEETS EXECUTION (Interactive Widget) */}
      <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                 <h2 className="text-5xl md:text-6xl font-serif font-medium mb-6 text-merpara-dark">Where strategy meets execution</h2>
                 <p className="text-gray-500 text-lg">A global team across the U.S., China, and Latin America—built for fast execution, clear communication, and performance you can track.</p>
              </div>

              <div className="bg-gray-100 rounded-[50px] p-4 lg:p-12 flex flex-col lg:flex-row overflow-hidden relative border border-gray-200">
                  <div className="flex-1 relative rounded-[40px] overflow-hidden h-[500px] shadow-xl bg-white border border-gray-100 group">
                      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" alt="Campaign Reporting" />
                      
                      <div className="absolute top-6 right-6 bg-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-sm text-merpara-dark">
                         <div className="w-2 h-2 rounded-full bg-merpara-coral animate-pulse" /> Live Campaign
                      </div>
                      
                      <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-3">
                         <div className="bg-white/95 backdrop-blur px-6 py-4 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Total Revenue</p>
                                <p className="text-2xl font-black text-merpara-dark">$2,450,000</p>
                            </div>
                            <div className="h-10 w-24 bg-green-50 rounded-lg flex items-center justify-center text-green-600 font-bold text-sm">+128%</div>
                         </div>
                      </div>
                  </div>

                  <div className="w-full lg:w-48 flex lg:flex-col gap-2 mt-4 lg:mt-0 lg:ml-4">
                      <div className="flex-1 bg-white border border-gray-200 rounded-3xl flex items-center justify-center cursor-pointer hover:bg-[#f2994a] hover:text-white hover:border-[#f2994a] transition-all duration-300 relative group overflow-hidden py-4 lg:py-0" onClick={() => setPage(PageView.FASHION)}>
                         <span className="lg:-rotate-90 font-bold text-lg whitespace-nowrap">Supply Chain</span>
                      </div>
                      <div className="flex-1 bg-white border border-gray-200 rounded-3xl flex items-center justify-center cursor-pointer hover:bg-merpara-purple hover:text-white hover:border-merpara-purple transition-all duration-300 relative group overflow-hidden py-4 lg:py-0" onClick={() => setPage(PageView.MARKETING)}>
                         <span className="lg:-rotate-90 font-bold text-lg whitespace-nowrap">Marketing</span>
                      </div>
                      <div className="flex-1 bg-white border border-gray-200 rounded-3xl flex items-center justify-center cursor-pointer hover:bg-merpara-blue hover:text-white hover:border-merpara-blue transition-all duration-300 relative group overflow-hidden py-4 lg:py-0" onClick={() => scrollToSection(SectionID.TEAM)}>
                         <span className="lg:-rotate-90 font-bold text-lg whitespace-nowrap">Partnerships</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 7. PRE-FOOTER */}
      <section className="py-24 text-center container mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-merpara-blue/10 text-merpara-blue px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
             BUILT FOR CREATOR-LED GROWTH
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-merpara-dark mb-6 max-w-4xl mx-auto">
             A global partner built for measurable results
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
             We understand what it takes to earn attention—and turn it into real business. From creator collaboration to supply chain execution, Merpara is your long-term partner for sustainable growth.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-merpara-dark text-sm font-bold uppercase tracking-widest">
             <span className="text-gray-400">Operating across:</span>
             <span className="bg-gray-100 px-4 py-2 rounded-full">The U.S.</span> 
             <span className="bg-gray-100 px-4 py-2 rounded-full">China</span>
             <span className="bg-gray-100 px-4 py-2 rounded-full">Latin America</span>
          </div>
      </section>

    </div>
  );
};