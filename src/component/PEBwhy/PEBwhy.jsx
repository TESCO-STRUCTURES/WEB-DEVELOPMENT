import './PEBwhy.css';
import whyImg from '../../assets/PEBwhy.svg';

const REASONS = [
  '15+ Years of Experience in delivering reliable PEB and steel structure solutions',
  'Pan India Service Network with strong execution and logistics support',
  'In-House Design & Engineering using advanced tools for optimized structures',
  'High-Quality Manufacturing with strict standards and precision fabrication',
  'On-Time Project Delivery with efficient planning and expert execution',
  'End-to-End Turnkey Solutions from design to installation and final handover',
];

export default function PEBwhy() {
  return (
    <section className="peb-why">
      <div className="container peb-why__inner">

        <div className="peb-why__copy">
          <h2 className="peb-why__title">Why Choose Tesco Structure for PEB?</h2>

          <ul className="peb-why__list">
            {REASONS.map((r, i) => (
              <li key={i} className="peb-why__row">
                <span className="peb-why__dot" aria-hidden />
                <p>{r}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="peb-why__media">
          <img src={whyImg} alt="Tesco Structure PEB warehouse project" />
        </div>

      </div>
    </section>
  );
}
