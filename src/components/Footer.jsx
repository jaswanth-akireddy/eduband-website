export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <a href="#top" className="brand brand--footer" aria-label="EduBand home">
            <span className="brand__mark" aria-hidden="true">
              <span className="brand__bar" />
              <span className="brand__bar" />
              <span className="brand__bar" />
            </span>
            <span className="brand__name">EduBand</span>
          </a>
          <p className="footer__tag">
            Speaking is a skill. We make it measurable — fairly, privately, and
            kindly.
          </p>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <span className="footer__h">Explore</span>
            <a href="#how">How it works</a>
            <a href="#pillars">The five skills</a>
            <a href="#principles">Principles</a>
            <a href="#vision">Vision</a>
          </div>
          <div className="footer__col">
            <span className="footer__h">About</span>
            <span className="footer__muted">Phase 1 MVP</span>
            <span className="footer__muted">Built with React</span>
            <span className="footer__muted">Android first</span>
          </div>
        </div>
      </div>

      <div className="wrap footer__base">
        <span>© {new Date().getFullYear()} EduBand</span>
        <span className="footer__note">
          An informational preview — designed for India&rsquo;s DPDP Act, mindful of GDPR-K, COPPA &amp; FERPA.
        </span>
      </div>
    </footer>
  );
}
