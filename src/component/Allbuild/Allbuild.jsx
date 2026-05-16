import './Allbuild.css';
import buildImg from '../../assets/allbuild.svg';

const STEPS = [
  { n: '01', title: 'Roof brief & site visit',  desc: 'Span, slope, load, daylight need, and budget logged on a site walk.' },
  { n: '02', title: 'Profile selection',        desc: 'Profile, gauge, finish, and coating shortlisted with your engineer.' },
  { n: '03', title: 'Fabrication',              desc: 'Sheets and accessories cut to length in our 80,000 sq.ft. factory.' },
  { n: '04', title: 'Substructure prep',        desc: 'Purlin spacing checked, ridge/eave alignment confirmed before delivery.' },
  { n: '05', title: 'Installation',             desc: 'On-site installation by certified erectors with daily QA logs.' },
  { n: '06', title: 'Final inspection',         desc: 'Water-tightness, fastener torque, and ridge cap audit before handover.' },
];

export default function Allbuild() {
  return (
    <section className="all-bld">
      <div className="container all-bld__inner">
        <div className="all-bld__media"><img src={buildImg} alt="Roofing installation process" /></div>
        <div className="all-bld__copy">
          <span className="all-bld__eyebrow">How We Install</span>
          <h2 className="all-bld__title">From <span>survey to handover</span> in six steps</h2>
          <p className="all-bld__desc">A predictable roofing workflow used on every Tesco installation — profile picked, panels rolled, fastened, inspected.</p>
          <ol className="all-bld__steps">
            {STEPS.map((s) => (
              <li key={s.n} className="all-bld__step">
                <span className="all-bld__num">{s.n}</span>
                <div>
                  <h3 className="all-bld__step-title">{s.title}</h3>
                  <p className="all-bld__step-desc">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
