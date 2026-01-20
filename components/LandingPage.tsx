
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, Instagram, TrendingUp, Users, Eye, Target, 
  Youtube, Facebook, Search, MapPin, PenTool, CheckCircle, 
  ShieldCheck, FileText, DollarSign, BarChart2, PieChart, 
  Package, Brain, Calendar, Zap, Cpu, Factory, Globe, Rocket,
  ArrowRight
} from 'lucide-react';
import { PageView, SectionID } from '../types';

interface LandingPageProps {
  setPage: (page: PageView) => void;
  scrollToSection: (id: SectionID) => void;
}

interface CampaignData {
  id: string;
  brand: string;
  label: string;
  pills: string[];
  image: string;
  color: string;
  bg: string;
  accent: string;
  logoColor: string;
}

const campaignReports: CampaignData[] = [
  {
    id: 'inia',
    brand: 'INIA',
    label: 'At-home Beauty Devices',
    pills: [
      '1,573,446+ Verified Campaign Impressions',
      '38+ Beauty & Lifestyle Creators Activated',
      '23.5% Peak Content Engagement Rate'
    ],
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=2070&auto=format&fit=crop',
    color: 'text-merpara-coral',
    bg: 'bg-[#fff1f0]',
    accent: '#ff6f61',
    logoColor: 'bg-[#ff6f61]'
  },
  {
    id: 'soneven',
    brand: 'Soneven',
    label: "Women's Golf Apparel",
    pills: [
      '1,478,068+ Organic Sport Impressions',
      '59+ Localized Golf Influencers (US)',
      '92% Audience Brand Sentiment Lift'
    ],
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop',
    color: 'text-merpara-purple',
    bg: 'bg-[#f9f0ff]',
    accent: '#9b51e0',
    logoColor: 'bg-[#9b51e0]'
  },
  {
    id: 'torras',
    brand: 'TORRAS',
    label: 'High-end Phone Cases',
    pills: [
      '2,100,588+ TikTok Viral Reach',
      'Alex Bravo Featured (1.1M+ Peak Views)',
      '58+ Performance-Driven Tech Creators'
    ],
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2070&auto=format&fit=crop',
    color: 'text-merpara-blue',
    bg: 'bg-[#f0f7ff]',
    accent: '#2d9cdb',
    logoColor: 'bg-[#2d9cdb]'
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
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
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
          <TikTokIcon />
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
  const [expandedId, setExpandedId] = useState<string>('inia');

  const tags = [
    { label: 'Data-Driven Creator Discovery', icon: Search, color: 'bg-merpara-coral text-white' },
    { label: 'Localized Relationship Management', icon: MapPin, color: 'bg-merpara-blue text-white' },
    { label: 'Creative Strategy & Storytelling', icon: PenTool, color: 'bg-merpara-purple text-white' },
    { label: 'Content Optimization & QC', icon: CheckCircle, color: 'bg-merpara-orange text-white' },
    { label: 'Ad Whitelisting & Usage Rights', icon: ShieldCheck, color: 'bg-green-600 text-white' },
    { label: 'Performance-Based Contracting', icon: FileText, color: 'bg-gray-800 text-white' },
    { label: 'Transparent Payment Systems', icon: DollarSign, color: 'bg-merpara-coral text-white' },
    { label: 'Real-Time ROI Dashboarding', icon: BarChart2, color: 'bg-merpara-blue text-white' },
    { label: 'Post-Campaign Insight & Iteration', icon: PieChart, color: 'bg-merpara-purple text-white' },
    { label: 'Strategic Product Seeding', icon: Package, color: 'bg-merpara-orange text-white' },
    { label: 'Merchandising Intelligence', icon: Brain, color: 'bg-green-600 text-white' },
    { label: 'Seasonal Line Planning', icon: Calendar, color: 'bg-gray-800 text-white' },
    { label: 'Trend Forecasting & Moodboarding', icon: Zap, color: 'bg-merpara-coral text-white' },
    { label: 'Rapid Prototyping & Digital QC', icon: Cpu, color: 'bg-merpara-blue text-white' },
    { label: 'Agile Low-MOQ Manufacturing', icon: Factory, color: 'bg-merpara-purple text-white' },
    { label: 'Cross-Border Fulfillment', icon: Globe, color: 'bg-merpara-orange text-white' },
    { label: 'Full-Stack Brand Incubation', icon: Rocket, color: 'bg-green-600 text-white' },
  ];

  return (
    <div className="w-full bg-white">
      
      {/* HERO SECTION */}
      <section className="pt-40 pb-24 px-6 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="max-w-2xl">
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-7xl lg:text-8xl font-serif font-black text-merpara-dark leading-[1.05] mb-10 tracking-tight">
              The Global <br/> Engine for <br/> Influencer <br/> <span className="text-merpara-coral">Commerce</span>
            </motion.h1>
            <div className="text-xl text-gray-500 mb-12 font-light leading-relaxed max-w-xl space-y-4">
              <p>
                Merpara is redefining how brands and creators go global.
              </p>
              <p>
                We are not just an agency; we are a transparent ecosystem. For Brands, we deliver ROI-driven influencer marketing with a direct-pay model that eliminates hidden fees. For Creators, we provide a turnkey fashion supply chain to launch your own label.
              </p>
              <p>
                From China's Greater Bay Area to the world stage, we replace cross-border uncertainty with measurable success.
              </p>
            </div>
            <div className="flex flex-wrap gap-5 mb-16">
               <button onClick={() => setPage(PageView.MARKETING)} className="group flex items-center gap-3 bg-merpara-coral text-white px-10 py-5 rounded-full font-bold transition-all hover:bg-merpara-dark hover:shadow-2xl shadow-merpara-coral/30">
                 Partner with Us <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
               </button>
               <button onClick={() => setPage(PageView.FASHION)} className="flex items-center gap-3 bg-gray-50 text-merpara-dark px-10 py-5 rounded-full font-bold border border-gray-100 transition-all hover:bg-gray-100">
                 Build Your Brand
               </button>
            </div>

            {/* GLOBAL PARTNERS SECTION */}
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

      {/* TRUSTED BY SECTION */}
      <section className="py-20 bg-white border-t border-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Trusted by Category Leaders</p>
          </div>
          {/* Logo Grid: Mobile 3x2, Desktop 6 in a row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between lg:items-center gap-12 lg:gap-8 max-w-6xl mx-auto">
            {['Zaful', 'dresslily', 'Ulike', 'TORRAS', 'Soneven', 'INIA'].map((brand, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ opacity: 1, scale: 1.05 }}
                className="flex items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <span className="text-2xl md:text-3xl font-serif font-black tracking-tighter text-[#333333] cursor-default">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXECUTION RESULTS - CLIENT CASE STUDIES */}
      <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
              <div className="text-center mb-24">
                 <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-500 text-[10px] font-black tracking-widest uppercase mb-6">Case Studies</div>
                 <h2 className="text-6xl md:text-7xl font-serif font-medium mb-8 text-merpara-dark tracking-tight">Strategy meets execution</h2>
                 <p className="text-gray-500 text-xl font-light max-w-3xl mx-auto leading-relaxed">Rigorous performance data from our primary client campaigns across Beauty, Fashion, and Tech.</p>
              </div>

              {/* STACKED CARDS CONTAINER */}
              <div className="flex h-[750px] gap-4 w-full overflow-hidden rounded-[50px]">
                 {campaignReports.map((report) => {
                    const isExpanded = expandedId === report.id;
                    return (
                        <motion.div
                           key={report.id}
                           layout
                           onClick={() => setExpandedId(report.id)}
                           className={`relative h-full rounded-[50px] overflow-hidden cursor-pointer transition-all duration-500 ${report.bg} ${isExpanded ? 'flex-[4]' : 'flex-[0.5]'}`}
                        >
                           {/* Brand Name Vertical Strip (Collapsed) */}
                           {!isExpanded && (
                               <motion.div 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="absolute inset-0 flex items-center justify-center"
                               >
                                  <span className="rotate-180 [writing-mode:vertical-lr] font-serif font-black text-2xl uppercase tracking-tighter text-merpara-dark opacity-20 group-hover:opacity-40 transition-opacity">
                                     {report.brand}
                                  </span>
                               </motion.div>
                           )}

                           {/* Content (Expanded) */}
                           <AnimatePresence>
                              {isExpanded && (
                                  <motion.div 
                                     initial={{ opacity: 0 }}
                                     animate={{ opacity: 1 }}
                                     exit={{ opacity: 0 }}
                                     transition={{ duration: 0.5, delay: 0.2 }}
                                     className="absolute inset-0 p-12 flex flex-col justify-between"
                                  >
                                     <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-12">
                                           <span className="rotate-180 [writing-mode:vertical-lr] font-serif font-black text-4xl uppercase tracking-tighter text-merpara-dark">
                                              {report.brand}
                                           </span>
                                           <div>
                                              <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-2 ${report.color}`}>Client Campaign</p>
                                              <h3 className="text-4xl font-serif font-bold text-merpara-dark tracking-tight">{report.label}</h3>
                                           </div>
                                        </div>
                                        
                                        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl ${report.logoColor}`}>
                                           <ArrowRight size={24} className="-rotate-45" />
                                        </div>
                                     </div>

                                     {/* Main Image Area */}
                                     <div className="flex-grow my-10 rounded-[40px] overflow-hidden relative shadow-2xl">
                                        <img src={report.image} className="w-full h-full object-cover" alt={report.brand} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                     </div>

                                     {/* Metric Pills */}
                                     <div className="flex flex-wrap gap-4">
                                        {report.pills.map((pill, idx) => (
                                           <div 
                                              key={idx} 
                                              className="px-8 py-4 rounded-full border border-merpara-dark/10 bg-white/60 backdrop-blur-xl text-sm font-bold text-merpara-dark shadow-sm hover:bg-white transition-colors"
                                           >
                                              {pill}
                                           </div>
                                        ))}
                                     </div>
                                  </motion.div>
                              )}
                           </AnimatePresence>
                        </motion.div>
                    )
                 })}
              </div>
          </div>
      </section>

      {/* TAG CLOUD & DESCRIPTION SECTION */}
      <section className="py-32 bg-[#fff1f0] overflow-hidden">
         <div className="container mx-auto px-6 text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-merpara-dark mb-10 tracking-tight">Bespoke creator-led solutions</h2>
            
            <div className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl text-gray-600 font-light leading-relaxed text-center">
              <p>
                Elevating the commercial value of influence, Merpara bridges the gap between content and commerce with a unified suite of growth solutions. We empower <span className="text-merpara-dark font-medium">Brands</span> to conquer global markets through data-backed marketing strategies while simultaneously equipping <span className="text-merpara-dark font-medium">Creators</span> with the infrastructure to monetize their influence—whether by securing premium brand partnerships or transforming their personal brand into a tangible fashion business tailored to their audience.
              </p>
              <p>
                Our dual-engine model streamlines every step of this journey: for brands, our <span className="text-merpara-purple font-medium">Influencer Marketing</span> system utilizes local market insights and AI to execute ROI-driven influencer campaigns that deliver measurable sales; for creators, our turnkey <span className="text-merpara-coral font-medium">Fashion Studio</span> offers full-stack <span className="text-merpara-blue font-medium">Brand Incubation</span>—combining professional merchandising intelligence, design planning, and agile low-MOQ manufacturing to launch sustainable, creator-owned labels from concept to global delivery.
              </p>
            </div>
         </div>

         {/* Marquee with icons */}
         <div className="relative flex flex-col gap-6 py-10 overflow-hidden">
            <div className="relative flex overflow-x-hidden">
              <div className="animate-marquee whitespace-nowrap flex gap-6">
                 {[...tags, ...tags].map((tag, i) => (
                    <span key={i} className={`inline-flex items-center gap-3 px-8 py-5 rounded-[2rem] font-bold text-sm shadow-xl ${tag.color}`}>
                       <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                          <tag.icon size={16} />
                       </div>
                       {tag.label}
                    </span>
                 ))}
              </div>
              <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-6">
                 {[...tags, ...tags].map((tag, i) => (
                    <span key={i} className={`inline-flex items-center gap-3 px-8 py-5 rounded-[2rem] font-bold text-sm shadow-xl ${tag.color}`}>
                       <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                          <tag.icon size={16} />
                       </div>
                       {tag.label}
                    </span>
                 ))}
              </div>
            </div>
         </div>
      </section>

      {/* PRE-FOOTER */}
      <section className="py-40 text-center container mx-auto px-6">
          <div className="inline-flex items-center gap-3 bg-merpara-blue/10 text-merpara-blue px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10">CREATOR-LED GROWTH</div>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-merpara-dark mb-10 max-w-5xl mx-auto tracking-tight">A global partner built for measurable results</h2>
          <div className="flex flex-wrap items-center justify-center gap-5 text-merpara-dark text-xs font-black uppercase tracking-[0.2em]">
             <span className="text-gray-300">Hubs:</span>
             <span className="bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100 shadow-sm">United States</span> 
             <span className="bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100 shadow-sm">China</span>
             <span className="bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100 shadow-sm">Latin America</span>
          </div>
      </section>
      
      <style>{`.animate-marquee { animation: marquee 60s linear infinite; } .animate-marquee2 { animation: marquee2 60s linear infinite; } @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-100%); } } @keyframes marquee2 { 0% { transform: translateX(100%); } 100% { transform: translateX(0%); } }`}</style>
    </div>
  );
};
