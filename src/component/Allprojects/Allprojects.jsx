import './Allprojects.css';
import p1 from '../../assets/allprojects1.svg';
import p2 from '../../assets/allprojects2.svg';
import p3 from '../../assets/allprojects3.svg';

const PROJECTS = [
  { src: p1, alt: 'Industrial port roofing' },
  { src: p2, alt: 'Stadium curved standing-seam roof' },
  { src: p3, alt: 'Insulated PUF panel roofing' },
];

export default function Allprojects() {
  return (
    <section id="all-projects" className="all-pro">
      <div className="container">

        <div className="all-pro__head">
          <span className="all-pro__eyebrow">Our Projects</span>
          <p className="all-pro__desc">
            Delivering high-quality roofing installations with precision and reliability.
            Our portfolio reflects multi-material expertise, modern execution, and trusted handover.
          </p>
        </div>

        <div className="all-pro__grid">
          {PROJECTS.map((p, i) => (
            <figure key={i} className="all-pro__card">
              <img src={p.src} alt={p.alt} loading="lazy" />
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}
