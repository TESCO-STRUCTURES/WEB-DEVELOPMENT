import { useEffect, useRef, useState } from 'react';
import './Allhero.css';
import s1 from '../../assets/allhero1.svg';
import s2 from '../../assets/allhero2.svg';
import s3 from '../../assets/allhero3.svg';

const SLIDES = [s1, s2, s3];
const INTERVAL = 5000;

export default function Allhero() {
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
    <section className="all-hero">
      <div className="all-hero__stage">
        {SLIDES.map((src, i) => (
          <div key={i} className={`all-hero__slide ${i === idx ? 'all-hero__slide--active' : ''}`} aria-hidden={i !== idx}>
            <img src={src} alt="" className="all-hero__img" />
            <div className="all-hero__scrim" />
          </div>
        ))}
      </div>
      <div className="container all-hero__overlay">
        <div className="all-hero__copy">
          <span className="all-hero__eyebrow">All Type of Roofing</span>
          <h1 className="all-hero__title">Every profile. <span>One trusted partner.</span></h1>
          <p className="all-hero__desc">From trapezoidal industrial sheds to architectural curved canopies, Tesco delivers roofing systems engineered for India&apos;s climate — weather-tight, anti-corrosion, and visually striking.</p>
          <div className="all-hero__cta">
            <a href="#all-about" className="all-hero__btn all-hero__btn--primary">Explore Roofing</a>
            <a href="/contact" className="all-hero__btn all-hero__btn--ghost">Compare Options</a>
          </div>
        </div>
        <div className="all-hero__dots" role="tablist" aria-label="Hero slide controls">
          {SLIDES.map((_, i) => (
            <button key={i} type="button" role="tab" aria-selected={i === idx} aria-label={`Slide ${i + 1}`} className={`all-hero__dot ${i === idx ? 'all-hero__dot--active' : ''}`} onClick={() => go(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
