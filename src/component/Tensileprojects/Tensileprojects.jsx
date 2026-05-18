import './Tensileprojects.css';
import p1 from '../../assets/tensileprojects1.svg';
import p2 from '../../assets/tensileprojects2.svg';
import p3 from '../../assets/tensileprojects3.svg';

const PROJECTS = [
  { src: p1, alt: 'Tensile stadium canopy' },
  { src: p2, alt: 'Public walkway tensile shade' },
  { src: p3, alt: 'Hotel atrium tensile roof' },
];

export default function Tensileprojects() {
  return (
    <section id="ten-projects" className="ten-pro">
      <div className="container">

        <div className="ten-pro__head">
          <span className="ten-pro__eyebrow">Our Projects</span>
          <p className="ten-pro__desc">
            Delivering high-quality tensile structures with precision and reliability.
            Our portfolio reflects free-form engineering, modern aesthetics, and trusted execution.
          </p>
        </div>

        <div className="ten-pro__grid">
          {PROJECTS.map((p, i) => (
            <figure key={i} className="ten-pro__card">
              <img src={p.src} alt={p.alt} loading="lazy" />
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}
