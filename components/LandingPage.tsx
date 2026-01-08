import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Youtube, Facebook } from 'lucide-react';
import { PageView, SectionID } from '../types';

interface LandingPageProps {
  setPage: (page: PageView) => void;
  scrollToSection: (id: SectionID) => void;
}

interface SocialPost {
  id: string;
  type: 'tiktok' | 'instagram';
  handle: string;
  videoUrl: string; // GitHub Raw URL: https://raw.githubusercontent.com/[USER]/[REPO]/main/videos/file.mp4
  url: string;
}

// Data with your specific creators
// To use your GitHub videos: replace the videoUrl with your raw.githubusercontent.com links
const posts: SocialPost[] = [
  { 
    id: '1', 
    type: 'tiktok', 
    handle: '@elenashinohara', 
    videoUrl: 'https://raw.githubusercontent.com/merlinfong/Merpara-Official-Website/main/videos/@elenashinohara.mp4', 
    url: 'https://www.tiktok.com/@elenashinohara/video/7439067299291598123'
  },
  { 
    id: '2', 
    type: 'tiktok', 
    handle: '@tlynncarpenter', 
    videoUrl: 'https://raw.githubusercontent.com/merlinfong/Merpara-Official-Website/main/videos/@tlynncarpenter.mp4',
    url: 'https://www.tiktok.com/@tlynncarpenter/video/7439410495234362654'
  },
  { 
    id: '3', 
    type: 'tiktok', 
    handle: '@cassidy_malsch', 
    videoUrl: 'https://raw.githubusercontent.com/merlinfong/Merpara-Official-Website/main/videos/@cassidy_malsch.mp4',
    url: 'https://www.tiktok.com/@cassidy_malsch/video/7439814593402244395'
  },
  { 
    id: '4', 
    type: 'tiktok', 
    handle: '@alexbravoxo', 
    videoUrl: 'https://raw.githubusercontent.com/merlinfong/Merpara-Official-Website/main/videos/@alexbravoxo.mp4',
    url: 'https://www.tiktok.com/@alexbravoxo/video/7449568738770292011'
  },
  { 
    id: '5', 
    type: 'instagram', 
    handle: '@angelinagolfs', 
    videoUrl: 'https://raw.githubusercontent.com/merlinfong/Merpara-Official-Website/main/videos/@angelinagolfs.mp4',
    url: 'https://www.instagram.com/reel/DJu8UzIMSY_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  { 
    id: '6', 
    type: 'instagram', 
    handle: '@paigexmackenzie', 
    videoUrl: 'https://raw.githubusercontent.com/merlinfong/Merpara-Official-Website/main/videos/@paigexmackenzie.mp4',
    url: 'https://www.instagram.com/reel/DMItnmcx4iI/?utm_source=ig_web_copy_link&igsh=MWdwa2RuY2pwbnVxZA=='
  },
  { 
    id: '7', 
    type: 'instagram', 
    handle: '@newladygolfer', 
    videoUrl: 'https://raw.githubusercontent.com/merlinfong/Merpara-Official-Website/main/videos/@newladygolfer.mp4',
    url: 'https://www.instagram.com/p/DMDmEHdvpFE/'
  },
  { 
    id: '8', 
    type: 'instagram', 
    handle: '@deck.your.decor', 
    videoUrl: 'https://raw.githubusercontent.com/merlinfong/Merpara-Official-Website/main/videos/@deck.your.decor.mp4',
    url: 'https://www.instagram.com/reel/DQ38BwjERF1/'
  },
];

