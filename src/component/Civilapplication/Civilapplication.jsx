import './Civilapplication.css';
import a1  from '../../assets/civilapp1.svg';
import a2  from '../../assets/civilapp2.svg';
import a3  from '../../assets/civilapp3.svg';
import a4  from '../../assets/civilapp4.svg';
import a5  from '../../assets/civilapp5.svg';
import a6  from '../../assets/civilapp6.svg';
import a7  from '../../assets/civilapp7.svg';
import a8  from '../../assets/civilapp8.svg';
import a9  from '../../assets/civilapp9.svg';
import a10 from '../../assets/civilapp10.svg';
import a11 from '../../assets/civilapp11.svg';

function Card({ img, tag, label, cls }) {
  return (
    <div className={`civapp__card ${cls}`}>
      <img src={img} alt={label} />
      <div className="civapp__overlay">
        <span className="civapp__tag">{tag}</span>
        <span className="civapp__label">{label}</span>
      </div>
    </div>
  );
}

export default function Civilapplication() {
  return (
    <section className="civapp">
      <div className="civapp__head">
        <span className="civapp__badge">Civil Application</span>
        <p className="civapp__desc">
          Civil construction is used in buildings, roads, bridges, and industrial projects, delivering strong,
          reliable, and long-lasting structures.
        </p>
      </div>
      <div className="civapp__grid">
        {/* Block 1: Apartments (tall left) + Industrial + Hospitals */}
        <Card img={a1}  tag="CIVIL WORKS" label="Apartments"          cls="civapp--a1" />
        <Card img={a2}  tag="CIVIL WORKS" label="Industrial Buildings" cls="civapp--a2" />
        <Card img={a3}  tag="CIVIL WORKS" label="Hospitals"            cls="civapp--a3" />
        {/* Block 2: Office (tall left) + 3 small + Villas + Roads */}
        <Card img={a4}  tag="CIVIL WORKS" label="Office Buildings"    cls="civapp--a4" />
        <Card img={a5}  tag="CIVIL WORKS" label="Malls"               cls="civapp--a5" />
        <Card img={a6}  tag="CIVIL WORKS" label="Restaurants"         cls="civapp--a6" />
        <Card img={a7}  tag="CIVIL WORKS" label="Warehouses"          cls="civapp--a7" />
        <Card img={a8}  tag="CIVIL WORKS" label="Villas"              cls="civapp--a8" />
        <Card img={a9}  tag="CIVIL WORKS" label="Concrete Roads"      cls="civapp--a9" />
        {/* Row 3 */}
        <Card img={a10} tag="CIVIL WORKS" label="Retail Shops"        cls="civapp--a10" />
        <Card img={a11} tag="CIVIL WORKS" label="Institutions"        cls="civapp--a11" />
      </div>
    </section>
  );
}
