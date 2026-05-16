import { useEffect, useRef, useState } from 'react';
import './Architecturalhero.css';
import s1 from '../../assets/architecturalhero1.svg';
import s2 from '../../assets/architecturalhero2.svg';
import s3 from '../../assets/architecturalhero3.svg';

const SLIDES = [s1, s2, s3];
const INTERVAL = 5000;

export default function Architecturalhero() {
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
    <section className="arc-hero">
      <div className="arc-hero__stage">
        {SLIDES.map((src, i) => (
          <div key={i} className={`arc-hero__slide ${i === idx ? 'arc-hero__slide--active' : ''}`} aria-hidden={i !== idx}>
            <img src={src} alt="" className="arc-hero__img" />
            <div className="arc-hero__scrim" />
          </div>
        ))}
      </div>
      <div className="container arc-hero__overlay">
        <div className="arc-hero__copy">
          <span className="arc-hero__eyebrow">Architectural Design &amp; Structural Consultancy</span>
          <h1 className="arc-hero__title">Engineering-led <span>architectural thinking.</span></h1>
          <p className="arc-hero__desc">In-house structural design, 3D visualisation, and code-compliant drafting — engineered before the first plate is cut and signed off before the first column is poured.</p>
          <div className="arc-hero__cta">
            <a href="#arc-about" className="arc-hero__btn arc-hero__btn--primary">Explore Design</a>
            <a href="/contact" className="arc-hero__btn arc-hero__btn--ghost">Book a Design Call</a>
          </div>
        </div>
        <div className="arc-hero__dots" role="tablist" aria-label="Hero slide controls">
          {SLIDES.map((_, i) => (
            <button key={i} type="button" role="tab" aria-selected={i === idx} aria-label={`Slide ${i + 1}`} className={`arc-hero__dot ${i === idx ? 'arc-hero__dot--active' : ''}`} onClick={() => go(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
