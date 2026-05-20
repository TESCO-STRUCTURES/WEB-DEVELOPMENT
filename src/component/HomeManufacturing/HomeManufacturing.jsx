import { useState, useEffect } from 'react';
import './HomeManufacturing.css';
import img1 from '../../assets/homemanufacturing1.svg';
import img2 from '../../assets/homemanufacturing2.svg';
import img3 from '../../assets/homemanufacturing3.svg';

const CARDS = [
  { src: img1, title: 'Skilled Workforce' },
  { src: img2, title: 'Integrated Manufacturing Process' },
  { src: img3, title: 'Integrated Manufacturing Process' },
];

export default function HomeManufacturing() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % CARDS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getState = (i) => {
    if (i === active) return 'active';
    if (i < active)   return 'left';
    return 'right';
  };

  return (
    <section className="ts-mfg">
      <div className="container">

        {/* HEAD */}
        <div className="ts-mfg__head">
          <span className="ts-mfg__pill">Our Manufacturing Unit</span>
          <h2 className="ts-mfg__title">We own and operate our own</h2>
          <p className="ts-mfg__lede">
            High-capacity steel fabrication with advanced machinery and skilled workforce.<br />
            1,500 MT monthly output in a 1,00,000 sq.ft facility.<br />
            Expertise in PEB structures, sheds, and custom steel work.
          </p>
        </div>

        {/* CARDS */}
        <div className="ts-mfg__grid">
          {CARDS.map((c, i) => (
            <article
              key={i}
              className={`ts-mfg__card ts-mfg__card--${getState(i)}`}
              onClick={() => setActive(i)}
            >
              <img src={c.src} alt={c.title} className="ts-mfg__img" />
            </article>
          ))}
        </div>

        {/* DOTS */}
        <div className="ts-mfg__dots">
          {CARDS.map((_, i) => (
            <button
              key={i}
              className={`ts-mfg__dot ${i === active ? 'ts-mfg__dot--active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Card ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}