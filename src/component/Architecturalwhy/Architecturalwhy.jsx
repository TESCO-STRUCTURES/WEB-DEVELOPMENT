import './Architecturalwhy.css';
import whyImg from '../../assets/architecturalwhy.svg';

const REASONS = [
  '500+ Designs Delivered across PEB, civil, hospitality and stadium projects',
  'Senior Professional Engineers review every drawing before sign-off',
  'In-House 3D Visualisation studio with photorealistic renders and animations',
  'Auto-Generated BOQ tied directly to the structural model — no re-counting',
  '30% Faster Design Cycles versus industry standard timelines',
  'IS-800 / AISC-360 / NBC Compliance certified on every set of drawings',
];

export default function Architecturalwhy() {
  return (
    <section className="arc-why">
      <div className="container arc-why__inner">

        <div className="arc-why__copy">
          <h2 className="arc-why__title">Why Choose Tesco Structure for Architectural Design?</h2>
          <ul className="arc-why__list">
            {REASONS.map((r, i) => (
              <li key={i} className="arc-why__row">
                <span className="arc-why__dot" aria-hidden />
                <p>{r}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="arc-why__media">
          <img src={whyImg} alt="Tesco Structure architectural rendering" />
        </div>

      </div>
    </section>
  );
}
