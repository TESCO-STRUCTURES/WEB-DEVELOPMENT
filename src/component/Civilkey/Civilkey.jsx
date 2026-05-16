import './Civilkey.css';
import icon from '../../assets/civilicon.svg';

const FEATURES = [
  { title: 'Earthworks & grading',  desc: 'Site clearing, levelling, cutting, and compaction with surveying logs.' },
  { title: 'Foundation & plinth',   desc: 'Isolated, raft, or pile foundations engineered for soil type and load.' },
  { title: 'RCC columns & slabs',   desc: 'Cube-tested concrete, IS-500 rebar, and stage-wise audit on every pour.' },
  { title: 'Boundary & retention',  desc: 'Compound walls, retaining walls, and drainage built to last decades.' },
  { title: 'Finishing trades',      desc: 'Plastering, flooring, tiling, painting handled by Tesco finishing crew.' },
  { title: 'Documentation',         desc: 'BOQ trace, material vouchers, and stage-wise photo records for every site.' },
];

export default function Civilkey() {
  return (
    <section className="civ-key">
      <div className="container">
        <div className="civ-key__head">
          <span className="civ-key__eyebrow">Key Capabilities</span>
          <h2 className="civ-key__title">Six core civil <span>capabilities under one roof</span></h2>
          <p className="civ-key__desc">Every trade you need for a foundation-to-finish handover, delivered by a single Tesco team.</p>
        </div>
        <div className="civ-key__grid">
          {FEATURES.map((f) => (
            <article key={f.title} className="civ-key__card">
              <div className="civ-key__icon"><img src={icon} alt="" /></div>
              <h3 className="civ-key__card-title">{f.title}</h3>
              <p className="civ-key__card-desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
