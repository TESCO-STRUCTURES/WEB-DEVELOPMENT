import './Tensileabout.css';
import aboutImg from '../../assets/tensileabout.svg';

const FEATURES = [
  { title: 'Lightweight Spans',  desc: '85% lighter than steel roofing for the same coverage' },
  { title: 'UV-Block Membrane',  desc: 'PTFE-coated fabric blocks UV while diffusing daylight' },
  { title: 'Long Life',           desc: 'Engineered for 20+ years with minimal maintenance' },
];

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="#FFFFFF" />
  </svg>
);

export default function Tensileabout() {
  return (
    <section id="ten-about" className="ten-about">
      <div className="container ten-about__inner">

        <div className="ten-about__copy">
          <span className="ten-about__eyebrow">About Tensile</span>
          <h2 className="ten-about__title">What is Tensile Roofing?</h2>

          <p className="ten-about__desc">
            Tensile roofs are pre-tensioned fabric membranes suspended on steel
            masts and cables — carrying load entirely through tension to create
            sculptural, free-form structures impossible with rigid roofing.
          </p>
          <p className="ten-about__desc">
            Ideal for stadiums, atriums, walkways and public canopies — Tesco
            designs, fabricates and installs PVC, PTFE, and ETFE tensile roofs
            across India.
          </p>

          <div className="ten-about__features">
            {FEATURES.map((f, i) => (
              <div key={i} className="ten-about__feature">
                <span className="ten-about__feature-icon"><BoltIcon /></span>
                <div className="ten-about__feature-body">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ten-about__media">
          <img src={aboutImg} alt="Tensile fabric structure" />
          <span className="ten-about__stripes" aria-hidden />
        </div>

      </div>
    </section>
  );
}
