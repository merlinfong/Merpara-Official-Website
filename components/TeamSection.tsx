import React from 'react';
import { SectionID, TeamMember } from '../types';

interface TeamSectionProps {
    filter?: 'fashion' | 'marketing';
}

const allMembers: TeamMember[] = [
  {
    name: "Merlin Feng",
    role: "Founder & CEO",
    description: "Drives cross-border strategy and ROI execution. Connecting East & West.",
    location: "CN/US",
    tags: ['fashion', 'marketing'],
    imageSeed: "merlin"
  },
  {
    name: "Matthew Joy",
    role: "Co-Founder & Strategist",
    description: "U.S. influencer partnership expert aligning content roadmap with business goals.",
    location: "US",
    tags: ['fashion', 'marketing'],
    imageSeed: "matthew"
  },
  {
    name: "Anastasia Cui",
    role: "Co-Founder & COO",
    description: "Leads product development and China supply-chain operations.",
    location: "CN",
    tags: ['fashion'],
    imageSeed: "anastasia"
  },
  {
    name: "Felicia Joy",
    role: "Creative Director",
    description: "Turns brand DNA into cohesive visuals that actually convert.",
    location: "US",
    tags: ['marketing'],
    imageSeed: "felicia"
  },
  {
    name: "Jenny Paola",
    role: "Marketing Lead",
    description: "Designs global influencer strategies for clear growth.",
    location: "CO",
    tags: ['marketing', 'fashion'],
    imageSeed: "jenny"
  },
  {
    name: "Will Guo",
    role: "Fashion Design Lead",
    description: "Translates aesthetic into production-ready designs. Fabrics, cost, and quality.",
    location: "CN",
    tags: ['fashion'],
    imageSeed: "will"
  },
  {
    name: "Linuccia Zhang",
    role: "Merchandising Lead",
    description: "Builds season plans and pricing ladders for commercial sharpness.",
    location: "CN",
    tags: ['fashion'],
    imageSeed: "linuccia"
  },
  {
    name: "Jhon Cubillos",
    role: "Outreach Specialist",
    description: "Ensures high-efficiency communication and relationship building.",
    location: "CO",
    tags: ['marketing'],
    imageSeed: "jhon"
  },
  {
    name: "Paola Cubillos",
    role: "Marketing Lead",
    description: "Ensures global team coordination and project execution.",
    location: "CO",
    tags: ['marketing'],
    imageSeed: "paola"
  }
];

export const TeamSection: React.FC<TeamSectionProps> = ({ filter }) => {
  const displayMembers = filter 
    ? allMembers.filter(m => m.tags.includes(filter))
    : allMembers;

  return (
    <section id={SectionID.TEAM} className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-merpara-dark mb-4">Our Team</h2>
            <p className="text-gray-500 max-w-2xl">
                {filter === 'fashion' 
                    ? "A fusion of Western aesthetics and Chinese manufacturing precision." 
                    : "A global network of strategists ensuring your brand's voice is heard."}
            </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {displayMembers.map((member, index) => (
            <div key={index} className="group relative w-64 text-center">
              <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full mb-6 overflow-hidden relative">
                 <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.imageSeed}&backgroundColor=e5e7eb`} 
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                 />
                 {/* Flag Badge logic could go here based on location */}
              </div>
              
              <h3 className="font-bold text-lg text-merpara-dark">{member.name}</h3>
              <p className="text-merpara-blue text-xs font-bold uppercase tracking-wider mb-2">{member.role}</p>
              <p className="text-sm text-gray-500 leading-snug mb-3">{member.description}</p>
              <span className="text-[10px] font-mono bg-gray-50 px-2 py-1 rounded text-gray-400 border border-gray-100">
                {member.location}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};