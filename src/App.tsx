import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About, Skills } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact, Footer } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent/20 selection:text-accent">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
