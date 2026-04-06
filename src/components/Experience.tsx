import { motion } from 'motion/react';
import { Section, SectionTitle } from './Layout';
import { EXPERIENCES } from '../constants';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export const Experience = () => {
  return (
    <Section id="experience" className="bg-gray-50">
      <SectionTitle subtitle="Career Path">Work Experience</SectionTitle>
      
      <div className="space-y-12">
        {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="grid md:grid-cols-[200px_1fr] gap-8">
                {/* Left Side: Duration & Location */}
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center gap-2 text-accent font-bold text-sm">
                    <Calendar size={14} />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-2 text-secondary text-xs uppercase tracking-widest">
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                </div>

                {/* Right Side: Content Card */}
                <div className="relative pl-8 md:pl-12 border-l border-gray-200">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-12px] top-2 w-6 h-6 rounded-full bg-white border-4 border-accent z-10 shadow-sm" />
                  
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-accent font-semibold">
                          <Briefcase size={16} />
                          {exp.company}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-4">
                      {exp.impact.map((item, iIdx) => (
                        <li key={iIdx} className="text-secondary leading-relaxed flex gap-4 text-sm md:text-base">
                          <span className="text-accent mt-1.5 shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </Section>
  );
};
