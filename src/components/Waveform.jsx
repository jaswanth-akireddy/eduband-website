import { useEffect, useRef } from 'react';

// The signature element: a flowing, multi-layer voice waveform.
// Sound is invisible and fleeting — EduBand makes it visible and measurable,
// so the page literally opens with a living waveform rendered in the brand
// coral→ember gradient. Falls back to a calm static wave when the visitor
// prefers reduced motion.
export default function Waveform({ height = 220, color = '#ff385c', color2 = '#ff7a45' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf;
    let t = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
    };
    resize();

    // Three stacked waves at different speeds/amplitudes for an organic feel.
    const layers = [
      { amp: 0.5, freq: 1.4, speed: 0.6, alpha: 1, line: 2.4 },
      { amp: 0.34, freq: 2.3, speed: -0.9, alpha: 0.55, line: 1.8 },
      { amp: 0.2, freq: 3.6, speed: 1.5, alpha: 0.3, line: 1.4 },
    ];

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const mid = h / 2;

      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, color);
      grad.addColorStop(1, color2);

      layers.forEach((L) => {
        ctx.beginPath();
        for (let x = 0; x <= w; x += 2 * dpr) {
          const p = x / w;
          // envelope: taller in the middle, tapering to the edges
          const env = Math.sin(p * Math.PI);
          const y =
            mid +
            Math.sin(p * Math.PI * 2 * L.freq + t * L.speed) *
              env *
              (h * 0.42) *
              L.amp;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.globalAlpha = L.alpha;
        ctx.strokeStyle = grad;
        ctx.lineWidth = L.line * dpr;
        ctx.lineCap = 'round';
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      t += 0.018;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onResize = () => {
      resize();
      draw();
    };
    window.addEventListener('resize', onResize);

    if (reduce) {
      draw();
    } else {
      loop();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, [color, color2]);

  return (
    <canvas
      ref={canvasRef}
      className="waveform"
      style={{ height }}
      aria-hidden="true"
    />
  );
}
