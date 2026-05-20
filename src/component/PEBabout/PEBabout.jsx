import './PEBabout.css';
import aboutImg from '../../assets/PEBabout.svg';

const FEATURES = [
  { title: 'Fast Construction', desc: '60-40% faster than conventional RCC buildings' },
  { title: 'Cost Effective',    desc: 'Reduces overall project cost by up to 30%' },
  { title: 'High Durability',   desc: 'Engineered for 50+ years with minimal maintenance' },
];

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="#FFFFFF" />
  </svg>
);

export default function PEBabout() {
  return (
    <section id="peb-about" className="peb-about">
      <div className="container peb-about__inner">

        {/* LEFT — copy + features */}
        <div className="peb-about__copy">
          <span className="peb-about__eyebrow">About PEB</span>
          <h2 className="peb-about__title">What is PEB?</h2>

          <p className="peb-about__desc">
            Pre-Engineered Buildings (PEB) are steel structures manufactured and
            fabricated in a factory, then assembled on-site. They offer a smarter,
            faster alternative to conventional construction.
          </p>
          <p className="peb-about__desc">
            Ideal for industrial, commercial, and institutional use — PEB structures
            are engineered for maximum strength with minimum material waste.
          </p>

          <div className="peb-about__features">
            {FEATURES.map((f, i) => (
              <div key={i} className="peb-about__feature">
                <span className="peb-about__feature-icon">
                  <BoltIcon />
                </span>
                <div className="peb-about__feature-body">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — clean image on white background */}
        <div className="peb-about__media">
          <img src={aboutImg} alt="Pre-engineered building structure" />
        </div>

      </div>
    </section>
  );
}
