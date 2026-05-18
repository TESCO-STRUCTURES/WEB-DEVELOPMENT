import './Civilprojects.css';
import p1 from '../../assets/civilprojects1.svg';
import p2 from '../../assets/civilprojects2.svg';
import p3 from '../../assets/civilprojects3.svg';

const PROJECTS = [
  { src: p1, alt: 'Industrial RCC foundation' },
  { src: p2, alt: 'Commercial RCC frame build' },
  { src: p3, alt: 'University campus civil works' },
];

export default function Civilprojects() {
  return (
    <section id="civ-projects" className="civ-pro">
      <div className="container">

        <div className="civ-pro__head">
          <span className="civ-pro__eyebrow">Our Projects</span>
          <p className="civ-pro__desc">
            Delivering high-quality civil construction projects with precision and reliability.
            Our portfolio reflects strong engineering, modern execution, and trusted handover.
          </p>
        </div>

        <div className="civ-pro__grid">
          {PROJECTS.map((p, i) => (
            <figure key={i} className="civ-pro__card">
              <img src={p.src} alt={p.alt} loading="lazy" />
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}
