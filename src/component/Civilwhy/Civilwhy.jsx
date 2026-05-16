import './Civilwhy.css';
import whyImg from '../../assets/civilwhy.svg';

const REASONS = [
  { n: '01', title: 'Single accountable team', desc: 'In-house earthworks, RCC, and finishing crew — no subcontractor handoffs.' },
  { n: '02', title: 'Stage-wise QA logs',       desc: 'Concrete cube tests, rebar audit, and finishing inspections at every milestone.' },
  { n: '03', title: 'Material transparency',    desc: 'Per-bag cement, per-tonne steel, and per-m³ concrete logged and shared.' },
  { n: '04', title: 'Climate-tuned design',     desc: 'Foundations engineered for monsoon, cyclonic wind, and seismic Zone IV.' },
];

export default function Civilwhy() {
  return (
    <section className="civ-why">
      <div className="container civ-why__inner">
        <div className="civ-why__copy">
          <span className="civ-why__eyebrow">Why Tesco Civil</span>
          <h2 className="civ-why__title">Four reasons builders <span>trust our civil works</span></h2>
          <p className="civ-why__desc">Single-vendor delivery, rigorous QA, and a 15-year structural warranty back every civil project we hand over.</p>
          <ul className="civ-why__list">
            {REASONS.map((r) => (
              <li key={r.n} className="civ-why__row">
                <span className="civ-why__num">{r.n}</span>
                <div>
                  <h3 className="civ-why__row-title">{r.title}</h3>
                  <p className="civ-why__row-desc">{r.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="civ-why__media">
          <img src={whyImg} alt="Civil construction crew at work" />
        </div>
      </div>
    </section>
  );
}
