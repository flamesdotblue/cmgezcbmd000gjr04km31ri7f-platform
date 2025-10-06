import { ExternalLink, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'Nebula UI',
    description: 'A component library inspired by stellar formations. Built with React, Tailwind, and Radix.',
    tags: ['React', 'Tailwind', 'Radix'],
    link: '#',
  },
  {
    title: 'Gravity Grid',
    description: 'Physics-based grid animations using Framer Motion for delightful interactions.',
    tags: ['Framer Motion', 'TypeScript'],
    link: '#',
  },
  {
    title: 'Cosmo Charts',
    description: 'Interactive data visualizations that orbit around insights and clarity.',
    tags: ['D3', 'Vite'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="mb-10 flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 ring-1 ring-purple-400/30">
          <Rocket className="h-5 w-5 text-purple-300" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">Featured Projects</h2>
          <p className="text-sm text-white/70">A small constellation of things I’ve built</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.08]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="relative z-10 text-lg font-semibold">{p.title}</h3>
            <p className="relative z-10 mt-2 text-sm text-white/75">{p.description}</p>
            <div className="relative z-10 mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-white/70">
                  {t}
                </span>
              ))}
            </div>
            <div className="relative z-10 mt-5">
              <a href={p.link} className="inline-flex items-center gap-2 text-sm text-purple-300 hover:text-purple-200">
                Explore <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
          </article>
        ))}
      </div>
    </section>
  );
}
