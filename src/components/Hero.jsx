import Waveform from './Waveform.jsx';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="wrap hero__inner">
        <p className="eyebrow reveal">Speech analytics for learners</p>

        <h1 className="hero__title reveal">
          Speaking is a skill.
          <br />
          We make it <span className="ink-accent">measurable.</span>
        </h1>

        <p className="hero__lead reveal">
          EduBand listens to how a student <em>actually</em> speaks — pace,
          word choice, structure, poise — and turns it into a kind, trackable
          report across five communication skills. Growth you could only feel
          is now something you can see.
        </p>

        <div className="hero__meta reveal">
          <span className="hero__chip">Record a 2-minute answer</span>
          <span className="hero__arrow" aria-hidden="true">→</span>
          <span className="hero__chip">Get a five-skill report</span>
          <span className="hero__arrow" aria-hidden="true">→</span>
          <span className="hero__chip">Watch your voice grow</span>
        </div>
      </div>

      <div className="hero__wave reveal">
        <Waveform height={240} />
        <div className="hero__wavelabel">
          <span>live communication index</span>
          <strong>listening…</strong>
        </div>
      </div>
    </section>
  );
}
