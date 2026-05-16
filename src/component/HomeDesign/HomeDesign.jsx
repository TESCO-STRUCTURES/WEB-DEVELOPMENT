import './HomeDesign.css';
import img1 from '../../assets/homedesign1.svg';
import img2 from '../../assets/homedesign2.svg';

const APPLICATIONS = [
  'Structural Design',
  '3D Visualization',
  'Drafting & Detailing',
  'Load Analysis',
  'BOQ Preparation',
  'Code Compliance',
  'Feasibility Studies',
  'Project Estimation',
  'Architectural Consulting',
];

export default function HomeDesign() {
  return (
    <section className="ts-des">
      <span className="ts-des__watermark" aria-hidden>DESIGN &amp; CONSULTANT</span>

      <div className="container ts-des__inner">

        <div className="ts-des__media">
          <div className="ts-des__card ts-des__card--1">
            <img src={img1} alt="Structural design rendering" />
          </div>
          <div className="ts-des__card ts-des__card--2">
            <img src={img2} alt="Detailed engineering drawing" />
          </div>
        </div>

        <div className="ts-des__copy">
          <h2 className="ts-des__title">Design &amp; Consultant</h2>
          <h3 className="ts-des__subtitle">Engineering-First Architectural Thinking</h3>

          <p className="ts-des__desc">
            Our in-house design studio turns site briefs into fabrication-ready
            drawings — load-tested, code-compliant, and rendered in 3D so you
            can sign off on the build before the first plate is cut.
          </p>

          <ul className="ts-des__list">
            {APPLICATIONS.map((item) => (
              <li key={item} className="ts-des__item">{item}</li>
            ))}
          </ul>

          <a href="#contact" className="ts-des__more">
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
