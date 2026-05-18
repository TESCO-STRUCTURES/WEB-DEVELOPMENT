import './Allabout.css';
import aboutImg from '../../assets/allabout.svg';

const FEATURES = [
  { title: 'Multi-Material',     desc: 'Trapezoidal, standing-seam, insulated, curved & polycarbonate' },
  { title: 'Climate-Ready',      desc: 'Engineered for monsoon, heat, dust & cyclonic wind loads' },
  { title: 'Long-Life Coating',  desc: 'AZ-150 / PVDF finishes with 20-year anti-corrosion warranty' },
];

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="#FFFFFF" />
  </svg>
);

export default function Allabout() {
  return (
    <section id="all-about" className="all-about">
      <div className="container all-about__inner">

        <div className="all-about__copy">
          <span className="all-about__eyebrow">About Roofing</span>
          <h2 className="all-about__title">What is All Type of Roofing?</h2>

          <p className="all-about__desc">
            Tesco delivers the full range of industrial and architectural roofing —
            trapezoidal, standing-seam, insulated, curved, polycarbonate, and tiled —
            each engineered for India&apos;s monsoon, heat, and dust loads.
          </p>
          <p className="all-about__desc">
            We pick the profile, gauge, and finish based on your span and budget,
            then fabricate the panels in our 80,000 sq.ft. factory and erect them
            with our own crew.
          </p>

          <div className="all-about__features">
            {FEATURES.map((f, i) => (
              <div key={i} className="all-about__feature">
                <span className="all-about__feature-icon"><BoltIcon /></span>
                <div className="all-about__feature-body">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="all-about__media">
          <img src={aboutImg} alt="Industrial roofing project" />
          <span className="all-about__stripes" aria-hidden />
        </div>

      </div>
    </section>
  );
}
