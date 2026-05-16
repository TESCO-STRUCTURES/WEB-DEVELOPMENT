import './Civilbuild.css';
import buildImg from '../../assets/civilbuild.svg';

const STEPS = [
  { n: '01', title: 'Site survey + soil test',  desc: 'Topographic survey and soil bearing tests by Tesco engineers.' },
  { n: '02', title: 'Foundation design',        desc: 'Footing/raft/pile design and structural drawings sent for approval.' },
  { n: '03', title: 'Excavation & PCC',         desc: 'Earthworks, levelling, and plain-cement-concrete bed laid.' },
  { n: '04', title: 'RCC works',                desc: 'Reinforcement, shuttering, and concrete pour with cube tests.' },
  { n: '05', title: 'Walls & finishes',         desc: 'Brick/block walls, plastering, tiling, and finishing trades.' },
  { n: '06', title: 'Handover + warranty',      desc: 'Final inspection, snag-list closure, and 15-year structural warranty.' },
];

export default function Civilbuild() {
  return (
    <section className="civ-bld">
      <div className="container civ-bld__inner">
        <div className="civ-bld__media">
          <img src={buildImg} alt="Civil construction in progress" />
        </div>
        <div className="civ-bld__copy">
          <span className="civ-bld__eyebrow">How We Build</span>
          <h2 className="civ-bld__title">From <span>survey to handover</span> in six steps</h2>
          <p className="civ-bld__desc">A predictable civil workflow refined across 350+ projects — every milestone tracked, every pour cube-tested.</p>
          <ol className="civ-bld__steps">
            {STEPS.map((s) => (
              <li key={s.n} className="civ-bld__step">
                <span className="civ-bld__num">{s.n}</span>
                <div>
                  <h3 className="civ-bld__step-title">{s.title}</h3>
                  <p className="civ-bld__step-desc">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
