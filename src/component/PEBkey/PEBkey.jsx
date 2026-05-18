import './PEBkey.css';

const BENEFITS = [
  { n: '01', text: 'Durable metal roofing systems',          tone: 'red' },
  { n: '02', text: 'Sustainable and energy-efficient design', tone: 'pink' },
  { n: '03', text: 'Thermal insulation for energy savings',   tone: 'purple' },
  { n: '04', text: 'Weather-resistant materials',             tone: 'blue' },
  { n: '05', text: 'Expert installation team',                tone: 'brown' },
  { n: '06', text: 'Comprehensive maintenance services',      tone: 'darkred' },
];

export default function PEBkey() {
  return (
    <section className="peb-key">
      <div className="container">

        <div className="peb-key__head">
          <span className="peb-key__eyebrow">Key Benefits</span>
        </div>

        <div className="peb-key__grid">
          {BENEFITS.map((b) => (
            <article key={b.n} className={`peb-key__card peb-key__card--${b.tone}`}>
              <span className="peb-key__num">{b.n}</span>
              <p className="peb-key__text">{b.text}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
