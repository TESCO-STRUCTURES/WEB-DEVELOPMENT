import './Architecturalabout.css';
import aboutImg from '../../assets/architecturalabout.svg';

const FEATURES = [
  { title: '3D Visualisation', desc: 'Photorealistic renders and animations for stakeholder buy-in' },
  { title: 'Code Compliance',  desc: 'IS-800 / AISC-360 / IS-875 — every drawing PE-certified' },
  { title: 'Engineering-Led',  desc: '100% in-house design — load-tested before drafting' },
];

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="#FFFFFF" />
  </svg>
);

export default function Architecturalabout() {
  return (
    <section id="arc-about" className="arc-about">
      <div className="container arc-about__inner">

        <div className="arc-about__copy">
          <span className="arc-about__eyebrow">About Design & consultantcy
          </span>
          <h2 className="arc-about__title">What is Architectural Design?</h2>

          <p className="arc-about__desc">
            Our in-house design studio turns site briefs into fabrication-ready
            drawings — load-tested, IS-800/AISC-360 compliant, and rendered in 3D
            so you can sign off on the build before the first plate is cut.
          </p>
          <p className="arc-about__desc">
            Every drawing is engineered with manufacturing in mind, so what you see
            in the model is what gets built on site — to within 2mm tolerance.
          </p>

          <div className="arc-about__features">
            {FEATURES.map((f, i) => (
              <div key={i} className="arc-about__feature">
                <span className="arc-about__feature-icon"><BoltIcon /></span>
                <div className="arc-about__feature-body">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="arc-about__media">
          <img src={aboutImg} alt="Architectural design studio" />
        </div>

      </div>
    </section>
  );
}
