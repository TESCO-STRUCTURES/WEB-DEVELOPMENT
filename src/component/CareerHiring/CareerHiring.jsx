import './CareerHiring.css';

const ROLES = [
  { title: 'Business Development Manager',  dept: 'Executive',    loc: 'London',    type: 'Full-time', desc: 'Lead the vision and strategic direction of Tesco Structure as we expand our footprint into global markets.' },
  { title: 'Sales Coordinator',             dept: 'Engineering',  loc: 'Hybrid',    type: 'Full-time', desc: 'Spearhead structural designs for complex steel and concrete projects using cutting-edge BIM technologies.' },
  { title: 'Design Engineering',            dept: 'Management',   loc: 'On-site',   type: 'Full-time', desc: 'Oversee high-budget construction projects from inception to completion, ensuring excellence and safety.' },
  { title: 'Project Engineering',           dept: 'Executive',    loc: 'London',    type: 'Full-time', desc: 'Lead the vision and strategic direction of Tesco Structure as we expand our footprint into global markets.' },
  { title: 'Project Coordinator',           dept: 'Engineering',  loc: 'Hybrid',    type: 'Full-time', desc: 'Spearhead structural designs for complex steel and concrete projects using cutting-edge BIM technologies.' },
  { title: 'Site Engineering',              dept: 'Management',   loc: 'On-site',   type: 'Full-time', desc: 'Oversee high-budget construction projects from inception to completion, ensuring excellence and safety.' },
  { title: 'Structural Engineering',        dept: 'Executive',    loc: 'London',    type: 'Full-time', desc: 'Lead the vision and strategic direction of Tesco Structure as we expand our footprint into global markets.' },
  { title: 'Techno Commercial Manager',     dept: 'Engineering',  loc: 'Hybrid',    type: 'Full-time', desc: 'Spearhead structural designs for complex steel and concrete projects using cutting-edge BIM technologies.' },
  { title: 'Business Development Associate',dept: 'Management',   loc: 'On-site',   type: 'Full-time', desc: 'Oversee high-budget construction projects from inception to completion, ensuring excellence and safety.' },
  { title: 'Sales Manager',                 dept: 'Executive',    loc: 'London',    type: 'Full-time', desc: 'Lead the vision and strategic direction of Tesco Structure as we expand our footprint into global markets.' },
  { title: 'Project Manager',               dept: 'Engineering',  loc: 'Hybrid',    type: 'Full-time', desc: 'Spearhead structural designs for complex steel and concrete projects using cutting-edge BIM technologies.' },
];

export default function CareerHiring() {
  return (
    <section id="cr-jobs" className="cr-jobs">
      <div className="container">
        
        <h2 className="cr-jobs__title">Now Hiring</h2>
        
        <div className="cr-jobs__grid">
          {ROLES.map((r, i) => (
            <div key={i} className="cr-jobs__card">
              <div className="cr-jobs__card-head">
                <span className="cr-jobs__card-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </span>
                <span className="cr-jobs__card-dept">{r.dept}</span>
              </div>
              
              <h3 className="cr-jobs__card-role">{r.title}</h3>
              
              <div className="cr-jobs__card-meta">
                <span className="cr-jobs__meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="12" cy="10" r="3"/><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  </svg>
                  {r.loc}
                </span>
                <span className="cr-jobs__meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {r.type}
                </span>
              </div>
              
              <p className="cr-jobs__card-desc">{r.desc}</p>
              
              <a href="#cr-resume" className="cr-jobs__card-btn">
                View Details
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
