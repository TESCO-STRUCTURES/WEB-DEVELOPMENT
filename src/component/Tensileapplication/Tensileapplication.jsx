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

const cards = [
  { img: a1,  label: 'Parking',            cls: 'tapp--r1a' },
  { img: a2,  label: 'Entrance Canopy',    cls: 'tapp--r1b' },
  { img: a3,  label: 'Swimming Pool',      cls: 'tapp--r2a' },
  { img: a4,  label: 'Shopping Mall',      cls: 'tapp--r2b' },
  { img: a5,  label: 'Indoor Sports',      cls: 'tapp--r3a' },
  { img: a6,  label: 'Cafes',              cls: 'tapp--r3b' },
  { img: a7,  label: 'Convention Centres', cls: 'tapp--r3c' },
  { img: a8,  label: 'Walkway',            cls: 'tapp--r4a' },
  { img: a9,  label: 'Gazebo',             cls: 'tapp--r4b' },
  { img: a10, label: 'Balconies',          cls: 'tapp--r4c' },
];

export default function Tensileapplication() {
  return (
    <section className="tapp">
      <div className="tapp__head">
        <span className="tapp__badge">Tensile Application</span>
        <p className="tapp__desc">
          Tensile roofing is suitable for a wide range of applications including stadiums, walkways, parking
          sheds, and commercial spaces, offering durable and visually appealing coverage.
        </p>
      </div>

      <div className="tapp__grid">
        {cards.map(({ img, label, cls }) => (
          <div
            key={label}
            className={`tapp__card ${cls}`}
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="tapp__overlay">
              <span className="tapp__tag">TENSILE STRUCTURES</span>
              <span className="tapp__label">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
