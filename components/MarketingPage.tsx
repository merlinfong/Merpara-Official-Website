import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Button } from './Button';
import { SectionID } from '../types';
import { TeamSection } from './TeamSection';
import { BarChart2, Zap, DollarSign, TrendingUp, Check, XCircle } from 'lucide-react';

interface MarketingPageProps {
  scrollToSection: (id: SectionID) => void;
}

export const MarketingPage: React.FC<MarketingPageProps> = ({ scrollToSection }) => {
  return (
    <div id={SectionID.TOP} className="w-full">
        
        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-[#fcfcfc]">
            {/* Liquid Background Blobs */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-merpara-blue/10 rounded-full blur-[120px] mix-blend-multiply" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-merpara-coral/10 rounded-full blur-[100px] mix-blend-multiply" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.span 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    className="inline-block mb-4 text-merpara-blue font-bold tracking-widest uppercase text-sm"
                >
                    ImpactDrive™ Service
                </motion.span>
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
                    className="text-5xl lg:text-7xl font-serif font-bold text-merpara-dark mb-6"
                >
                    Your ROI-Driven <br/> Strategic Partner
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                    className="text-xl text-gray-500 max-w-2xl mx-auto mb-10"
                >
                    We don't just execute campaigns; we engineer growth. Our localized teams in the US and China ensure 24/7 execution and measurable results.
                </motion.p>
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex justify-center gap-6">
                    <div className="text-center">
                        <p className="text-4xl font-bold text-merpara-coral">22.0</p>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Avg ROI</p>
                    </div>
                    <div className="w-px bg-gray-200 h-12" />
                    <div className="text-center">
                        <p className="text-4xl font-bold text-merpara-blue">3%</p>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Low Service Fee</p>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Comparison Section */}
        <section id={SectionID.COMPARISON} className="py-24 bg-white relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold">Why ImpactDrive?</h2>
                    <p className="text-gray-500 mt-2">Breaking industry norms with transparency and performance alignment.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                     {/* Traditional Agency */}
                     <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 opacity-70">
                        <h3 className="font-bold text-xl text-gray-400 mb-6">Traditional Agency</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-2 text-sm text-gray-500">
                                <XCircle size={16} className="text-red-400 mt-0.5 shrink-0" /> High Markups & Hidden Fees
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-500">
                                <XCircle size={16} className="text-red-400 mt-0.5 shrink-0" /> Opaque Pricing Models
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-500">
                                <XCircle size={16} className="text-red-400 mt-0.5 shrink-0" /> Slow Execution
                            </li>
                        </ul>
                     </div>

                     {/* Merpara - Highlighted */}
                     <GlassCard className="relative transform scale-105 border-merpara-blue/30 shadow-2xl shadow-merpara-blue/10 z-10">
                        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-merpara-blue to-merpara-purple" />
                        <div className="p-8">
                             <div className="flex justify-between items-center mb-6">
                                 <h3 className="font-bold text-2xl text-merpara-dark">Merpara ImpactDrive</h3>
                                 <div className="bg-merpara-blue/10 p-2 rounded-lg text-merpara-blue"><Zap size={20} /></div>
                             </div>
                             <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                                    <Check size={16} className="text-green-500 mt-0.5 shrink-0" /> 
                                    <span>Transparent Base Fee + ROI Commission</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                                    <Check size={16} className="text-green-500 mt-0.5 shrink-0" /> 
                                    <span>Pay Influencers Directly (No Markup)</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                                    <Check size={16} className="text-green-500 mt-0.5 shrink-0" /> 
                                    <span>24h Global Execution Team</span>
                                </li>
                             </ul>
                             <Button fullWidth onClick={() => scrollToSection(SectionID.PRICING)}>See Pricing</Button>
                        </div>
                     </GlassCard>

                     {/* In-House */}
                     <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 opacity-70">
                        <h3 className="font-bold text-xl text-gray-400 mb-6">In-House Team</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-2 text-sm text-gray-500">
                                <XCircle size={16} className="text-orange-400 mt-0.5 shrink-0" /> High Fixed Salary Overhead
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-500">
                                <XCircle size={16} className="text-orange-400 mt-0.5 shrink-0" /> Limited Network Access
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-500">
                                <XCircle size={16} className="text-orange-400 mt-0.5 shrink-0" /> Hard to Scale Quickly
                            </li>
                        </ul>
                     </div>
                </div>
            </div>
        </section>

        {/* Pricing Section */}
        <section id={SectionID.PRICING} className="py-24 bg-merpara-dark text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-merpara-blue/20 rounded-full blur-[150px]" />
             
             <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-serif mb-6">Transparent Pricing</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Our pricing matches the salary of a single junior employee, but delivers the output of a full expert team.
                        </p>
                        
                        <div className="mb-10">
                            <p className="text-sm font-bold text-merpara-coral uppercase tracking-widest mb-2">Monthly Base Fee</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-6xl font-serif">¥13k</span>
                                <span className="text-2xl text-gray-500">-</span>
                                <span className="text-6xl font-serif">20k</span>
                            </div>
                            <p className="text-gray-500 mt-2 text-sm">*Includes strategy, negotiation, content guidance, and reporting.</p>
                        </div>
                        
                        <div>
                             <p className="text-sm font-bold text-merpara-blue uppercase tracking-widest mb-2">Performance Commission</p>
                             <p className="text-xl">Tied strictly to <span className="text-white font-bold border-b border-merpara-blue">Sales ROI</span>.</p>
                             <p className="text-gray-500 mt-2 text-sm">We only win when you win.</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col justify-center gap-6">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-2 bg-merpara-blue rounded-lg"><TrendingUp size={20} /></div>
                                <h4 className="font-bold">Execution & Management</h4>
                            </div>
                            <p className="text-gray-400 text-sm">We manage the entire lifecycle: from initial brief to contract signing, content approval, and payment facilitation.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-2 bg-merpara-coral rounded-lg"><DollarSign size={20} /></div>
                                <h4 className="font-bold">Payment Handling</h4>
                            </div>
                            <p className="text-gray-400 text-sm">Pay influencers directly to ensure 100% transparency, or use our payment facility for a nominal 3% handling fee.</p>
                        </div>
                    </div>
                </div>
             </div>
        </section>

        <TeamSection filter="marketing" />
    </div>
  );
};