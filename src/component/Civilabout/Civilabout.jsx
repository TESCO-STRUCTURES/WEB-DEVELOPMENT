import './Civilabout.css';
import aboutImg from '../../assets/civilabout.svg';

const FEATURES = [
  { title: 'Strong Foundations', desc: 'Engineered RCC raft, isolated, or pile foundations per soil test' },
  { title: 'Quality Materials',  desc: 'Cube-tested concrete, IS-500 rebar, and per-bag cement logs' },
  { title: 'In-House Crew',       desc: '100% Tesco crew — no subcontractor handoffs, single accountability' },
];

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="#FFFFFF" />
  </svg>
);

export default function Civilabout() {
  return (
    <section id="civ-about" className="civ-about">
      <div className="container civ-about__inner">

        <div className="civ-about__copy">
          <span className="civ-about__eyebrow">About Civil</span>
          <h2 className="civ-about__title">What is Civil Construction?</h2>

          <p className="civ-about__desc">
            Civil works are the bedrock of every Tesco project — the earthworks,
            RCC foundations, plinth, slabs, walls, and finishing that anchor our
            steel structures and the buildings around them.
          </p>
          <p className="civ-about__desc">
            We bring our own civil crew, our own QA logs, and our own equipment
            to every site — so foundations are completed without coordination
            penalties or sub-contractor handoffs.
          </p>

          <div className="civ-about__features">
            {FEATURES.map((f, i) => (
              <div key={i} className="civ-about__feature">
                <span className="civ-about__feature-icon"><BoltIcon /></span>
                <div className="civ-about__feature-body">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="civ-about__media">
          <img src={aboutImg} alt="Civil construction site" />
        </div>

      </div>
    </section>
  );
}
