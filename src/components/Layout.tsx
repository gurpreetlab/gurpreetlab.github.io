import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const Section = ({ children, id, className }: SectionProps) => {
  return (
    <section id={id} className={`section-padding relative overflow-hidden ${className}`}>
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>
      
      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export const SectionTitle = ({ children, subtitle }: { children: ReactNode; subtitle?: string }) => {
  return (
    <div className="mb-12">
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-accent font-medium tracking-wider uppercase text-sm mb-2 block"
        >
          {subtitle}
        </motion.span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
        {children}
      </h2>
      <div className="h-1 w-12 bg-accent mt-4 rounded-full" />
    </div>
  );
};
