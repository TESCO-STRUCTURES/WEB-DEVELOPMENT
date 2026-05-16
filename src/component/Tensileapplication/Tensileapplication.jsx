import './Tensileapplication.css';
import a1  from '../../assets/tensileapp1.svg';
import a2  from '../../assets/tensileapp2.svg';
import a3  from '../../assets/tensileapp3.svg';
import a4  from '../../assets/tensileapp4.svg';
import a5  from '../../assets/tensileapp5.svg';
import a6  from '../../assets/tensileapp6.svg';
import a7  from '../../assets/tensileapp7.svg';
import a8  from '../../assets/tensileapp8.svg';
import a9  from '../../assets/tensileapp9.svg';
import a10 from '../../assets/tensileapp10.svg';

const APPS = [
  { icon: a1,  label: 'Stadium Roofs' },
  { icon: a2,  label: 'Entrance Canopies' },
  { icon: a3,  label: 'Walkways' },
  { icon: a4,  label: 'Public Plazas' },
  { icon: a5,  label: 'Atrium Roofs' },
  { icon: a6,  label: 'Car Park Shades' },
  { icon: a7,  label: 'Amphitheaters' },
  { icon: a8,  label: 'Hospitality Decks' },
  { icon: a9,  label: 'Mall & Retail' },
  { icon: a10, label: 'Shade Sails' },
];

export default function Tensileapplication() {
  return (
    <section className="ten-app">
      <div className="container">
        <div className="ten-app__head">
          <span className="ten-app__eyebrow">Applications</span>
          <h2 className="ten-app__title">Ten ways to deploy <span>a tensile roof</span></h2>
          <p className="ten-app__desc">
            From compact entrance canopies to multi-thousand square-foot stadium roofs —
            tensile structures scale to fit any architectural brief.
          </p>
        </div>
        <div className="ten-app__grid">
          {APPS.map((a) => (
            <article key={a.label} className="ten-app__card">
              <div className="ten-app__icon"><img src={a.icon} alt="" /></div>
              <span className="ten-app__label">{a.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
