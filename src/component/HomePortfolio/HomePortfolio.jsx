import { useState } from 'react';
import './HomePortfolio.css';
import p1 from '../../assets/homeportfolio1.svg';
import p2 from '../../assets/homeportfolio2.svg';
import p3 from '../../assets/homeportfolio3.svg';

const PROJECTS = [
  {
    src: p1,
    tag: 'Industrial · Pune',
    title: 'Reliance Mega Warehouse',
    desc:  '180,000 sq.ft. column-free PEB warehouse — delivered in 9 months.',
  },
  {
    src: p2,
    tag: 'Sports · Bangalore',
    title: 'Indira Stadium Canopy',
    desc:  'Architectural tensile canopy covering 28,000 spectators.',
  },
  {
    src: p3,
    tag: 'Logistics · Chennai',
    title: 'Adani Port Roofing System',
    desc:  'Anti-corrosion roofing across 12 dockside transit sheds.',
  },
];

export default function HomePortfolio() {
  return (
    <section id="portfolio" className="ts-pfo">
      <div className="container">
        <div className="ts-pfo__head">
          <span className="ts-pfo__eyebrow">Portfolio</span>
          <p className="ts-pfo__desc">Delivering high-quality construction projects with precision and reliability.<br/>Our portfolio reflects strong engineering, modern design, and trusted execution.</p>
        </div>

        <div className="ts-pfo__stage">
          <div className="ts-pfo__grid">
            {PROJECTS.map((p, i) => (
              <div key={i} className="ts-pfo__item">
                <img src={p.src} alt={p.title} className="ts-pfo__img" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
