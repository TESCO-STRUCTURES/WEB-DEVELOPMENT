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

const APPS = [
  { icon: a1,  label: 'Trapezoidal Sheet' },
  { icon: a2,  label: 'Standing Seam' },
  { icon: a3,  label: 'Insulated Panel' },
  { icon: a4,  label: 'Polycarbonate' },
  { icon: a5,  label: 'Curved Metal Roof' },
  { icon: a6,  label: 'Skylight Systems' },
  { icon: a7,  label: 'Gutter & Down-take' },
  { icon: a8,  label: 'Tiled Roofing' },
  { icon: a9,  label: 'Aluminum Roofing' },
  { icon: a10, label: 'Glass Atrium Roof' },
  { icon: a11, label: 'Green Roof System' },
];

export default function Allapplication() {
  return (
    <section className="all-app">
      <div className="container">
        <div className="all-app__head">
          <span className="all-app__eyebrow">Roofing Systems</span>
          <h2 className="all-app__title">Eleven roofing systems <span>under one team</span></h2>
          <p className="all-app__desc">Every profile and material you might specify on an industrial or architectural project.</p>
        </div>
        <div className="all-app__grid">
          {APPS.map((a) => (
            <article key={a.label} className="all-app__card">
              <div className="all-app__icon"><img src={a.icon} alt="" /></div>
              <span className="all-app__label">{a.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
