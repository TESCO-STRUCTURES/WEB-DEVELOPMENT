import { Link } from 'react-router-dom';
import './HomeAll.css';
import img1 from '../../assets/homeall1.svg';
import img2 from '../../assets/homeall2.svg';

const APPLICATIONS = [
  'Trapezoidal Sheet',
  'Standing Seam',
  'Insulated Sandwich Panel',
  'Polycarbonate Roofing',
  'Curved Metal Roof',
  'Skylight Systems',
  'Gutter & Down-take',
  'Tiled Roofing',
  'Aluminum Roofing',
];

export default function HomeAll() {
  return (
    <section className="ts-all">
      <span className="ts-all__watermark" aria-hidden>ALL TYPE OF ROOFING</span>

      <div className="container ts-all__inner">

        <div className="ts-all__media">
          <div className="ts-all__card ts-all__card--1">
            <img src={img1} alt="Industrial roofing system" />
          </div>
          <div className="ts-all__card ts-all__card--2">
            <img src={img2} alt="Secondary view" />
          </div>
        </div>

        <div className="ts-all__copy">
          <div className="ts-all__glow" aria-hidden />
          <h2 className="ts-all__title">All Type of Roofing</h2>
          <h3 className="ts-all__subtitle">Every Profile, Every Material, One Source</h3>

          <p className="ts-all__desc">
            From trapezoidal industrial sheds to architectural curved canopies,
            Tesco delivers roofing systems engineered for India&apos;s climate —
            weather-tight, anti-corrosion, and visually striking.
          </p>

          <ul className="ts-all__list">
            {APPLICATIONS.map((item) => (
              <li key={item} className="ts-all__item">{item}</li>
            ))}
          </ul>

          <Link to="/all" className="ts-all__more">
            Explore more
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="13 5 19 12 13 19"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
