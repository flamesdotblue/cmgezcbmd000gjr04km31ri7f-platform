import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} Astral Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
