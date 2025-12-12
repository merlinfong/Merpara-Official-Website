import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageView } from '../types';
import { ArrowRight } from 'lucide-react';

interface HomeGatewayProps {
    setPage: (page: PageView) => void;
}

export const HomeGateway: React.FC<HomeGatewayProps> = ({ setPage }) => {
    const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

    return (
        <section id="top" className="h-screen w-full flex flex-col md:flex-row relative overflow-hidden bg-white">
            
            {/* Left Side: Fashion Supply Chain */}
            <div 
                className="relative flex-1 h-1/2 md:h-full group cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/20"
                onMouseEnter={() => setHoveredSide('left')}
                onMouseLeave={() => setHoveredSide(null)}
                onClick={() => setPage(PageView.FASHION)}
            >
                {/* Background Image - Craftsmanship */}
                <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-105">
                    <img 
                        src="https://images.unsplash.com/photo-1596356453261-0d265ae2520a?q=80&w=2070&auto=format&fit=crop" 
                        alt="Fashion Design" 
                        className="w-full h-full object-cover"
                    />
                </div>
                
                {/* Salmon Overlay */}
                <div className={`absolute inset-0 bg-merpara-coral/80 mix-blend-multiply transition-opacity duration-500 ${hoveredSide === 'right' ? 'opacity-90' : 'opacity-60 group-hover:opacity-40'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-merpara-coral/90 via-transparent to-transparent opacity-80" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8 z-10 text-center">
                    <motion.h2 
                        className="text-4xl md:text-6xl font-serif font-black text-white mb-4 drop-shadow-lg"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Concept to <br/> Collection
                    </motion.h2>
                    <p className="text-white/90 text-lg mb-8 max-w-sm font-medium hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                        Design, manufacturing, and global logistics for your brand.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-merpara-coral px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-2 hover:bg-merpara-dark hover:text-white transition-colors shadow-xl"
                    >
                        Build Your Brand <ArrowRight size={16} />
                    </motion.button>
                </div>
            </div>

            {/* Right Side: Marketing */}
            <div 
                className="relative flex-1 h-1/2 md:h-full group cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredSide('right')}
                onMouseLeave={() => setHoveredSide(null)}
                onClick={() => setPage(PageView.MARKETING)}
            >
                {/* Background Image - Influencers/People */}
                <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-105">
                     <img 
                        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2832&auto=format&fit=crop" 
                        alt="Influencers" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Purple Overlay */}
                <div className={`absolute inset-0 bg-merpara-purple/80 mix-blend-multiply transition-opacity duration-500 ${hoveredSide === 'left' ? 'opacity-90' : 'opacity-60 group-hover:opacity-40'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-merpara-purple/90 via-transparent to-transparent opacity-80" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8 z-10 text-center">
                    <motion.h2 
                        className="text-4xl md:text-6xl font-serif font-black text-white mb-4 drop-shadow-lg"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        ROI-Driven <br/> Growth
                    </motion.h2>
                    <p className="text-white/90 text-lg mb-8 max-w-sm font-medium hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                        Strategic influencer marketing campaigns engineered for sales.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-merpara-purple px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-2 hover:bg-merpara-dark hover:text-white transition-colors shadow-xl"
                    >
                        Start Campaign <ArrowRight size={16} />
                    </motion.button>
                </div>
            </div>

            {/* Central Logo Overlay (Optional style element) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none mix-blend-overlay opacity-50 hidden md:block">
                 <div className="w-[400px] h-[400px] border border-white/20 rounded-full" />
            </div>

        </section>
    );
};