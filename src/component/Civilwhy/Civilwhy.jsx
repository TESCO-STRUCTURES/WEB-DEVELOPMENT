import './Civilwhy.css';
import whyImg from '../../assets/civilwhy.svg';

const REASONS = [
  '20+ Years of Experience in delivering reliable civil and structural projects',
  'Pan India Service Network with strong execution and logistics support',
  'In-House Civil Crew — zero subcontractor handoffs, single accountability',
  'Stage-wise QA Logs with concrete cube tests and rebar audits',
  'On-Time Project Delivery with efficient planning and expert execution',
  'End-to-End Solutions from earthworks through finishing and final handover',
];

export default function Civilwhy() {
  return (
    <section className="civ-why">
      <div className="container civ-why__inner">

        <div className="civ-why__copy">
          <h2 className="civ-why__title">Why Choose Tesco Structure for Civil Construction?</h2>
          <ul className="civ-why__list">
            {REASONS.map((r, i) => (
              <li key={i} className="civ-why__row">
                <span className="civ-why__dot" aria-hidden />
                <p>{r}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="civ-why__media">
          <img src={whyImg} alt="Tesco Structure civil construction project" />
        </div>

      </div>
    </section>
  );
}
