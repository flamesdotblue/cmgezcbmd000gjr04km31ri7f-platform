import { Rocket, Star } from 'lucide-react';

const core = 'Astral Stack';

const planets = [
  {
    label: 'HTML5',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    angle: 0,
  },
  {
    label: 'CSS3',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    angle: 90,
  },
  {
    label: 'JavaScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    angle: 180,
  },
  {
    label: 'Python',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    angle: 270,
  },
];

function Orbit({ radius, speed = 50, reverse = false, children }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 mx-auto"
      style={{
        width: `calc(${radius} * 2)`,
        height: `calc(${radius} * 2)`,
        animation: `orbit-spin ${speed}s linear infinite${reverse ? ' reverse' : ''}`,
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

function Planet({ angle, radius, src, label, rotateSpeed = 6 }) {
  const r = parseFloat(radius);
  const x = Math.cos((angle * Math.PI) / 180) * r;
  const y = Math.sin((angle * Math.PI) / 180) * r;

  return (
    <div
      className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
    >
      <div className="grid place-items-center rounded-full bg-black/40 p-2 ring-1 ring-white/10 backdrop-blur">
        <img
          src={src}
          alt={label}
          title={label}
          className="h-8 w-8 select-none"
          style={{ animation: `self-rotate ${rotateSpeed}s linear infinite` }}
          draggable={false}
        />
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
          <p className="text-sm text-white/70">Solar system of my core technologies</p>
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
            {`
              @keyframes orbit-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
              @keyframes self-rotate { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
            `}
          </style>

          {/* Primary orbit with the requested technologies */}
          <Orbit radius="12rem" speed={45}>
            {planets.map((p) => (
              <Planet key={p.label} angle={p.angle} radius="12rem" src={p.src} label={p.label} />
            ))}
          </Orbit>

          {/* Decorative outer orbit for depth */}
          <Orbit radius="16rem" speed={60} reverse>
            {[0, 120, 240].map((a) => (
              <div
                key={a}
                className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `calc(50% + ${Math.cos((a * Math.PI) / 180) * 16 * 1}px)`,
                  top: `calc(50% + ${Math.sin((a * Math.PI) / 180) * 16 * 1}px)`,
                }}
              >
                <span className="block h-1.5 w-1.5 rounded-full bg-purple-300/60" />
              </div>
            ))}
          </Orbit>
        </div>

        <div className="mt-8 grid w-full gap-2 text-center text-xs text-white/60 sm:grid-cols-3">
          <p>Standards-driven web foundations</p>
          <p>Type-safe, performant interfaces</p>
          <p>Observable, animated UX</p>
        </div>
      </div>
    </section>
  );
}
