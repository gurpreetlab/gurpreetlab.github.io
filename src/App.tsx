import { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About, Skills } from './components/About';
import { BackToTop } from './components/BackToTop';

// Lazy load sections below the fold
const Experience = lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Contact').then(m => ({ default: m.Footer })));

// Lightweight loading fallback
const SectionLoader = () => (
  <div className="h-40 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent/20 selection:text-accent">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Suspense fallback={<SectionLoader />}>
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <BackToTop />
    </div>
  );
}
