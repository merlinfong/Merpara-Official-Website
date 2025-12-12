import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Button } from './Button';
import { SectionID } from '../types';
import { TeamSection } from './TeamSection';
import { BarChart2, Zap, DollarSign, TrendingUp, Check, XCircle, ArrowRight } from 'lucide-react';

interface MarketingPageProps {
  scrollToSection: (id: SectionID) => void;
}

export const MarketingPage: React.FC<MarketingPageProps> = ({ scrollToSection }) => {
  return (
    <div id={SectionID.TOP} className="w-full bg-white">
        
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-merpara-blue/5 rounded-full"
                    >
                        <span className="w-2 h-2 rounded-full bg-merpara-blue animate-pulse" />
                        <span className="text-merpara-blue font-bold tracking-widest uppercase text-xs">
                            ImpactDrive™ Service
                        </span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-6xl md:text-8xl font-serif font-black text-merpara-dark mb-12 tracking-tight"
                    >
                        Your <span className="text-merpara-blue">ROI</span>-Driven <br/> Strategic Partner
                    </motion.h1>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
                        className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 mb-16"
                    >
                        <div className="text-center">
                            <p className="text-7xl md:text-9xl font-bold text-merpara-blue tracking-tighter">22.0</p>
                            <p className="text-sm font-bold text-merpara-dark uppercase tracking-widest mt-2">Average ROI</p>
                        </div>
                        <div className="w-px h-24 bg-gray-200 hidden md:block" />
                        <div className="text-center">
                            <p className="text-7xl md:text-9xl font-bold text-merpara-blue tracking-tighter">3%</p>
                            <p className="text-sm font-bold text-merpara-dark uppercase tracking-widest mt-2">Service Fee</p>
                        </div>
                    </motion.div>

                    <motion.p 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                        className="text-xl text-gray-500 max-w-2xl mx-auto mb-10"
                    >
                        We don't just execute campaigns; we engineer growth. Our localized teams in the US and China ensure 24/7 execution and measurable results.
                    </motion.p>
                </div>
            </div>
        </section>

        {/* Comparison Section */}
        <section id={SectionID.COMPARISON} className="py-32 bg-gray-50 relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-serif font-bold mb-4">Why ImpactDrive?</h2>
                    <p className="text-gray-500">Breaking industry norms with transparency and performance alignment.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-sm">
                     {/* Traditional Agency */}
                     <div className="p-12 hover:bg-gray-50 transition-colors">
                        <h3 className="font-bold text-xl text-gray-400 mb-8">Traditional Agency</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-base text-gray-500">
                                <XCircle size={20} className="text-red-400 shrink-0" /> High Markups & Hidden Fees
                            </li>
                            <li className="flex items-start gap-4 text-base text-gray-500">
                                <XCircle size={20} className="text-red-400 shrink-0" /> Opaque Pricing Models
                            </li>
                            <li className="flex items-start gap-4 text-base text-gray-500">
                                <XCircle size={20} className="text-red-400 shrink-0" /> Slow Execution
                            </li>
                        </ul>
                     </div>

                     {/* Merpara - Highlighted */}
                     <div className="p-12 bg-merpara-purple/5 relative z-10 transform lg:scale-105 shadow-xl border-x border-gray-200 lg:border-none">
                         <div className="absolute top-0 left-0 w-full h-2 bg-merpara-purple" />
                         <div className="flex justify-between items-center mb-8">
                             <h3 className="font-bold text-2xl text-merpara-dark">Merpara</h3>
                             <div className="bg-merpara-purple text-white p-2 rounded-lg"><Zap size={20} /></div>
                         </div>
                         <ul className="space-y-6 mb-10">
                            <li className="flex items-start gap-4 text-base font-bold text-merpara-dark">
                                <Check size={20} className="text-merpara-purple shrink-0" /> 
                                <span>Transparent Base Fee + Commission</span>
                            </li>
                            <li className="flex items-start gap-4 text-base font-bold text-merpara-dark">
                                <Check size={20} className="text-merpara-purple shrink-0" /> 
                                <span>Pay Influencers Directly</span>
                            </li>
                            <li className="flex items-start gap-4 text-base font-bold text-merpara-dark">
                                <Check size={20} className="text-merpara-purple shrink-0" /> 
                                <span>24h Global Execution Team</span>
                            </li>
                         </ul>
                         <button 
                            onClick={() => scrollToSection(SectionID.PRICING)}
                            className="w-full py-4 rounded-xl border-2 border-merpara-purple text-merpara-purple font-bold uppercase tracking-wider text-sm hover:bg-merpara-purple hover:text-white transition-colors"
                         >
                            View Pricing
                         </button>
                     </div>

                     {/* In-House */}
                     <div className="p-12 hover:bg-gray-50 transition-colors">
                        <h3 className="font-bold text-xl text-gray-400 mb-8">In-House Team</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-base text-gray-500">
                                <XCircle size={20} className="text-orange-400 shrink-0" /> High Fixed Overhead
                            </li>
                            <li className="flex items-start gap-4 text-base text-gray-500">
                                <XCircle size={20} className="text-orange-400 shrink-0" /> Limited Network Access
                            </li>
                            <li className="flex items-start gap-4 text-base text-gray-500">
                                <XCircle size={20} className="text-orange-400 shrink-0" /> Hard to Scale Quickly
                            </li>
                        </ul>
                     </div>
                </div>
            </div>
        </section>

        {/* Pricing Section */}
        <section id={SectionID.PRICING} className="py-32 bg-merpara-dark text-white relative overflow-hidden">
             
             <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-5xl font-serif mb-8">Transparent Pricing</h2>
                        <p className="text-gray-400 text-xl mb-12 max-w-md font-light">
                            Our pricing matches the salary of a single junior employee, but delivers the output of a full expert team.
                        </p>
                        
                        <div className="mb-12">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Monthly Base Fee</p>
                            <div className="flex items-baseline gap-4">
                                <span className="text-7xl font-serif text-merpara-blue">¥13k</span>
                                <span className="text-4xl text-gray-600 font-serif font-light">to</span>
                                <span className="text-7xl font-serif text-merpara-blue">20k</span>
                            </div>
                            <p className="text-gray-500 mt-4 text-sm">*Includes strategy, negotiation, content guidance, and reporting.</p>
                        </div>
                        
                        <div className="border-t border-white/10 pt-8">
                             <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Performance Commission</p>
                             <p className="text-2xl font-serif">Tied strictly to <span className="text-white border-b-2 border-merpara-blue">Sales ROI</span>.</p>
                             <p className="text-gray-500 mt-2 text-sm">We only win when you win.</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-6">
                        <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/5 hover:border-merpara-blue/30 transition-colors">
                            <div className="flex items-center gap-6 mb-4">
                                <div className="p-3 bg-merpara-blue/20 text-merpara-blue rounded-xl"><TrendingUp size={24} /></div>
                                <h4 className="font-bold text-xl">Execution & Management</h4>
                            </div>
                            <p className="text-gray-400 leading-relaxed">We manage the entire lifecycle: from initial brief to contract signing, content approval, and payment facilitation.</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/5 hover:border-merpara-blue/30 transition-colors">
                            <div className="flex items-center gap-6 mb-4">
                                <div className="p-3 bg-merpara-blue/20 text-merpara-blue rounded-xl"><DollarSign size={24} /></div>
                                <h4 className="font-bold text-xl">Payment Handling</h4>
                            </div>
                            <p className="text-gray-400 leading-relaxed">Pay influencers directly to ensure 100% transparency, or use our payment facility for a nominal 3% handling fee.</p>
                        </div>
                    </div>
                </div>
             </div>
        </section>

        <TeamSection filter="marketing" />
    </div>
  );
};