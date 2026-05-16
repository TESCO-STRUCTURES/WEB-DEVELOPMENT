import './Architecturalwhy.css';
import whyImg from '../../assets/architecturalwhy.svg';

const REASONS = [
  { n: '01', title: 'Engineer-led drafting', desc: 'Every drawing reviewed by a senior PE before client sign-off.' },
  { n: '02', title: '3D walkthroughs',       desc: 'Rendered animations let clients sign off on form before fabrication.' },
  { n: '03', title: 'BOQ generation',        desc: 'Auto-generated Bill of Quantities tied directly to the structural model.' },
  { n: '04', title: 'Code compliance',       desc: 'IS-800, IS-875, AISC-360 and local fire codes — every drawing certified.' },
];

export default function Architecturalwhy() {
  return (
    <section className="arc-why">
      <div className="container arc-why__inner">
        <div className="arc-why__copy">
          <span className="arc-why__eyebrow">Why Tesco Design</span>
          <h2 className="arc-why__title">Four reasons architects <span>partner with us</span></h2>
          <p className="arc-why__desc">Engineering-first design that ships fabrication-ready drawings and renders in half the industry-standard timeline.</p>
          <ul className="arc-why__list">
            {REASONS.map((r) => (
              <li key={r.n} className="arc-why__row">
                <span className="arc-why__num">{r.n}</span>
                <div>
                  <h3 className="arc-why__row-title">{r.title}</h3>
                  <p className="arc-why__row-desc">{r.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="arc-why__media"><img src={whyImg} alt="Architectural design rendering" /></div>
      </div>
    </section>
  );
}
