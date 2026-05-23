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
  { src: b1,  cat: 'CIVIL ENGINEERING',    date: 'May 20, 2024', title: 'Concrete Durability in Coastal...', desc: 'Technical analysis of salt-resistant concrete mixtures for coastal infrastructure projects.' },
  { src: b2,  cat: 'TENSILE STRUCTURES',   date: 'May 18, 2024', title: 'The Aesthetics of Fabric Structures', desc: 'How high-tension fabric roofs are transforming sports arenas and public spaces.' },
  { src: b3,  cat: 'SUSTAINABILITY',       date: 'May 17, 2024', title: 'Green Certifications in 2024', desc: 'A guide to LEED and BREEAM standards for modern construction projects.' },
  { src: b4,  cat: 'ROOFING',             date: 'May 15, 2024', title: 'Advanced Insulation Systems', desc: 'New materials and layering techniques for thermal efficiency in industrial roofing.' },
  { src: b5,  cat: 'PROCESS',             date: 'Apr 24, 2024', title: 'BIM Integration in Site Planning', desc: 'How Building Information Modelling is reducing site errors and improving coordination.' },
  { src: b6,  cat: 'SAFETY',              date: 'Apr 15, 2024', title: 'Zero-Harm Initiatives in 2024', desc: 'Our commitment to safety excellence through AI-powered site monitoring systems.' },
  { src: b7,  cat: 'CIVIL ENGINEERING',   date: 'Apr 10, 2024', title: 'Concrete Durability in Coastal...', desc: 'Technical analysis of salt-resistant concrete mixtures for coastal infrastructure projects.' },
  { src: b8,  cat: 'TENSILE STRUCTURES',  date: 'Apr 05, 2024', title: 'The Aesthetics of Fabric Structures', desc: 'How high-tension fabric roofs are transforming sports arenas and public spaces.' },
  { src: b9,  cat: 'SUSTAINABILITY',      date: 'Mar 28, 2024', title: 'Green Certifications in 2024', desc: 'A guide to LEED and BREEAM standards for modern construction projects.' },
  { src: b10, cat: 'ROOFING',            date: 'Mar 20, 2024', title: 'Advanced Insulation Systems', desc: 'New materials and layering techniques for thermal efficiency in industrial roofing.' },
  { src: b11, cat: 'PROCESS',            date: 'Mar 12, 2024', title: 'BIM Integration in Site Planning', desc: 'How Building Information Modelling is reducing site errors and improving coordination.' },
  { src: b12, cat: 'SAFETY',             date: 'Mar 05, 2024', title: 'Zero-Harm Initiatives in 2024', desc: 'Our commitment to safety excellence through AI-powered site monitoring systems.' },
];

const TABS = ['All', 'PEB', 'Civil', 'Roofing', 'Tensile'];

const SIDEBAR_CATEGORIES = [
  { label: 'PEB Structures',  count: 24 },
  { label: 'Civil Works',     count: 15 },
  { label: 'Roofing Systems', count: 11 },
  { label: 'Tensile Design',  count: 28 },
];

export default function BlogPortfolio() {
  const [activeTab, setActiveTab] = useState('All');
  const [search, setSearch] = useState('');

  /* Map sidebar category labels → the keyword stored on the post's `cat`
     field. Lets the user click "PEB Structures" or type "peb" and have it
     match posts tagged "TENSILE STRUCTURES", "CIVIL ENGINEERING", etc. */
  const CATEGORY_KEYWORDS = {
    'PEB Structures':  'peb',
    'Civil Works':     'civil',
    'Roofing Systems': 'roofing',
    'Tensile Design':  'tensile',
  };

  const visible = POSTS.filter((p) => {
    const matchTab =
      activeTab === 'All' ||
      p.cat.toLowerCase().includes(activeTab.toLowerCase());
    const q = search.trim().toLowerCase();
    const matchSearch =
      q === '' ||
      p.title.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.cat.toLowerCase().includes(q) ||
      // also let the user type "PEB Structures", "Civil Works", etc.
      Object.entries(CATEGORY_KEYWORDS).some(
        ([label, kw]) =>
          label.toLowerCase().includes(q) &&
          p.cat.toLowerCase().includes(kw)
      );
    return matchTab && matchSearch;
  });

  return (
    <section className="bp-section">
      <div className="bp-container">

        {/* ── Filter Tabs ── */}
        <div className="bp-tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`bp-tab ${activeTab === tab ? 'bp-tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Body: grid + sidebar ── */}
        <div className="bp-body">

          {/* ── Blog Card Grid ── */}
          <div className="bp-grid">
            {visible.length === 0 ? (
              <p className="bp-empty">No articles found.</p>
            ) : (
              visible.map((p, i) => (
                <article key={i} className="bp-card">
                  <div className="bp-card__media">
                    <img src={p.src} alt={p.title} loading="lazy" />
                  </div>
                  <div className="bp-card__body">
                    <span className="bp-card__cat">{p.cat}</span>
                    <h3 className="bp-card__title">{p.title}</h3>
                    <p className="bp-card__desc">{p.desc}</p>
                    <div className="bp-card__footer">
                      <span className="bp-card__date">{p.date}</span>
                      <a href="#" className="bp-card__read">
                        Read More
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <line x1="5" y1="12" x2="19" y2="12"/>
                          <polyline points="13 5 19 12 13 19"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* ── Sidebar ── */}
          <aside className="bp-sidebar">

            {/* Search */}
            <div className="bp-sidebar__widget bp-sidebar__widget--search">
              <h4 className="bp-sidebar__widget-title">Search</h4>
              <div className="bp-sidebar__search">
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button aria-label="Search">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Categories — clicking one filters the grid */}
            <div className="bp-sidebar__widget">
              <h4 className="bp-sidebar__widget-title">Categories</h4>
              <ul className="bp-sidebar__cat-list">
                {SIDEBAR_CATEGORIES.map((c) => {
                  const kw = CATEGORY_KEYWORDS[c.label] || '';
                  return (
                    <li
                      key={c.label}
                      className="bp-sidebar__cat-item"
                      onClick={() => {
                        // Type the keyword into the search box so the grid
                        // re-filters; also reset the tab to "All" so the
                        // category isn't double-filtered.
                        setActiveTab('All');
                        setSearch(kw);
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      <span className="bp-sidebar__cat-label">{c.label}</span>
                      <span className="bp-sidebar__cat-count">{c.count}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

          </aside>
        </div>

      </div>
    </section>
  );
}
