import './HomeCivil.css';
import img1 from '../../assets/homecivil1.svg';
import img2 from '../../assets/homecivil2.svg';

const APPLICATIONS = [
  'Excavation & Earthworks',
  'Foundation & Plinth',
  'RCC Columns & Slabs',
  'Boundary Walls',
  'Concrete Flooring',
  'Drainage Systems',
  'Site Preparation',
  'Plastering & Finishing',
  'Reinforcement Works',
];

export default function HomeCivil() {
  return (
    <section className="ts-civ">
      <span className="ts-civ__watermark" aria-hidden>CIVIL CONSTRUCTION</span>

      <div className="container ts-civ__inner">

        <div className="ts-civ__media">
          <div className="ts-civ__card ts-civ__card--1">
            <img src={img1} alt="Civil construction site" />
          </div>
          <div className="ts-civ__card ts-civ__card--2">
            <img src={img2} alt="Foundation work close-up" />
          </div>
        </div>

        <div className="ts-civ__copy">
          <h2 className="ts-civ__title">Civil Construction</h2>
          <h3 className="ts-civ__subtitle">Solid Foundations for Lasting Structures</h3>

          <p className="ts-civ__desc">
            End-to-end civil works delivered by Tesco&apos;s in-house crew —
            earthworks, RCC, plinth, finishes, and groundworks executed with
            on-site supervision and stage-wise quality logs.
          </p>

          <ul className="ts-civ__list">
            {APPLICATIONS.map((item) => (
              <li key={item} className="ts-civ__item">{item}</li>
            ))}
          </ul>

          <a href="#contact" className="ts-civ__more">
            Explore more
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="13 5 19 12 13 19"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
