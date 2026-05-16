import { useState } from 'react';
import './Tensileprojects.css';
import p1 from '../../assets/tensileprojects1.svg';
import p2 from '../../assets/tensileprojects2.svg';
import p3 from '../../assets/tensileprojects3.svg';

const PROJECTS = [
  { src: p1, tag: 'Sports · Bangalore',     title: 'Indira Stadium Canopy', desc: 'PTFE tensile roof covering 28,000 spectator seats.',          stats: [['28K', 'capacity'], ['85K', 'sq.ft.'], ['14', 'months']] },
  { src: p2, tag: 'Public · Mumbai',        title: 'Bandra Walkway Shade',  desc: 'Public-realm canopy spanning a 320m seafront promenade.',     stats: [['320m', 'span'],     ['40K', 'sq.ft.'], ['7', 'months']] },
  { src: p3, tag: 'Hospitality · Chennai',  title: 'ITC Atrium Roof',       desc: 'ETFE pillow-cushion atrium for a five-star property.',        stats: [['18K', 'sq.ft.'],    ['12m', 'rise'],   ['9', 'months']] },
];

export default function Tensileprojects() {
  const [idx, setIdx] = useState(0);
  const go = (n) => setIdx((n + PROJECTS.length) % PROJECTS.length);
  const active = PROJECTS[idx];

  return (
    <section id="ten-projects" className="ten-pro">
      <div className="container">
        <div className="ten-pro__head">
          <span className="ten-pro__eyebrow">Tensile Projects</span>
          <h2 className="ten-pro__title">Selected <span>completed builds</span></h2>
        </div>
        <div className="ten-pro__stage">
          <div className="ten-pro__media">
            {PROJECTS.map((p, i) => (
              <img key={i} src={p.src} alt={p.title} className={`ten-pro__img ${i === idx ? 'ten-pro__img--active' : ''}`} aria-hidden={i !== idx} />
            ))}
            <div className="ten-pro__scrim" />
          </div>
          <div className="ten-pro__info">
            <span className="ten-pro__tag">{active.tag}</span>
            <h3 className="ten-pro__name">{active.title}</h3>
            <p className="ten-pro__desc">{active.desc}</p>
            <ul className="ten-pro__stats">
              {active.stats.map(([n, l]) => (
                <li key={l} className="ten-pro__stat">
                  <span className="ten-pro__stat-n">{n}</span>
                  <span className="ten-pro__stat-l">{l}</span>
                </li>
              ))}
            </ul>
            <div className="ten-pro__nav">
              <button type="button" className="ten-pro__arrow" aria-label="Previous project" onClick={() => go(idx - 1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button type="button" className="ten-pro__arrow" aria-label="Next project" onClick={() => go(idx + 1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
              <span className="ten-pro__count"><span>{String(idx + 1).padStart(2, '0')}</span><span className="ten-pro__count-sep">/</span><span>{String(PROJECTS.length).padStart(2, '0')}</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
