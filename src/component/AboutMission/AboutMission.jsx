import { useEffect, useMemo, useRef, useState } from 'react';
import './AboutMission.css';

/* ============================================================
   Client logos shown next to "15+ YEARS OF EXPERIENCE".
============================================================ */
import logo1 from '../../assets/logo1.svg';
import logo2 from '../../assets/logo2.svg';
import logo3 from '../../assets/logo3.svg';
import logo4 from '../../assets/logo4.svg';

/* ---------- Card icons ---------- */

const IconMission = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="4" r="1.6" />
    <line x1="12" y1="5.6" x2="5" y2="21" />
    <line x1="12" y1="5.6" x2="19" y2="21" />
    <line x1="7.6" y1="14.5" x2="16.4" y2="14.5" />
  </svg>
);

const IconVision = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
    <circle cx="12" cy="12" r="3.2" />
  </svg>
);

const IconQuality = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2.2 L13.8 3.5 L16 3.3 L16.8 5.3 L18.7 6 L18.3 8.1 L19.7 9.7 L18.4 11.4 L19 13.6 L17 14.4 L16.5 16.6 L14.4 16.3 L13 18 L11 17.3 L9 18 L7.6 16.3 L5.5 16.6 L5 14.4 L3 13.6 L3.6 11.4 L2.3 9.7 L3.7 8.1 L3.3 6 L5.2 5.3 L6 3.3 L8.2 3.5 Z" />
    <path d="M8.5 11.5 L11 13.8 L15.5 9.2" />
  </svg>
);

const CARDS = [
  { title: 'Our Mission', Icon: IconMission, desc: 'Deliver projects on time through innovation, reliability, and sustainable construction practices while maintaining the highest standards of quality and safety.' },
  { title: 'Our Vision',  Icon: IconVision,  desc: 'Provide innovative, sustainable, and cost-effective construction solutions that set new benchmarks in quality and long-term performance.' },
  { title: 'Our Quality', Icon: IconQuality, desc: 'Ensure precision, safety, and efficiency using advanced technology, skilled expertise, and premium materials for durable and reliable results.' },
];

/* ============================================================
   DigitReel — slot-machine style digit roll.

   Strip is built by stacking `cycles` full 0→9 rotations and
   then the digits 0…target, so the reel actually cycles
   through every digit multiple times before landing.

   direction="up"   : strip stays in natural 0→9 order, animates
                      translateY(0) → translateY(-(end) * 100%).
                      Strip slides UP, new digits enter from BOTTOM.

   direction="down" : strip is reversed, animates from the bottom
                      of the strip up to the top. Strip slides DOWN,
                      new digits enter from the TOP.
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

  /* Build the digit strip. Cycle through 0→9 `cycles` times,
     then ascend 0…value so the final digit at the bottom is `value`. */
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
  /* Each .ts-ams__reel-d is 0.95em tall (matches the reel window),
     so translating by (idx * 0.95em) snaps the strip one digit per step. */
  const transform = `translateY(calc(${-idx} * 0.95em))`;

  return (
    <span ref={ref} className="ts-ams__reel">
      <span
        className="ts-ams__reel-strip"
        style={{
          transform,
          /* ease-out cubic — fast start, gentle decelerating land */
          transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        }}
      >
        {digits.map((d, i) => (
          <span key={i} className="ts-ams__reel-d">{d}</span>
        ))}
      </span>
    </span>
  );
}

export default function AboutMission() {
  /* "15+" → tens digit (1) scrolls UP, ones digit (5) scrolls DOWN */
  const TARGET = 15;
  const tens = Math.floor(TARGET / 10);
  const ones = TARGET % 10;

  return (
    <section className="ts-ams-wrapper container">
      {/* LEFT — 15+ years of experience */}
      <div className="ts-ams-left">
        <div className="ts-ams__experience">
          <div className="ts-ams__exp-number" aria-label={`${TARGET}+ years of experience`}>
            <DigitReel value={tens} direction="up"   cycles={3} duration={1900} delay={120} />
            <DigitReel value={ones} direction="down" cycles={3} duration={1900} delay={120} />
            <span className="ts-ams__exp-plus">+</span>
          </div>
          <div className="ts-ams__exp-text">YEARS OF EXPERIENCE</div>

          <div className="ts-ams__exp-logos">
            <div className="ts-ams__logo-circle"><img src={logo1} alt="Client 1" /></div>
            <div className="ts-ams__logo-circle"><img src={logo2} alt="Client 2" /></div>
            <div className="ts-ams__logo-circle"><img src={logo3} alt="Client 3" /></div>
            <div className="ts-ams__logo-circle"><img src={logo4} alt="+2k clients" /></div>
          </div>

          <p className="ts-ams__exp-desc">Trusted by industry leaders<br />worldwide.</p>
        </div>
      </div>

      {/* RIGHT — Mission / Vision / Quality cards */}
      <div className="ts-ams">
        <div className="ts-ams__list">
          {CARDS.map(({ title, desc, Icon }, i) => (
            <div key={i} className="ts-ams__card">
              <div className="ts-ams__icon"><Icon /></div>
              <div className="ts-ams__content">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
