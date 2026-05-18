import './Allapplication.css';
import a1  from '../../assets/allapp1.svg';
import a2  from '../../assets/allapp2.svg';
import a3  from '../../assets/allapp3.svg';
import a4  from '../../assets/allapp4.svg';
import a5  from '../../assets/allapp5.svg';
import a6  from '../../assets/allapp6.svg';
import a7  from '../../assets/allapp7.svg';
import a8  from '../../assets/allapp8.svg';
import a9  from '../../assets/allapp9.svg';
import a10 from '../../assets/allapp10.svg';
import a11 from '../../assets/allapp11.svg';

function Card({ img, tag, label, sub, cls }) {
  return (
    <div className={`allapp__card ${cls}`}>
      <img src={img} alt={label} />
      <div className="allapp__overlay">
        <span className="allapp__tag">{tag}</span>
        <span className="allapp__label">{label}</span>
        {sub && <span className="allapp__sub">{sub}</span>}
      </div>
    </div>
  );
}

export default function Allapplication() {
  return (
    <section className="allapp">
      <div className="allapp__head">
        <span className="allapp__badge">All Type Of Roofing</span>
        <p className="allapp__desc">
          Used in homes, commercial buildings, and industrial projects, offering durable, eco-friendly, and
          long-lasting protection while keeping them comfortable forever.
        </p>
      </div>
      <div className="allapp__grid">
        {/* Row 1: Tensile Roofing large left, UPVC + Glass small right */}
        <Card img={a1}  tag="ALL TYPES" label="Tensile Roofing"       sub="Many firms and solutions for tensile roofing." cls="allapp--a1" />
        <Card img={a2}  tag="ALL TYPES" label="UPVC Roofing"          cls="allapp--a2" />
        <Card img={a3}  tag="ALL TYPES" label="Glass Roofing"         cls="allapp--a3" />
        {/* Row 2: Tensile continues, Polycarbonate Sheet wide */}
        <Card img={a4}  tag="ALL TYPES" label="Polycarbonate Sheet"   cls="allapp--a4" />
        {/* Row 3: Mangalore Tile large left, Shingles x2 small right */}
        <Card img={a5}  tag="ALL TYPES" label="Mangalore Tile Roofing" cls="allapp--a5" />
        <Card img={a6}  tag="ALL TYPES" label="Shingles Roofing"      cls="allapp--a6" />
        <Card img={a7}  tag="ALL TYPES" label="Shingles Roofing"      cls="allapp--a7" />
        {/* Row 4: Flat head + Full head small, then GI + Retractable */}
        <Card img={a8}  tag="ALL TYPES" label="Flat Head Roofing"     cls="allapp--a8" />
        <Card img={a9}  tag="ALL TYPES" label="Full Head Roofing"     cls="allapp--a9" />
        <Card img={a10} tag="ALL TYPES" label="GI Roofing"            sub="Many firms and solutions for your GI Roofing." cls="allapp--a10" />
        <Card img={a11} tag="ALL TYPES" label="Retractable Roofing"   cls="allapp--a11" />
      </div>
    </section>
  );
}
