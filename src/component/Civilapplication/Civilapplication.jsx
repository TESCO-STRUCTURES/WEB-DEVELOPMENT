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

const APPS = [
  { icon: a1,  label: 'Earthworks' },
  { icon: a2,  label: 'Foundation' },
  { icon: a3,  label: 'RCC Columns' },
  { icon: a4,  label: 'Concrete Slabs' },
  { icon: a5,  label: 'Boundary Walls' },
  { icon: a6,  label: 'Drainage' },
  { icon: a7,  label: 'Plinth' },
  { icon: a8,  label: 'Reinforcement' },
  { icon: a9,  label: 'Plastering' },
  { icon: a10, label: 'Tiling & Flooring' },
  { icon: a11, label: 'Site Preparation' },
];

export default function Civilapplication() {
  return (
    <section className="civ-app">
      <div className="container">
        <div className="civ-app__head">
          <span className="civ-app__eyebrow">Applications</span>
          <h2 className="civ-app__title">Eleven civil <span>capabilities under one team</span></h2>
          <p className="civ-app__desc">From earthworks to finishing, every civil trade you need on site is staffed by Tesco.</p>
        </div>
        <div className="civ-app__grid">
          {APPS.map((a) => (
            <article key={a.label} className="civ-app__card">
              <div className="civ-app__icon"><img src={a.icon} alt="" /></div>
              <span className="civ-app__label">{a.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
