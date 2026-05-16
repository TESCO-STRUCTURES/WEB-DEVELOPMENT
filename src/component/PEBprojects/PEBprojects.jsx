import { useState } from 'react';
import './PEBprojects.css';
import p1 from '../../assets/PEBprojects1.svg';
import p2 from '../../assets/PEBprojects2.svg';
import p3 from '../../assets/PEBprojects3.svg';

const PROJECTS = [
  {
    src: p1,
    tag:   'Logistics · Pune',
    title: 'Reliance Mega Warehouse',
    desc:  '180,000 sq.ft. column-free PEB warehouse delivered in 9 months.',
    stats: [['180K', 'sq.ft.'], ['9', 'months'], ['72m', 'clear span']],
  },
  {
    src: p2,
    tag:   'Manufacturing · Chennai',
    title: 'TVS Auto Components Plant',
    desc:  'Twin-bay heavy fabrication shed with overhead crane gantry.',
    stats: [['120K', 'sq.ft.'], ['11', 'months'], ['80T', 'crane']],
  },
  {
    src: p3,
    tag:   'Sports · Bangalore',
    title: 'Indira Stadium Roof',
    desc:  'Architectural PEB canopy spanning 28,000 spectator seats.',
    stats: [['85K', 'sq.ft.'], ['14', 'months'], ['90m', 'free span']],
  },
];

export default function PEBprojects() {
  const [idx, setIdx] = useState(0);
  const go = (n) => setIdx((n + PROJECTS.length) % PROJECTS.length);
  const active = PROJECTS[idx];

  return (
    <section id="peb-projects" className="peb-pro">
      <div className="container">
        <div className="peb-pro__head">
          <span className="peb-pro__eyebrow">PEB Projects</span>
          <h2 className="peb-pro__title">Selected <span>completed builds</span></h2>
        </div>

        <div className="peb-pro__stage">
          <div className="peb-pro__media">
            {PROJECTS.map((p, i) => (
              <img
                key={i}
                src={p.src}
                alt={p.title}
                className={`peb-pro__img ${i === idx ? 'peb-pro__img--active' : ''}`}
                aria-hidden={i !== idx}
              />
            ))}
            <div className="peb-pro__scrim" />
          </div>

          <div className="peb-pro__info">
            <span className="peb-pro__tag">{active.tag}</span>
            <h3 className="peb-pro__name">{active.title}</h3>
            <p className="peb-pro__desc">{active.desc}</p>

            <ul className="peb-pro__stats">
              {active.stats.map(([n, l]) => (
                <li key={l} className="peb-pro__stat">
                  <span className="peb-pro__stat-n">{n}</span>
                  <span className="peb-pro__stat-l">{l}</span>
                </li>
              ))}
            </ul>

            <div className="peb-pro__nav">
              <button type="button" className="peb-pro__arrow" aria-label="Previous project" onClick={() => go(idx - 1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
              <button type="button" className="peb-pro__arrow" aria-label="Next project" onClick={() => go(idx + 1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
              <span className="peb-pro__count">
                <span>{String(idx + 1).padStart(2, '0')}</span>
                <span className="peb-pro__count-sep">/</span>
                <span>{String(PROJECTS.length).padStart(2, '0')}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
