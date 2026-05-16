import { useState } from 'react';
import './Civilprojects.css';
import p1 from '../../assets/civilprojects1.svg';
import p2 from '../../assets/civilprojects2.svg';
import p3 from '../../assets/civilprojects3.svg';

const PROJECTS = [
  { src: p1, tag: 'Industrial · Pune',    title: 'Reliance Plant Foundations',  desc: '180,000 sq.ft. RCC raft + plinth for a logistics warehouse.', stats: [['180K', 'sq.ft.'], ['2,400m³', 'concrete'], ['6', 'months']] },
  { src: p2, tag: 'Commercial · Chennai', title: 'ITC Office Civil Works',      desc: '5-storey RCC frame with basement parking and finishing.',      stats: [['85K', 'sq.ft.'], ['5', 'floors'],     ['11', 'months']] },
  { src: p3, tag: 'Education · Bangalore',title: 'University Campus Civil',     desc: 'Compound walls, drainage, and foundation across 12 acres.',    stats: [['12', 'acres'],   ['8', 'buildings'],  ['14', 'months']] },
];

export default function Civilprojects() {
  const [idx, setIdx] = useState(0);
  const go = (n) => setIdx((n + PROJECTS.length) % PROJECTS.length);
  const active = PROJECTS[idx];
  return (
    <section id="civ-projects" className="civ-pro">
      <div className="container">
        <div className="civ-pro__head">
          <span className="civ-pro__eyebrow">Civil Projects</span>
          <h2 className="civ-pro__title">Selected <span>civil builds</span></h2>
        </div>
        <div className="civ-pro__stage">
          <div className="civ-pro__media">
            {PROJECTS.map((p, i) => (
              <img key={i} src={p.src} alt={p.title} className={`civ-pro__img ${i === idx ? 'civ-pro__img--active' : ''}`} aria-hidden={i !== idx} />
            ))}
            <div className="civ-pro__scrim" />
          </div>
          <div className="civ-pro__info">
            <span className="civ-pro__tag">{active.tag}</span>
            <h3 className="civ-pro__name">{active.title}</h3>
            <p className="civ-pro__desc">{active.desc}</p>
            <ul className="civ-pro__stats">
              {active.stats.map(([n, l]) => (
                <li key={l} className="civ-pro__stat"><span className="civ-pro__stat-n">{n}</span><span className="civ-pro__stat-l">{l}</span></li>
              ))}
            </ul>
            <div className="civ-pro__nav">
              <button type="button" className="civ-pro__arrow" aria-label="Previous" onClick={() => go(idx - 1)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
              <button type="button" className="civ-pro__arrow" aria-label="Next" onClick={() => go(idx + 1)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
              <span className="civ-pro__count"><span>{String(idx + 1).padStart(2, '0')}</span><span className="civ-pro__count-sep">/</span><span>{String(PROJECTS.length).padStart(2, '0')}</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
