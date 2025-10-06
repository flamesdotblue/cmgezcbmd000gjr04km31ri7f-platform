import { Rocket, Star } from 'lucide-react';

const core = 'Astral Stack';
const rings = [
  {
    radius: '10rem',
    speed: 40,
    items: [
      { label: 'React' },
      { label: 'TypeScript' },
      { label: 'Vite' },
      { label: 'ESLint' },
    ],
  },
  {
    radius: '14rem',
    speed: 55,
    reverse: true,
    items: [
      { label: 'Tailwind' },
      { label: 'Framer Motion' },
      { label: 'Radix UI' },
      { label: 'Storybook' },
      { label: 'Zustand' },
    ],
  },
  {
    radius: '18rem',
    speed: 70,
    items: [
      { label: 'Node.js' },
      { label: 'Express' },
      { label: 'Vercel' },
      { label: 'Playwright' },
      { label: 'Vitest' },
      { label: 'D3' },
    ],
  },
];

function Orbit({ radius, speed = 60, reverse = false, children }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 mx-auto"
      style={{
        width: `calc(${radius} * 2)`,
        height: `calc(${radius} * 2)`,
        animation: `spin ${speed}s linear infinite${reverse ? ' reverse' : ''}`,
      }}
    >
      <div
        className="absolute inset-0 rounded-full border border-white/10"
        style={{ width: '100%', height: '100%' }}
      />
      {children}
    </div>
  );
}

function OrbitItem({ angle, radius, label }) {
  const r = parseFloat(radius);
  const x = Math.cos((angle * Math.PI) / 180) * r;
  const y = Math.sin((angle * Math.PI) / 180) * r;
  return (
    <div
      className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
    >
      <div className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur hover:bg-white/10">
        {label}
      </div>
    </div>
  );
}

export default function Toolkit() {
  return (
    <section id="toolkit" className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:px-6">
      <div className="mb-12 flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 ring-1 ring-purple-400/30">
          <Rocket className="h-5 w-5 text-purple-300" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">Tech Toolkit</h2>
          <p className="text-sm text-white/70">Orbiting skills and tools in my stack</p>
        </div>
      </div>

      <div className="relative mx-auto grid place-items-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.02] p-8 md:p-12">
        <div className="relative h-[28rem] w-full max-w-4xl">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),rgba(17,24,39,0))]" />

          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="grid place-items-center rounded-full border border-purple-400/30 bg-purple-500/20 px-6 py-6 text-center shadow-[0_0_40px_rgba(168,85,247,0.35)]">
              <Star className="mb-2 h-6 w-6 text-purple-200" />
              <div className="text-sm font-medium text-white">{core}</div>
              <div className="text-[10px] uppercase tracking-wider text-white/60">Center</div>
            </div>
          </div>

          <style>
            {`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}
          </style>

          {rings.map((ring, i) => (
            <Orbit key={i} radius={ring.radius} speed={ring.speed} reverse={ring.reverse}>
              {ring.items.map((item, idx) => {
                const step = 360 / ring.items.length;
                const angle = idx * step;
                return (
                  <OrbitItem key={item.label} angle={angle} radius={ring.radius} label={item.label} />
                );
              })}
            </Orbit>
          ))}
        </div>

        <div className="mt-8 grid w-full gap-2 text-center text-xs text-white/60 sm:grid-cols-3">
          <p>Performance-first UIs</p>
          <p>Accessible design systems</p>
          <p>Animations that delight</p>
        </div>
      </div>
    </section>
  );
}
