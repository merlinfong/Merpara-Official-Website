import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Instagram, TrendingUp, Users, Eye, Target, Share2, Youtube, Facebook } from 'lucide-react';
import { PageView, SectionID } from '../types';

interface LandingPageProps {
  setPage: (page: PageView) => void;
  scrollToSection: (id: SectionID) => void;
}

interface CampaignData {
  id: string;
  label: string;
  metrics: {
    exposure: string;
    creators: string;
    growth: string;
  };
  highlight: string;
  image: string;
  color: string;
  accent: string;
}

const campaignReports: CampaignData[] = [
  {
    id: 'fashion',
    label: 'FASHION & BEAUTY',
    metrics: {
      exposure: '1,573,446',
      creators: '38',
      growth: '+114%'
    },
    highlight: 'Key Partner: Megan Carter',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop',
    color: 'merpara-coral',
    accent: '#ff6f61'
  },
  {
    id: 'lifestyle',
    label: 'LIFESTYLE & GOLF',
    metrics: {
      exposure: '1,478,068',
      creators: '75',
      growth: '+92%'
    },
    highlight: 'Featured: Summer Willis',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop',
    color: 'merpara-purple',
    accent: '#9b51e0'
  },
  {
    id: 'viral',
    label: 'TIKTOK VIRAL GROWTH',
    metrics: {
      exposure: '2,100,588',
      creators: '58',
      growth: '+156%'
    },
    highlight: 'Top: Alex Bravo (1.1M Views)',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop',
    color: 'merpara-blue',
    accent: '#2d9cdb'
  }
];

interface SocialPost {
  id: string;
  type: 'tiktok' | 'instagram';
  handle: string;
  videoUrl: string;
  url: string;
}

