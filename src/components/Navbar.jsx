import { useState } from 'react';
import { Rocket, Menu, X, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#home" className="inline-flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
            <Rocket className="h-5 w-5 text-white" />
          </span>
          <span className="font-semibold tracking-wide">Astral</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm text-white/80 hover:text-white">Home</a>
          <a href="#projects" className="text-sm text-white/80 hover:text-white">Projects</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
          <div className="ml-2 flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </nav>
        <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:bg-white/10 md:hidden">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-2 pt-2">
            <a onClick={() => setOpen(false)} href="#home" className="rounded-md px-3 py-2 text-white/90 hover:bg-white/10">Home</a>
            <a onClick={() => setOpen(false)} href="#projects" className="rounded-md px-3 py-2 text-white/90 hover:bg-white/10">Projects</a>
            <a onClick={() => setOpen(false)} href="#contact" className="rounded-md px-3 py-2 text-white/90 hover:bg-white/10">Contact</a>
          </nav>
          <div className="mt-3 flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-white/80 hover:bg-white/10">
              <Github className="h-5 w-5" /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-white/80 hover:bg-white/10">
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
