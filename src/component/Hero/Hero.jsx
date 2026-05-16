import { useEffect, useRef, useState } from 'react';
import './Hero.css';

import hero1 from '../../assets/homehero1.svg';
import hero2 from '../../assets/homehero2.svg';
import hero3 from '../../assets/homehero3.svg';
import hero4 from '../../assets/homehero4.svg';

import heroButtonIcon from '../../assets/herobutton.svg';
import heroright from '../../assets/heroright.svg';

const SLIDES = [hero1, hero2, hero3, hero4];

const INTERVAL = 5500;

export default function Hero() {

  const [idx, setIdx] = useState(0);

  const timer = useRef(null);

  useEffect(() => {

    timer.current = setInterval(() => {
      setIdx((i) => (i + 1) % SLIDES.length);
    }, INTERVAL);

    return () => clearInterval(timer.current);

  }, []);

  return (

    <section id="home" className="ts-hero">

      {/* SLIDER */}
      <div className="ts-hero__stage">

        {SLIDES.map((img, i) => (

          <div
            key={i}
            className={`ts-hero__slide ${
              i === idx ? 'ts-hero__slide--active' : ''
            }`}
          >

            <img
              src={img}
              alt={`Hero Slide ${i + 1}`}
              className="ts-hero__img"
            />

            <div className="ts-hero__scrim" />

          </div>

        ))}

      </div>

      {/* HERO CONTENT */}
      <div className="ts-hero__overlay">

        <div className="ts-hero__content">

          {/* TOP BUTTON */}
          <button
            type="button"
            className="ts-hero__tag-btn"
          >

            <img
              src={heroButtonIcon}
              alt=""
              className="ts-hero__tag-icon"
            />

            <span>
              Turning vision into reality
            </span>

          </button>

          {/* TITLE */}
          <h1 className="ts-hero__title">
            WELCOME TO TESCO STRUCTURE
          </h1>

          {/* DESCRIPTION */}
          <p className="ts-hero__desc">
            We design, fabricate, and install durable roofing and
            structures with <br />
            precision, ensuring quality for industrial
            and residential projects.
          </p>

          {/* BUTTONS */}
          <div className="ts-hero__buttons">

            <button
              type="button"
              className="ts-hero__pricing-btn"
            >
              Get Instant Pricing
            </button>

            <button
              type="button"
              className="ts-hero__inspection-btn"
            >
              Book Free Site Inspection
            </button>

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <img
          src={heroright}
          alt=""
          className="ts-hero__right-img"
        />

      </div>

    </section>
  );
}