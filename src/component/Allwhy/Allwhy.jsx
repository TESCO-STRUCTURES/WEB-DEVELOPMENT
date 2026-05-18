import './Allwhy.css';
import whyImg from '../../assets/allwhy.svg';

const REASONS = [
  '700+ Roofs Installed across industrial, architectural and commercial projects',
  'Pan India Project Network with on-site roll-forming capability',
  'In-House Fabrication in our 80,000 sq.ft. factory — zero transit damage',
  'AZ-150 / GP-275 Anti-Corrosion Coatings with 20-year material warranty',
  'Profile-Match Engineering — right gauge, profile, finish for your span',
  'End-to-End Roofing — substructure prep, install, gutter & QA in one team',
];

export default function Allwhy() {
  return (
    <section className="all-why">
      <div className="container all-why__inner">

        <div className="all-why__copy">
          <h2 className="all-why__title">Why Choose Tesco Structure for Roofing?</h2>
          <ul className="all-why__list">
            {REASONS.map((r, i) => (
              <li key={i} className="all-why__row">
                <span className="all-why__dot" aria-hidden />
                <p>{r}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="all-why__media">
          <img src={whyImg} alt="Tesco Structure roofing project" />
        </div>

      </div>
    </section>
  );
}
