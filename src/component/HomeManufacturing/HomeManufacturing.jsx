import { useEffect, useRef, useState } from 'react';
import './HomeManufacturing.css';
import img1 from '../../assets/homemanufacturing1.svg';
import img2 from '../../assets/homemanufacturing2.svg';
import img3 from '../../assets/homemanufacturing3.svg';

const SLIDES = [
  { src: img1, label: 'Plate cutting' },
  { src: img2, label: 'Beam welding' },
  { src: img3, label: 'Surface finishing' },
];

const INTERVAL = 3800;

export default function HomeManufacturing() {
  const [active, setActive] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(timer.current);
  }, []);

  const focusOn = (i) => {
    clearInterval(timer.current);
    setActive(i);
    timer.current = setInterval(() => setActive((p) => (p + 1) % SLIDES.length), INTERVAL);
  };

  return (
    <section className="ts-mfg">
      <div className="container">
        <div className="ts-mfg__head">
          <span className="ts-eyebrow">Our Manufacturing Unit</span>
          <h2 className="ts-title">We own and operate our own</h2>
          <p className="ts-desc ts-mfg__lede">
         High-capacity steel fabrication with advanced machinery and skilled workforce.<br />
1,500 MT monthly output in a 1,00,000 sq.ft facility.<br />
Expertise in PEB structures, sheds, and custom steel work.
          </p>
        </div>

        <div className="ts-mfg__strip">
          {SLIDES.map((s, i) => (
            <button
              type="button"
              key={s.label}
              onClick={() => focusOn(i)}
              className={`ts-mfg__card ${i === active ? 'ts-mfg__card--active' : ''}`}
              aria-pressed={i === active}
              aria-label={`Show ${s.label}`}
            >
              <img src={s.src} alt={s.label} className="ts-mfg__img" />
              <div className="ts-mfg__caption">
                <span className="ts-mfg__step">{String(i + 1).padStart(2, '0')}</span>
                <span className="ts-mfg__label">{s.label}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="ts-mfg__progress" aria-hidden>
          {SLIDES.map((_, i) => (
            <span
              key={i}
              className={`ts-mfg__tick ${i === active ? 'ts-mfg__tick--active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
