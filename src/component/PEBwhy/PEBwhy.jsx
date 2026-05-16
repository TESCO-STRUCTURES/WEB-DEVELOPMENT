import './PEBwhy.css';
import whyImg from '../../assets/PEBwhy.svg';

const REASONS = [
  { n: '01', title: 'Cost-efficient',  desc: 'Pre-cut members and bulk steel procurement cut material wastage by up to 30%.' },
  { n: '02', title: 'Faster delivery', desc: 'Parallel fabrication and civil works compress project timelines by 4–6 months.' },
  { n: '03', title: 'Easy expansion',  desc: 'Bolt-on bay extensions and additional floors without disturbing operations.' },
  { n: '04', title: 'Built for India', desc: 'Engineered for monsoon, seismic Zone IV, and high cyclonic wind loads.' },
];

export default function PEBwhy() {
  return (
    <section className="peb-why">
      <div className="container peb-why__inner">

        <div className="peb-why__copy">
          <span className="peb-why__eyebrow">Why PEB</span>
          <h2 className="peb-why__title">Four reasons builders <span>switch to PEB</span></h2>
          <p className="peb-why__desc">
            Faster timelines, predictable budgets, and structures engineered to
            outlast 30+ years of industrial wear — here&apos;s why PEB has become
            India&apos;s default choice for large-format builds.
          </p>

          <ul className="peb-why__list">
            {REASONS.map((r) => (
              <li key={r.n} className="peb-why__row">
                <span className="peb-why__num">{r.n}</span>
                <div>
                  <h3 className="peb-why__row-title">{r.title}</h3>
                  <p className="peb-why__row-desc">{r.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="peb-why__media">
          <img src={whyImg} alt="PEB advantages illustration" />
        </div>

      </div>
    </section>
  );
}
