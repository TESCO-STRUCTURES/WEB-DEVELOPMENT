import './Civilhero.css';
import h1 from '../../assets/civilhero1.svg';
import h2 from '../../assets/civilhero2.svg';
import h3 from '../../assets/civilhero3.svg';

export default function Civilhero() {
  return (
    <section className="civ-hero">
      <div className="container civ-hero__inner">

        <div className="civ-hero__collage">
          <div className="civ-hero__c-img civ-hero__c-img--tl"><img src={h1} alt="Civil construction RCC works" /></div>
          <div className="civ-hero__c-img civ-hero__c-img--tr"><img src={h2} alt="Civil foundation pour" /></div>
          <div className="civ-hero__c-img civ-hero__c-img--b"><img src={h3} alt="Completed civil project" /></div>
        </div>

        <div className="civ-hero__copy">
          <span className="civ-hero__badge">
            <span>⚡ India&apos;s Trusted Civil Builder</span>
          </span>

          <h1 className="civ-hero__title">Civil Construction Solutions</h1>

          <p className="civ-hero__desc">
            End-to-end civil works — earthworks, RCC, foundations and finishing —
            delivered by Tesco&apos;s in-house crew with daily on-site supervision.
          </p>

          <div className="civ-hero__cta">
            <a href="/contact" className="civ-hero__btn civ-hero__btn--primary">Book Free Site Inspection</a>
            <a href="#civ-build" className="civ-hero__btn civ-hero__btn--ghost">Get Instant Pricing</a>
          </div>

          <div className="civ-hero__stats">
            <div className="civ-hero__stat"><strong>350+</strong><span>Civil Works Done</span></div>
            <div className="civ-hero__stat"><strong>20+</strong><span>Years Experience</span></div>
            <div className="civ-hero__stat"><strong>100%</strong><span>In-House Crew</span></div>
          </div>
        </div>

      </div>
    </section>
  );
}
