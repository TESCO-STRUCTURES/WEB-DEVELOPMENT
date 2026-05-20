import { useState } from 'react';
import './OurProjectPortfolio.css';

import p1 from '../../assets/pros1.png';
import p2 from '../../assets/pros2.png';
import p3 from '../../assets/pros3.png';
import p4 from '../../assets/pros4.png';
import p5 from '../../assets/pros5.png';
import p6 from '../../assets/pros6.png';
import p7 from '../../assets/pros7.png';
import p8 from '../../assets/pros8.png';
import p9 from '../../assets/pros9.png';
import p10 from '../../assets/pros10.png';
import p11 from '../../assets/pros11.png';
import p12 from '../../assets/pros12.png';
import p13 from '../../assets/pros13.png';
import p14 from '../../assets/pros14.png';
import p15 from '../../assets/pros15.png';

const PROJECTS = [
  { src: p1, category: 'PEB' },
  { src: p2, category: 'PEB' },
  { src: p3, category: 'PEB' },
  { src: p4, category: 'Tensile' },
  { src: p5, category: 'Tensile' },
  { src: p6, category: 'Tensile' },
  { src: p7, category: 'Civil' },
  { src: p8, category: 'Civil' },
  { src: p9, category: 'Civil' },
  { src: p10, category: 'Design' },
  { src: p11, category: 'Design' },
  { src: p12, category: 'Design' },
  { src: p13, category: 'Roofing' },
  { src: p14, category: 'Roofing' },
  { src: p15, category: 'Roofing' },
];

const CATEGORIES = ['All', 'PEB', 'Tensile', 'Civil', 'Design', 'Roofing'];

export default function OurProjectPortfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className="op-grid">
      <div className="op-grid__blob op-grid__blob--1"></div>
      <div className="op-grid__blob op-grid__blob--2"></div>

      <div className="container op-grid__inner">
        <div className="op-grid__header">
          <div className="op-grid__eyebrow-wrapper">
            <span className="op-grid__eyebrow">Portfolio</span>
          </div>
          <h2 className="op-grid__title">Our Projects</h2>
          <p className="op-grid__desc">
            Delivering excellence across industrial, commercial, and infrastructure projects through precision engineering and architectural mastery.
          </p>
          <div className="op-grid__filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`op-grid__chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="op-grid__list">
          {filteredProjects.map((p, i) => (
            <article key={i} className="op-grid__card">
              <div className="op-grid__media">
                <img
                  src={p.src}
                  alt={`Project ${i + 1}`}
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}