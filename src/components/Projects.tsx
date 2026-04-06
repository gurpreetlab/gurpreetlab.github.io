import { motion } from 'motion/react';
import { Section, SectionTitle } from './Layout';
import { PROJECTS, Project } from '../constants';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div 
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full relative"
      whileHover={{ y: -10 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-8 flex-grow flex flex-col justify-between">
        <div>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors line-clamp-1">
              {project.title}
            </h3>
            <p className="text-xs font-medium text-secondary uppercase tracking-wider mt-1">
              {project.role}
            </p>
          </div>

          <p className="text-secondary text-sm leading-relaxed mb-6 line-clamp-3 min-h-[4.5rem]">
            {project.description}
          </p>

          <div className="mb-6">
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Impact</h4>
            <p className="text-sm text-secondary italic line-clamp-2 min-h-[2.5rem]">"{project.impact}"</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t, i) => (
              <span key={i} className="px-2.5 py-1 bg-gray-50 text-secondary text-[10px] font-bold rounded border border-gray-100">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-4 pt-6 border-t border-gray-50">
          {project.webLink && (
            <a 
              href={project.webLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-primary hover:text-accent transition-colors"
            >
              <Globe size={14} />
              Web App
            </a>
          )}
          {project.mobileLink && (
            <a 
              href={project.mobileLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-primary hover:text-accent transition-colors"
            >
              <Smartphone size={14} />
              Mobile App
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <Section id="projects" className="bg-white">
      <SectionTitle subtitle="Portfolio">Featured Projects</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* GitHub CTA */}
      <motion.div 
        className="mt-20 p-12 rounded-3xl bg-primary text-white flex flex-col md:flex-row items-center justify-between gap-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Explore more on GitHub</h3>
          <p className="text-white/70">Check out my open-source contributions and other technical experiments.</p>
        </div>
        <a 
          href="https://github.com/gurpreetlab" 
          target="_blank" 
          rel="noreferrer"
          className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center gap-3"
        >
          <Github size={20} />
          View Profile
        </a>
      </motion.div>
    </Section>
  );
};
