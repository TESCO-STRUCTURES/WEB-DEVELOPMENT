import './Tensilewhy.css';
import whyImg from '../../assets/tensilewhy.svg';

const REASONS = [
  '15+ Years of Experience in delivering large-scale tensile structures',
  'Pan India Project Network with expert installation crews',
  'In-House Form-Finding & Engineering using advanced modelling tools',
  'Premium Membrane Materials sourced from Verseidag, Mehler, and Saint-Gobain',
  'On-Time Project Delivery from form-study to final tensioning',
  'End-to-End Solutions covering design, fabrication, and erection',
];

export default function Tensilewhy() {
  return (
    <section className="ten-why">
      <div className="container ten-why__inner">

        <div className="ten-why__copy">
          <h2 className="ten-why__title">Why Choose Tesco Structure for Tensile Roofing?</h2>
          <ul className="ten-why__list">
            {REASONS.map((r, i) => (
              <li key={i} className="ten-why__row">
                <span className="ten-why__dot" aria-hidden />
                <p>{r}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="ten-why__media">
          <img src={whyImg} alt="Tesco Structure tensile project" />
        </div>

      </div>
    </section>
  );
}
