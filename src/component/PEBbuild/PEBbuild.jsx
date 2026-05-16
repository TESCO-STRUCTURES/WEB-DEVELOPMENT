import './PEBbuild.css';
import buildImg from '../../assets/PEBbuild.svg';

const STEPS = [
  { n: '01', title: 'Brief & site survey',    desc: 'Tesco engineers visit the site, log dimensions, and document the brief.' },
  { n: '02', title: 'Structural design',      desc: 'Bay layouts, load analysis, and 3D walkthroughs sent for sign-off.' },
  { n: '03', title: 'Factory fabrication',    desc: 'CNC plate cutting, beam welding, and surface treatment in 80,000 sq.ft. factory.' },
  { n: '04', title: 'Civil & foundation',     desc: 'Earthworks and RCC handled by Tesco’s in-house civil crew.' },
  { n: '05', title: 'On-site erection',       desc: 'Members shipped and bolted up by certified erectors with daily QA logs.' },
  { n: '06', title: 'Handover & warranty',    desc: 'Final inspection, snag-list closure, and 15-year structural warranty.' },
];

export default function PEBbuild() {
  return (
    <section className="peb-bld">
      <div className="container peb-bld__inner">

        <div className="peb-bld__media">
          <img src={buildImg} alt="PEB construction in progress" />
        </div>

        <div className="peb-bld__copy">
          <span className="peb-bld__eyebrow">How We Build</span>
          <h2 className="peb-bld__title">From <span>brief to handover</span> in six steps</h2>
          <p className="peb-bld__desc">
            A predictable PEB workflow refined over 500+ projects — every
            milestone tracked, every drawing version-controlled, every joint
            tested before sign-off.
          </p>

          <ol className="peb-bld__steps">
            {STEPS.map((s) => (
              <li key={s.n} className="peb-bld__step">
                <span className="peb-bld__num">{s.n}</span>
                <div>
                  <h3 className="peb-bld__step-title">{s.title}</h3>
                  <p className="peb-bld__step-desc">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
}