const PostCard: React.FC<{ post: SocialPost }> = ({ post }) => (
  <a 
    href={post.url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="relative block group rounded-[40px] overflow-hidden aspect-[9/14] mb-10 bg-black shadow-2xl transition-transform active:scale-95"
  >
    <video 
      src={post.videoUrl}
      autoPlay 
      muted 
      loop 
      playsInline
      preload="metadata"
      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale-[0.2] group-hover:grayscale-0"
    />
    
    {/* Deep dynamic gradient for handle legibility */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-700" />
    
    {/* Minimal Platform Icon */}
    <div className="absolute top-6 left-6">
      <div className="bg-white/70 backdrop-blur-2xl p-2.5 rounded-2xl shadow-xl flex items-center justify-center group-hover:bg-merpara-coral group-hover:text-white transition-all duration-500">
        {post.type === 'tiktok' ? (
          <svg viewBox="0 0 512 512" className="w-3.5 h-3.5 fill-current">
            <path d="M 386.160156 141.550781 C 383.457031 140.15625 380.832031 138.625 378.285156 136.964844 C 370.878906 132.070312 364.085938 126.300781 358.058594 119.785156 C 342.976562 102.523438 337.339844 85.015625 335.265625 72.757812 L 335.351562 72.757812 C 333.617188 62.582031 334.332031 56 334.441406 56 L 265.742188 56 L 265.742188 321.648438 C 265.742188 325.214844 265.742188 328.742188 265.589844 332.226562 C 265.589844 332.660156 265.550781 333.058594 265.523438 333.523438 C 265.523438 333.714844 265.523438 333.917969 265.484375 334.117188 C 265.484375 334.167969 265.484375 334.214844 265.484375 334.265625 C 264.011719 353.621094 253.011719 370.976562 236.132812 380.566406 C 227.472656 385.496094 217.675781 388.078125 207.707031 388.066406 C 175.699219 388.066406 149.757812 361.964844 149.757812 329.734375 C 149.757812 297.5 175.699219 271.398438 207.707031 271.398438 C 213.765625 271.394531 219.789062 272.347656 225.550781 274.226562 L 225.632812 204.273438 C 190.277344 199.707031 154.621094 210.136719 127.300781 233.042969 C 115.457031 243.328125 105.503906 255.605469 97.882812 269.316406 C 94.984375 274.316406 84.042969 294.410156 82.714844 327.015625 C 81.882812 345.523438 87.441406 364.699219 90.089844 372.625 L 90.089844 372.792969 C 91.757812 377.457031 98.214844 393.382812 108.742188 406.808594 C 117.230469 417.578125 127.253906 427.035156 138.5 434.882812 L 138.5 434.714844 L 138.667969 434.882812 C 171.925781 457.484375 208.800781 456 208.800781 456 C 215.183594 455.742188 236.566406 456 260.851562 444.492188 C 287.785156 431.734375 303.117188 412.726562 303.117188 412.726562 C 312.914062 401.367188 320.703125 388.425781 326.148438 374.449219 C 332.367188 358.109375 334.441406 338.507812 334.441406 330.675781 L 334.441406 189.742188 C 335.273438 190.242188 346.375 197.582031 346.375 197.582031 C 346.375 197.582031 362.367188 207.832031 387.316406 214.507812 C 405.214844 219.257812 429.332031 220.257812 429.332031 220.257812 L 429.332031 152.058594 C 420.882812 152.976562 403.726562 150.308594 386.160156 141.550781 Z M 386.160156 141.550781" />
          </svg>
        ) : (
          <Instagram size={14} />
        )}
      </div>
    </div>

    {/* Elegant handle - Extra small for a minimalist luxury vibe */}
    <div className="absolute bottom-8 left-8 right-8">
      <p className="text-white font-sans font-medium text-sm tracking-tight opacity-90 group-hover:opacity-100 transition-opacity">
        {post.handle}
      </p>
    </div>
  </a>
);

const ScrollingColumn: React.FC<{ postsList: SocialPost[], reverse?: boolean }> = ({ postsList, reverse = false }) => {
  return (
    <div className="relative h-[950px] overflow-hidden">
      <motion.div 
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ 
          duration: 90, // Extremely slow for ultimate premium feel
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex flex-col"
      >
        {/* Doubling list is enough for seamless looping at -50% translateY */}
        {[...postsList, ...postsList].map((post, i) => (
          <div key={`${post.id}-${i}`} className="px-3">
            <PostCard post={post} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const LandingPage: React.FC<LandingPageProps> = ({ setPage, scrollToSection }) => {
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
      <section className="pt-40 pb-24 px-6 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-7xl lg:text-8xl font-serif font-black text-merpara-dark leading-[1.05] mb-10 tracking-tight"
            >
              Bridging <br/> Markets, <br/> <span className="text-merpara-coral">Empowering</span> <br/> Growth
            </motion.h1>
            
            <p className="text-xl text-gray-500 mb-12 font-light leading-relaxed max-w-xl">
              Founded in Shenzhen and headquartered in the Greater Bay Area, Merpara is a global team with over a decade of expertise in cross-border commerce and influencer marketing. We combine China’s agile supply chain with deep market insights to build measurable success.
            </p>

            <div className="flex flex-wrap gap-5 mb-16">
               <button 
                 onClick={() => scrollToSection(SectionID.CONTACT)}
                 className="group flex items-center gap-3 bg-merpara-coral text-white px-10 py-5 rounded-full font-bold transition-all hover:bg-merpara-dark hover:shadow-2xl shadow-merpara-coral/30"
               >
                 Get in touch
                 <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
               </button>
               <button 
                 onClick={() => window.location.href='mailto:jenny@merpara.com'}
                 className="flex items-center gap-3 bg-gray-50 text-merpara-dark px-10 py-5 rounded-full font-bold border border-gray-100 transition-all hover:bg-gray-100"
               >
                 Join Creator Pool
               </button>
            </div>

            <p className="text-xs text-gray-400 font-bold mb-6 uppercase tracking-[0.3em]">Global Partners of</p>
            <div className="flex flex-wrap gap-5">
               {socialPartners.map((platform, i) => (
                 <div 
                   key={i} 
                   title={platform.name}
                   className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-merpara-coral hover:text-white transition-all duration-500 cursor-default shadow-sm hover:shadow-md"
                 >
                    {platform.icon}
                 </div>
               ))}
            </div>
          </div>

          {/* Right Content - Seamless Vertical Scrolling Wall */}
          <div className="grid grid-cols-2 gap-10 h-[950px] relative overflow-hidden">
            <div className="pt-32">
              <ScrollingColumn postsList={posts.slice(0, 4)} />
            </div>
            <div>
              <ScrollingColumn postsList={posts.slice(4, 8)} reverse />
            </div>
            
            {/* Elegant deep fading masks */}
            <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-white via-white/70 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-white via-white/70 to-transparent z-10 pointer-events-none" />
          </div>

        </div>
      </section>

      {/* 2. LOGO STRIP */}
      <section className="py-16 border-y border-gray-100 bg-gray-50/30">
         <div className="container mx-auto px-6 flex flex-wrap items-center justify-center gap-x-16 gap-y-10 text-gray-400">
            <span className="text-xs font-black uppercase tracking-[0.3em] w-full text-center mb-4 lg:w-auto lg:mb-0 lg:mr-8">Workplace Favorites</span>
            <span className="font-sans text-2xl font-black tracking-tighter hover:text-merpara-dark transition-colors">ZAFUL</span>
            <span className="font-serif text-2xl font-bold italic hover:text-merpara-dark transition-colors">dresslily</span>
            <span className="font-sans text-2xl font-extrabold hover:text-merpara-dark transition-colors">Ulike</span>
            <span className="font-sans text-2xl font-black tracking-widest hover:text-merpara-dark transition-colors">TORRAS</span>
            <span className="font-serif text-2xl font-medium hover:text-merpara-dark transition-colors">Soneven</span>
            <span className="font-sans text-2xl font-bold hover:text-merpara-dark transition-colors">INIA</span>
         </div>
      </section>

      {/* 3. MISSION STATEMENT + CARDS */}
      <section className="py-32 container mx-auto px-6">
         <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-5xl md:text-6xl font-serif font-medium text-merpara-dark mb-8 leading-tight tracking-tight">
                From concept to conversion, we build <span className="text-merpara-coral font-bold italic">creator-led growth</span> across the funnel.
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
                Merpara connects creators, performance strategy, and a world-class Made-in-China supply chain to help brands and creator-led businesses scale—efficiently, transparently, and with measurable ROI.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div 
                onClick={() => setPage(PageView.FASHION)}
                className="bg-gray-50 rounded-[50px] p-12 hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-transparent hover:border-gray-100"
            >
               <div className="w-14 h-14 rounded-2xl bg-merpara-coral/10 text-merpara-coral flex items-center justify-center mb-8 group-hover:bg-merpara-coral group-hover:text-white transition-colors">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.4a1.6 1.6 0 0 0-1.6-1.6H5.22a1.6 1.6 0 0 0-1.6 1.6A1.6 1.6 0 0 0 2 5v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a1.6 1.6 0 0 0-1.62-1.6z"/><path d="M8 10a2 2 0 0 1-.26-3.96 2 2 0 0 1 3.26-1.87 2 2 0 0 1 2.22 3.82"/></svg>
               </div>
               <h3 className="text-3xl font-bold mb-6 font-serif tracking-tight">Supply Chain</h3>
               <p className="text-gray-500 leading-relaxed text-base">
                  Turn ideas into real products with a turnkey fashion supply chain—design support, sampling, manufacturing, QC, and global logistics, all coordinated by Merpara.
               </p>
            </div>

            <div 
                onClick={() => setPage(PageView.MARKETING)}
                className="bg-gray-50 rounded-[50px] p-12 hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-transparent hover:border-gray-100"
            >
               <div className="w-14 h-14 rounded-2xl bg-merpara-purple/10 text-merpara-purple flex items-center justify-center mb-8 group-hover:bg-merpara-purple group-hover:text-white transition-colors">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>
               </div>
               <h3 className="text-3xl font-bold mb-6 font-serif tracking-tight">Marketing</h3>
               <p className="text-gray-500 leading-relaxed text-base">
                  ROI-driven creator campaigns powered by data, advanced tools, and local market insight—from creator sourcing and briefing to execution, reporting, and optimization.
               </p>
            </div>

            <div className="bg-gray-50 rounded-[50px] p-12 hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-transparent hover:border-gray-100">
               <div className="w-14 h-14 rounded-2xl bg-merpara-blue/10 text-merpara-blue flex items-center justify-center mb-8 group-hover:bg-merpara-blue group-hover:text-white transition-colors">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
               </div>
               <h3 className="text-3xl font-bold mb-6 font-serif tracking-tight">Commerce</h3>
               <p className="text-gray-500 leading-relaxed text-base">
                  Conversion-first systems that connect content to sales—trackable links, promo codes, performance dashboards, and iterative improvement for scalable growth.
               </p>
            </div>
         </div>
      </section>

      {/* 5. TAG CLOUD / BESPOKE SOLUTIONS */}
      <section className="py-32 bg-[#fff1f0] overflow-hidden">
         <div className="container mx-auto px-6 text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-merpara-dark mb-8 tracking-tight">Bespoke creator-led solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl font-light">
               A modular suite of creator-first capabilities—designed to move faster, stay transparent, and deliver measurable outcomes.
            </p>
         </div>

         <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap py-6 flex gap-6">
               {[...tags, ...tags, ...tags].map((tag, i) => (
                  <span key={i} className={`inline-flex items-center gap-3 px-8 py-4 rounded-3xl font-bold text-sm shadow-sm ${tag.color}`}>
                     {tag.label}
                  </span>
               ))}
            </div>
             <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-6 flex gap-6">
               {[...tags, ...tags, ...tags].map((tag, i) => (
                  <span key={i} className={`inline-flex items-center gap-3 px-8 py-4 rounded-3xl font-bold text-sm shadow-sm ${tag.color}`}>
                     {tag.label}
                  </span>
               ))}
            </div>
         </div>
         
         <style>{`
            .animate-marquee { animation: marquee 45s linear infinite; }
            .animate-marquee2 { animation: marquee2 45s linear infinite; }
            
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
      <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
              <div className="text-center mb-20">
                 <h2 className="text-6xl md:text-7xl font-serif font-medium mb-8 text-merpara-dark tracking-tight">Strategy meets execution</h2>
                 <p className="text-gray-500 text-xl font-light max-w-3xl mx-auto leading-relaxed">A global team across the U.S., China, and Latin America—built for fast execution, clear communication, and performance you can track.</p>
              </div>

              <div className="bg-gray-100 rounded-[60px] p-6 lg:p-16 flex flex-col lg:flex-row overflow-hidden relative border border-gray-100 shadow-inner">
                  <div className="flex-1 relative rounded-[50px] overflow-hidden h-[600px] shadow-2xl bg-white border border-gray-100 group">
                      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-1000" alt="Campaign Reporting" />
                      
                      <div className="absolute top-8 right-8 bg-white/90 backdrop-blur px-6 py-3 rounded-2xl font-bold text-xs flex items-center gap-3 shadow-xl text-merpara-dark uppercase tracking-widest">
                         <div className="w-2.5 h-2.5 rounded-full bg-merpara-coral animate-pulse" /> Live Metrics
                      </div>
                      
                      <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-4">
                         <div className="bg-white/95 backdrop-blur-xl px-10 py-8 rounded-[35px] border border-white/50 shadow-2xl flex justify-between items-center">
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase font-black tracking-[0.3em] mb-2">Total Conversion</p>
                                <p className="text-4xl font-black text-merpara-dark tracking-tighter">$2,450,000</p>
                            </div>
                            <div className="h-12 w-28 bg-green-500 text-white rounded-2xl flex items-center justify-center font-black text-sm shadow-lg shadow-green-500/20">+128%</div>
                         </div>
                      </div>
                  </div>

                  <div className="w-full lg:w-56 flex lg:flex-col gap-4 mt-6 lg:mt-0 lg:ml-6">
                      <div className="flex-1 bg-white border border-gray-200 rounded-[35px] flex items-center justify-center cursor-pointer hover:bg-merpara-coral hover:text-white hover:border-merpara-coral transition-all duration-500 relative group overflow-hidden py-6 lg:py-0" onClick={() => setPage(PageView.FASHION)}>
                         <span className="lg:-rotate-90 font-black text-sm uppercase tracking-widest whitespace-nowrap">Supply Chain</span>
                      </div>
                      <div className="flex-1 bg-white border border-gray-200 rounded-[35px] flex items-center justify-center cursor-pointer hover:bg-merpara-purple hover:text-white hover:border-merpara-purple transition-all duration-500 relative group overflow-hidden py-6 lg:py-0" onClick={() => setPage(PageView.MARKETING)}>
                         <span className="lg:-rotate-90 font-black text-sm uppercase tracking-widest whitespace-nowrap">Marketing</span>
                      </div>
                      <div className="flex-1 bg-white border border-gray-200 rounded-[35px] flex items-center justify-center cursor-pointer hover:bg-merpara-blue hover:text-white hover:border-merpara-blue transition-all duration-500 relative group overflow-hidden py-6 lg:py-0" onClick={() => scrollToSection(SectionID.TEAM)}>
                         <span className="lg:-rotate-90 font-black text-sm uppercase tracking-widest whitespace-nowrap">Partnerships</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 7. PRE-FOOTER */}
      <section className="py-32 text-center container mx-auto px-6">
          <div className="inline-flex items-center gap-3 bg-merpara-blue/10 text-merpara-blue px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10">
             CREATOR-LED GROWTH
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-merpara-dark mb-10 max-w-5xl mx-auto tracking-tight">
             A global partner built for measurable results
          </h2>
          <p className="text-gray-500 mb-16 max-w-2xl mx-auto text-xl font-light leading-relaxed">
             We understand what it takes to earn attention—and turn it into real business. From creator collaboration to supply chain execution, Merpara is your long-term partner.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-5 text-merpara-dark text-xs font-black uppercase tracking-[0.2em]">
             <span className="text-gray-300">Hubs:</span>
             <span className="bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100 shadow-sm">United States</span> 
             <span className="bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100 shadow-sm">China</span>
             <span className="bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100 shadow-sm">Latin America</span>
          </div>
      </section>

    </div>
  );
};