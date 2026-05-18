import './Tensilekey.css';

const BENEFITS = [
  { n: '01', text: 'Lightweight fabric membrane',         tone: 'red' },
  { n: '02', text: 'Free-form architectural geometries',   tone: 'pink' },
  { n: '03', text: 'UV protection with daylight transfer', tone: 'purple' },
  { n: '04', text: 'Weather-resistant PTFE coating',        tone: 'blue' },
  { n: '05', text: 'Expert pre-tension installation',       tone: 'brown' },
  { n: '06', text: 'Low-maintenance, self-cleaning surface', tone: 'darkred' },
];

export default function Tensilekey() {
  return (
    <section className="ten-key">
      <div className="container">
        <div className="ten-key__head">
          <span className="ten-key__eyebrow">Key Benefits</span>
        </div>
        <div className="ten-key__grid">
          {BENEFITS.map((b) => (
            <article key={b.n} className={`ten-key__card ten-key__card--${b.tone}`}>
              <span className="ten-key__num">{b.n}</span>
              <p className="ten-key__text">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
