import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PageView, SectionID } from '../types';
import { MerparaLogo } from './MerparaLogo';

interface NavBarProps {
  activePage: PageView;
  setActivePage: (page: PageView) => void;
  scrollToSection: (id: SectionID) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ activePage, setActivePage, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', action: () => { setActivePage(PageView.HOME); scrollToSection(SectionID.TOP); } },
    { label: 'Brand Incubation', action: () => setActivePage(PageView.FASHION) },
    { label: 'Global Marketing', action: () => setActivePage(PageView.MARKETING) },
    { label: 'About Us', action: () => scrollToSection(SectionID.TEAM) },
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-white py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="cursor-pointer z-50"
            onClick={() => setActivePage(PageView.HOME)}
          >
             <MerparaLogo className="h-8 w-auto text-merpara-dark" />
          </div>

          {/* Desktop Nav - Centered */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link, idx) => (
              <button 
                key={idx}
                onClick={link.action}
                className="text-sm font-medium text-gray-600 hover:text-merpara-dark transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-6">
             <button 
                onClick={() => scrollToSection(SectionID.CONTACT)}
                className="group flex items-center gap-2 bg-[#ccff00] text-merpara-dark px-6 py-3 rounded-full text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: '#f2994a' }} // Using Merpara Orange instead of Influencer Green for brand consistency
             >
                Get in touch
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
             </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 text-merpara-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 flex flex-col gap-6"
        >
            {navLinks.map((link, idx) => (
              <button 
                key={idx}
                onClick={() => { link.action(); setMobileMenuOpen(false); }}
                className="text-2xl font-serif font-bold text-left text-merpara-dark border-b border-gray-100 pb-4"
              >
                {link.label}
              </button>
            ))}
            <button 
                onClick={() => { scrollToSection(SectionID.CONTACT); setMobileMenuOpen(false); }}
                className="mt-4 w-full bg-merpara-coral text-white py-4 rounded-full font-bold text-lg"
            >
                Get in touch
            </button>
        </motion.div>
      )}
    </>
  );
};