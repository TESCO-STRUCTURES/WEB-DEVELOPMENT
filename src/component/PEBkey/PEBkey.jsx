import './PEBkey.css';
import icon from '../../assets/PEBicon.svg';

const FEATURES = [
  { title: 'Clear-span design',    desc: 'Column-free interiors up to 90m for unobstructed floor plans.' },
  { title: 'Pre-cut precision',    desc: 'CNC plate-cutting and pre-drilled hole patterns eliminate on-site rework.' },
  { title: 'Galvanized hardware',  desc: 'Hot-dip galvanized bolts and connections for 20+ years of corrosion resistance.' },
  { title: 'Insulated cladding',   desc: 'Optional PUF/PIR sandwich panels deliver thermal control + acoustic damping.' },
  { title: 'Code-compliant',       desc: 'IS 800 / AISC 360 engineering with seismic Zone IV and wind-load certifications.' },
  { title: 'Modular expansion',    desc: 'Bolt-on bay extensions and additional floors without disturbing operations.' },
];

export default function PEBkey() {
  return (
    <section className="peb-key">
      <div className="container">
        <div className="peb-key__head">
          <span className="peb-key__eyebrow">Key Features</span>
          <h2 className="peb-key__title">Six structural advantages <span>under one roof</span></h2>
          <p className="peb-key__desc">
            What makes a Tesco PEB stand apart on the shop floor and on site.
          </p>
        </div>

        <div className="peb-key__grid">
          {FEATURES.map((f) => (
            <article key={f.title} className="peb-key__card">
              <div className="peb-key__icon">
                <img src={icon} alt="" />
              </div>
              <h3 className="peb-key__card-title">{f.title}</h3>
              <p className="peb-key__card-desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