const posts: SocialPost[] = [
  { id: '1', type: 'tiktok', handle: '@elenashinohara', videoUrl: 'https://raw.githubusercontent.com/merlinfong/Merpara-Official-Website/main/videos/@elenashinohara.mp4', url: 'https://www.tiktok.com/@elenashinohara/video/7439067299291598123' },
  { id: '2', type: 'tiktok', handle: '@tlynncarpenter', videoUrl: 'https://raw.githubusercontent.com/merlinfong/Merpara-Official-Website/main/videos/@tlynncarpenter.mp4', url: 'https://www.tiktok.com/@tlynncarpenter/video/7439410495234362654' },
  { id: '3', type: 'tiktok', handle: '@cassidy_malsch', videoUrl: 'https://raw.githubusercontent.com/merlinfong/Merpara-Official-Website/main/videos/@cassidy_malsch.mp4', url: 'https://www.tiktok.com/@cassidy_malsch/video/7439814593402244395' },
  { id: '4', type: 'tiktok', handle: '@alexbravoxo', videoUrl: 'https://raw.githubusercontent.com/merlinfong/Merpara-Official-Website/main/videos/@alexbravoxo.mp4', url: 'https://www.tiktok.com/@alexbravoxo/video/7449568738770292011' },
  { id: '5', type: 'instagram', handle: '@angelinagolfs', videoUrl: 'https://raw.githubusercontent.com/merlinfong/Merpara-Official-Website/main/videos/@angelinagolfs.mp4', url: 'https://www.instagram.com/reel/DJu8UzIMSY_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { id: '6', type: 'instagram', handle: '@paigexmackenzie', videoUrl: 'https://raw.githubusercontent.com/merlinfong/Merpara-Official-Website/main/videos/@paigexmackenzie.mp4', url: 'https://www.instagram.com/reel/DMItnmcx4iI/?utm_source=ig_web_copy_link&igsh=MWdwa2RuY2pwbnVxZA==' },
  { id: '7', type: 'instagram', handle: '@newladygolfer', videoUrl: 'https://raw.githubusercontent.com/merlinfong/Merpara-Official-Website/main/videos/@newladygolfer.mp4', url: 'https://www.instagram.com/p/DMDmEHdvpFE/' },
  { id: '8', type: 'instagram', handle: '@deck.your.decor', videoUrl: 'https://raw.githubusercontent.com/merlinfong/Merpara-Official-Website/main/videos/@deck.your.decor.mp4', url: 'https://www.instagram.com/reel/DQ38BwjERF1/' },
];

const TikTokIcon = () => (
  <svg viewBox="0 0 512 512" className="w-5 h-5 fill-current">
    <path d="M 386.160156 141.550781 C 383.457031 140.15625 380.832031 138.625 378.285156 136.964844 C 370.878906 132.070312 364.085938 126.300781 358.058594 119.785156 C 342.976562 102.523438 337.339844 85.015625 335.265625 72.757812 L 335.351562 72.757812 C 333.617188 62.582031 334.332031 56 334.441406 56 L 265.742188 56 L 265.742188 321.648438 C 265.742188 325.214844 265.742188 328.742188 265.589844 332.226562 C 265.589844 332.660156 265.550781 333.058594 265.523438 333.523438 C 265.523438 333.714844 265.523438 333.917969 265.484375 334.117188 C 265.484375 334.167969 265.484375 334.214844 265.484375 334.265625 C 264.011719 353.621094 253.011719 370.976562 236.132812 380.566406 C 227.472656 385.496094 217.675781 388.078125 207.707031 388.066406 C 175.699219 388.066406 149.757812 361.964844 149.757812 329.734375 C 149.757812 297.5 175.699219 271.398438 207.707031 271.398438 C 213.765625 271.394531 219.789062 272.347656 225.550781 274.226562 L 225.632812 204.273438 C 190.277344 199.707031 154.621094 210.136719 127.300781 233.042969 C 115.457031 243.328125 105.503906 255.605469 97.882812 269.316406 C 94.984375 274.316406 84.042969 294.410156 82.714844 327.015625 C 81.882812 345.523438 87.441406 364.699219 90.089844 372.625 L 90.089844 372.792969 C 91.757812 377.457031 98.214844 393.382812 108.742188 406.808594 C 117.230469 417.578125 127.253906 427.035156 138.5 434.882812 L 138.5 434.714844 L 138.667969 434.882812 C 171.925781 457.484375 208.800781 456 208.800781 456 C 215.183594 455.742188 236.566406 456 260.851562 444.492188 C 287.785156 431.734375 303.117188 412.726562 303.117188 412.726562 C 312.914062 401.367188 320.703125 388.425781 326.148438 374.449219 C 332.367188 358.109375 334.441406 338.507812 334.441406 330.675781 L 334.441406 189.742188 C 335.273438 190.242188 346.375 197.582031 346.375 197.582031 C 346.375 197.582031 362.367188 207.832031 387.316406 214.507812 C 405.214844 219.257812 429.332031 220.257812 429.332031 220.257812 L 429.332031 152.058594 C 420.882812 152.976562 403.726562 150.308594 386.160156 141.550781 Z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
);

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
      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale-[0.2] group-hover:grayscale-0"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-700" />
    <div className="absolute top-6 left-6">
      <div className="bg-white/70 backdrop-blur-2xl p-2.5 rounded-2xl shadow-xl flex items-center justify-center group-hover:bg-merpara-coral group-hover:text-white transition-all duration-500">
        {post.type === 'tiktok' ? (
          <svg viewBox="0 0 512 512" className="w-3.5 h-3.5 fill-current"><path d="M 386.160156 141.550781 C 383.457031 140.15625 380.832031 138.625 378.285156 136.964844 C 370.878906 132.070312 364.085938 126.300781 358.058594 119.785156 C 342.976562 102.523438 337.339844 85.015625 335.265625 72.757812 L 335.351562 72.757812 C 333.617188 62.582031 334.332031 56 334.441406 56 L 265.742188 56 L 265.742188 321.648438 C 265.742188 325.214844 265.742188 328.742188 265.589844 332.226562 C 265.589844 332.660156 265.550781 333.058594 265.523438 333.523438 C 265.523438 333.714844 265.523438 333.917969 265.484375 334.117188 C 265.484375 334.167969 265.484375 334.214844 265.484375 334.265625 C 264.011719 353.621094 253.011719 370.976562 236.132812 380.566406 C 227.472656 385.496094 217.675781 388.078125 207.707031 388.066406 C 175.699219 388.066406 149.757812 361.964844 149.757812 329.734375 C 149.757812 297.5 175.699219 271.398438 207.707031 271.398438 C 213.765625 271.394531 219.789062 272.347656 225.550781 274.226562 L 225.632812 204.273438 C 190.277344 199.707031 154.621094 210.136719 127.300781 233.042969 C 115.457031 243.328125 105.503906 255.605469 97.882812 269.316406 C 94.984375 274.316406 84.042969 294.410156 82.714844 327.015625 C 81.882812 345.523438 87.441406 364.699219 90.089844 372.625 L 90.089844 372.792969 C 91.757812 377.457031 98.214844 393.382812 108.742188 406.808594 C 117.230469 417.578125 127.253906 427.035156 138.5 434.882812 L 138.5 434.714844 L 138.667969 434.882812 C 171.925781 457.484375 208.800781 456 208.800781 456 C 215.183594 455.742188 236.566406 456 260.851562 444.492188 C 287.785156 431.734375 303.117188 412.726562 303.117188 412.726562 C 312.914062 401.367188 320.703125 388.425781 326.148438 374.449219 C 332.367188 358.109375 334.441406 338.507812 334.441406 330.675781 L 334.441406 189.742188 C 335.273438 190.242188 346.375 197.582031 346.375 197.582031 C 346.375 197.582031 362.367188 207.832031 387.316406 214.507812 C 405.214844 219.257812 429.332031 220.257812 429.332031 220.257812 L 429.332031 152.058594 C 420.882812 152.976562 403.726562 150.308594 386.160156 141.550781 Z"/></svg>
        ) : (
          <Instagram size={14} />
        )}
      </div>
    </div>
    <div className="absolute bottom-8 left-8 right-8">
      <p className="text-white font-sans font-medium text-sm tracking-tight opacity-90 group-hover:opacity-100 transition-opacity">{post.handle}</p>
    </div>
  </a>
);

