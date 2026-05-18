import './PEBapplication.css';
import cold        from '../../assets/PEBCold.svg';
import university  from '../../assets/PEBUniversity.svg';
import educational from '../../assets/PEBEducational.svg';
import auditorium  from '../../assets/PEBAuditorium.svg';
import warehouse   from '../../assets/PEBWarehouse.svg';
import marriage    from '../../assets/PEBMarriage.svg';
import hospitals   from '../../assets/PEBHospitals.svg';
import multi       from '../../assets/PEBMulti.svg';
import commercial  from '../../assets/PEBCommercial.svg';
import industrial  from '../../assets/PEBIndustrial.svg';

const APPS = [
  { img: cold,        label: 'Cold Storage', className: 'peb-app__card--wide' },
  { img: university,  label: 'University Turnkey Construction', className: '' },
  { img: educational, label: 'Educational Institutions', className: '' },
  { img: auditorium,  label: 'Auditorium', className: '' },
  { img: warehouse,   label: 'Warehouse', className: 'peb-app__card--wide' },
  { img: marriage,    label: 'Marriage Hall', className: '' },
  { img: hospitals,   label: 'Hospitals', className: '' },
  { img: multi,       label: 'Multi-story Steel Building', className: 'peb-app__card--wide' },
  { img: commercial,  label: 'Commercial Spaces', className: '' },
  { img: industrial,  label: 'Industrial Sheds', className: '' },
];

export default function PEBapplication() {
  return (
    <section className="peb-app">
      <div className="container">

        <div className="peb-app__head">
          <span className="peb-app__eyebrow">PEB Application</span>
          <p className="peb-app__desc">
            Pre-Engineered Buildings (PEB) offer fast, durable, and cost-effective construction for industrial and commercial spaces.
          </p>
        </div>

        <div className="peb-app__grid">
          {APPS.map((a, i) => (
            <article key={i} className={`peb-app__card ${a.className}`}>
              <img src={a.img} alt={a.label} className="peb-app__img" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
