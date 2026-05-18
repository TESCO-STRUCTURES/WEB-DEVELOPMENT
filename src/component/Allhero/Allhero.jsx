import './Allhero.css';
import h1 from '../../assets/allhero1.svg';
import h2 from '../../assets/allhero2.svg';
import h3 from '../../assets/allhero3.svg';

export default function Allhero() {
  return (
    <section className="all-hero">
      <div className="container all-hero__inner">

        <div className="all-hero__collage">
          <div className="all-hero__c-img all-hero__c-img--tl"><img src={h1} alt="Industrial roofing installation" /></div>
          <div className="all-hero__c-img all-hero__c-img--tr"><img src={h2} alt="Standing seam roof detail" /></div>
          <div className="all-hero__c-img all-hero__c-img--b"><img src={h3} alt="Completed roofing project" /></div>
        </div>

        <div className="all-hero__copy">
          <span className="all-hero__badge">
            <span>⚡ Complete Roofing Solutions</span>
          </span>

          <h1 className="all-hero__title">All Type of Roofing Solutions</h1>

          <p className="all-hero__desc">
            From trapezoidal industrial sheets to architectural curved canopies —
            roofing engineered for India&apos;s climate, weather-tight and
            anti-corrosion.
          </p>

          <div className="all-hero__cta">
            <a href="/contact" className="all-hero__btn all-hero__btn--primary">Book Free Site Inspection</a>
            <a href="#all-build" className="all-hero__btn all-hero__btn--ghost">Get Instant Pricing</a>
          </div>

          <div className="all-hero__stats">
            <div className="all-hero__stat"><strong>700+</strong><span>Roofs Installed</span></div>
            <div className="all-hero__stat"><strong>11</strong><span>Roofing Systems</span></div>
            <div className="all-hero__stat"><strong>20yr</strong><span>Anti-Corrosion Warranty</span></div>
          </div>
        </div>

      </div>
    </section>
  );
}
