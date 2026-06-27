import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="wrap nav__inner">
        <a href="#top" className="brand" aria-label="EduBand home">
          <span className="brand__mark" aria-hidden="true">
            <span className="brand__bar" />
            <span className="brand__bar" />
            <span className="brand__bar" />
          </span>
          <span className="brand__name">EduBand</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          <a href="#how">How it works</a>
          <a href="#pillars">The five skills</a>
          <a href="#principles">Principles</a>
          <a href="#vision">Vision</a>
        </nav>

        <span className="nav__badge">Phase 1 · Android</span>
      </div>
    </header>
  );
}
