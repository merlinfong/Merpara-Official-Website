import React from 'react';
import { SectionID, PageView } from '../types';
import { Instagram, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';
import { MerparaLogo } from './MerparaLogo';

interface FooterProps {
    activePage: PageView;
}

export const Footer: React.FC<FooterProps> = ({ activePage }) => {
  return (
    <footer id={SectionID.CONTACT} className="bg-black text-white pt-24 pb-12 rounded-t-[40px] mt-0 relative overflow-hidden">
      
      {/* Big Header */}
      <div className="container mx-auto px-6 mb-24 overflow-hidden">
         <div className="text-[12vw] leading-[0.9] font-serif font-black tracking-tighter text-center opacity-90">
             <span className="block">Let's work</span>
             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-merpara-coral to-merpara-purple">together</span>
         </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
               <div className="border border-white/30 rounded-full px-6 py-2 w-fit text-sm font-bold uppercase tracking-widest">
                  Company
               </div>
               <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
               <div className="border border-white/30 rounded-full px-6 py-2 w-fit text-sm font-bold uppercase tracking-widest">
                  Work
               </div>
               <a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors">Fashion</a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors">Marketing</a>
            </div>

             {/* Column 3 */}
            <div className="flex flex-col gap-6">
               <div className="border border-white/30 rounded-full px-6 py-2 w-fit text-sm font-bold uppercase tracking-widest">
                  Legal
               </div>
               <a href="#" className="text-gray-400 hover:text-white transition-colors">Platform Terms</a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>

             {/* Column 4 */}
            <div className="flex flex-col gap-6">
               <div className="border border-white/30 rounded-full px-6 py-2 w-fit text-sm font-bold uppercase tracking-widest">
                  General
               </div>
               <a href="mailto:business@merpara.com" className="text-gray-400 hover:text-white transition-colors">Contact</a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors">Sign In</a>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-10">
           <div className="mb-6 md:mb-0">
               <MerparaLogo className="h-8 w-auto text-white mb-4" />
               <p className="text-gray-500 text-xs">&copy; 2025 Merpara Inc. All rights reserved.</p>
           </div>
           
           <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-white"><Instagram size={18}/></div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-white"><Twitter size={18}/></div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-white"><Linkedin size={18}/></div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-white"><Youtube size={18}/></div>
           </div>
        </div>
      </div>
    </footer>
  );
};