import React from 'react';
import { motion } from 'framer-motion';
import { SectionID, TeamMember } from '../types';

interface TeamSectionProps {
    filter?: 'fashion' | 'marketing';
}

/**
 * Image Strategy:
 * Store all team images in the /team folder of your GitHub repo:
 * https://github.com/merlinfong/Merpara-Official-Website/tree/main/team
 */
const GITHUB_TEAM_BASE_URL = "https://raw.githubusercontent.com/merlinfong/Merpara-Official-Website/main/team";

// 7 Members for Brand Incubation (Fashion) Page
const fashionMembers: TeamMember[] = [
  {
    name: "Merlin Feng",
    role: "Founder & CEO",
    description: "An e-commerce strategist with 10+ years in cross-border marketing. Merlin leads Merpara’s overall strategy and ensures every project stays ROI-driven, transparent, and focused on real results. He believes in being transparent and data-driven, always aiming for tangible growth for our Influencers.",
    location: "CN",
    tags: ['fashion'],
    imageSeed: `${GITHUB_TEAM_BASE_URL}/merlin.jpg`
  },
  {
    name: "Anastasia Cui",
    role: "Co-founder & COO",
    description: "Heads the fashion product development and supply-chain execution in China. Anastasia manages vendor sourcing, audits, sampling, cost control, quality systems, and logistics to ensure your products are delivered on-budget, on-time, and to spec. (She’s a former sportswear brand founder with end-to-end supply chain experience, so you’re in expert hands.)",
    location: "CN",
    tags: ['fashion'],
    imageSeed: `${GITHUB_TEAM_BASE_URL}/anastasia.jpg`
  },
  {
    name: "Jenny Paola Cubillos",
    role: "International Marketing Advisor",
    description: "A bilingual marketing professional from Colombia with strong experience in LATAM markets. She brings an international perspective to brand storytelling, cross-cultural communication, and global audience understanding. Her contribution focuses on strategic insight and creative perspective, supporting brands as they think globally and communicate authentically, rather than participating in day-to-day operations.",
    location: "CO",
    tags: ['fashion'],
    imageSeed: `${GITHUB_TEAM_BASE_URL}/jenny-paola.jpg`
  },
  {
    name: "Matthew Joy",
    role: "Co-founder / U.S. Influencer Partnerships",
    description: "Based in the U.S., Matthew works face-to-face with Influencers to turn ideas into sustainable brands. He’s a visionary entrepreneur who shapes long-term content strategy and brand vision, acting as Merpara’s local representative for our Influencer partners. Matthew thrives on collaboration and will help bridge your creative concepts with real business impact.",
    location: "US",
    tags: ['fashion'],
    imageSeed: `${GITHUB_TEAM_BASE_URL}/matthew.jpg`
  },
  {
    name: "Felicia Joy",
    role: "Creative Director & Social Media Lead",
    description: "With 10+ years in social media (both personal and commercial brands), Felicia translates each brand’s DNA into cohesive visuals and content that drive engagement and conversion. She gained her expertise working under a top social media influencer, and now she’s focused on making your brand stand out in the crowded online space – from lookbooks to TikToks.",
    location: "US",
    tags: ['fashion'],
    imageSeed: `${GITHUB_TEAM_BASE_URL}/felicia.jpg`
  },
  {
    name: "Linuccia Zhang",
    role: "Fashion Merchandising & Planning Lead",
    description: "Responsible for fashion merchandising, product strategy, and seasonal line planning. Linuccia turns market trends and audience insights into actionable product line plans, pricing architecture, and launch calendars that balance creativity with solid business outcomes. She’ll ensure your collection is not only stylish but also market-savvy and well-timed.",
    location: "CN",
    tags: ['fashion'],
    imageSeed: `${GITHUB_TEAM_BASE_URL}/linuccia.jpg`
  },
  {
    name: "Will Guo",
    role: "Fashion Design Lead",
    description: "Leads apparel design across all categories, translating creative concepts and mood boards into tangible collections. Will manages silhouettes, fabrics, prints, and technical specs, working closely with factories to align each design with production feasibility, cost targets, and quality standards. In short, he makes sure your designs are beautiful, practical to produce, and high-quality for your fans.",
    location: "CN",
    tags: ['fashion'],
    imageSeed: `${GITHUB_TEAM_BASE_URL}/will.jpg`
  }
];

