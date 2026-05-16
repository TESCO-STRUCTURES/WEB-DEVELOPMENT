import './Architecturalbuild.css';
import buildImg from '../../assets/architecturalbuild.svg';

const STEPS = [
  { n: '01', title: 'Brief & site study',     desc: 'Site visit, load requirements, code constraints, and aesthetic brief logged.' },
  { n: '02', title: 'Concept design',         desc: 'Mass-models, bay layouts, and form options shared as sketches.' },
  { n: '03', title: 'Structural modelling',   desc: 'Members sized, load paths analysed in STAAD/ETABS, code-compliance verified.' },
  { n: '04', title: '3D walkthrough',         desc: 'Rendered animations and stills for stakeholder buy-in before drafting.' },
  { n: '05', title: 'Drafting + BOQ',         desc: 'GA / shop / erection drawings + auto-generated Bill of Quantities.' },
  { n: '06', title: 'Approvals + sign-off',   desc: 'Municipal sign-off, fire-NOC, and final structural report.' },
];

export default function Architecturalbuild() {
  return (
    <section className="arc-bld">
      <div className="container arc-bld__inner">
        <div className="arc-bld__media"><img src={buildImg} alt="Architectural design process" /></div>
        <div className="arc-bld__copy">
          <span className="arc-bld__eyebrow">How We Design</span>
          <h2 className="arc-bld__title">From <span>brief to drawings</span> in six steps</h2>
          <p className="arc-bld__desc">A repeatable design workflow refined across 500+ projects — every milestone reviewed, every drawing version-controlled.</p>
          <ol className="arc-bld__steps">
            {STEPS.map((s) => (
              <li key={s.n} className="arc-bld__step">
                <span className="arc-bld__num">{s.n}</span>
                <div>
                  <h3 className="arc-bld__step-title">{s.title}</h3>
                  <p className="arc-bld__step-desc">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
