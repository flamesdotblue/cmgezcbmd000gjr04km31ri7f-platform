import { Rocket, Star } from 'lucide-react';

const core = 'Astral Stack';

// Four icons with distinct orbits and speeds
const planets = [
  {
    key: 'html',
    label: 'HTML5',
    type: 'inline-html',
    radius: '9rem',
    speed: 36,
    selfRotate: 7,
    angle: 0,
  },
  {
    key: 'css',
    label: 'CSS3',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    radius: '12rem',
    speed: 48,
    selfRotate: 6,
    angle: 90,
    reverse: true,
  },
  {
    key: 'js',
    label: 'JavaScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    radius: '15rem',
    speed: 62,
    selfRotate: 5.5,
    angle: 180,
  },
  {
    key: 'py',
    label: 'Python',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    radius: '18rem',
    speed: 78,
    selfRotate: 5,
    angle: 270,
    reverse: true,
  },
];

function Orbit({ radius, speed = 50, reverse = false, children }) {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2"
      style={{
        width: `calc(${radius} * 2)`,
        height: `calc(${radius} * 2)`,
        transform: 'translate(-50%, -50%)',
        animation: `orbit-spin ${speed}s linear infinite${reverse ? ' reverse' : ''}`,
        willChange: 'transform',
      }}
    >
      <div className="absolute inset-0 rounded-full border border-white/10" />
      {children}
    </div>
  );
}

function InlineHtmlIcon() {
  // Inline version of the HTML5 logo so it always renders
  // Uses brand color close to Icepanel asset
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className="h-8 w-8 select-none"
      aria-label="HTML5"
      role="img"
    >
      <path fill="#E44D26" d="M19.037 113.876 9.322 1.408h109.356l-9.723 112.45-44.01 12.238z"/>
      <path fill="#F16529" d="m64 116.667 35.608-9.9 8.31-93.126H64z"/>
      <path fill="#EBEBEB" d="M64 52.79H46.36l-1.2-13.438H64V26.25H31.292l.314 3.52 3.22 36.113H64zM64 89.74l-.058.015-14.81-3.996-.947-10.61H34.78l1.86 20.848 27.297 7.575.064-.018z"/>
      <path fill="#fff" d="M63.945 52.79v13.103h16.227l-1.53 16.866-14.697 3.96v13.174l27.32-7.57.197-2.206 3.13-35.127.325-3.52H63.945zM63.945 26.25v13.103h32.52l.27-3.047.614-7.536.314-3.52z"/>
    </svg>
  );
}

function Planet({ angle = 0, radius, src, label, rotateSpeed = 6, type }) {
  return (
    <div
      className="pointer-events-auto absolute left-1/2 top-1/2 z-20"
      style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
    >
      <div style={{ transform: `translateX(${radius})` }} className="-translate-y-1/2">
        <div className="grid place-items-center rounded-full bg-black/40 p-2 ring-1 ring-white/10 backdrop-blur">
          {type === 'inline-html' ? (
            <InlineHtmlIcon />
          ) : (
            <img
              src={src}
              alt={label}
              title={label}
              className="h-8 w-8 select-none"
              style={{ animation: `self-rotate ${rotateSpeed}s linear infinite` }}
              draggable={false}
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const fallback = target.parentElement;
                if (fallback && !fallback.querySelector('span')) {
                  const span = document.createElement('span');
                  span.textContent = label?.charAt(0) ?? '?';
                  span.className = 'h-8 w-8 grid place-items-center text-xs font-semibold text-white/80';
                  fallback.appendChild(span);
                }
              }}
            />
          )}
        </div>
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
          <p className="text-sm text-white/70">Icons orbit at distinct radii and speeds</p>
        </div>
      </div>

      <div className="relative mx-auto grid place-items-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.02] p-8 md:p-12">
        <div className="relative h-[40rem] w-full max-w-5xl">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),rgba(17,24,39,0))]" />

          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="grid place-items-center rounded-full border border-purple-400/30 bg-purple-500/20 px-6 py-6 text-center shadow-[0_0_40px_rgba(168,85,247,0.35)]">
              <Star className="mb-2 h-6 w-6 text-purple-200" />
              <div className="text-sm font-medium text-white">{core}</div>
              <div className="text-[10px] uppercase tracking-wider text-white/60">Center</div>
            </div>
          </div>

          <style>{`
            @keyframes orbit-spin { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
            @keyframes self-rotate { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
          `}</style>

          {planets.map((p) => (
            <Orbit key={p.key} radius={p.radius} speed={p.speed} reverse={p.reverse}>
              <Planet angle={p.angle} radius={p.radius} src={p.src} label={p.label} rotateSpeed={p.selfRotate} type={p.type} />
            </Orbit>
          ))}
        </div>

        <div className="mt-8 grid w-full gap-2 text-center text-xs text-white/60 sm:grid-cols-3">
          <p>Standards-driven web foundations</p>
          <p>Distinct orbital speeds and radii</p>
          <p>Galaxy-inspired interaction</p>
        </div>
      </div>
    </section>
  );
}
