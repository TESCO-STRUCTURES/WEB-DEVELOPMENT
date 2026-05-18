import './Architecturalkey.css';

const BENEFITS = [
  { n: '01', text: 'Structural design & load analysis',  tone: 'red' },
  { n: '02', text: '3D visualisation & walkthroughs',     tone: 'pink' },
  { n: '03', text: 'Drafting & shop-drawing detailing',   tone: 'purple' },
  { n: '04', text: 'Auto-generated Bill of Quantities',   tone: 'blue' },
  { n: '05', text: 'IS-800 / AISC-360 code compliance',    tone: 'brown' },
  { n: '06', text: 'BIM coordination & clash detection',   tone: 'darkred' },
];

export default function Architecturalkey() {
  return (
    <section className="arc-key">
      <div className="container">
        <div className="arc-key__head">
          <span className="arc-key__eyebrow">Key Benefits</span>
        </div>
        <div className="arc-key__grid">
          {BENEFITS.map((b) => (
            <article key={b.n} className={`arc-key__card arc-key__card--${b.tone}`}>
              <span className="arc-key__num">{b.n}</span>
              <p className="arc-key__text">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
