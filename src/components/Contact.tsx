import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Section, SectionTitle } from './Layout';
import { Mail, Linkedin, Github, Send, MapPin, GraduationCap } from 'lucide-react';
import { EDUCATION } from '../constants';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <Section id="contact" className="bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <SectionTitle subtitle="Get in touch">Let's build something extraordinary.</SectionTitle>
          <p className="text-secondary text-lg mb-12 max-w-md">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Emails</p>
                <div className="flex flex-col gap-1">
                  <a href="mailto:connect.gurpreet@outlook.com" className="text-primary font-medium hover:text-accent transition-colors">connect.gurpreet@outlook.com</a>
                  <a href="mailto:guri085208@gmail.com" className="text-primary font-medium hover:text-accent transition-colors">guri085208@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">LinkedIn</p>
                <a href="https://www.linkedin.com/in/gurpreet-singh-0793a6185/" target="_blank" rel="noreferrer" className="text-primary font-medium hover:text-accent transition-colors">gurpreet-singh-0793a6185</a>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Location</p>
                <p className="text-primary font-medium">Mukerian, Punjab, India</p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="pt-12 border-t border-gray-200">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
              <GraduationCap className="text-accent" />
              Education
            </h3>
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-primary mb-1">{EDUCATION.degree}</h4>
              <p className="text-accent text-sm font-medium mb-4">{EDUCATION.institution}</p>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-2">Core Subjects</p>
                  <div className="flex flex-wrap gap-2">
                    {EDUCATION.core.map(subject => (
                      <span key={subject} className="px-2 py-1 bg-gray-50 text-[10px] text-secondary rounded border border-gray-100">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Minor Project</p>
                    <p className="text-xs text-primary">{EDUCATION.minorProject}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Major Project</p>
                    <p className="text-xs text-primary">{EDUCATION.majorProject}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary uppercase tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-primary"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-primary"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-secondary uppercase tracking-widest">Subject</label>
              <input 
                type="text" 
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-primary"
                placeholder="Project Inquiry"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-secondary uppercase tracking-widest">Message</label>
              <textarea 
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-primary resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button 
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {status === 'sending' ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : status === 'success' ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tighter text-primary">
          GURPREET<span className="text-accent">.</span>
        </div>
        
        <div className="text-sm text-secondary">
          © {new Date().getFullYear()} Gurpreet Singh. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <a href="#about" className="text-sm font-medium text-secondary hover:text-accent transition-colors">About</a>
          <a href="#projects" className="text-sm font-medium text-secondary hover:text-accent transition-colors">Projects</a>
          <a href="#contact" className="text-sm font-medium text-secondary hover:text-accent transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};
