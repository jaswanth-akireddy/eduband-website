import { useEffect, useRef, useState } from 'react';

const PILLARS = [
  { id: 'fluency', label: 'Fluency', score: 82, color: '#ff385c', desc: 'Pace, fillers and pause patterns — does it flow?' },
  { id: 'clarity', label: 'Clarity', score: 88, color: '#10b5a6', desc: 'How easily every word lands. An intelligibility read, never an accent test.' },
  { id: 'language', label: 'Language', score: 74, color: '#7a5cff', desc: 'Vocabulary range and grammatical control.' },
  { id: 'structure', label: 'Structure', score: 79, color: '#ffb400', desc: 'Organisation, logical flow and connective tissue between ideas.' },
  { id: 'confidence', label: 'Confidence', score: 85, color: '#ff7a45', desc: 'Assurance and expression you can hear in the delivery.' },
];

// Animated Communication Index ring — counts up + draws its arc on reveal.
function IndexRing({ value = 82 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setShown(value);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(el);
          const start = performance.now();
          const dur = 1200;
          const tick = (now) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setShown(Math.round(eased * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  const R = 86;
  const C = 2 * Math.PI * R;
  const offset = C - (shown / 100) * C;

  return (
    <div className="ring" ref={ref}>
      <svg viewBox="0 0 200 200" role="img" aria-label={`Communication Index ${value} out of 100`}>
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff385c" />
            <stop offset="1" stopColor="#ff7a45" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r={R} className="ring__track" />
        <circle
          cx="100"
          cy="100"
          r={R}
          className="ring__arc"
          stroke="url(#ringGrad)"
          strokeDasharray={C}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="ring__center">
        <span className="ring__num">{shown}</span>
        <span className="ring__label">Communication Index</span>
      </div>
    </div>
  );
}

export default function Pillars() {
  return (
    <section className="section pillars" id="pillars">
      <div className="wrap pillars__grid">
        <div className="pillars__intro reveal">
          <p className="eyebrow">The five skills</p>
          <h2 className="section__title">
            One index. Five skills that make a speaker.
          </h2>
          <p className="section__lead">
            Communication isn&rsquo;t a single grade. EduBand blends five
            distinct skills into one Communication Index — so a student sees the
            whole picture and exactly where to aim next.
          </p>
          <IndexRing value={82} />
        </div>

        <ul className="pillarlist">
          {PILLARS.map((p) => (
            <li className="pillarrow reveal" key={p.id}>
              <div className="pillarrow__head">
                <span className="pillarrow__label">{p.label}</span>
                <span className="pillarrow__score">{p.score}</span>
              </div>
              <div className="pillarrow__bar">
                <span
                  className="pillarrow__fill"
                  style={{ '--w': `${p.score}%`, '--c': p.color }}
                />
              </div>
              <p className="pillarrow__desc">{p.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
