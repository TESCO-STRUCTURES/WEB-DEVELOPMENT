import './Tensilewhy.css';
import whyImg from '../../assets/tensilewhy.svg';

const REASONS = [
  { n: '01', title: 'Striking architectural form', desc: 'Sculptural curves and free-form geometries impossible with rigid roofing systems.' },
  { n: '02', title: 'Lightweight + long spans',    desc: 'Carry massive areas with minimal supporting steel — ideal for stadiums and atria.' },
  { n: '03', title: 'Daylight transmission',       desc: 'Translucent PTFE and ETFE membranes flood interiors with diffused natural light.' },
  { n: '04', title: '15+ year material warranty',  desc: 'PTFE-coated fibreglass holds colour and performance for two decades-plus.' },
];

export default function Tensilewhy() {
  return (
    <section className="ten-why">
      <div className="container ten-why__inner">
        <div className="ten-why__copy">
          <span className="ten-why__eyebrow">Why Tensile</span>
          <h2 className="ten-why__title">Four reasons architects <span>choose tensile</span></h2>
          <p className="ten-why__desc">
            Big-span elegance, weather-tight performance, and engineered for
            India&apos;s monsoon and seismic conditions — here&apos;s why
            tensile is becoming the default for landmark public roofs.
          </p>
          <ul className="ten-why__list">
            {REASONS.map((r) => (
              <li key={r.n} className="ten-why__row">
                <span className="ten-why__num">{r.n}</span>
                <div>
                  <h3 className="ten-why__row-title">{r.title}</h3>
                  <p className="ten-why__row-desc">{r.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="ten-why__media">
          <img src={whyImg} alt="Tensile structure showcasing benefits" />
        </div>
      </div>
    </section>
  );
}
