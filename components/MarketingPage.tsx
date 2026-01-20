import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { SectionID } from '../types';
import { TeamSection } from './TeamSection';
import { 
  Zap, DollarSign, TrendingUp, Check, 
  ArrowRight, Users, Globe, Target, FileText, 
  ShieldCheck, Star, Mail, Handshake, Clock, Infinity,
  Layers, MessageCircle, Sparkles, Shield, Smartphone,
  ShoppingBag, HeartPulse, Home, Plus, UserCheck, FileCheck, Gift, PenTool, CreditCard,
  BarChart3, Heart, ChevronDown
} from 'lucide-react';

interface MarketingPageProps {
  scrollToSection: (id: SectionID) => void;
}

type Audience = 'brand' | 'creator';

export const MarketingPage: React.FC<MarketingPageProps> = ({ scrollToSection }) => {
  const [audience, setAudience] = useState<Audience>('brand');

  return (
    <div id={SectionID.TOP} className="w-full bg-white pt-20">
        
        {/* Audience Toggle - Re-engineered for perfect alignment */}
        <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-6">
            <div className="container mx-auto px-6 flex justify-center">
                <div className="bg-gray-100 p-1 rounded-full flex relative">
                    <button 
                        onClick={() => setAudience('brand')}
                        className={`relative z-10 px-10 py-3 rounded-full text-sm font-bold transition-colors duration-300 ${audience === 'brand' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                        For Brands
                    </button>
                    <button 
                        onClick={() => setAudience('creator')}
                        className={`relative z-10 px-10 py-3 rounded-full text-sm font-bold transition-colors duration-300 ${audience === 'creator' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                        For Creators
                    </button>
                    
                    {/* Dynamic Sliding Background */}
                    <motion.div 
                        layoutId="toggle-background"
                        className="absolute inset-y-1 bg-merpara-purple rounded-full shadow-lg shadow-merpara-purple/20"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        style={{
                            left: audience === 'brand' ? '4px' : 'calc(50% + 2px)',
                            width: 'calc(50% - 6px)'
                        }}
                    />
                </div>
            </div>
        </div>

        <AnimatePresence mode="wait">
            {audience === 'brand' ? (
                <BrandContent key="brand" scrollToSection={scrollToSection} />
            ) : (
                <CreatorContent key="creator" />
            )}
        </AnimatePresence>

    </div>
  );
};

const BrandContent: React.FC<{scrollToSection: (id: SectionID) => void}> = ({ scrollToSection }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
        >
            {/* 1. Brand Hero */}
            <section className="py-20 md:py-32 container mx-auto px-6 text-center">
                 <h1 className="text-5xl md:text-7xl font-serif font-black text-merpara-dark mb-8 tracking-tighter leading-[1.1]">
                     Your Trusted ROI-Driven Partner <br className="hidden md:block"/>
                     for Global Growth, <br className="hidden md:block"/>
                     <span className="text-merpara-purple">Redefining Global Influencer Marketing.</span>
                 </h1>
                 <p className="text-xl text-gray-500 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
                    <span className="text-merpara-dark font-bold">Stop paying for hidden markups. Start paying for results.</span> <br/>
                    We disrupt the traditional "black box" agency model with <span className="text-merpara-dark font-medium">Absolute Financial Transparency</span>. Through our Direct-Pay Mechanism, you pay influencers directly, ensuring every dollar of your budget drives actual traffic and conversion. Combined with AI-driven insights and localized strategies, we turn uncertainty into measurable business success.
                 </p>
                 
                 <div className="flex justify-center mb-16">
                    <Button 
                        variant="primary" 
                        className="bg-merpara-purple text-white hover:bg-black shadow-lg shadow-merpara-purple/20 px-12 py-5 text-base rounded-full transition-all duration-300"
                        onClick={() => window.location.href='mailto:business@merpara.com'}
                    >
                        Get a Quote
                    </Button>
                 </div>

                 <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[11px] font-black uppercase tracking-[0.3em] text-merpara-purple opacity-60">
                    <span className="flex items-center gap-2"><div className="w-1 h-1 bg-merpara-purple rounded-full"/> 100% TRANSPARENCY</span>
                    <span className="flex items-center gap-2"><div className="w-1 h-1 bg-merpara-purple rounded-full"/> DIRECT PAY</span>
                    <span className="flex items-center gap-2"><div className="w-1 h-1 bg-merpara-purple rounded-full"/> MEASURABLE ROI</span>
                 </div>
            </section>

            {/* 2. Why Leading Brands Choose Merpara? */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div>
                            <h2 className="text-5xl font-serif font-bold text-merpara-dark mb-4">Why Leading Brands <br className="md:hidden" /> Choose Merpara?</h2>
                            <p className="text-gray-500 max-w-2xl text-lg leading-relaxed font-light">
                                We replace the "black box" agency model with absolute transparency, aligning every dollar spent with measurable business growth.
                            </p>
                        </div>
                        <div className="h-px flex-grow bg-gray-200 mx-8 hidden md:block mb-6"/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { 
                              title: "ROI-Obsessed Strategy", 
                              desc: "We move beyond vanity metrics like \"likes.\" Our strategies are engineered for conversion, sales attribution, and measurable impact. If it doesn't drive growth, we don't do it.", 
                              icon: Target 
                            },
                            { 
                              title: "Direct Pay & 100% Transparency", 
                              desc: "Stop guessing where your budget goes. You pay influencers directly—zero hidden markups. We only charge for the value we add, ensuring complete financial clarity.", 
                              icon: Handshake 
                            },
                            { 
                              title: "Global Native Agility", 
                              desc: "From North America to APAC, our distributed teams deliver 24/7 execution. We bridge cultural gaps with native local insights, ensuring your campaigns run around the clock.", 
                              icon: Globe 
                            },
                            { 
                              title: "Frictionless Full-Service", 
                              desc: "We handle the complexity so you can scale. From negotiation and contracting to compliance and data reporting, we manage the entire lifecycle as your in-house extension.", 
                              icon: Infinity 
                            }
                        ].map((item, i) => (
                            <motion.div 
                              key={i} 
                              whileHover={{ y: -10 }}
                              className="bg-white p-10 rounded-[40px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(155,81,224,0.15)] transition-all duration-500 group border border-gray-100 flex flex-col h-full"
                            >
                                <div className="w-16 h-16 bg-merpara-purple/10 text-merpara-purple rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-merpara-purple group-hover:text-white transition-all duration-500 shadow-sm">
                                    <item.icon size={32} strokeWidth={1.5} className="group-hover:rotate-[10deg] transition-transform duration-500" />
                                </div>
                                <h3 className="font-bold text-2xl mb-4 text-merpara-dark tracking-tight leading-snug group-hover:text-merpara-purple transition-colors">
                                  {item.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed font-light text-base">
                                  {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. The Growth Framework */}
            <section className="py-32 container mx-auto px-6">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <div className="text-merpara-purple text-[10px] font-black uppercase tracking-[0.4em] mb-4">The Growth Framework</div>
                        <h2 className="text-5xl font-serif font-bold mb-4 tracking-tight leading-tight">From Insight to ROI</h2>
                        <p className="text-gray-500 mb-12 text-lg font-light leading-relaxed max-w-lg">
                           A data-driven loop designed to turn influencer content into measurable business assets.
                        </p>
                        <ul className="space-y-8">
                            {[
                                { t: "Precision Strategy", d: "We don't guess. We analyze market DNA and competitor data to build a roadmap tailored for conversion, not just awareness." },
                                { t: "Transparent Selection", d: "Rigorous vetting using AI tools to filter out fake followers. We match you with authentic voices that align with your brand values and budget." },
                                { t: "Conversion-Led Creative", d: "Merging aesthetic appeal with commercial logic. We guide influencers to create content that stops the scroll and drives action." },
                                { t: "Frictionless Execution", d: "We handle the chaos—negotiation, contracting, and shipping—so you don't have to. Global execution with 24/7 responsiveness." },
                                { t: "Attribution & Scaling", d: "Beyond vanity metrics. We track sales attribution and ROI, using insights to optimize real-time and scale what works." }
                            ].map((service, i) => (
                                <li key={i} className="flex gap-6 items-start group">
                                    <div className="mt-1 w-8 h-8 rounded-full bg-merpara-purple text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-lg shadow-merpara-purple/20 group-hover:scale-110 transition-transform">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-merpara-dark mb-1 group-hover:text-merpara-purple transition-colors">{service.t}</h4>
                                        <p className="text-gray-500 leading-relaxed font-light">{service.d}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="bg-gray-100 rounded-[60px] aspect-square overflow-hidden shadow-2xl relative group/img">
                            <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop" alt="Behind the scenes of a commercial shoot" className="w-full h-full object-cover grayscale-[0.5] group-hover/img:grayscale-0 transition-all duration-1000 group-hover/img:scale-105" />
                            <div className="absolute inset-0 bg-merpara-purple/5 mix-blend-multiply" />
                            <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none" />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[40px] shadow-2xl max-w-[280px] border border-gray-50 hidden md:block">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-merpara-purple/20 text-merpara-purple rounded-full flex items-center justify-center">
                                    <TrendingUp size={20}/>
                                </div>
                                <span className="font-bold text-merpara-dark">Growth Driven</span>
                            </div>
                            <p className="text-sm text-gray-500 font-light">We replace traditional agency guesswork with an execution-first BTS culture.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. The 6-Step Value Chain */}
            <section className="py-32 bg-merpara-dark text-white rounded-[60px] mx-4 my-8 relative overflow-hidden">
                {/* Flowing Line Background Decoration */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-50 150 C 200 150, 400 450, 600 450 S 1000 150, 1250 150" stroke="#9b51e0" strokeWidth="1" strokeDasharray="10 10" className="animate-[pulse_4s_ease-in-out_infinite]" />
                        <path d="M-50 250 C 200 250, 400 550, 600 550 S 1000 250, 1250 250" stroke="#9b51e0" strokeWidth="1" strokeDasharray="15 5" className="animate-[pulse_6s_ease-in-out_infinite]" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl font-serif font-bold mb-6 tracking-tight">The 6-Step Value Chain</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {[
                             { 
                               step: "01", 
                               title: "Strategic Alignment", 
                               desc: "We align deeply with your KPIs. By dissecting your market DNA and budget, we define a precise roadmap for growth." 
                             },
                             { 
                               step: "02", 
                               title: "Data-Backed Proposal", 
                               desc: "No guesswork. We present a curated influencer matrix based on AI analytics, ensuring high audience authenticity and fit." 
                             },
                             { 
                               step: "03", 
                               title: "Transparent Setup", 
                               desc: "Efficient contracting and Direct-Pay configuration. We set up the financial framework to ensure 100% transparency from Day 1." 
                             },
                             { 
                               step: "04", 
                               title: "Frictionless Activation", 
                               desc: "From negotiation to logistics, we manage the chaos. Our global team ensures seamless execution across all time zones." 
                             },
                             { 
                               step: "05", 
                               title: "Real-Time Calibration", 
                               desc: "We don't \"set and forget.\" We monitor live campaign data and adjust tactics mid-flight to maximize conversion potential." 
                             },
                             { 
                               step: "06", 
                               title: "Attribution & Scaling", 
                               desc: "Beyond vanity metrics. We deliver granular ROI reports and actionable insights to scale your next campaign's success." 
                             }
                         ].map((item, i) => (
                             <motion.div 
                               key={i} 
                               whileHover={{ y: -5 }}
                               className="group border border-white/5 p-10 rounded-[40px] bg-white/0 hover:bg-white/5 hover:border-merpara-purple/30 hover:shadow-[0_0_30px_rgba(155,81,224,0.1)] transition-all duration-500 relative"
                             >
                                 <div className="text-merpara-purple font-serif font-black text-6xl mb-6 opacity-40 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 flex items-center">
                                     <span className="drop-shadow-[0_0_8px_rgba(155,81,224,0.4)]">{item.step}</span>
                                 </div>
                                 <h3 className="font-bold text-2xl mb-4 tracking-tight group-hover:text-merpara-purple transition-colors">{item.title}</h3>
                                 <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
                                 
                                 {/* Hover Glow Effect Circle */}
                                 <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-merpara-purple/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                             </motion.div>
                         ))}
                    </div>
                </div>
            </section>

            {/* 5. Pricing - Redesigned to Direct-Pay Model */}
            <section id="pricing" className="py-32 container mx-auto px-6">
                <div className="max-w-6xl mx-auto bg-white border border-gray-100 rounded-[60px] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.1)] overflow-hidden">
                    <div className="bg-merpara-purple p-14 text-center text-white relative">
                        <div className="absolute top-0 right-0 p-8 opacity-10"><DollarSign size={140} /></div>
                        <h2 className="text-5xl font-serif font-bold mb-4 relative z-10 tracking-tight">The "Direct-Pay" Pricing Model</h2>
                        <p className="opacity-80 max-w-2xl mx-auto relative z-10 font-light text-lg">
                            We unbundle the agency fee. You pay creators directly with zero markups, while we charge a flat fee for expert execution.
                        </p>
                    </div>
                    <div className="p-12 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        
                        {/* Column 01: Activation & Management */}
                        <div className="text-center px-4 md:px-8 relative group flex flex-col justify-between">
                            <div>
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gradient-to-r from-merpara-coral to-merpara-orange text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg z-20 flex items-center gap-1.5 whitespace-nowrap">
                                    <Zap size={12} fill="currentColor" /> Limited Offer: 10% OFF
                                </div>
                                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform"><Users size={36}/></div>
                                <h3 className="font-bold text-2xl mb-8 text-merpara-dark tracking-tight">Activation & Management</h3>
                                <div className="space-y-10">
                                    <div className="relative">
                                        <div className="flex flex-col items-center">
                                            <p className="text-sm text-gray-400 font-medium line-through mb-1">$300</p>
                                            <div className="flex items-end gap-1 mb-1">
                                                <p className="text-5xl font-serif font-black text-merpara-coral">$270</p>
                                                <span className="text-xs text-gray-400 pb-1 font-medium">/ influencer</span>
                                            </div>
                                        </div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">New Activation</p>
                                        <p className="text-xs text-gray-500 font-light px-4">Strategy, Deep Outreach, Negotiation, & Content Supervision.</p>
                                    </div>
                                    <div className="h-px bg-gray-100 w-1/2 mx-auto"/>
                                    <div className="relative">
                                        <div className="flex flex-col items-center">
                                            <p className="text-sm text-gray-400 font-medium line-through mb-1">$200</p>
                                            <div className="flex items-end gap-1 mb-1">
                                                <p className="text-5xl font-serif font-black text-merpara-coral">$180</p>
                                                <span className="text-xs text-gray-400 pb-1 font-medium">/ activation</span>
                                            </div>
                                        </div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Retention</p>
                                        <p className="text-xs text-gray-500 font-light px-4">Repeat collaborations to maximize Lifetime Value (LTV).</p>
                                    </div>
                                </div>
                            </div>
                            {/* Symmetric bottom tag to balance Column 2 & 3 */}
                            <div className="mt-10 inline-block px-6 py-2 bg-orange-50 text-orange-600 text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm mx-auto w-fit">
                                Flat Rate
                            </div>
                        </div>

                        {/* Column 02: Shared Success */}
                        <div className="text-center px-4 md:px-8 pt-12 md:pt-0 group flex flex-col justify-between">
                            <div>
                                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm"><TrendingUp size={36}/></div>
                                <h3 className="font-bold text-2xl mb-8 text-merpara-dark tracking-tight">Shared Success</h3>
                                <div className="mb-10">
                                    <p className="text-5xl font-serif font-black text-merpara-dark mb-1">Dynamic %</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Performance Commission</p>
                                </div>
                                <p className="text-gray-500 font-light mb-10 text-base px-2">Risk-sharing model. Commission rates aligned with your ROI goals and actual sales revenue.</p>
                            </div>
                            <div className="inline-block px-6 py-2 bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm mx-auto w-fit">Results Based</div>
                        </div>

                        {/* Column 03: The Disruptor */}
                        <div className="text-center pt-12 md:pt-0 relative flex flex-col h-full">
                             <div className="bg-white border-2 border-merpara-purple/10 rounded-[40px] p-10 flex-grow flex flex-col justify-between shadow-[0_20px_40px_-10px_rgba(155,81,224,0.08)] group hover:border-merpara-purple/30 transition-all duration-500">
                                <div>
                                    <div className="w-20 h-20 bg-purple-50 text-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform"><ShieldCheck size={36}/></div>
                                    <h3 className="font-bold text-2xl mb-8 text-merpara-dark tracking-tight">The Disruptor</h3>
                                    <div className="mb-10">
                                        <p className="text-6xl font-serif font-black text-merpara-purple mb-1">0% Markup</p>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Influencer Payout</p>
                                    </div>
                                    <p className="text-gray-500 font-light mb-10 text-base">You pay influencers directly. 100% of your budget goes to driving traffic and sales.</p>
                                </div>
                                <div className="inline-block px-6 py-2 bg-merpara-purple text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-merpara-purple/20 mx-auto w-fit">No Hidden Fees</div>
                             </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 py-8 text-center border-t border-gray-100">
                        <p className="text-gray-400 font-medium tracking-wide">Straightforward pricing. No hidden fees. Just results.</p>
                    </div>
                </div>
            </section>

             {/* 6. Philosophy & Contact */}
            <section className="py-40 bg-gray-50/50 text-center px-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl aspect-video bg-merpara-purple/5 blur-[120px] rounded-full -z-10" />
                <div className="container mx-auto relative z-10">
                    <h2 className="text-2xl font-black uppercase tracking-[0.4em] text-merpara-purple mb-10">Ready to Scale with Absolute Transparency?</h2>
                    <p className="text-3xl md:text-5xl font-serif italic text-merpara-dark/30 mb-12 max-w-4xl mx-auto leading-tight tracking-tight">
                        "We reject vanity metrics. We insist on <span className="text-merpara-dark font-medium not-italic">measurable revenue</span> and sustainable growth. Stop guessing, start growing."
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <button 
                            onClick={() => window.location.href='mailto:business@merpara.com'} 
                            className="group flex items-center gap-4 bg-merpara-dark text-white px-12 py-6 rounded-full font-bold hover:bg-merpara-purple transition-all duration-300 shadow-2xl"
                        >
                            <Mail size={24} /> 
                            <span className="text-lg">Get Your Proposal</span>
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                        <p className="text-gray-400 text-sm font-medium">Response within 24 Hours. No commitment required.</p>
                    </div>
                </div>
            </section>

            <TeamSection filter="marketing" />
        </motion.div>
    );
}

const CreatorContent: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (idx: number) => {
        setOpenFaq(openFaq === idx ? null : idx);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
        >
             {/* 1. Creator Hero */}
             <section className="py-20 md:py-32 container mx-auto px-6">
                 <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-2 bg-merpara-coral/10 text-merpara-coral font-black rounded-full text-[10px] uppercase tracking-[0.4em] mb-10 shadow-sm">
                        <span className="w-1.5 h-1.5 bg-merpara-coral rounded-full animate-pulse" />
                        CREATOR PARTNERSHIP PROGRAM
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-black text-merpara-dark mb-10 tracking-tighter leading-tight">
                        Elevate Your Influence. <br/>
                        <span className="text-merpara-coral">Unlock Global Opportunities.</span>
                    </h1>
                    <div className="text-xl text-gray-500 mb-16 leading-relaxed font-light max-w-3xl mx-auto space-y-4">
                        <p className="font-bold text-merpara-dark">Stop chasing deals. Let the world's top brands come to you.</p>
                        <p>
                            Join Merpara's exclusive creator network to access premium campaigns with global category leaders. We handle the negotiation, contracts, and payments, so you can focus on what you do best: <span className="text-merpara-dark font-medium">creating content that converts.</span>
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Button variant="secondary" className="px-12 py-6 text-lg rounded-[2rem] shadow-merpara-coral/30" onClick={() => window.location.href='mailto:jenny@merpara.com'}>Join the Network</Button>
                    </div>
                 </div>
            </section>

            {/* 2. Why Partner - Bento Grid Redesign */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl font-serif font-bold text-merpara-dark mb-6 tracking-tight">Why Top Creators Choose Merpara?</h2>
                        <p className="text-xl text-gray-500 font-light">We treat you as a partner, not a vendor. Here is our promise.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
                        {/* Featured Image Block */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-7 h-[600px] rounded-[60px] overflow-hidden relative group"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop" 
                                alt="High-end fashion creator in action" 
                                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-12 left-12 right-12">
                                <p className="text-white text-3xl font-serif font-black leading-tight tracking-tight mb-4">
                                    Focus on the art of <br/> creation. We take care <br/> of the rest.
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-merpara-coral rounded-full flex items-center justify-center text-white">
                                        <Sparkles size={20} />
                                    </div>
                                    <span className="text-white/80 font-bold text-sm uppercase tracking-widest">Creator-First Ecosystem</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bento Small Cards */}
                        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                            {[
                                { 
                                    title: "Guaranteed Payments", 
                                    headline: "Fast, Guaranteed Payouts.",
                                    desc: "Never chase an invoice again. We handle the billing with brands and ensure you get paid on time, every time.", 
                                    icon: DollarSign,
                                    color: "bg-green-50 text-green-600"
                                },
                                { 
                                    title: "Creative Autonomy", 
                                    headline: "Briefs that Inspire, Not Restrict.",
                                    desc: "We protect your authentic voice. Our briefs are designed to spark creativity, not micromanage your storytelling.", 
                                    icon: Zap,
                                    color: "bg-merpara-coral/10 text-merpara-coral"
                                },
                                { 
                                    title: "Premium Access", 
                                    headline: "Direct Access to Global Leaders.",
                                    desc: "Skip the small gigs. Unlock long-term ambassadorships with high-budget international brands.", 
                                    icon: Globe,
                                    color: "bg-blue-50 text-blue-600"
                                },
                                { 
                                    title: "Zero Friction", 
                                    headline: "We Handle the Admin.",
                                    desc: "Contracts, negotiations, and logistics—we do the boring work so you can focus entirely on creating.", 
                                    icon: Layers,
                                    color: "bg-merpara-purple/10 text-merpara-purple"
                                }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:border-gray-200 transition-all duration-500 flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm`}>
                                            <item.icon size={28} />
                                        </div>
                                        <h3 className="font-bold text-xl mb-3 text-merpara-dark tracking-tight leading-snug">{item.headline}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-gray-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{item.title}</span>
                                        <ArrowRight size={14} className="text-gray-300" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. High-Growth Verticals Grid */}
            <section className="py-32 bg-gray-50/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <div className="inline-block px-4 py-1.5 bg-merpara-blue/10 text-merpara-blue rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">Market Coverage</div>
                        <h2 className="text-5xl font-serif font-bold text-merpara-dark mb-6 tracking-tight">Explore Our High-Growth Verticals</h2>
                        <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">Direct matching with category leaders across the world's most lucrative commercial sectors.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {[
                            { 
                                title: "Beauty & Skincare", 
                                desc: "Skincare, Makeup, Haircare.", 
                                icon: Sparkles, 
                                color: "text-pink-500", 
                                bg: "bg-pink-50" 
                            },
                            { 
                                title: "Tech & Smart Home", 
                                desc: "Gadgets, Audio, Smart Appliances.", 
                                icon: Smartphone, 
                                color: "text-blue-500", 
                                bg: "bg-blue-50" 
                            },
                            { 
                                title: "Fashion & Apparel", 
                                desc: "Luxury, Streetwear, Athleisure.", 
                                icon: ShoppingBag, 
                                color: "text-merpara-coral", 
                                bg: "bg-merpara-coral/10" 
                            },
                            { 
                                title: "Wellness & Fitness", 
                                desc: "Nutrition, Gym Gear, Mental Health.", 
                                icon: HeartPulse, 
                                color: "text-green-500", 
                                bg: "bg-green-50" 
                            },
                            { 
                                title: "Modern Lifestyle", 
                                desc: "Home Decor, Kitchen, Productivity.", 
                                icon: Home, 
                                color: "text-merpara-purple", 
                                bg: "bg-merpara-purple/10" 
                            },
                            { 
                                title: "More Categories", 
                                desc: "Gaming, Pets, Travel, and more.", 
                                icon: Plus, 
                                color: "text-gray-400", 
                                bg: "bg-gray-100",
                                cta: "Tell us your niche."
                            }
                        ].map((cat, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -10, shadow: "0 40px 80px -15px rgba(0,0,0,0.1)" }}
                                className="bg-white p-12 rounded-[50px] border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.02)] transition-all duration-500 group flex flex-col items-center text-center cursor-pointer"
                                onClick={() => cat.cta ? window.location.href='mailto:jenny@merpara.com' : null}
                            >
                                <div className={`w-24 h-24 ${cat.bg} ${cat.color} rounded-[32px] flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-all duration-500 group-hover:rotate-6`}>
                                    <cat.icon size={44} strokeWidth={1.2} />
                                </div>
                                <h3 className="text-2xl font-bold text-merpara-dark mb-3 tracking-tight group-hover:text-merpara-dark transition-colors">{cat.title}</h3>
                                <p className="text-gray-400 font-light mb-6 leading-relaxed">{cat.desc}</p>
                                {cat.cta && (
                                    <span className="text-merpara-blue text-[10px] font-black uppercase tracking-[0.2em]">{cat.cta}</span>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. The Collaboration Journey - Redesigned VIP Lane */}
            <section className="py-32 container mx-auto px-6 relative overflow-hidden">
                <div className="text-center mb-24">
                    <h2 className="text-5xl font-serif font-bold text-merpara-dark mb-6 tracking-tight">Your Path to Paid Partnerships</h2>
                    <p className="text-xl text-gray-500 font-light">The 6-Step VIP Lane to Global Monetization.</p>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    {/* Flowing background line for desktop */}
                    <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block opacity-20">
                        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 150 C 300 150, 400 450, 600 450 S 900 150, 1150 150" stroke="#ff6f61" strokeWidth="4" strokeDasharray="12 12" />
                            <circle cx="50" cy="150" r="10" fill="#ff6f61" />
                            <circle cx="1150" cy="150" r="10" fill="#ff6f61" />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
                        {[
                            { 
                                step: "01", 
                                title: "Profile Setup", 
                                desc: "Create your professional media kit in minutes. Showcase your niche, audience stats, and best work to top brands.",
                                icon: UserCheck,
                                color: "text-merpara-blue",
                                bg: "bg-blue-50"
                            },
                            { 
                                step: "02", 
                                title: "Premium Matching", 
                                desc: "No spam. Receive curated offers from brands that align with your style and rate card.",
                                icon: Target,
                                color: "text-merpara-coral",
                                bg: "bg-merpara-coral/10"
                            },
                            { 
                                step: "03", 
                                title: "Smart Contracting", 
                                desc: "Digital, one-click agreements. Clear terms on usage rights and deliverables—no legal headaches.",
                                icon: FileCheck,
                                color: "text-merpara-purple",
                                bg: "bg-merpara-purple/10"
                            },
                            { 
                                step: "04", 
                                title: "Product Unboxing", 
                                desc: "Receive premium products directly to your doorstep. Authentic experience is the foundation of great content.",
                                icon: Gift,
                                color: "text-merpara-orange",
                                bg: "bg-merpara-orange/10"
                            },
                            { 
                                step: "05", 
                                title: "Creative Freedom", 
                                desc: "Do what you do best. Create content that resonates with your fans while hitting key brand messages.",
                                icon: PenTool,
                                color: "text-green-500",
                                bg: "bg-green-50"
                            },
                            { 
                                step: "06", 
                                title: "No Middleman Delays", 
                                desc: "Direct payments from brands, typically processed within 7-10 business days. We skip the agency holding period so you get paid faster.",
                                icon: CreditCard,
                                color: "text-gray-900",
                                bg: "bg-gray-100"
                            }
                        ].map((item, i) => (
                            <motion.div 
                                key={i} 
                                whileHover={{ y: -10 }}
                                className="bg-white/80 backdrop-blur-xl p-12 rounded-[50px] relative overflow-hidden group border border-gray-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="absolute top-8 right-8 font-serif font-black text-7xl text-gray-50 group-hover:text-merpara-coral/5 transition-colors">{item.step}</div>
                                <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm relative z-10`}>
                                    <item.icon size={32} />
                                </div>
                                <h3 className="font-bold text-2xl mb-4 relative z-10 text-merpara-dark tracking-tight">{item.title}</h3>
                                <p className="text-gray-500 relative z-10 font-light leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Requirements & FAQ - Redesigned Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                        {/* The Pro Standard - Left Side */}
                        <div className="bg-gray-50/50 p-12 rounded-[60px] border border-gray-100">
                            <div className="mb-12">
                                <h3 className="text-4xl font-serif font-bold mb-4 text-merpara-coral">The Pro Standard</h3>
                                <p className="text-gray-500 font-light">High-value partnerships require a elite approach. Here's our 4 Pillars of Trust.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Reliability is Currency.",
                                        body: "High-value campaigns move fast. We prioritize creators who hit deadlines and communicate proactively.",
                                        icon: Clock
                                    },
                                    {
                                        title: "Transparency & Compliance.",
                                        body: "Protect your reputation. Always adhere to FTC guidelines and platform disclosure rules.",
                                        icon: ShieldCheck
                                    },
                                    {
                                        title: "Authenticity First.",
                                        body: "Only accept brands you actually like. Your audience trusts you, and we never want to break that trust.",
                                        icon: Heart
                                    },
                                    {
                                        title: "Close the Loop.",
                                        body: "Timely screenshots and data help us prove ROI—getting you re-booked for the next big campaign.",
                                        icon: BarChart3
                                    }
                                ].map((pillar, idx) => (
                                    <motion.div 
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 group transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 bg-merpara-coral/5 text-merpara-coral rounded-2xl flex items-center justify-center mb-6 group-hover:bg-merpara-coral group-hover:text-white transition-all duration-300">
                                            <pillar.icon size={24} />
                                        </div>
                                        <h4 className="font-bold text-lg text-merpara-dark mb-2 tracking-tight">{pillar.title}</h4>
                                        <p className="text-gray-500 text-sm font-light leading-relaxed">{pillar.body}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ - Right Side */}
                        <div className="py-6">
                            <h3 className="text-4xl font-serif font-bold mb-12 text-merpara-dark">FAQ</h3>
                            <div className="space-y-4">
                                {[
                                    { 
                                        q: "Is there a minimum follower count?", 
                                        a: "Engagement > Numbers. We work with nano-influencers (5k+) who have loyal communities. If your content converts, you qualify." 
                                    },
                                    { 
                                        q: "Do I lose creative control?", 
                                        a: "Never. We provide the commercial key points (the 'Must-Haves'), but the storytelling is 100% yours. You know your audience best." 
                                    },
                                    { 
                                        q: "Can I reject a brand invitation?", 
                                        a: "100% Yes. You have total autonomy. We encourage you to only partner with brands that align with your personal aesthetic." 
                                    },
                                    {
                                        q: "Can I sign up instantly?",
                                        a: "To ensure the highest quality for our brand partners, we operate on an application-only basis. We review every submission within 48 hours."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="border-b border-gray-100 last:border-0">
                                        <button 
                                            onClick={() => toggleFaq(idx)}
                                            className="w-full py-8 flex justify-between items-center text-left group"
                                        >
                                            <span className="font-bold text-2xl text-merpara-dark group-hover:text-merpara-coral transition-colors tracking-tight">
                                                {item.q}
                                            </span>
                                            <motion.div 
                                                animate={{ rotate: openFaq === idx ? 180 : 0 }}
                                                className="text-gray-300 group-hover:text-merpara-coral"
                                            >
                                                <ChevronDown size={28} />
                                            </motion.div>
                                        </button>
                                        <AnimatePresence>
                                            {openFaq === idx && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-gray-500 text-lg font-light leading-relaxed pb-8 pr-12">
                                                        {item.a}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CTA */}
            <section className="py-40 bg-merpara-coral text-white text-center px-6 relative overflow-hidden rounded-t-[60px]">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-50" />
                <div className="container mx-auto relative z-10">
                    <h2 className="text-5xl md:text-7xl font-serif font-black mb-10 tracking-tight leading-none">Ready to Represent <br/>Global Brands?</h2>
                    <p className="text-xl md:text-2xl mb-16 opacity-80 font-light max-w-2xl mx-auto">We are currently accepting applications for our exclusive creator roster. Submit your portfolio for review by our talent specialists. No algorithms—just real connections.</p>
                    <div className="flex flex-col items-center gap-8">
                        <button 
                            onClick={() => window.location.href='mailto:jenny@merpara.com'}
                            className="bg-white text-merpara-coral px-16 py-8 rounded-[3rem] font-bold text-xl hover:bg-merpara-dark hover:text-white transition-all duration-300 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-2 active:translate-y-0"
                        >
                            Submit Application
                        </button>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