// 6 Members for Global Marketing Page
const marketingMembers: TeamMember[] = [
  {
    name: "Merlin Feng",
    role: "Founder & CEO",
    description: "E-commerce strategist with 10+ years in cross-border marketing. Merlin leads the company’s overall strategy, client solutions, and the Influencer-led fashion brand incubation program, ensuring every project remains ROI-driven, transparent, and execution-focused.",
    location: "CN",
    tags: ['marketing'],
    imageSeed: `${GITHUB_TEAM_BASE_URL}/merlin.jpg`
  },
  {
    name: "Jenny Paola Cubillos",
    role: "International Marketing Advisor",
    description: "A bilingual marketing professional from Colombia with strong experience in LATAM markets. She brings an international perspective to brand storytelling, cross-cultural communication, and global audience understanding. Her contribution focuses on strategic insight and creative perspective, supporting brands as they think globally and communicate authentically, rather than participating in day-to-day operations.",
    location: "CO",
    tags: ['marketing'],
    imageSeed: `${GITHUB_TEAM_BASE_URL}/jenny-paola.jpg`
  },
  {
    name: "Matthew Joy",
    role: "Co-founder / Chief Visionary & Content Strategist / U.S. Influencer Partnerships",
    description: "Shapes our long-term content and Influencer-brand vision. Based in the U.S., Matthew meets Influencers face-to-face, helping them transform ideas into sustainable fashion brands and acting as Merpara’s local representative for the Influencer-brand program, strengthening relationships and collaboration opportunities.",
    location: "US",
    tags: ['marketing'],
    imageSeed: `${GITHUB_TEAM_BASE_URL}/matthew.jpg`
  },
  {
    name: "Felicia Joy",
    role: "Creative Director & Social Media Lead",
    description: "Leads visual direction, brand storytelling, and content systems for Influencer brands. With over 10 years in social media working across both personal and commercial brands, Felicia turns brand DNA into cohesive visuals and scalable content that drives engagement and conversion.",
    location: "US",
    tags: ['marketing'],
    imageSeed: `${GITHUB_TEAM_BASE_URL}/felicia.jpg`
  },
  {
    name: "Jenny Cubillos",
    role: "Influencer Marketing Manager",
    description: "Manages Influencer negotiations, contracting, scheduling, and content quality assurance. Jenny ensures each collaboration feels authentic and aligned with both the Influencer’s voice and the brand’s commercial goals.",
    location: "CO",
    tags: ['marketing'],
    imageSeed: `${GITHUB_TEAM_BASE_URL}/jenny-cubillos.jpg`
  },
  {
    name: "Jhon Cubillos",
    role: "Influencer Outreach Specialist",
    description: "Handles global Influencer discovery and relationship management. With a strong background in cross-cultural communication, Jhon efficiently identifies the right partners and maintains smooth collaborations from initial outreach to campaign delivery.",
    location: "CO",
    tags: ['marketing'],
    imageSeed: `${GITHUB_TEAM_BASE_URL}/jhon-cubillos.jpg`
  }
];

export const TeamSection: React.FC<TeamSectionProps> = ({ filter }) => {
  const displayMembers = filter === 'fashion' ? fashionMembers : marketingMembers;

  const accentColorClass = filter === 'fashion' 
    ? "text-merpara-coral" 
    : "text-merpara-purple";

  const hoverBorderClass = filter === 'fashion'
    ? "group-hover:border-merpara-coral"
    : "group-hover:border-merpara-purple";

  return (
    <section id={SectionID.TEAM} className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-[10px] font-black uppercase tracking-[0.4em] mb-4 ${accentColorClass}`}
            >
              GLOBAL LEADERSHIP
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-serif font-bold text-merpara-dark mb-6 tracking-tight"
            >
              The Architects of Cross-Border Growth
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 max-w-3xl text-lg font-light leading-relaxed"
            >
                {filter === 'fashion' 
                    ? "A fusion of Western aesthetics and Chinese manufacturing precision, specialized in brand incubation." 
                    : "A strategic alliance of data experts and cultural natives. We fuse ROI-driven strategy with deep local insights across the US and LATAM. From high-level planning to on-the-ground execution, we ensure your brand voice resonates globally and converts locally."}
            </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {displayMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <div className={`relative w-56 h-56 mb-8 rounded-full overflow-hidden border-4 border-gray-50 transition-all duration-500 ease-in-out ${hoverBorderClass} shadow-xl bg-gray-100`}>
                 <img 
                    src={member.imageSeed} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to a placeholder if image is not yet uploaded to GitHub
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=256`;
                    }}
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>
              
              <div className="max-w-xs">
                <h3 className="font-serif font-bold text-2xl text-merpara-dark mb-1 tracking-tight">{member.name}</h3>
                <p className={`text-[11px] font-black uppercase tracking-[0.2em] mb-4 ${accentColorClass}`}>
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed font-light mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                  {member.description}
                </p>
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-full">
                   <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                   <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                     {member.location}
                   </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};