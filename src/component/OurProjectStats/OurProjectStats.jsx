import { useEffect, useMemo, useRef, useState } from 'react';
import './OurProjectStats.css';

/* ============================================================
   DigitReel — same slot-machine effect used in AboutMission.

   direction="up"   : strip in natural 0→9 order, slides UP.
   direction="down" : strip in reverse 9→0 order, slides DOWN.

   `cycles` full rotations are added before landing on `value`,
   so the digit visibly spins through every digit several times
   before settling. Triggered once when scrolled into view.
============================================================ */
function DigitReel({ value, direction = 'up', cycles = 3, duration = 1900, delay = 0 }) {
  const ref = useRef(null);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setArmed(true), delay);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const digits = useMemo(() => {
    const arr = [];
    for (let c = 0; c < cycles; c++) {
      for (let d = 0; d <= 9; d++) arr.push(d);
    }
    for (let d = 0; d <= value; d++) arr.push(d);
    return direction === 'down' ? arr.slice().reverse() : arr;
  }, [value, direction, cycles]);

  const stripLen = digits.length;
  const startIdx = direction === 'up' ? 0 : stripLen - 1;
  const endIdx   = direction === 'up' ? stripLen - 1 : 0;
  const idx = armed ? endIdx : startIdx;
  /* Each .op-stats__reel-d is exactly 0.95em tall (matches the reel window),
     so translating by `idx * 0.95em` moves one digit per index step. */
  const transform = `translateY(calc(${-idx} * 0.95em))`;

  return (
    <span ref={ref} className="op-stats__reel">
      <span
        className="op-stats__reel-strip"
        style={{
          transform,
          transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        }}
      >
        {digits.map((d, i) => (
          <span key={i} className="op-stats__reel-d">{d}</span>
        ))}
      </span>
    </span>
  );
}

/* Render a multi-digit number as a row of DigitReels.
   Even-indexed digits scroll UP, odd-indexed digits scroll DOWN —
   so the digits alternate direction across the number, matching
   the "left up / right down" feel from the Mission section. */
function StatNumber({ num, suffix }) {
  const digits = String(num).split('').map(Number);
  return (
    <span className="op-stats__num">
      {digits.map((d, i) => (
        <DigitReel
          key={i}
          value={d}
          direction={i % 2 === 0 ? 'up' : 'down'}
          cycles={3}
          duration={1900}
          delay={120 + i * 80}
        />
      ))}
      <span className="op-stats__suffix">{suffix}</span>
    </span>
  );
}

const STATS = [
  { num: 500, suffix: '+', label: 'PROJECTS COMPLETED' },
  { num: 15,  suffix: '+', label: 'YEARS EXPERIENCE' },
  { num: 100, suffix: '%', label: 'CLIENT SATISFACTION' },
];

export default function OurProjectStats() {
  return (
    <section className="op-stats">
      <div className="container">
        <div className="op-stats__pill">
          {STATS.map((s, index) => (
            <div key={s.label} className="op-stats__item">
              <StatNumber num={s.num} suffix={s.suffix} />
              <div className="op-stats__orange-line"></div>
              <span className="op-stats__label">{s.label}</span>
              {index < STATS.length - 1 && <div className="op-stats__divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
