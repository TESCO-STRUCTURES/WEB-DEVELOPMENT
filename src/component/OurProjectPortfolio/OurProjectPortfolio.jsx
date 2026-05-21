import { useEffect, useState } from 'react';
import './OurProjectPortfolio.css';

import p1  from '../../assets/pros1.png';
import p2  from '../../assets/pros2.png';
import p3  from '../../assets/pros3.png';
import p4  from '../../assets/pros4.png';
import p5  from '../../assets/pros5.png';
import p6  from '../../assets/pros6.png';
import p7  from '../../assets/pros7.png';
import p8  from '../../assets/pros8.png';
import p9  from '../../assets/pros9.png';
import p10 from '../../assets/pros10.png';
import p11 from '../../assets/pros11.png';
import p12 from '../../assets/pros12.png';
import p13 from '../../assets/pros13.png';
import p14 from '../../assets/pros14.png';
import p15 from '../../assets/pros15.png';

/* 15 projects — 3 per category as specified */
const PROJECTS = [
  { src: p1,  title: 'Industrial Warehouse',     category: 'PEB' },
  { src: p2,  title: 'Steel Manufacturing Shed', category: 'PEB' },
  { src: p3,  title: 'Logistics Distribution',   category: 'PEB' },
  { src: p4,  title: 'Stadium Tensile Canopy',   category: 'Tensile' },
  { src: p5,  title: 'Architectural Atrium',     category: 'Tensile' },
  { src: p6,  title: 'Public Walkway Shade',     category: 'Tensile' },
  { src: p7,  title: 'RCC Plant Foundation',     category: 'Civil' },
  { src: p8,  title: 'Multi-Storey Frame',       category: 'Civil' },
  { src: p9,  title: 'Campus Civil Works',       category: 'Civil' },
  { src: p10, title: 'Stadium Structural Design',category: 'Design' },
  { src: p11, title: '3D Visualization Study',   category: 'Design' },
  { src: p12, title: 'Hospital Consultancy',     category: 'Design' },
  { src: p13, title: 'Standing-Seam Roof',       category: 'Roofing' },
  { src: p14, title: 'Curved Architectural Roof',category: 'Roofing' },
  { src: p15, title: 'Insulated PUF Panels',     category: 'Roofing' },
];

const CATEGORIES = ['All', 'PEB', 'Tensile', 'Civil', 'Design', 'Roofing'];

export default function OurProjectPortfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  /* "All" → 8 smaller cards (4 × 2 compact grid).
     Specific category → all 3 cards from that category in standard size. */
  const isAll = activeCategory === 'All';
  const filteredProjects = isAll
    ? PROJECTS.slice(0, 8)
    : PROJECTS.filter((p) => p.category === activeCategory);

  const [introActive, setIntroActive] = useState(true);
  const introProject = filteredProjects[0] || PROJECTS[0];
  const cardOrigins = isAll
    ? [
        { x: '-240px', y: '-120px' },
        { x: '-80px', y: '-120px' },
        { x: '80px', y: '-120px' },
        { x: '240px', y: '-120px' },
        { x: '-240px', y: '120px' },
        { x: '-80px', y: '120px' },
        { x: '80px', y: '120px' },
        { x: '240px', y: '120px' },
      ]
    : filteredProjects.map(() => ({ x: '0px', y: '24px' }));

  useEffect(() => {
    const timer = setTimeout(() => setIntroActive(false), 1300);
    return () => clearTimeout(timer);
  }, [isAll]);

  return (
    <section className="op-grid">
      <div className="op-grid__blob op-grid__blob--1" aria-hidden></div>
      <div className="op-grid__blob op-grid__blob--2" aria-hidden></div>

      <div className="container op-grid__inner">
        <div className="op-grid__header">
          <div className="op-grid__eyebrow-wrapper">
            <span className="op-grid__eyebrow">Portfolio</span>
          </div>
          <h2 className="op-grid__title">Our Projects</h2>
          <p className="op-grid__desc">
            Delivering excellence across industrial, commercial, and infrastructure projects
            through precision engineering and architectural mastery.
          </p>
          <div className="op-grid__filters" role="tablist" aria-label="Filter projects by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`op-grid__chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

       

        {/* Key forces remount on filter change → replays stagger animation */}
        <div
          key={activeCategory}
          className={`op-grid__list ${isAll ? 'op-grid__list--compact' : 'op-grid__list--standard'} ${introActive ? 'op-grid__list--hidden' : ''}`}
        >
          {filteredProjects.map((p, i) => (
            <article
              key={`${activeCategory}-${i}`}
              className="op-grid__card"
              style={{
                animationDelay: `${i * 70}ms`,
                '--enter-x': cardOrigins[i]?.x || '0px',
                '--enter-y': cardOrigins[i]?.y || '24px',
              }}
            >
              <div className="op-grid__media">
                <img src={p.src} alt={p.title} loading="lazy" />
                <span className="op-grid__scrim" aria-hidden />
                <div className="op-grid__caption">
                  <span className="op-grid__cat">{p.category}</span>
                  <h3 className="op-grid__pname">{p.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
