import { useState } from 'react';
import './Allprojects.css';
import p1 from '../../assets/allprojects1.svg';
import p2 from '../../assets/allprojects2.svg';
import p3 from '../../assets/allprojects3.svg';

const PROJECTS = [
  { src: p1, tag: 'Logistics · Chennai',   title: 'Adani Port Roofing',          desc: 'Anti-corrosion roofing across 12 dockside transit sheds.',           stats: [['400K', 'sq.ft.'], ['12', 'sheds'],  ['AZ-150', 'coating']] },
  { src: p2, tag: 'Sports · Bangalore',    title: 'Indira Stadium Curved Roof',  desc: 'Site-curved standing-seam roof spanning 28,000 seats.',              stats: [['85K', 'sq.ft.'],  ['90m', 'span'],   ['Curved', 'profile']] },
  { src: p3, tag: 'Industrial · Pune',     title: 'Reliance Insulated Shed',     desc: '180,000 sq.ft. of insulated PUF panel roofing on a logistics hub.',  stats: [['180K', 'sq.ft.'], ['80mm', 'PUF'],   ['9', 'months']] },
];

export default function Allprojects() {
  const [idx, setIdx] = useState(0);
  const go = (n) => setIdx((n + PROJECTS.length) % PROJECTS.length);
  const active = PROJECTS[idx];
  return (
    <section id="all-projects" className="all-pro">
      <div className="container">
        <div className="all-pro__head">
          <span className="all-pro__eyebrow">Roofing Projects</span>
          <h2 className="all-pro__title">Selected <span>roofing installations</span></h2>
        </div>
        <div className="all-pro__stage">
          <div className="all-pro__media">
            {PROJECTS.map((p, i) => (
              <img key={i} src={p.src} alt={p.title} className={`all-pro__img ${i === idx ? 'all-pro__img--active' : ''}`} aria-hidden={i !== idx} />
            ))}
            <div className="all-pro__scrim" />
          </div>
          <div className="all-pro__info">
            <span className="all-pro__tag">{active.tag}</span>
            <h3 className="all-pro__name">{active.title}</h3>
            <p className="all-pro__desc">{active.desc}</p>
            <ul className="all-pro__stats">
              {active.stats.map(([n, l]) => (
                <li key={l} className="all-pro__stat"><span className="all-pro__stat-n">{n}</span><span className="all-pro__stat-l">{l}</span></li>
              ))}
            </ul>
            <div className="all-pro__nav">
              <button type="button" className="all-pro__arrow" aria-label="Previous" onClick={() => go(idx - 1)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
              <button type="button" className="all-pro__arrow" aria-label="Next" onClick={() => go(idx + 1)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
              <span className="all-pro__count"><span>{String(idx + 1).padStart(2, '0')}</span><span className="all-pro__count-sep">/</span><span>{String(PROJECTS.length).padStart(2, '0')}</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
