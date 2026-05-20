import './HomeEngineered.css';
import img1 from '../../assets/homeservice1.svg';
import img2 from '../../assets/homeservice2.svg';

const APPLICATIONS = [
  'Warehouse',
  'Multi-story steel Building',
  'University Turnkey Construction',
  'Marriage Hall',
  'Commercial Spaces',
  'Educational Institutions',
  'Hospitals',
  'Industrial Sheds',
  'Auditorium',
];

export default function HomeEngineered() {
  return (
    <section className="ts-eng">
      {/* ── Huge faded watermark ── */}
      <span className="ts-eng__watermark" aria-hidden>PRE ENGINEERED BUILDING</span>

      <div className="container ts-eng__inner">

        {/* ── LEFT: overlapping image cards ── */}
        <div className="ts-eng__media">
          <div className="ts-eng__card ts-eng__card--1">
            <img src={img1} alt="Pre-engineered warehouse interior" />
          </div>
          <div className="ts-eng__card ts-eng__card--2">
            <img src={img2} alt="Secondary view" />
          </div>
        </div>

        {/* ── RIGHT: copy ── */}
        <div className="ts-eng__copy">
          <div className="ts-eng__glow" aria-hidden />
          <h2 className="ts-eng__title">Pre  Engineering Building</h2>
          <h3 className="ts-eng__subtitle">Fast, Cost-Effective Industrial Solutions</h3>

          <p className="ts-eng__desc">
            Our pre-engineered building systems are designed for maximum
            efficiency and cost-effectiveness. Perfect for warehouses, factories,
            workshops, and large-scale industrial facilities.
          </p>

          <ul className="ts-eng__list">
            {APPLICATIONS.map((item) => (
              <li key={item} className="ts-eng__item">{item}</li>
            ))}
          </ul>

          <a href="#contact" className="ts-eng__more">
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
