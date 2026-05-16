import './Architecturalkey.css';
import icon from '../../assets/architecturalicon.svg';

const FEATURES = [
  { title: 'Structural design',    desc: 'Bay layouts, load paths, and structural members modelled to design code.' },
  { title: '3D visualisation',     desc: 'Photorealistic renders and animated walkthroughs for stakeholder buy-in.' },
  { title: 'Drafting & detailing', desc: 'GA drawings, shop drawings, and erection drawings — all fabrication-ready.' },
  { title: 'BOQ generation',       desc: 'Quantity take-offs auto-derived from the structural model. No re-counting.' },
  { title: 'Load analysis',        desc: 'Wind, seismic, snow, and live loads simulated with industry tools.' },
  { title: 'Code compliance',      desc: 'IS-800 / AISC-360 / IS-875 / NBC compliance certified by senior PEs.' },
];

export default function Architecturalkey() {
  return (
    <section className="arc-key">
      <div className="container">
        <div className="arc-key__head">
          <span className="arc-key__eyebrow">Key Capabilities</span>
          <h2 className="arc-key__title">Six design services <span>under one studio</span></h2>
          <p className="arc-key__desc">A full architectural + structural design toolkit delivered by a single Tesco team.</p>
        </div>
        <div className="arc-key__grid">
          {FEATURES.map((f) => (
            <article key={f.title} className="arc-key__card">
              <div className="arc-key__icon"><img src={icon} alt="" /></div>
              <h3 className="arc-key__card-title">{f.title}</h3>
              <p className="arc-key__card-desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
