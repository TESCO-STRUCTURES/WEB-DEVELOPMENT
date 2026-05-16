import { useEffect, useRef, useState } from 'react';
import './Civilhero.css';
import s1 from '../../assets/civilhero1.svg';
import s2 from '../../assets/civilhero2.svg';
import s3 from '../../assets/civilhero3.svg';

const SLIDES = [s1, s2, s3];
const INTERVAL = 5000;

export default function Civilhero() {
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(timer.current);
  }, []);

  const go = (n) => {
    clearInterval(timer.current);
    setIdx((n + SLIDES.length) % SLIDES.length);
    timer.current = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), INTERVAL);
  };

  return (
    <section className="civ-hero">
      <div className="civ-hero__stage">
        {SLIDES.map((src, i) => (
          <div key={i} className={`civ-hero__slide ${i === idx ? 'civ-hero__slide--active' : ''}`} aria-hidden={i !== idx}>
            <img src={src} alt="" className="civ-hero__img" />
            <div className="civ-hero__scrim" />
          </div>
        ))}
      </div>
      <div className="container civ-hero__overlay">
        <div className="civ-hero__copy">
          <span className="civ-hero__eyebrow">Civil Construction</span>
          <h1 className="civ-hero__title">Solid foundations. <span>Built to last.</span></h1>
          <p className="civ-hero__desc">End-to-end civil works delivered by Tesco&apos;s in-house crew — earthworks, RCC, plinth, finishing, and groundworks executed with daily on-site supervision.</p>
          <div className="civ-hero__cta">
            <a href="#civ-about" className="civ-hero__btn civ-hero__btn--primary">Explore Civil</a>
            <a href="/contact" className="civ-hero__btn civ-hero__btn--ghost">Request a Quote</a>
          </div>
        </div>
        <div className="civ-hero__dots" role="tablist" aria-label="Hero slide controls">
          {SLIDES.map((_, i) => (
            <button key={i} type="button" role="tab" aria-selected={i === idx} aria-label={`Slide ${i + 1}`} className={`civ-hero__dot ${i === idx ? 'civ-hero__dot--active' : ''}`} onClick={() => go(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
