import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { SectionID } from '../types';
import { TeamSection } from './TeamSection';
import { 
  BarChart2, Zap, DollarSign, TrendingUp, Check, 
  ArrowRight, Users, Globe, Target, FileText, 
  ShieldCheck, PieChart, Star, Mail, MessageCircle, Layers
} from 'lucide-react';

interface MarketingPageProps {
  scrollToSection: (id: SectionID) => void;
}

type Audience = 'brand' | 'creator';

export const MarketingPage: React.FC<MarketingPageProps> = ({ scrollToSection }) => {
  const [audience, setAudience] = useState<Audience>('brand');

  return (
    <div id={SectionID.TOP} className="w-full bg-white pt-20">
        
        {/* Audience Toggle */}
        <div className="sticky top-20 z-40 bg-white/95 backdrop-blur border-b border-gray-100 py-4">
            <div className="container mx-auto px-6 flex justify-center">
                <div className="bg-gray-100 p-1.5 rounded-full flex gap-2 relative">
                    <button 
                        onClick={() => setAudience('brand')}
                        className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 relative z-10 ${audience === 'brand' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                        For Brands
                    </button>
                    <button 
                        onClick={() => setAudience('creator')}
                        className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 relative z-10 ${audience === 'creator' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                        For Creators
                    </button>
                    {/* Sliding Background */}
                    <div 
                        className={`absolute top-1.5 bottom-1.5 rounded-full bg-merpara-purple transition-all duration-300 ease-spring ${audience === 'brand' ? 'left-1.5 w-[115px]' : 'left-[135px] w-[125px]'}`}
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
                 <h1 className="text-5xl md:text-7xl font-serif font-black text-merpara-dark mb-8">
                     Elevate Your Influence, <br/>
                     <span className="text-merpara-purple">Ignite Shared Success.</span>
                 </h1>
                 <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed">
                    Merpara is an international influencer marketing agency focused on ROI and sales conversion. We combine influencer content, sales conversion, and long-term brand assets to help <span className="text-merpara-dark font-medium">global brands</span> achieve measurable, replicable growth in international markets.
                 </p>
                 <div className="flex justify-center gap-8 text-sm font-bold uppercase tracking-widest text-merpara-purple">
                    <span>Transparent</span>
                    <span>Data-Driven</span>
                    <span>Result-Oriented</span>
                 </div>
            </section>

            {/* 2. Why Merpara */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-merpara-dark mb-4">Why Merpara?</h2>
                        <div className="w-16 h-1 bg-merpara-purple mx-auto"/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "ROI Oriented", desc: "Every collaboration focuses on sales and conversion, not just vanity metrics.", icon: Target },
                            { title: "Transparent Pricing", desc: "No markups on influencer fees. You pay what they ask.", icon: DollarSign },
                            { title: "Global Resources", desc: "Dynamic matching across key global markets, not limited to a static database.", icon: Globe },
                            { title: "Pro Execution", desc: "We handle negotiation and management, reducing your internal workload.", icon: ShieldCheck }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-merpara-purple/10 text-merpara-purple rounded-xl flex items-center justify-center mb-6">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-merpara-dark">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Services */}
            <section className="py-20 container mx-auto px-6">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-serif font-bold mb-8">Our Services</h2>
                        <ul className="space-y-6">
                            {[
                                "Strategy & Planning: Market analysis, KPI setting, content structure.",
                                "Selection & Matching: Data-backed selection, avoiding 'fake' followers.",
                                "Content & Creative: Commercial logic, quality control, brand consistency.",
                                "Execution & Management: Contract coordination, schedule management.",
                                "Data Tracking: Tracking exposure, engagement, and sales metrics."
                            ].map((service, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-merpara-purple text-white flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</div>
                                    <p className="text-gray-600 text-lg">{service}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gray-100 rounded-[40px] h-[500px] overflow-hidden relative shadow-inner">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Strategy" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-merpara-purple/20 mix-blend-multiply" />
                    </div>
                </div>
            </section>

            {/* 4. Process */}
            <section className="py-20 bg-merpara-dark text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif font-bold mb-16 text-center">Service Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                         {[
                             { step: "01", title: "Needs Communication", desc: "Define goals, budget, timeline." },
                             { step: "02", title: "Strategy & Confirm", desc: "Proposal submission and influencer selection." },
                             { step: "03", title: "Deposit & Contract", desc: "Pre-deposit service fee & influencer fee. Sign contract." },
                             { step: "04", title: "Execution", desc: "Merpara manages all communication." },
                             { step: "05", title: "Publish & Monitor", desc: "Ensure timely publication and optimization." },
                             { step: "06", title: "Report & Review", desc: "Full performance report for future reference." }
                         ].map((item, i) => (
                             <div key={i} className="border border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-colors">
                                 <div className="text-merpara-purple font-black text-5xl mb-4 opacity-50">{item.step}</div>
                                 <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                                 <p className="text-gray-400 text-sm">{item.desc}</p>
                             </div>
                         ))}
                    </div>
                </div>
            </section>

            {/* 5. Pricing */}
            <section id="pricing" className="py-20 container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-white border border-merpara-purple/20 rounded-[40px] shadow-xl overflow-hidden">
                    <div className="bg-merpara-purple p-8 text-center text-white">
                        <h2 className="text-3xl font-serif font-bold">Pricing Model</h2>
                        <p className="opacity-80">Transparent, simple, and aligned with your success.</p>
                    </div>
                    <div className="p-12 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        <div className="text-center p-4">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"><Users size={32}/></div>
                            <h3 className="font-bold text-lg mb-2">Service Fee</h3>
                            <p className="text-3xl font-black text-merpara-dark mb-1">$200<span className="text-sm font-normal text-gray-400">/influencer</span></p>
                            <p className="text-xs text-gray-500 mb-4">First time collaboration</p>
                            <p className="text-3xl font-black text-merpara-dark mb-1">$100<span className="text-sm font-normal text-gray-400">/influencer</span></p>
                            <p className="text-xs text-gray-500">Repeat collaboration</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"><TrendingUp size={32}/></div>
                            <h3 className="font-bold text-lg mb-2">Commission</h3>
                            <p className="text-gray-600 text-sm px-4">Based on sales generated via influencers. We agree on a percentage sharing model.</p>
                            <div className="mt-4 inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Shared Success</div>
                        </div>
                        <div className="text-center p-4">
                             <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"><DollarSign size={32}/></div>
                             <h3 className="font-bold text-lg mb-2">Influencer Fee</h3>
                             <p className="text-gray-600 text-sm px-4">Pass-through payment. You deposit, we pay. No hidden fees.</p>
                             <div className="mt-4 text-xs text-gray-400">Transparent Records</div>
                        </div>
                    </div>
                </div>
            </section>

             {/* 6. Philosophy & Contact */}
            <section className="py-20 bg-gray-50 text-center px-6">
                <div className="container mx-auto">
                    <p className="text-2xl font-serif italic text-gray-500 mb-8 max-w-2xl mx-auto">
                        "We don't pursue short-term volume. We insist on measurable results, replicable models, and sustainable partnerships."
                    </p>
                    <a 
                        href="mailto:business@merpara.com" 
                        className="inline-flex items-center gap-3 bg-merpara-dark text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-colors"
                    >
                        <Mail size={20} /> business@merpara.com
                    </a>
                </div>
            </section>

            <TeamSection filter="marketing" />
        </motion.div>
    );
}

const CreatorContent: React.FC = () => {
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
                    <div className="inline-block px-4 py-2 bg-merpara-coral/10 text-merpara-coral font-bold rounded-full text-xs uppercase tracking-widest mb-6">For Creators</div>
                    <h1 className="text-5xl md:text-7xl font-serif font-black text-merpara-dark mb-8">
                        Elevate Your Influence, <br/>
                        <span className="text-merpara-coral">Ignite Shared Success.</span>
                    </h1>
                    <p className="text-xl text-gray-500 mb-12 leading-relaxed">
                        <span className="font-bold text-merpara-dark">Work With Merpara.</span> We partner with creators worldwide to deliver high-performing campaigns for brands expanding globally. 
                        We keep collaboration clear, respectful, and efficient—so you can focus on creating.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Button variant="secondary" onClick={() => window.location.href='mailto:jenny@merpara.com'}>Join the Creator Pool</Button>
                        <Button variant="outline" onClick={() => window.location.href='mailto:jenny@merpara.com'}>Get Opportunities</Button>
                    </div>
                 </div>
            </section>

            {/* 2. Why Partner */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif font-bold text-center mb-16">Why Partner With Merpara?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                        {[
                            { title: "Clear Briefs", desc: "Structured briefs with deliverables, timelines, and key messages. No guessing games.", icon: FileText },
                            { title: "Better Matching", desc: "We prioritize fit over volume. You'll never be forced into a bad product fit.", icon: Check },
                            { title: "Creator-First", desc: "We define compliance lines but leave room for your authentic voice and storytelling.", icon: Star },
                            { title: "Long-Term", desc: "Strong performance leads to recurring projects and schedule stability.", icon: Layers },
                            { title: "Streamlined", desc: "Dedicated campaign managers consolidate feedback to keep revisions efficient.", icon: MessageCircle },
                            { title: "Transparent", desc: "Compensation, deadlines, and usage terms confirmed before work begins.", icon: ShieldCheck }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="shrink-0 w-10 h-10 bg-merpara-coral/10 text-merpara-coral rounded-full flex items-center justify-center">
                                    <item.icon size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Categories */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-serif font-bold mb-10">What We Typically Work On</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Beauty & Personal Care", "Consumer Electronics", "Fashion & Lifestyle",
                            "Health & Wellness", "Home & Everyday Essentials"
                        ].map((cat, i) => (
                            <span key={i} className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-600 font-medium shadow-sm">
                                {cat}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. How It Works */}
            <section className="py-20 container mx-auto px-6">
                <h2 className="text-4xl font-serif font-bold text-center mb-16">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { step: "1", title: "Apply", desc: "Submit your niches and links to our pool." },
                        { step: "2", title: "Invite", desc: "Receive invite with deliverables & pay." },
                        { step: "3", title: "Sign", desc: "Confirm agreement & schedule." },
                        { step: "4", title: "Delivery", desc: "Receive product samples (if needed)." },
                        { step: "5", title: "Create", desc: "Submit drafts, refine, publish." },
                        { step: "6", title: "Pay", desc: "Submit proof, get paid." }
                    ].map((item, i) => (
                        <div key={i} className="bg-gray-50 p-8 rounded-2xl relative overflow-hidden group hover:bg-merpara-coral/5 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-merpara-coral">{item.step}</div>
                            <h3 className="font-bold text-xl mb-2 relative z-10">{item.title}</h3>
                            <p className="text-gray-500 relative z-10">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Requirements & FAQ */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-6">What We Ask</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-merpara-coral mt-2"/>Deliver on time & follow brief</li>
                            <li className="flex gap-3 text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-merpara-coral mt-2"/>Respect #ad disclosure guidelines</li>
                            <li className="flex gap-3 text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-merpara-coral mt-2"/>No misleading claims</li>
                            <li className="flex gap-3 text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-merpara-coral mt-2"/>Provide basic reporting</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-6">FAQ</h3>
                        <div className="space-y-6">
                            {[
                                { q: "Need a large following?", a: "No. Fit & quality matter most." },
                                { q: "Do you control my script?", a: "No. We provide key messages, you keep your tone." },
                                { q: "Can I decline offers?", a: "Absolutely. You have final choice." }
                            ].map((faq, i) => (
                                <div key={i}>
                                    <p className="font-bold text-merpara-dark mb-1">{faq.q}</p>
                                    <p className="text-gray-500 text-sm">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CTA */}
            <section className="py-20 bg-merpara-coral text-white text-center px-6">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-serif font-bold mb-8">Ready to Collaborate?</h2>
                    <p className="text-xl mb-10 opacity-90">Join our creator pool and we'll reach out when a match is found.</p>
                    <button 
                        onClick={() => window.location.href='mailto:jenny@merpara.com'}
                        className="bg-white text-merpara-coral px-10 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-colors shadow-xl"
                    >
                        Join Creator Pool
                    </button>
                    <p className="mt-8 text-sm opacity-70">Questions? Email jenny@merpara.com</p>
                </div>
            </section>
        </motion.div>
    );
}