const STEPS = [
  {
    n: '01',
    title: 'Speak',
    body: 'A student records a short spoken task — a guided prompt or a free answer. Recording only ever happens on a deliberate tap. Nothing is captured passively.',
    tag: 'on tap only',
  },
  {
    n: '02',
    title: 'Analyse',
    body: 'Deterministic metrics run in real code — words per minute, fillers, pauses, vocabulary range. An AI coach adds judgement on language, structure and confidence. Always accent-fair.',
    tag: 'metrics + AI',
  },
  {
    n: '03',
    title: 'Grow',
    body: 'Back comes a friendly report: a Communication Index, a five-skill breakdown, one quoted moment of evidence per skill, and a single concrete next step to try.',
    tag: 'one next step',
  },
];

export default function Steps() {
  return (
    <section className="section how" id="how">
      <div className="wrap">
        <header className="section__head reveal">
          <p className="eyebrow">How it works</p>
          <h2 className="section__title">
            Three steps, from a spoken moment to measurable progress.
          </h2>
        </header>

        <ol className="steps">
          {STEPS.map((s) => (
            <li className="step reveal" key={s.n}>
              <span className="step__n">{s.n}</span>
              <div className="step__body">
                <h3 className="step__title">{s.title}</h3>
                <p>{s.body}</p>
                <span className="step__tag">{s.tag}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
