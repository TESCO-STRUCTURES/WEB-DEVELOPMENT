import React from "react";
import "./PEBHero.css";

/* ============================================
   SVG IMAGES
============================================ */
import pebhero1 from "../../assets/pebhero1.svg";
import pebhero2 from "../../assets/pebhero2.svg";
import pebhero3 from "../../assets/pebhero3.svg";

/* ============================================
   CENTER ICON
============================================ */
import PEBicon from "../../assets/PEBicon.svg";

/* ============================================
   PEBlow SVG
============================================ */
import PEBlow from "../../assets/PEBlow.svg";

const PEBHero = () => {
  return (
    <section className="peb-hero">

      <div className="container peb-hero__overlay">

        {/* ============================================
            LEFT IMAGE GRID
        ============================================ */}
        <div className="peb-hero__gallery">

          {/* BIG LEFT IMAGE */}
          <div className="peb-hero__gallery-big">
            <img
              src={pebhero1}
              alt="PEB Main"
            />
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="peb-hero__gallery-side">

            {/* TOP IMAGE */}
            <div className="peb-hero__gallery-small">
              <img
                src={pebhero2}
                alt="PEB Top"
              />
            </div>

            {/* BOTTOM IMAGE */}
            <div className="peb-hero__gallery-small">
              <img
                src={pebhero3}
                alt="PEB Bottom"
              />
            </div>

          </div>

          {/* ============================================
              CENTER PEB ICON
          ============================================ */}
          <div className="peb-hero__center-icon">
            <img
              src={PEBicon}
              alt="PEB Icon"
            />
          </div>

        </div>

        {/* ============================================
            RIGHT CONTENT
        ============================================ */}
        <div className="peb-hero__copy">

          {/* SMALL TITLE */}
          <div className="peb-hero__eyebrow">
            ⚡ India's Trusted PEB Builder
          </div>

          {/* MAIN TITLE */}
          <h1 className="peb-hero__title">
            Pre-Engineered Building Solutions
          </h1>

          {/* ORANGE LINE */}
          <div className="peb-hero__line"></div>

          {/* DESCRIPTION */}
          <p className="peb-hero__desc">
            Delivering durable, cost-effective steel structures
            designed for speed, strength, and long-term value.
          </p>

          {/* ============================================
              BUTTONS
          ============================================ */}
          <div className="peb-hero__cta">

            <a
              href="/contact"
              className="peb-hero__btn peb-hero__btn--primary"
            >
              Book Free Site Inspection
            </a>

            <a
              href="/pricing"
              className="peb-hero__btn peb-hero__btn--ghost"
            >
              Get Instant Pricing
            </a>

          </div>

          {/* ============================================
              PEBlow SVG
          ============================================ */}
          <img
            src={PEBlow}
            alt="PEB Bottom Design"
            className="peb-hero__bottom-img"
          />

        </div>

      </div>
    </section>
  );
};

export default PEBHero;