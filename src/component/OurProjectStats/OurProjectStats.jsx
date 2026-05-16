import './OurProjectStats.css';

const STATS = [
  { num: '500+',  label: 'PROJECTS COMPLETED' },
  { num: '15+',   label: 'YEARS EXPERIENCE' },
  { num: '100%',  label: 'CLIENT SATISFACTION' },
];

export default function OurProjectStats() {
  return (
    <section className="op-stats">
      <div className="container">
        <div className="op-stats__pill">
          {STATS.map((s, index) => (
            <div key={s.label} className="op-stats__item">
              <span className="op-stats__num">{s.num}</span>
              <div className="op-stats__orange-line"></div>
              <span className="op-stats__label">{s.label}</span>
              {index < STATS.length - 1 && <div className="op-stats__divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
