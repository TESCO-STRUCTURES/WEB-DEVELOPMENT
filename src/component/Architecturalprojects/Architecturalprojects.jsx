import './Architecturalprojects.css';
import p1 from '../../assets/architecturalprojects1.svg';
import p2 from '../../assets/architecturalprojects2.svg';
import p3 from '../../assets/architecturalprojects3.svg';

const PROJECTS = [
  { src: p1, alt: 'Stadium structural design' },
  { src: p2, alt: 'Port logistics drafting' },
  { src: p3, alt: 'Hospital structural consultancy' },
];

export default function Architecturalprojects() {
  return (
    <section id="arc-projects" className="arc-pro">
      <div className="container">

        <div className="arc-pro__head">
          <span className="arc-pro__eyebrow">Our Projects</span>
          <p className="arc-pro__desc">
            Delivering high-quality architectural & structural designs with precision and reliability.
            Our portfolio reflects engineering depth, modern visualisation, and trusted execution.
          </p>
        </div>

        <div className="arc-pro__grid">
          {PROJECTS.map((p, i) => (
            <figure key={i} className="arc-pro__card">
              <img src={p.src} alt={p.alt} loading="lazy" />
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}
