import { useState } from 'react';
import './BlogPortfolio.css';
import b1  from '../../assets/blog1.svg';
import b2  from '../../assets/blog2.svg';
import b3  from '../../assets/blog3.svg';
import b4  from '../../assets/blog4.svg';
import b5  from '../../assets/blog5.svg';
import b6  from '../../assets/blog6.svg';
import b7  from '../../assets/blog7.svg';
import b8  from '../../assets/blog8.svg';
import b9  from '../../assets/blog9.svg';
import b10 from '../../assets/blog10.svg';
import b11 from '../../assets/blog11.svg';
import b12 from '../../assets/blog12.svg';

const POSTS = [
  { src: b1,  cat: 'Engineering',    date: 'Apr 22, 2025', title: 'How modern PEB design cuts erection time by 40%' },
  { src: b2,  cat: 'Materials',      date: 'Apr 14, 2025', title: 'Choosing the right roofing system for industrial India' },
  { src: b3,  cat: 'Case Study',     date: 'Apr 02, 2025', title: 'Inside our Reliance warehouse delivery' },
  { src: b4,  cat: 'Sustainability', date: 'Mar 21, 2025', title: 'Lower-carbon steel: what changes for builders' },
  { src: b5,  cat: 'Civil',          date: 'Mar 12, 2025', title: 'Foundation engineering for monsoon-zone projects' },
  { src: b6,  cat: 'Tensile',        date: 'Feb 28, 2025', title: 'Why tensile roofing wins on large public spans' },
  { src: b7,  cat: 'Project Mgmt',   date: 'Feb 14, 2025', title: 'How we deliver multi-acre sites on schedule' },
  { src: b8,  cat: 'Design',         date: 'Feb 02, 2025', title: '3D walkthroughs that get clients to sign-off faster' },
  { src: b9,  cat: 'Materials',      date: 'Jan 24, 2025', title: 'AZ-150 vs PVDF: choosing the right roof coating' },
  { src: b10, cat: 'Architecture',   date: 'Jan 10, 2025', title: 'Form follows engineering: lessons from stadium roofs' },
  { src: b11, cat: 'Civil',          date: 'Dec 18, 2024', title: 'RCC pours during peak monsoon — what works' },
  { src: b12, cat: 'Engineering',    date: 'Dec 04, 2024', title: 'Cyclonic-zone PEB: wind-load engineering primer' },
];

const CATEGORIES = ['All', 'Engineering', 'Materials', 'Case Study', 'Sustainability', 'Civil', 'Tensile', 'Project Mgmt', 'Design', 'Architecture'];

/* Mirror grid — first two rows of the main list (6 posts) duplicated below.
   Always shows the same six posts, independent of the active filter above. */
const MIRROR_POSTS = POSTS.slice(0, 6);

export default function BlogPortfolio() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? POSTS : POSTS.filter((p) => p.cat === filter);

  return (
    <section className="blg-grid">
      <div className="container">

        <div className="blg-grid__head">
          <div>
            <span className="blg-grid__eyebrow">Latest Posts</span>
            <h2 className="blg-grid__title">All <span>articles</span></h2>
          </div>
          <div className="blg-grid__filters" role="tablist" aria-label="Filter by category">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={filter === c}
                className={`blg-grid__chip ${filter === c ? 'blg-grid__chip--active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="blg-grid__list">
          {visible.map((p, i) => (
            <article key={i} className="blg-grid__card">
              <div className="blg-grid__media">
                <img src={p.src} alt={p.title} loading="lazy" />
                <span className="blg-grid__tag">{p.cat}</span>
              </div>
              <div className="blg-grid__body">
                <span className="blg-grid__date">{p.date}</span>
                <h3 className="blg-grid__post-title">{p.title}</h3>
                <a href="#" className="blg-grid__read">
                  Read article
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="13 5 19 12 13 19"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="blg-grid__empty">No posts in “{filter}” yet — check back soon.</p>
        )}

        {/* ── MIRROR SECTION — first two rows (same images, same content) ── */}
        <div className="blg-grid__mirror-divider" aria-hidden />

        <div className="blg-grid__mirror-head">
          <span className="blg-grid__eyebrow">More to read</span>
          <h2 className="blg-grid__title">Editor&apos;s <span>picks</span></h2>
        </div>

        <div className="blg-grid__list blg-grid__list--mirror">
          {MIRROR_POSTS.map((p, i) => (
            <article key={`m-${i}`} className="blg-grid__card">
              <div className="blg-grid__media">
                <img src={p.src} alt={p.title} loading="lazy" />
                <span className="blg-grid__tag">{p.cat}</span>
              </div>
              <div className="blg-grid__body">
                <span className="blg-grid__date">{p.date}</span>
                <h3 className="blg-grid__post-title">{p.title}</h3>
                <a href="#" className="blg-grid__read">
                  Read article
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="13 5 19 12 13 19"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
