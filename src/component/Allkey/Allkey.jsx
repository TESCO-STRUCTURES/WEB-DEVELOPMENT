import './Allkey.css';
import icon from '../../assets/allicon.svg';

const FEATURES = [
  { title: 'Trapezoidal sheets',  desc: 'Industrial-grade ribbed roofing with concealed/exposed fastening.' },
  { title: 'Standing seam',       desc: 'Architectural concealed-fix standing-seam panels for premium builds.' },
  { title: 'Insulated panels',    desc: 'PUF / PIR sandwich panels for thermal + acoustic-controlled interiors.' },
  { title: 'Curved roofs',        desc: 'Site-curved metal roofing for stadium and architectural canopy spans.' },
  { title: 'Polycarbonate',       desc: 'Transparent skylight panels for daylight infusion in industrial sheds.' },
  { title: 'Gutter & drainage',   desc: 'Integrated gutter, downpipe, and rainwater harvesting systems.' },
];

export default function Allkey() {
  return (
    <section className="all-key">
      <div className="container">
        <div className="all-key__head">
          <span className="all-key__eyebrow">Key Capabilities</span>
          <h2 className="all-key__title">Six roofing capabilities <span>under one team</span></h2>
          <p className="all-key__desc">Every roofing system you might need on a project — picked, fabricated, and installed by Tesco.</p>
        </div>
        <div className="all-key__grid">
          {FEATURES.map((f) => (
            <article key={f.title} className="all-key__card">
              <div className="all-key__icon"><img src={icon} alt="" /></div>
              <h3 className="all-key__card-title">{f.title}</h3>
              <p className="all-key__card-desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
