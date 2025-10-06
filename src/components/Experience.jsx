import { Briefcase, Calendar, MapPin } from 'lucide-react';

const roles = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Cosmos Labs',
    location: 'Remote',
    period: '2023 — Present',
    description:
      'Leading UI architecture and performance for a suite of data-heavy apps. Built design systems and animation pipelines.',
    tags: ['React', 'TypeScript', 'Vite', 'Design System'],
  },
  {
    title: 'Frontend Engineer',
    company: 'Orbital Studio',
    location: 'Berlin, DE',
    period: '2021 — 2023',
    description:
      'Shipped interactive dashboards and micro-frontends. Drove accessibility and DX improvements across teams.',
    tags: ['Micro-frontend', 'A11y', 'Testing'],
  },
  {
    title: 'UI Developer',
    company: 'Stellar Apps',
    location: 'Austin, US',
    period: '2019 — 2021',
    description:
      'Crafted component libraries and animations, collaborating closely with design for pixel-perfect delivery.',
    tags: ['Tailwind', 'Framer Motion', 'Storybook'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="mb-10 flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 ring-1 ring-purple-400/30">
          <Briefcase className="h-5 w-5 text-purple-300" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">Experience</h2>
          <p className="text-sm text-white/70">Trajectory across the frontend galaxy</p>
        </div>
      </div>

      <ol className="relative ml-2 border-l border-white/10">
        {roles.map((r, idx) => (
          <li key={idx} className="group relative pl-8 pb-10 last:pb-0">
            <span className="absolute -left-[9px] top-1 grid h-4 w-4 place-items-center rounded-full border border-purple-400/50 bg-purple-500/30 ring-4 ring-black">
              <span className="block h-2 w-2 rounded-full bg-purple-300" />
            </span>
            <div className="flex flex-wrap items-center gap-2 text-white/80">
              <span className="text-sm font-semibold text-white">{r.title}</span>
              <span className="text-white/40">•</span>
              <span className="inline-flex items-center gap-1 text-xs text-white/70">
                <Briefcase className="h-3.5 w-3.5" /> {r.company}
              </span>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-4 text-xs text-white/60">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-purple-300" /> {r.period}
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-purple-300" /> {r.location}
              </span>
            </div>
            <p className="mt-3 max-w-3xl text-sm text-white/75">{r.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {r.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
