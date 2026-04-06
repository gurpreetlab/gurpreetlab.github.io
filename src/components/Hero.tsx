import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Download, FileText } from 'lucide-react';
import Resume from '../assets/Gurpreet-Singh-Resume.pdf';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 lg:px-24 overflow-hidden bg-white">
      {/* Abstract Background Elements - Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-6">
              Full Stack Engineer & API Architect
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-primary leading-[1.1] tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I build scalable <span className="text-accent">backend systems</span> & APIs powering real-world apps.
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-secondary leading-relaxed mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Results-driven developer with 4+ years specializing in the Laravel ecosystem. 
            Expert in architecting RESTful APIs bridging complex backends with high-performance mobile and web applications.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a 
              href="#projects" 
              className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all flex items-center gap-2 group shadow-lg shadow-primary/10"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={Resume} 
              download="Gurpreet_Singh_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-all flex items-center gap-2 shadow-lg shadow-accent/10"
            >
              <FileText size={18} />
              Download Resume
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-gray-200 text-primary rounded-lg font-medium hover:bg-gray-50 transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
