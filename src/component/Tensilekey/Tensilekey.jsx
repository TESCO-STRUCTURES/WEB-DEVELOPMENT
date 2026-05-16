import './Tensilekey.css';
import icon from '../../assets/tensileicon.svg';

const FEATURES = [
  { title: 'PTFE & PVC membranes',  desc: 'Top-grade architectural-class membranes from Verseidag, Saint-Gobain, and Mehler.' },
  { title: 'Free-form geometries',  desc: 'Computer-modelled saddle, cone, ridge-and-valley, and hypar forms.' },
  { title: 'Wind & seismic tested', desc: 'CFD wind-load simulation and full structural compliance with IS-875.' },
  { title: 'Daylight + UV control', desc: 'Up to 13% light transmission with full UV-block to preserve interiors.' },
  { title: 'Pre-tensioned hardware', desc: 'Galvanised + powder-coated rigging tested to 2× design load.' },
  { title: 'Easy maintenance',      desc: 'Smooth surface sheds dust with monsoon rain — no annual cleaning cycle.' },
];

export default function Tensilekey() {
  return (
    <section className="ten-key">
      <div className="container">
        <div className="ten-key__head">
          <span className="ten-key__eyebrow">Key Features</span>
          <h2 className="ten-key__title">Six architectural advantages <span>under one membrane</span></h2>
          <p className="ten-key__desc">Why a Tesco tensile structure outperforms metal roofing for landmark spans.</p>
        </div>
        <div className="ten-key__grid">
          {FEATURES.map((f) => (
            <article key={f.title} className="ten-key__card">
              <div className="ten-key__icon"><img src={icon} alt="" /></div>
              <h3 className="ten-key__card-title">{f.title}</h3>
              <p className="ten-key__card-desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
