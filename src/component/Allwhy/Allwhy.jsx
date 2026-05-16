import './Allwhy.css';
import whyImg from '../../assets/allwhy.svg';

const REASONS = [
  { n: '01', title: 'Profile match',         desc: 'Right gauge, right profile, right finish for your span and load.' },
  { n: '02', title: 'In-house roll-forming', desc: 'Sheets rolled to length on-site — zero transit damage, zero wastage.' },
  { n: '03', title: 'Anti-corrosion',        desc: 'AZ-150 / GP-275 zinc-aluminium coatings tested for 20+ years.' },
  { n: '04', title: 'Weather-tight',         desc: 'Monsoon-grade overlaps, butyl tape sealing, and ridge cap finishes.' },
];

export default function Allwhy() {
  return (
    <section className="all-why">
      <div className="container all-why__inner">
        <div className="all-why__copy">
          <span className="all-why__eyebrow">Why Tesco Roofing</span>
          <h2 className="all-why__title">Four reasons builders <span>pick us for roofing</span></h2>
          <p className="all-why__desc">A single-vendor roofing partner with on-site roll-forming, certified coatings, and a 20-year anti-corrosion warranty.</p>
          <ul className="all-why__list">
            {REASONS.map((r) => (
              <li key={r.n} className="all-why__row">
                <span className="all-why__num">{r.n}</span>
                <div>
                  <h3 className="all-why__row-title">{r.title}</h3>
                  <p className="all-why__row-desc">{r.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="all-why__media"><img src={whyImg} alt="Roofing benefits illustration" /></div>
      </div>
    </section>
  );
}
