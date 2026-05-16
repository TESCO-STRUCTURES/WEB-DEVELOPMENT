import './Tensilebuild.css';
/* Tensile asset set has no dedicated build image, so we reuse the projects-1 hero */
import buildImg from '../../assets/tensileprojects1.svg';

const STEPS = [
  { n: '01', title: 'Site survey + form study', desc: 'Tesco engineers visit, log mast positions, and explore form options.' },
  { n: '02', title: '3D form-finding',          desc: 'Computer-modelled stress, wind-load and curvature for the chosen geometry.' },
  { n: '03', title: 'Membrane fabrication',     desc: 'Cutting-pattern generation and welded membrane panels in factory.' },
  { n: '04', title: 'Masts + anchors',          desc: 'Steel mast, cable, and ground-anchor preparation completed on-site.' },
  { n: '05', title: 'Lift + tension',           desc: 'Membrane lifted into place and pre-tensioned to design load.' },
  { n: '06', title: 'Handover + warranty',      desc: 'Final inspection, snag-list closure, and a 15-year material warranty.' },
];

export default function Tensilebuild() {
  return (
    <section className="ten-bld">
      <div className="container ten-bld__inner">
        <div className="ten-bld__media">
          <img src={buildImg} alt="Tensile construction in progress" />
        </div>
        <div className="ten-bld__copy">
          <span className="ten-bld__eyebrow">How We Build</span>
          <h2 className="ten-bld__title">From <span>concept to tension</span> in six steps</h2>
          <p className="ten-bld__desc">
            Tensile is half engineering, half sculpture — and every milestone is
            documented, signed-off and pre-tensioned before site teams move on.
          </p>
          <ol className="ten-bld__steps">
            {STEPS.map((s) => (
              <li key={s.n} className="ten-bld__step">
                <span className="ten-bld__num">{s.n}</span>
                <div>
                  <h3 className="ten-bld__step-title">{s.title}</h3>
                  <p className="ten-bld__step-desc">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
