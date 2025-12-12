import React from 'react';
import { SectionID, TeamMember } from '../types';

interface TeamSectionProps {
    filter?: 'fashion' | 'marketing';
}

// Updated data based on new content
const allMembers: TeamMember[] = [
  {
    name: "Merlin Feng",
    role: "Founder & CEO",
    description: "Deep expertise in cross-border e-commerce and influencer marketing. Focuses on building growth systems connecting brands with global consumers.",
    location: "CN/US",
    tags: ['fashion', 'marketing'],
    imageSeed: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Jenny Paola Cubillos",
    role: "Marketing Lead",
    description: "Responsible for overall influencer marketing project planning and execution coordination, ensuring efficient cross-regional team collaboration.",
    location: "CO",
    tags: ['marketing'],
    imageSeed: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Matthew Joy",
    role: "Co-founder & Content Strategist",
    description: "Develops clear, convertible content strategies from brand and user perspectives.",
    location: "US",
    tags: ['marketing'],
    imageSeed: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Felicia Joy",
    role: "Creative Director",
    description: "Controls creative quality, ensuring content aligns with platform ecology and brand consistency.",
    location: "US",
    tags: ['marketing'],
    imageSeed: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
  },
  {
    name: "Jhon Cubillos",
    role: "Influencer Outreach Specialist",
    description: "Responsible for global influencer resource expansion and negotiation, building long-term stable partnerships.",
    location: "CO",
    tags: ['marketing'],
    imageSeed: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Jenny Rodriguez",
    role: "Influencer Marketing Manager",
    description: "Responsible for project execution, progress management, and results review, ensuring every collaboration is evaluated and optimized.",
    location: "CO",
    tags: ['marketing'],
    imageSeed: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  },
  {
    name: "Anastasia Cui",
    role: "Co-Founder & COO",
    description: "Leads product development and China supply-chain operations.",
    location: "CN",
    tags: ['fashion'],
    imageSeed: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    name: "Will Guo",
    role: "Fashion Design Lead",
    description: "Translates aesthetic into production-ready designs. Fabrics, cost, and quality.",
    location: "CN",
    tags: ['fashion'],
    imageSeed: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Linuccia Zhang",
    role: "Merchandising Lead",
    description: "Builds season plans and pricing ladders for commercial sharpness.",
    location: "CN",
    tags: ['fashion'],
    imageSeed: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1972&auto=format&fit=crop"
  }
];

export const TeamSection: React.FC<TeamSectionProps> = ({ filter }) => {
  const displayMembers = filter 
    ? allMembers.filter(m => m.tags.includes(filter))
    : allMembers;

  const hoverColorClass = filter === 'fashion' 
    ? "group-hover:border-merpara-coral" 
    : filter === 'marketing'
    ? "group-hover:border-merpara-purple"
    : "group-hover:border-merpara-blue";
    
  const hoverTextClass = filter === 'fashion'
    ? "text-merpara-coral"
    : filter === 'marketing'
    ? "text-merpara-purple"
    : "text-merpara-blue";

  return (
    <section id={SectionID.TEAM} className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
            <h2 className="text-5xl font-serif font-bold text-merpara-dark mb-6">Our Team</h2>
            <p className="text-gray-500 max-w-2xl text-lg">
                {filter === 'fashion' 
                    ? "A fusion of Western aesthetics and Chinese manufacturing precision." 
                    : "A global network of strategists ensuring your brand's voice is heard."}
            </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
          {displayMembers.map((member, index) => (
            <div key={index} className="group w-64 text-center cursor-default">
              <div className={`w-48 h-48 mx-auto bg-gray-100 mb-8 overflow-hidden relative border-4 border-transparent transition-all duration-300 rounded-full ${hoverColorClass}`}>
                 <img 
                    src={member.imageSeed} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
                 />
              </div>
              
              <h3 className="font-serif font-bold text-xl text-merpara-dark mb-1">{member.name}</h3>
              <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${hoverTextClass}`}>{member.role}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{member.description}</p>
              <span className="inline-block px-2 py-1 bg-gray-50 border border-gray-100 rounded text-[10px] font-mono text-gray-400">
                {member.location}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};