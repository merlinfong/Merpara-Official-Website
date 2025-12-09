import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowLeft, ShoppingBag, BarChart2 } from 'lucide-react';
import { PageView, SectionID } from '../types';

interface NavBarProps {
  activePage: PageView;
  setActivePage: (page: PageView) => void;
  scrollToSection: (id: SectionID) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ activePage, setActivePage, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = activePage === PageView.HOME;

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          pointer-events-auto
          relative flex items-center justify-between
          backdrop-blur-2xl bg-white/80
          border border-white/40 shadow-xl shadow-merpara-blue/5
          rounded-full transition-all duration-500
          ${isScrolled ? 'px-4 py-3 min-w-[320px] md:min-w-[600px]' : 'px-8 py-4 min-w-[340px] md:min-w-[800px]'}
        `}
      >
        {/* Logo / Back Area */}
        <div 
            className="flex items-center gap-2 cursor-pointer font-sans group"
            onClick={() => setActivePage(PageView.HOME)}
        >
          {!isHome ? (
            <div className="flex items-center gap-2 text-merpara-dark hover:text-merpara-blue transition-colors">
                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-merpara-blue">
                    <ArrowLeft size={16} />
                </div>
                <span className="font-bold hidden md:block">Back</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-merpara-blue to-merpara-purple flex items-center justify-center text-white font-bold text-lg">
                    M
                </div>
                <span className="font-bold text-merpara-dark hidden md:block tracking-tight">MERPARA</span>
            </div>
          )}
        </div>

        {/* Dynamic Center Navigation */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
           {!isHome && (
             <div className="flex items-center gap-1 bg-merpara-gray/50 rounded-full p-1 border border-white/50">
                <button
                   onClick={() => scrollToSection(SectionID.TOP)}
                   className="px-4 py-1.5 rounded-full text-xs font-semibold text-merpara-dark hover:bg-white transition-colors"
                >
                   Overview
                </button>
                <button
                   onClick={() => scrollToSection(SectionID.PROCESS)}
                   className="px-4 py-1.5 rounded-full text-xs font-semibold text-gray-500 hover:text-merpara-dark hover:bg-white transition-colors"
                >
                   Process
                </button>
                <button
                   onClick={() => scrollToSection(SectionID.PRICING)}
                   className="px-4 py-1.5 rounded-full text-xs font-semibold text-gray-500 hover:text-merpara-dark hover:bg-white transition-colors"
                >
                   Pricing
                </button>
                <button
                   onClick={() => scrollToSection(SectionID.TEAM)}
                   className="px-4 py-1.5 rounded-full text-xs font-semibold text-gray-500 hover:text-merpara-dark hover:bg-white transition-colors"
                >
                   Team
                </button>
             </div>
           )}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
           {isHome && (
             <>
               <button 
                 onClick={() => setActivePage(PageView.FASHION)}
                 className="text-sm font-medium text-gray-600 hover:text-merpara-blue transition-colors"
               >
                 Fashion Supply
               </button>
               <button 
                 onClick={() => setActivePage(PageView.MARKETING)}
                 className="text-sm font-medium text-gray-600 hover:text-merpara-blue transition-colors"
               >
                 ImpactDrive
               </button>
             </>
           )}
           <button 
             onClick={() => scrollToSection(SectionID.CONTACT)}
             className={`
                px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activePage === PageView.FASHION ? 'bg-black text-white hover:bg-merpara-coral' : ''}
                ${activePage === PageView.MARKETING ? 'bg-merpara-blue text-white hover:bg-merpara-purple' : ''}
                ${activePage === PageView.HOME ? 'bg-merpara-dark text-white hover:bg-gray-800' : ''}
             `}
           >
             Contact Us
           </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-merpara-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="absolute top-full mt-4 left-0 right-0 bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl p-4 flex flex-col gap-2 border border-white/40 overflow-hidden"
          >
             <button
                onClick={() => { setActivePage(PageView.FASHION); setMobileMenuOpen(false); }}
                className="p-4 rounded-2xl text-left font-medium flex items-center gap-3 bg-gray-50 text-merpara-dark"
              >
                <div className="bg-black text-white p-2 rounded-full"><ShoppingBag size={18} /></div>
                Fashion Supply Chain
             </button>
             <button
                onClick={() => { setActivePage(PageView.MARKETING); setMobileMenuOpen(false); }}
                className="p-4 rounded-2xl text-left font-medium flex items-center gap-3 bg-gray-50 text-merpara-dark"
              >
                <div className="bg-merpara-blue text-white p-2 rounded-full"><BarChart2 size={18} /></div>
                ImpactDrive Marketing
             </button>
             <div className="h-px bg-gray-200 my-2" />
             <button 
               onClick={() => { scrollToSection(SectionID.CONTACT); setMobileMenuOpen(false); }}
               className="w-full bg-merpara-dark text-white py-4 rounded-xl font-medium"
             >
               Start Project
             </button>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};