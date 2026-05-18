import './PEBprojects.css';
import p1 from '../../assets/PEBprojects1.svg';
import p2 from '../../assets/PEBprojects2.svg';
import p3 from '../../assets/PEBprojects3.svg';

const PROJECTS = [
  { src: p1, alt: 'PEB warehouse interior' },
  { src: p2, alt: 'Tensile fabric structure' },
  { src: p3, alt: 'Architectural PEB build' },
];

export default function PEBprojects() {
  return (
    <section id="peb-projects" className="peb-pro">
      <div className="container">

        <div className="peb-pro__head">
          <span className="peb-pro__eyebrow">Our Projects</span>
          <p className="peb-pro__desc">
            Delivering high-quality construction projects with precision and reliability.
            Our portfolio reflects strong engineering, modern design, and trusted execution.
          </p>
        </div>

        <div className="peb-pro__grid">
          {PROJECTS.map((p, i) => (
            <figure key={i} className="peb-pro__card">
              <img src={p.src} alt={p.alt} loading="lazy" />
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}
