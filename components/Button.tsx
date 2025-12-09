import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  fullWidth = false
}) => {
  const baseClasses = "px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-merpara-blue text-white shadow-lg shadow-merpara-blue/30 hover:shadow-merpara-blue/50",
    secondary: "bg-merpara-coral text-white shadow-lg shadow-merpara-coral/30 hover:shadow-merpara-coral/50",
    outline: "bg-transparent border border-merpara-dark/20 text-merpara-dark hover:bg-merpara-dark hover:text-white"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};