import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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

            <Link
              to="/projects"
              className="ts-hero__pricing-btn"
            >
              View Our Projects
            </Link>

            <Link
              to="/contact"
              className="ts-hero__inspection-btn"
            >
              Book Free Site Inspection
            </Link>

          </div>

        </div>

        {/* RIGHT SIDE FLOATING ICONS — mail / WhatsApp / phone.
            Image is heroright.svg (74×234 viewBox, 3 icons stacked).
            Each icon is overlaid with a transparent <a> hotspot
            sized as a % of the wrapper so the click area scales
            with responsive sizing. */}
        <div className="ts-hero__right-img" aria-label="Quick contact">
          <img
            src={heroright}
            alt=""
            className="ts-hero__right-img-pic"
            aria-hidden="true"
          />
          <a
            href="mailto:tescostructure@gmail.com"
            className="ts-hero__right-hot ts-hero__right-hot--mail"
            aria-label="Email Tesco Structures"
          />
          <a
            href="https://wa.me/919600652424"
            target="_blank"
            rel="noopener noreferrer"
            className="ts-hero__right-hot ts-hero__right-hot--wa"
            aria-label="WhatsApp Tesco Structures"
          />
          <a
            href="tel:+919600652424"
            className="ts-hero__right-hot ts-hero__right-hot--call"
            aria-label="Call Tesco Structures"
          />
        </div>

      </div>

    </section>
  );
}