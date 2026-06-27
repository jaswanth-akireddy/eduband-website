const PEOPLE = [
  { who: 'Students', line: 'See your speaking grow session over session — and know the one thing to practise next.' },
  { who: 'Teachers', line: 'Individual speaking feedback for a whole class, without grading thirty recordings by hand.' },
  { who: 'Parents', line: 'A clear, private window into how your child communicates — strengths first, always.' },
  { who: 'Professionals', line: 'Interview answers and presentations, rehearsed and measured before the room that matters.' },
];

export default function Personas() {
  return (
    <section className="section personas">
      <div className="wrap">
        <header className="section__head reveal">
          <p className="eyebrow">Who it&rsquo;s for</p>
          <h2 className="section__title">
            One skill everyone needs. Built for everyone who teaches or learns it.
          </h2>
        </header>

        <div className="personas__grid">
          {PEOPLE.map((p, i) => (
            <article className="persona reveal" key={p.who}>
              <span className="persona__index">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="persona__who">{p.who}</h3>
              <p className="persona__line">{p.line}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
