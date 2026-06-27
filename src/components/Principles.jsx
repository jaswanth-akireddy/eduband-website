const PRINCIPLES = [
  {
    k: 'Accent-fair by design',
    v: 'We judge intelligibility and growth — never how close a voice sits to one “correct” accent. Regional and non-native speakers are measured fairly, full stop.',
    icon: 'globe',
  },
  {
    k: 'Privacy is the default',
    v: 'Verifiable consent is required before any recording. Raw audio is deleted right after analysis unless you choose to keep it. No ads, no tracking, no selling data.',
    icon: 'shield',
  },
  {
    k: 'Growth, not grades',
    v: 'Every report is written like a kind coach: a real strength, one focus area, a quoted moment, and a single doable next step. We build speakers up, never shame them.',
    icon: 'sprout',
  },
  {
    k: 'Honest by construction',
    v: 'The hard numbers — pace, fillers, pauses, vocabulary — are computed in plain code you could audit. AI only handles judgement, and always shows its evidence.',
    icon: 'ruler',
  },
];

function Icon({ name }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'globe':
      return (<svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></svg>);
    case 'shield':
      return (<svg {...common}><path d="M12 3l7 3v5c0 5-3 7.5-7 9-4-1.5-7-4-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>);
    case 'sprout':
      return (<svg {...common}><path d="M12 21v-7" /><path d="M12 14c0-3-2-5-6-5 0 4 3 5 6 5z" /><path d="M12 12c0-3 2-5 6-5 0 4-3 5-6 5z" /></svg>);
    default:
      return (<svg {...common}><path d="M4 7h16v10H4z" /><path d="M8 7v3M12 7v4M16 7v3" /></svg>);
  }
}

export default function Principles() {
  return (
    <section className="section principles" id="principles">
      <div className="wrap">
        <header className="section__head reveal">
          <p className="eyebrow">What we stand on</p>
          <h2 className="section__title">Principles we won&rsquo;t trade away.</h2>
        </header>

        <div className="principles__grid">
          {PRINCIPLES.map((p) => (
            <article className="principle reveal" key={p.k}>
              <span className="principle__icon"><Icon name={p.icon} /></span>
              <h3 className="principle__k">{p.k}</h3>
              <p className="principle__v">{p.v}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
