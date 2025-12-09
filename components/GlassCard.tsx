import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = false,
  delay = 0,
  onClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={hoverEffect ? { scale: 1.02, y: -5 } : {}}
      onClick={onClick}
      className={`
        relative overflow-hidden
        bg-white/60 backdrop-blur-xl 
        border border-white/40 shadow-lg 
        rounded-3xl
        transition-shadow duration-300
        ${hoverEffect ? 'hover:shadow-xl hover:bg-white/70 hover:border-white/60 cursor-pointer' : ''}
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};