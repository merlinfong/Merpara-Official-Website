import React from 'react';
import { SectionID, PageView } from '../types';
import { Mail, Phone } from 'lucide-react';
import { Button } from './Button';

interface FooterProps {
    activePage: PageView;
}

export const Footer: React.FC<FooterProps> = ({ activePage }) => {
  return (
    <footer id={SectionID.CONTACT} className="bg-merpara-dark text-white pt-24 pb-12 rounded-t-[40px] relative overflow-hidden">
      
      {/* Abstract bg shapes */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-merpara-blue via-merpara-purple to-merpara-coral opacity-50" />
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-merpara-blue/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-merpara-coral/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-5xl font-serif mb-6">Let's Build.</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
                {activePage === PageView.FASHION 
                    ? "Ready to launch your collection? Let's discuss your brand vision."
                    : activePage === PageView.MARKETING
                    ? "Maximize your ROI today. Partner with a transparent, data-driven team."
                    : "Whether you need strategic marketing or a complete supply chain solution, Merpara is your partner."
                }
            </p>
            <div className="flex flex-col gap-4">
              <a href="mailto:business@merpara.com" className="flex items-center gap-4 text-xl hover:text-merpara-blue transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-merpara-blue transition-colors">
                  <Mail size={18} />
                </div>
                <span>business@merpara.com</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-xl hover:text-merpara-coral transition-colors group">
                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-merpara-coral transition-colors">
                  <Phone size={18} />
                </div>
                <span>+86 18924681105</span>
              </a>
            </div>
          </div>

          <div>
            <form className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-merpara-blue transition-colors" />
                    <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-merpara-blue transition-colors" />
                </div>
                <div className="mb-4">
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-merpara-blue transition-colors appearance-none">
                        <option className="bg-merpara-dark">I'm interested in...</option>
                        <option className="bg-merpara-dark">Fashion Supply Chain</option>
                        <option className="bg-merpara-dark">Influencer Marketing</option>
                        <option className="bg-merpara-dark">Partnership</option>
                    </select>
                </div>
                <div className="mb-6">
                    <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-merpara-blue transition-colors"></textarea>
                </div>
                <Button fullWidth className="bg-white text-merpara-dark hover:bg-gray-200 shadow-none">Send Message</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2025 Merpara. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
        </div>
      </div>
    </footer>
  );
};