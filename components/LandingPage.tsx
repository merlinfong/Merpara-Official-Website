import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Youtube, Facebook, Play } from 'lucide-react';
import { PageView, SectionID } from '../types';

interface LandingPageProps {
  setPage: (page: PageView) => void;
  scrollToSection: (id: SectionID) => void;
}

interface SocialPost {
  id: string;
  type: 'tiktok' | 'instagram';
  handle: string;
  image: string;
  url: string;
  tag?: string;
}

const posts: SocialPost[] = [
  { id: '1', type: 'tiktok', handle: '@elenashinohara', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop', url: 'https://www.tiktok.com/@elenashinohara/video/7439067299291598123', tag: '#Performance' },
  { id: '2', type: 'tiktok', handle: '@tlynncarpenter', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop', url: 'https://www.tiktok.com/@tlynncarpenter/video/7439410495234362654', tag: '#FashionSupply' },
  { id: '3', type: 'tiktok', handle: '@cassidy_malsch', image: 'https://images.unsplash.com/photo-1529139513065-07b3b1c590e5?q=80&w=1000&auto=format&fit=crop', url: 'https://www.tiktok.com/@cassidy_malsch/video/7439814593402244395', tag: '#ROI' },
  { id: '4', type: 'tiktok', handle: '@alexbravoxo', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop', url: 'https://www.tiktok.com/@alexbravoxo/video/7449568738770292011', tag: '#Global' },
  { id: '5', type: 'instagram', handle: '@merpara_global', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop', url: 'https://www.instagram.com/reel/DMItnmcx4iI/', tag: '#Incubation' },
  { id: '6', type: 'instagram', handle: '@merpara_global', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop', url: 'https://www.instagram.com/reel/DJu8UzIMSY_/', tag: '#Logistics' },
  { id: '7', type: 'instagram', handle: '@merpara_global', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop', url: 'https://www.instagram.com/p/DMDmEHdvpFE/', tag: '#Analytics' },
];

// Added React.FC type to handle standard props like 'key' correctly in TypeScript
const PostCard: React.FC<{ post: SocialPost }> = ({ post }) => (
  <div className="relative group rounded-[40px] overflow-hidden aspect-[9/14] mb-4 bg-gray-200 shadow-xl cursor-pointer">
    <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={post.handle} />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
    
    <div className="absolute top-6 left-6 flex items-center gap-2">
      <div className="bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-sm">
        {post.type === 'tiktok' ? (
          <svg viewBox="0 0 512 512" className="w-4 h-4 text-black fill-current">
            <path d="M 386.160156 141.550781 C 383.457031 140.15625 380.832031 138.625 378.285156 136.964844 C 370.878906 132.070312 364.085938 126.300781 358.058594 119.785156 C 342.976562 102.523438 337.339844 85.015625 335.265625 72.757812 L 335.351562 72.757812 C 333.617188 62.582031 334.332031 56 334.441406 56 L 265.742188 56 L 265.742188 321.648438 C 265.742188 325.214844 265.742188 328.742188 265.589844 332.226562 C 265.589844 332.660156 265.550781 333.058594 265.523438 333.523438 C 265.523438 333.714844 265.523438 333.917969 265.484375 334.117188 C 265.484375 334.167969 265.484375 334.214844 265.484375 334.265625 C 264.011719 353.621094 253.011719 370.976562 236.132812 380.566406 C 227.472656 385.496094 217.675781 388.078125 207.707031 388.066406 C 175.699219 388.066406 149.757812 361.964844 149.757812 329.734375 C 149.757812 297.5 175.699219 271.398438 207.707031 271.398438 C 213.765625 271.394531 219.789062 272.347656 225.550781 274.226562 L 225.632812 204.273438 C 190.277344 199.707031 154.621094 210.136719 127.300781 233.042969 C 115.457031 243.328125 105.503906 255.605469 97.882812 269.316406 C 94.984375 274.316406 84.042969 294.410156 82.714844 327.015625 C 81.882812 345.523438 87.441406 364.699219 90.089844 372.625 L 90.089844 372.792969 C 91.757812 377.457031 98.214844 393.382812 108.742188 406.808594 C 117.230469 417.578125 127.253906 427.035156 138.5 434.882812 L 138.5 434.714844 L 138.667969 434.882812 C 171.925781 457.484375 208.800781 456 208.800781 456 C 215.183594 455.742188 236.566406 456 260.851562 444.492188 C 287.785156 431.734375 303.117188 412.726562 303.117188 412.726562 C 312.914062 401.367188 320.703125 388.425781 326.148438 374.449219 C 332.367188 358.109375 334.441406 338.507812 334.441406 330.675781 L 334.441406 189.742188 C 335.273438 190.242188 346.375 197.582031 346.375 197.582031 C 346.375 197.582031 362.367188 207.832031 387.316406 214.507812 C 405.214844 219.257812 429.332031 220.257812 429.332031 220.257812 L 429.332031 152.058594 C 420.882812 152.976562 403.726562 150.308594 386.160156 141.550781 Z M 386.160156 141.550781" />
          </svg>
        ) : (
          <Instagram size={16} className="text-black" />
        )}
      </div>
      {post.tag && (
        <span className="bg-merpara-coral/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
          {post.tag}
        </span>
      )}
    </div>

    <div className="absolute bottom-6 left-6 right-6">
      <p className="text-white font-bold text-sm mb-1">{post.handle}</p>
      <div className="flex items-center gap-2 text-white/70 text-xs">
        <Play size={12} fill="white" /> View Performance
      </div>
    </div>
  </div>
);

// Added React.FC type for consistency
const ScrollingColumn: React.FC<{ postsList: SocialPost[], reverse?: boolean }> = ({ postsList, reverse = false }) => {
  return (
    <div className="relative h-[700px] overflow-hidden">
      <motion.div 
        animate={{ y: reverse ? [0, -1000] : [-1000, 0] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex flex-col gap-4"
      >
        {[...postsList, ...postsList, ...postsList].map((post, i) => (
          <PostCard key={`${post.id}-${i}`} post={post} />
        ))}
      </motion.div>
    </div>
  );
};

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

  // Global Social Partners Data
  const socialPartners = [
    { name: 'YouTube', icon: <Youtube size={20} /> },
    { name: 'Instagram', icon: <Instagram size={20} /> },
    { name: 'Facebook', icon: <Facebook size={20} /> },
    { 
      name: 'TikTok', 
      icon: (
        <svg viewBox="0 0 512 512" className="w-[20px] h-[20px]" fill="currentColor">
          <path d="M 386.160156 141.550781 C 383.457031 140.15625 380.832031 138.625 378.285156 136.964844 C 370.878906 132.070312 364.085938 126.300781 358.058594 119.785156 C 342.976562 102.523438 337.339844 85.015625 335.265625 72.757812 L 335.351562 72.757812 C 333.617188 62.582031 334.332031 56 334.441406 56 L 265.742188 56 L 265.742188 321.648438 C 265.742188 325.214844 265.742188 328.742188 265.589844 332.226562 C 265.589844 332.660156 265.550781 333.058594 265.523438 333.523438 C 265.523438 333.714844 265.523438 333.917969 265.484375 334.117188 C 265.484375 334.167969 265.484375 334.214844 265.484375 334.265625 C 264.011719 353.621094 253.011719 370.976562 236.132812 380.566406 C 227.472656 385.496094 217.675781 388.078125 207.707031 388.066406 C 175.699219 388.066406 149.757812 361.964844 149.757812 329.734375 C 149.757812 297.5 175.699219 271.398438 207.707031 271.398438 C 213.765625 271.394531 219.789062 272.347656 225.550781 274.226562 L 225.632812 204.273438 C 190.277344 199.707031 154.621094 210.136719 127.300781 233.042969 C 115.457031 243.328125 105.503906 255.605469 97.882812 269.316406 C 94.984375 274.316406 84.042969 294.410156 82.714844 327.015625 C 81.882812 345.523438 87.441406 364.699219 90.089844 372.625 L 90.089844 372.792969 C 91.757812 377.457031 98.214844 393.382812 108.742188 406.808594 C 117.230469 417.578125 127.253906 427.035156 138.5 434.882812 L 138.5 434.714844 L 138.667969 434.882812 C 171.925781 457.484375 208.800781 456 208.800781 456 C 215.183594 455.742188 236.566406 456 260.851562 444.492188 C 287.785156 431.734375 303.117188 412.726562 303.117188 412.726562 C 312.914062 401.367188 320.703125 388.425781 326.148438 374.449219 C 332.367188 358.109375 334.441406 338.507812 334.441406 330.675781 L 334.441406 189.742188 C 335.273438 190.242188 346.375 197.582031 346.375 197.582031 C 346.375 197.582031 362.367188 207.832031 387.316406 214.507812 C 405.214844 219.257812 429.332031 220.257812 429.332031 220.257812 L 429.332031 152.058594 C 420.882812 152.976562 403.726562 150.308594 386.160156 141.550781 Z M 386.160156 141.550781" />
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

          {/* Right Content - Vertically Scrolling Social Wall */}
          <div className="grid grid-cols-2 gap-4 h-[700px] relative overflow-hidden mask-fade-edges">
            <div className="pt-20">
              <ScrollingColumn postsList={posts.slice(0, 4)} />
            </div>
            <div>
              <ScrollingColumn postsList={posts.slice(3, 7)} reverse />
            </div>
            
            {/* Visual fade effect for smooth scroll appearance */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
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
