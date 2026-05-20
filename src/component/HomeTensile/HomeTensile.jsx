import './HomeTensile.css';
import img1 from '../../assets/hometensile1.svg';
import img2 from '../../assets/hometensile2.svg';

const APPLICATIONS = [
  'Canteen',
  'Parking',
  'Entrance Canopy',
  'Walkway',
  'Sitout',
  'Play Area',
  'Shopping Mall',
  'Indoor Sports',
  'Cafes',
  'Gardens',
];

export default function HomeTensile() {
  return (
    <section className="ts-ten">
      {/* ── Huge faded watermark ── */}
      <span className="ts-ten__watermark" aria-hidden>TENSILE ROOFING</span>

      <div className="container ts-ten__inner">

        {/* ── LEFT: overlapping image cards ── */}
        <div className="ts-ten__media">
          <div className="ts-ten__card ts-ten__card--1">
            <img src={img1} alt="Tensile canopy structure" />
          </div>
          <div className="ts-ten__card ts-ten__card--2">
            <img src={img2} alt="Secondary view" />
          </div>
        </div>

        {/* ── RIGHT: copy ── */}
        <div className="ts-ten__copy">
          <div className="ts-ten__glow" aria-hidden />
          <h2 className="ts-ten__title">Tensile Roofing</h2>
          <h3 className="ts-ten__subtitle">Architectural Excellence with Lightweight Design</h3>

          <p className="ts-ten__desc">
            Modern tensile structures that combine aesthetic appeal with
            functionality. Our membrane roofing solutions are perfect for
            stadiums, canopies, atria, and architectural landmarks.
          </p>

          <ul className="ts-ten__list">
            {APPLICATIONS.map((item) => (
              <li key={item} className="ts-ten__item">{item}</li>
            ))}
          </ul>

          <a href="#contact" className="ts-ten__more">
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
