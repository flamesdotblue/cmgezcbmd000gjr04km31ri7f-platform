import Spline from '@splinetool/react-spline';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-start justify-center gap-6 px-4 py-24 md:px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Star className="h-3.5 w-3.5 text-purple-300" /> Exploring the cosmic web of code
        </span>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Astronaut of the Frontend Galaxy
        </h1>
        <p className="max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
          I craft immersive, performant UIs with React, animations, and a love for the stars. Dive into my work and let's launch something stellar together.
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-purple-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/20 hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
