import Waveform from './Waveform.jsx';

const ROADMAP = [
  {
    horizon: 'Now',
    title: 'Phase 1 — the speaking mirror',
    body: 'A student records, and gets a fair, friendly five-skill report in seconds. Android, privacy-first, working today.',
  },
  {
    horizon: 'Next',
    title: 'Many languages, many voices',
    body: 'Beyond English — analysis tuned for multilingual and code-switching speakers, because most of the world grows up speaking more than one language.',
  },
  {
    horizon: 'Next',
    title: 'The classroom layer',
    body: 'Teacher dashboards that surface a whole class at a glance, suggest who needs encouragement, and turn speaking practice into a weekly rhythm.',
  },
  {
    horizon: 'Long term',
    title: 'A growth record that follows you',
    body: 'A longitudinal picture of communication from middle school to a first interview — owned by the learner, portable, and never used against them.',
  },
  {
    horizon: 'Long term',
    title: 'A fair standard for spoken skill',
    body: 'An open, accent-just way to measure and coach communication — so opportunity depends on what you say, not the accent you say it in.',
  },
];

export default function Vision() {
  return (
    <section className="vision" id="vision">
      <div className="vision__wave" aria-hidden="true">
        <Waveform height={160} color="#ff6a8a" color2="#ffb37a" />
      </div>

      <div className="wrap vision__inner">
        <header className="vision__head reveal">
          <p className="eyebrow eyebrow--on-ink">Where we&rsquo;re going</p>
          <h2 className="vision__title">
            We think communication is the most teachable skill in education —
            and the most overlooked. We&rsquo;re building the mirror that finally
            makes it coachable.
          </h2>
        </header>

        <ol className="roadmap">
          {ROADMAP.map((r, i) => (
            <li className="milestone reveal" key={i}>
              <span className="milestone__horizon">{r.horizon}</span>
              <div className="milestone__main">
                <h3 className="milestone__title">{r.title}</h3>
                <p className="milestone__body">{r.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