const ScrollingColumn: React.FC<{ postsList: SocialPost[], reverse?: boolean }> = ({ postsList, reverse = false }) => (
  <div className="relative h-[950px] overflow-hidden">
    <motion.div animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }} transition={{ duration: 90, repeat: Infinity, ease: "linear" }} className="flex flex-col">
      {[...postsList, ...postsList].map((post, i) => (
        <div key={`${post.id}-${i}`} className="px-3">
          <PostCard post={post} />
        </div>
      ))}
    </motion.div>
  </div>
);

export const LandingPage: React.FC<LandingPageProps> = ({ setPage, scrollToSection }) => {
  const [activeReportIdx, setActiveReportIdx] = useState(0);
  const activeReport = campaignReports[activeReportIdx];

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

  return (
    <div className="w-full bg-white">
      
      {/* HERO SECTION */}
      <section className="pt-40 pb-24 px-6 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="max-w-2xl">
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-7xl lg:text-8xl font-serif font-black text-merpara-dark leading-[1.05] mb-10 tracking-tight">
              Bridging <br/> Markets, <br/> <span className="text-merpara-coral">Empowering</span> <br/> Growth
            </motion.h1>
            <p className="text-xl text-gray-500 mb-12 font-light leading-relaxed max-w-xl">
              Founded in Shenzhen and headquartered in the Greater Bay Area, Merpara is a global team with over a decade of expertise in cross-border commerce and influencer marketing.
            </p>
            <div className="flex flex-wrap gap-5 mb-16">
               <button onClick={() => scrollToSection(SectionID.CONTACT)} className="group flex items-center gap-3 bg-merpara-coral text-white px-10 py-5 rounded-full font-bold transition-all hover:bg-merpara-dark hover:shadow-2xl shadow-merpara-coral/30">
                 Get in touch <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
               </button>
               <button onClick={() => window.location.href='mailto:jenny@merpara.com'} className="flex items-center gap-3 bg-gray-50 text-merpara-dark px-10 py-5 rounded-full font-bold border border-gray-100 transition-all hover:bg-gray-100">
                 Join Creator Pool
               </button>
            </div>

            {/* GLOBAL PARTNERS SECTION - UPDATED TO REMOVE BOX STYLE */}
            <div className="p-0 max-w-lg mt-8">
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8">Global Partners Of</p>
               <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-merpara-coral transition-colors">
                    <Youtube size={20} />
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-merpara-coral transition-colors">
                    <Instagram size={20} />
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-merpara-coral transition-colors">
                    <Facebook size={20} />
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-merpara-coral transition-colors">
                    <TikTokIcon />
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-merpara-coral transition-colors">
                    <XIcon />
                  </div>
               </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 h-[950px] relative overflow-hidden">
            <div className="pt-32"><ScrollingColumn postsList={posts.slice(0, 4)} /></div>
            <div><ScrollingColumn postsList={posts.slice(4, 8)} reverse /></div>
            <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-white via-white/70 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-white via-white/70 to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* STRATEGY MEETS EXECUTION - DASHBOARD */}
      <section className="py-32 bg-gray-50/50">
          <div className="container mx-auto px-6">
              <div className="text-center mb-24">
                 <div className="inline-block px-4 py-1 rounded-full bg-merpara-purple/10 text-merpara-purple text-[10px] font-black tracking-widest uppercase mb-6">Execution Results</div>
                 <h2 className="text-6xl md:text-7xl font-serif font-medium mb-8 text-merpara-dark tracking-tight">Strategy meets execution</h2>
                 <p className="text-gray-500 text-xl font-light max-w-3xl mx-auto leading-relaxed">Real numbers from our latest global campaigns. Transparent reporting, measurable outcomes.</p>
              </div>

              {/* DASHBOARD CONTAINER */}
              <div className="flex flex-col lg:flex-row items-stretch gap-8 overflow-visible">
                  
                  {/* MAIN DASHBOARD SCREEN */}
                  <div className="flex-grow relative bg-white rounded-[60px] p-4 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden min-h-[600px] lg:min-h-[700px]">
                      
                      {/* Background Visual Layer */}
                      <div className="absolute inset-4 rounded-[45px] overflow-hidden z-0">
                         <AnimatePresence mode="wait">
                            <motion.div
                              key={activeReport.id}
                              initial={{ opacity: 0, scale: 1.1 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="w-full h-full relative"
                            >
                               <img 
                                  src={activeReport.image} 
                                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
                                  alt={activeReport.label}
                               />
                               <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
                               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                            </motion.div>
                         </AnimatePresence>
                      </div>

                      {/* DATA LAYERS */}
                      <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                          <div className="flex justify-end">
                             <motion.div 
                                key={`badge-${activeReport.id}`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white/10 backdrop-blur-2xl border border-white/20 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-2xl"
                             >
                                <div className={`w-2.5 h-2.5 rounded-full animate-pulse`} style={{ backgroundColor: activeReport.accent }} />
                                <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Verified Campaign Metrics</span>
                             </motion.div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                             <motion.div 
                                key={`stat1-${activeReport.id}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white/10 backdrop-blur-3xl border border-white/10 p-10 rounded-[40px] shadow-2xl group hover:bg-white/20 transition-all cursor-default"
                             >
                                <div className="flex items-center gap-4 mb-3 opacity-60">
                                   <Eye size={18} className="text-white" />
                                   <span className="text-[10px] text-white font-black tracking-[0.3em] uppercase">Total Impressions</span>
                                </div>
                                <div className="text-5xl md:text-6xl font-black text-white tracking-tighter tabular-nums">{activeReport.metrics.exposure}</div>
                             </motion.div>

                             <motion.div 
                                key={`stat2-${activeReport.id}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white/10 backdrop-blur-3xl border border-white/10 p-10 rounded-[40px] shadow-2xl group hover:bg-white/20 transition-all cursor-default"
                             >
                                <div className="flex items-center gap-4 mb-3 opacity-60">
                                   <Users size={18} className="text-white" />
                                   <span className="text-[10px] text-white font-black tracking-[0.3em] uppercase">Creators Involved</span>
                                </div>
                                <div className="text-5xl md:text-6xl font-black text-white tracking-tighter tabular-nums">{activeReport.metrics.creators}</div>
                             </motion.div>
                          </div>

                          <motion.div 
                            key={`bottom-${activeReport.id}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-black/40 backdrop-blur-3xl border border-white/10 p-8 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-6"
                          >
                             <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 text-white">
                                   <Target size={24} />
                                </div>
                                <div>
                                   <p className="text-[10px] text-white/40 font-black tracking-widest uppercase mb-1">High-Impact Growth</p>
                                   <p className="text-xl font-serif italic text-white/90">{activeReport.highlight}</p>
                                </div>
                             </div>
                             <div className="flex items-center gap-4">
                                <span className="text-[10px] text-white/40 font-black tracking-widest uppercase">Performance Index</span>
                                <div className="px-8 py-4 rounded-2xl font-black text-lg text-white shadow-xl flex items-center gap-2" style={{ backgroundColor: activeReport.accent }}>
                                   <TrendingUp size={20} /> {activeReport.metrics.growth}
                                </div>
                             </div>
                          </motion.div>
                      </div>
                  </div>

                  {/* VERTICAL SIDEBAR SELECTORS */}
                  <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-48 overflow-visible">
                     {campaignReports.map((report, idx) => (
                        <button 
                           key={report.id}
                           onClick={() => setActiveReportIdx(idx)}
                           className={`flex-1 min-h-[120px] lg:min-h-0 lg:h-1/3 rounded-[40px] relative transition-all duration-500 overflow-visible group flex items-center justify-center 
                              ${activeReportIdx === idx ? 'bg-white shadow-2xl ring-2' : 'bg-white/60 hover:bg-white border border-gray-100'}`}
                           style={{ '--tw-ring-color': activeReportIdx === idx ? report.accent : 'transparent' } as any}
                        >
                           <div 
                              className={`lg:-rotate-90 whitespace-nowrap font-black text-[11px] uppercase tracking-[0.3em] transition-all duration-300 pb-2 lg:pb-0 lg:pr-4 flex items-center gap-4
                                 ${activeReportIdx === idx ? '' : 'text-gray-400 group-hover:text-gray-600'}`}
                              style={{ color: activeReportIdx === idx ? report.accent : undefined }}
                           >
                              {report.label}
                              {activeReportIdx === idx && (
                                 <motion.div layoutId="active-dot" className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: report.accent }} />
                              )}
                           </div>
                        </button>
                     ))}
                  </div>
              </div>
          </div>
      </section>

      {/* TAG CLOUD */}
      <section className="py-32 bg-[#fff1f0] overflow-hidden">
         <div className="container mx-auto px-6 text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-merpara-dark mb-8 tracking-tight">Bespoke creator-led solutions</h2>
         </div>
         <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap py-6 flex gap-6">
               {[...tags, ...tags, ...tags].map((tag, i) => (
                  <span key={i} className={`inline-flex items-center gap-3 px-8 py-4 rounded-3xl font-bold text-sm shadow-sm ${tag.color}`}>{tag.label}</span>
               ))}
            </div>
            <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-6 flex gap-6">
               {[...tags, ...tags, ...tags].map((tag, i) => (
                  <span key={i} className={`inline-flex items-center gap-3 px-8 py-4 rounded-3xl font-bold text-sm shadow-sm ${tag.color}`}>{tag.label}</span>
               ))}
            </div>
         </div>
      </section>

      {/* PRE-FOOTER */}
      <section className="py-40 text-center container mx-auto px-6">
          <div className="inline-flex items-center gap-3 bg-merpara-blue/10 text-merpara-blue px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10">CREATOR-LED GROWTH</div>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-merpara-dark mb-10 max-w-5xl mx-auto tracking-tight">A global partner built for measurable results</h2>
          <div className="flex flex-wrap items-center justify-center gap-5 text-merpara-dark text-xs font-black uppercase tracking-[0.2em]">
             <span className="text-gray-300">Hubs:</span>
             <span className="bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100 shadow-sm">United States</span> 
             <span className="bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100 shadow-sm">China</span>
             <span className="bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100 shadow-sm">Latin America</span>
          </div>
      </section>
      
      <style>{`.animate-marquee { animation: marquee 45s linear infinite; } .animate-marquee2 { animation: marquee2 45s linear infinite; } @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-100%); } } @keyframes marquee2 { 0% { transform: translateX(100%); } 100% { transform: translateX(0%); } }`}</style>
    </div>
  );
};