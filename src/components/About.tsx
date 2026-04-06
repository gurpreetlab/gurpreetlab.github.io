import { motion } from 'motion/react';
import { Section, SectionTitle } from './Layout';
import { SKILL_CATEGORIES } from '../constants';

export const About = () => {
  const stats = [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'APIs Architected', value: '15+' },
    { label: 'Client Satisfaction', value: '100%' },
  ];

  return (
    <Section id="about" className="bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionTitle subtitle="About Me">Transforming complex problems into elegant systems.</SectionTitle>
          <div className="space-y-6 text-secondary text-lg leading-relaxed">
            <p>
              My journey as a developer is fueled by a passion for building robust, scalable systems that solve real-world problems. With over 4 years of experience, I've evolved from a PHP enthusiast to a Senior Full Stack Engineer specializing in the Laravel ecosystem.
            </p>
            <p>
              What sets me apart is my outcome-driven approach. I don't just write code; I architect solutions that prioritize performance, security, and developer experience. I leverage AI-assisted engineering to accelerate the SDLC while maintaining the highest standards of code quality.
            </p>
            <p>
              Whether it's a high-concurrency broadcasting platform or a complex e-commerce engine, I thrive on the challenge of bridging the gap between intricate backend logic and seamless user experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-secondary uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
              alt="Gurpreet Singh" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 glass p-8 rounded-xl shadow-xl hidden md:block max-w-[240px]">
            <p className="text-sm font-medium text-primary italic">
              "I believe in building systems that are not just functional, but resilient and future-proof."
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export const Skills = () => {
  return (
    <Section id="skills" className="bg-white">
      <SectionTitle subtitle="Expertise">Technical Arsenal</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.div 
            key={index}
            className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-lg font-bold text-primary mb-6 border-b border-gray-50 pb-4">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill, sIndex) => (
                <li key={sIndex} className="flex items-center gap-3 text-secondary text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
