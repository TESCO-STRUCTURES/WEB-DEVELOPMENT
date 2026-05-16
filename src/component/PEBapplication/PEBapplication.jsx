import './PEBapplication.css';
import warehouse   from '../../assets/PEBWarehouse.svg';
import multi       from '../../assets/PEBMulti.svg';
import university  from '../../assets/PEBUniversity.svg';
import marriage    from '../../assets/PEBMarriage.svg';
import commercial  from '../../assets/PEBCommercial.svg';
import educational from '../../assets/PEBEducational.svg';
import hospitals   from '../../assets/PEBHospitals.svg';
import industrial  from '../../assets/PEBIndustrial.svg';
import auditorium  from '../../assets/PEBAuditorium.svg';
import cold        from '../../assets/PEBCold.svg';

const APPS = [
  { icon: warehouse,   label: 'Warehouse' },
  { icon: multi,       label: 'Multi-story Steel Building' },
  { icon: university,  label: 'University & Turnkey' },
  { icon: marriage,    label: 'Marriage Hall' },
  { icon: commercial,  label: 'Commercial Spaces' },
  { icon: educational, label: 'Educational Institutions' },
  { icon: hospitals,   label: 'Hospitals' },
  { icon: industrial,  label: 'Industrial Sheds' },
  { icon: auditorium,  label: 'Auditorium' },
  { icon: cold,        label: 'Cold Storage' },
];

export default function PEBapplication() {
  return (
    <section className="peb-app">
      <div className="container">

        <div className="peb-app__head">
          <span className="peb-app__eyebrow">Applications</span>
          <h2 className="peb-app__title">Ten industries. <span>One steel system.</span></h2>
          <p className="peb-app__desc">
            From a 600 sq.ft. roadside cold-store to a 5-lakh sq.ft. logistics
            campus — Tesco PEB serves the full range of industrial and
            institutional briefs across India.
          </p>
        </div>

        <div className="peb-app__grid">
          {APPS.map((a) => (
            <article key={a.label} className="peb-app__card">
              <div className="peb-app__icon">
                <img src={a.icon} alt="" />
              </div>
              <span className="peb-app__label">{a.label}</span>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
