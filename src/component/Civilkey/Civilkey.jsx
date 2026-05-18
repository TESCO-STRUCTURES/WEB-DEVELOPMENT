import './Civilkey.css';

const BENEFITS = [
  { n: '01', text: 'Earthworks & precise site grading',      tone: 'red' },
  { n: '02', text: 'Engineered foundations & plinth',         tone: 'pink' },
  { n: '03', text: 'Cube-tested RCC columns & slabs',         tone: 'purple' },
  { n: '04', text: 'Boundary, retention & drainage works',    tone: 'blue' },
  { n: '05', text: 'In-house finishing trades',               tone: 'brown' },
  { n: '06', text: 'Full BOQ & stage-wise documentation',     tone: 'darkred' },
];

export default function Civilkey() {
  return (
    <section className="civ-key">
      <div className="container">
        <div className="civ-key__head">
          <span className="civ-key__eyebrow">Key Benefits</span>
        </div>
        <div className="civ-key__grid">
          {BENEFITS.map((b) => (
            <article key={b.n} className={`civ-key__card civ-key__card--${b.tone}`}>
              <span className="civ-key__num">{b.n}</span>
              <p className="civ-key__text">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
