import { useState } from 'react';
import './Architecturalprojects.css';
import p1 from '../../assets/architecturalprojects1.svg';
import p2 from '../../assets/architecturalprojects2.svg';
import p3 from '../../assets/architecturalprojects3.svg';

const PROJECTS = [
  { src: p1, tag: 'Stadium · Bangalore',   title: 'Indira Stadium Structural Design', desc: 'Complete structural design + 3D rendering for a 28,000-seat stadium roof.',  stats: [['28K', 'seats'],   ['85K', 'sq.ft.'], ['90m', 'span']] },
  { src: p2, tag: 'Logistics · Chennai',   title: 'Adani Port Drafting',              desc: 'Drafting + BOQ generation for a 12-shed port complex.',                       stats: [['12', 'sheds'],    ['400K', 'sq.ft.'], ['8', 'months']] },
  { src: p3, tag: 'Healthcare · Pune',     title: 'Apollo Hospital Consultancy',      desc: 'Structural consultancy and load analysis for a 9-storey hospital block.',     stats: [['9', 'floors'],    ['180K', 'sq.ft.'], ['11', 'months']] },
];

export default function Architecturalprojects() {
  const [idx, setIdx] = useState(0);
  const go = (n) => setIdx((n + PROJECTS.length) % PROJECTS.length);
  const active = PROJECTS[idx];
  return (
    <section id="arc-projects" className="arc-pro">
      <div className="container">
        <div className="arc-pro__head">
          <span className="arc-pro__eyebrow">Design Projects</span>
          <h2 className="arc-pro__title">Selected <span>design builds</span></h2>
        </div>
        <div className="arc-pro__stage">
          <div className="arc-pro__media">
            {PROJECTS.map((p, i) => (
              <img key={i} src={p.src} alt={p.title} className={`arc-pro__img ${i === idx ? 'arc-pro__img--active' : ''}`} aria-hidden={i !== idx} />
            ))}
            <div className="arc-pro__scrim" />
          </div>
          <div className="arc-pro__info">
            <span className="arc-pro__tag">{active.tag}</span>
            <h3 className="arc-pro__name">{active.title}</h3>
            <p className="arc-pro__desc">{active.desc}</p>
            <ul className="arc-pro__stats">
              {active.stats.map(([n, l]) => (
                <li key={l} className="arc-pro__stat"><span className="arc-pro__stat-n">{n}</span><span className="arc-pro__stat-l">{l}</span></li>
              ))}
            </ul>
            <div className="arc-pro__nav">
              <button type="button" className="arc-pro__arrow" aria-label="Previous" onClick={() => go(idx - 1)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
              <button type="button" className="arc-pro__arrow" aria-label="Next" onClick={() => go(idx + 1)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
              <span className="arc-pro__count"><span>{String(idx + 1).padStart(2, '0')}</span><span className="arc-pro__count-sep">/</span><span>{String(PROJECTS.length).padStart(2, '0')}</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
