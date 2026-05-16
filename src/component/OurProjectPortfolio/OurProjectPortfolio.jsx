import './OurProjectPortfolio.css';

import p1  from '../../assets/OurProjects1.svg';
import p2  from '../../assets/OurProjects2.svg';
import p3  from '../../assets/OurProjects3.svg';
import p4  from '../../assets/OurProjects4.svg';
import p5  from '../../assets/OurProjects5.svg';
import p6  from '../../assets/OurProjects6.svg';
import p7  from '../../assets/OurProjects7.svg';
import p8  from '../../assets/OurProjects8.svg';
import p9  from '../../assets/OurProjects9.svg';

const PROJECTS = [
  { src: p1 },
  { src: p2 },
  { src: p3 },
  { src: p4 },
  { src: p5 },
  { src: p6 },
  { src: p7 },
  { src: p8 },
  { src: p9 },
];

const CATEGORIES = ['All', 'PEB', 'Civil', 'Tensile', 'Design', 'Roofing'];

export default function OurProjectPortfolio() {
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
            {CATEGORIES.map((cat, idx) => (
              <button key={cat} className={`op-grid__chip ${idx === 0 ? 'active' : ''}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="op-grid__list">
          {PROJECTS.map((p, i) => (
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