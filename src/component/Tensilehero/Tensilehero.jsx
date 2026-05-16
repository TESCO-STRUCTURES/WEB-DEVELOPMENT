import { useEffect, useRef, useState } from 'react';
import './Tensilehero.css';
import s1 from '../../assets/tensilehero1.svg';
import s2 from '../../assets/tensilehero2.svg';
import s3 from '../../assets/tensilehero3.svg';

const SLIDES = [s1, s2, s3];
const INTERVAL = 5000;

export default function Tensilehero() {
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
    <section className="ten-hero">
      <div className="ten-hero__stage">
        {SLIDES.map((src, i) => (
          <div
            key={i}
            className={`ten-hero__slide ${i === idx ? 'ten-hero__slide--active' : ''}`}
            aria-hidden={i !== idx}
          >
            <img src={src} alt="" className="ten-hero__img" />
            <div className="ten-hero__scrim" />
          </div>
        ))}
      </div>

      <div className="container ten-hero__overlay">
        <div className="ten-hero__copy">
          <span className="ten-hero__eyebrow">Tensile Roofing</span>
          <h1 className="ten-hero__title">
            Sweeping spans. <span>Sculpted shade.</span>
          </h1>
          <p className="ten-hero__desc">
            Architectural tensile structures engineered for stadiums, atriums,
            entrance canopies and walkways — combining structural rigour with
            aesthetic ambition.
          </p>
          <div className="ten-hero__cta">
            <a href="#ten-about" className="ten-hero__btn ten-hero__btn--primary">Explore Tensile</a>
            <a href="#contact"   className="ten-hero__btn ten-hero__btn--ghost">Request a Quote</a>
          </div>
        </div>

        <div className="ten-hero__dots" role="tablist" aria-label="Hero slide controls">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === idx}
              aria-label={`Slide ${i + 1}`}
              className={`ten-hero__dot ${i === idx ? 'ten-hero__dot--active' : ''}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
