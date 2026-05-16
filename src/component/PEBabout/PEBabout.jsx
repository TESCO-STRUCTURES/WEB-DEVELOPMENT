import './PEBabout.css';
import aboutImg from '../../assets/PEBabout.svg';

export default function PEBabout() {
  return (
    <section id="peb-about" className="peb-about">
      <div className="container peb-about__inner">

        <div className="peb-about__media">
          <img src={aboutImg} alt="Pre-engineered building project" />
        </div>

        <div className="peb-about__copy">
          <span className="peb-about__eyebrow">About PEB</span>
          <h2 className="peb-about__title">What is a <span>PEB?</span></h2>
          <p className="peb-about__desc">
          Pre-Engineered Buildings (PEB) are steel structures manufactured and fabricated in a factory, then assembled on-site. They offer a smarter, faster alternative to conventional construction.
          </p>
          <p className="peb-about__desc">
          Ideal for industrial, commercial, and institutional use — PEB structures are engineered for maximum strength with minimum material waste.
          </p>

          <div className="peb-about__stats">
            <div className="peb-about__stat">
              <span className="peb-about__num">40%</span>
              <span className="peb-about__lbl">faster than conventional</span>
            </div>
            <div className="peb-about__stat">
              <span className="peb-about__num">90m</span>
              <span className="peb-about__lbl">clear-span capacity</span>
            </div>
            <div className="peb-about__stat">
              <span className="peb-about__num">20%</span>
              <span className="peb-about__lbl">lighter on foundations</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
