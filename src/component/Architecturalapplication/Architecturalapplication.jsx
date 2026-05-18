import './Architecturalapplication.css';
import a1 from '../../assets/architecturalapp1.svg';
import a2 from '../../assets/architecturalapp2.svg';
import a3 from '../../assets/architecturalapp3.svg';
import a4 from '../../assets/architecturalapp4.svg';
import a5 from '../../assets/architecturalapp5.svg';
import a6 from '../../assets/architecturalapp6.svg';
import a7 from '../../assets/architecturalapp7.svg';
import a8 from '../../assets/architecturalapp8.svg';
import a9 from '../../assets/architecturalapp9.svg';

function Card({ img, tag, label, sub, cls }) {
  return (
    <div className={`arcapp__card ${cls}`}>
      <img src={img} alt={label} />
      <div className="arcapp__overlay">
        <span className="arcapp__tag">{tag}</span>
        <span className="arcapp__label">{label}</span>
        {sub && <span className="arcapp__sub">{sub}</span>}
      </div>
    </div>
  );
}

export default function Architecturalapplication() {
  return (
    <section className="arcapp">
      <div className="arcapp__head">
        <span className="arcapp__badge">Architectural Design &amp; Structural Consultancy Application</span>
        <p className="arcapp__desc">
          Used in homes, commercial buildings, and industrial projects, this service ensures smart design,
          structural stability, and efficient space utilization.
        </p>
      </div>
      <div className="arcapp__grid">
        {/* Large left */}
        <Card img={a1} tag="CONSULTANCY SERVICES" label="Architecture Design" sub="Conceptualizing spaces with structural elegance." cls="arcapp--a1" />
        {/* Top right 2 */}
        <Card img={a2} tag="CONSULTANCY SERVICES" label="Structural Engineering" cls="arcapp--a2" />
        <Card img={a3} tag="CONSULTANCY SERVICES" label="PEB Services"           cls="arcapp--a3" />
        {/* Wide right */}
        <Card img={a4} tag="CONSULTANCY SERVICES" label="3D Exterior Views"      cls="arcapp--a4" />
        {/* Row 3: 3 equal */}
        <Card img={a5} tag="CONSULTANCY SERVICES" label="3D Interior Views"      cls="arcapp--a5" />
        <Card img={a6} tag="CONSULTANCY SERVICES" label="Walk-through & Animation" cls="arcapp--a6" />
        <Card img={a7} tag="CONSULTANCY SERVICES" label="2D Detailing"           cls="arcapp--a7" />
        {/* Row 4 */}
        <Card img={a8} tag="CONSULTANCY SERVICES" label="Interior Design"        cls="arcapp--a8" />
        <Card img={a9} tag="CONSULTANCY SERVICES" label="MEP Services"           cls="arcapp--a9" />
      </div>
    </section>
  );
}
