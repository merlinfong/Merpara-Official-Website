import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { PageView } from '../types';
import { ArrowRight, ShoppingBag, BarChart2 } from 'lucide-react';

interface HomeGatewayProps {
    setPage: (page: PageView) => void;
}

export const HomeGateway: React.FC<HomeGatewayProps> = ({ setPage }) => {
    return (
        <section id="top" className="min-h-screen flex flex-col items-center justify-center relative pt-20 pb-10">
            
            {/* Background Ambience */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-merpara-blue/10 rounded-full blur-[120px]" 
                />
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 12, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-merpara-coral/10 rounded-full blur-[120px]" 
                />
            </div>

            <div className="container mx-auto px-6 z-10 text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-serif font-semibold text-merpara-dark mb-6">
                        Empower Your <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-merpara-blue to-merpara-purple">Influence</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12">
                        Merpara is your strategic partner connecting global creators with agile supply chains and ROI-driven growth.
                    </p>
                </motion.div>

                {/* The Split Choice */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    
                    {/* Option 1: Fashion */}
                    <GlassCard 
                        onClick={() => setPage(PageView.FASHION)}
                        hoverEffect 
                        className="group relative h-[400px] md:h-[500px] flex flex-col items-center justify-center p-8 text-center cursor-pointer border-2 border-transparent hover:border-black/5 transition-colors"
                    >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                             <img src="https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=2059&auto=format&fit=crop" className="w-full h-full object-cover opacity-10" alt="Fashion bg" />
                        </div>
                        
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                            <ShoppingBag className="text-black" size={32} />
                        </div>
                        
                        <h2 className="text-3xl font-serif font-bold text-merpara-dark mb-3">Fashion Supply Chain</h2>
                        <p className="text-gray-500 mb-8 max-w-sm">
                            Transform your influence into a distinctive brand. 
                            From <span className="text-merpara-blue font-semibold">0 to 1</span>, we handle design, manufacturing, and logistics.
                        </p>
                        
                        <div className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-merpara-dark group-hover:gap-4 transition-all">
                            Start Your Brand <ArrowRight size={16} />
                        </div>
                    </GlassCard>

                    {/* Option 2: Marketing */}
                    <GlassCard 
                        onClick={() => setPage(PageView.MARKETING)}
                        hoverEffect 
                        className="group relative h-[400px] md:h-[500px] flex flex-col items-center justify-center p-8 text-center cursor-pointer border-2 border-transparent hover:border-merpara-blue/20 transition-colors"
                    >
                         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                             <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" className="w-full h-full object-cover opacity-10" alt="Data bg" />
                        </div>

                        <div className="w-20 h-20 bg-merpara-blue/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                            <BarChart2 className="text-merpara-blue" size={32} />
                        </div>
                        
                        <h2 className="text-3xl font-serif font-bold text-merpara-dark mb-3">ImpactDrive Marketing</h2>
                        <p className="text-gray-500 mb-8 max-w-sm">
                            Your trusted ROI-driven partner. 
                            <span className="text-merpara-coral font-semibold"> 24h Global Team</span> optimizing your influencer campaigns.
                        </p>
                        
                        <div className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-merpara-blue group-hover:gap-4 transition-all">
                            Boost Your ROI <ArrowRight size={16} />
                        </div>
                    </GlassCard>

                </div>

                 {/* Industry Selector (Future Proofing) */}
                <div className="mt-12 flex justify-center gap-4 opacity-50">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Other Industries coming soon:</span>
                    <span className="text-xs font-medium text-gray-400">Jewelry</span>
                    <span className="text-xs font-medium text-gray-400">Beauty</span>
                    <span className="text-xs font-medium text-gray-400">Home</span>
                </div>
            </div>
        </section>
    );
};