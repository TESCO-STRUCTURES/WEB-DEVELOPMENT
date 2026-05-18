import './Allkey.css';

const BENEFITS = [
  { n: '01', text: 'Trapezoidal industrial sheets',         tone: 'red' },
  { n: '02', text: 'Standing-seam architectural panels',     tone: 'pink' },
  { n: '03', text: 'PUF / PIR insulated sandwich panels',    tone: 'purple' },
  { n: '04', text: 'Site-curved metal roofing',              tone: 'blue' },
  { n: '05', text: 'Polycarbonate skylight panels',          tone: 'brown' },
  { n: '06', text: 'Integrated gutter & drainage systems',    tone: 'darkred' },
];

export default function Allkey() {
  return (
    <section className="all-key">
      <div className="container">
        <div className="all-key__head">
          <span className="all-key__eyebrow">Key Benefits</span>
        </div>
        <div className="all-key__grid">
          {BENEFITS.map((b) => (
            <article key={b.n} className={`all-key__card all-key__card--${b.tone}`}>
              <span className="all-key__num">{b.n}</span>
              <p className="all-key__text">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
