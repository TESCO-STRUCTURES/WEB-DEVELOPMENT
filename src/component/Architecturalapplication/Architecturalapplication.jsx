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

const APPS = [
  { icon: a1, label: 'Structural Design' },
  { icon: a2, label: '3D Visualization' },
  { icon: a3, label: 'Drafting & Detailing' },
  { icon: a4, label: 'Load Analysis' },
  { icon: a5, label: 'BOQ Preparation' },
  { icon: a6, label: 'Code Compliance' },
  { icon: a7, label: 'Feasibility Studies' },
  { icon: a8, label: 'Project Estimation' },
  { icon: a9, label: 'Architectural Consulting' },
];

export default function Architecturalapplication() {
  return (
    <section className="arc-app">
      <div className="container">
        <div className="arc-app__head">
          <span className="arc-app__eyebrow">Applications</span>
          <h2 className="arc-app__title">Nine design services <span>under one studio</span></h2>
          <p className="arc-app__desc">From feasibility studies to BOQ-backed drawings — every design service you need.</p>
        </div>
        <div className="arc-app__grid">
          {APPS.map((a) => (
            <article key={a.label} className="arc-app__card">
              <div className="arc-app__icon"><img src={a.icon} alt="" /></div>
              <span className="arc-app__label">{a.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
