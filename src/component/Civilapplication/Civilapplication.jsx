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
import a11 from '../../assets/civilapp11.svg';

function Card({ img, cls }) {
  return (
    <div className={`civapp__card ${cls}`}>
      <img src={img} alt="" />
    </div>
  );
}

export default function Civilapplication() {
  return (
    <section className="civapp">

      <div className="civapp__head">

        <span className="civapp__badge">
          Civil Application
        </span>

        <p className="civapp__desc">
          Civil construction is used in buildings, roads, bridges, and industrial projects,
          delivering strong, reliable, and long-lasting structures.
        </p>

      </div>

      <div className="civapp__grid">

        {/* TOP SECTION */}
        <Card img={a1}  cls="civapp--a1" />
        <Card img={a2}  cls="civapp--a2" />
        <Card img={a3}  cls="civapp--a3" />

        {/* MIDDLE SECTION */}
        <Card img={a4}  cls="civapp--a4" />
        <Card img={a5}  cls="civapp--a5" />
        <Card img={a6}  cls="civapp--a6" />
        <Card img={a7}  cls="civapp--a7" />

        {/* BOTTOM SECTION */}
        <Card img={a8}  cls="civapp--a8" />
        <Card img={a9}  cls="civapp--a9" />
        <Card img={a11} cls="civapp--a11" />

      </div>

    </section>
  );
}