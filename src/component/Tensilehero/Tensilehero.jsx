import './Tensilehero.css';
import h1 from '../../assets/tensilehero1.svg';
import h2 from '../../assets/tensilehero2.svg';
import h3 from '../../assets/tensilehero3.svg';

export default function Tensilehero() {
  return (
    <section className="ten-hero">
      <div className="container ten-hero__inner">

        <div className="ten-hero__collage">
          <div className="ten-hero__c-img ten-hero__c-img--tl">
            <img src={h1} alt="Tensile fabric roof exterior" />
          </div>
          <div className="ten-hero__c-img ten-hero__c-img--tr">
            <img src={h2} alt="Tensile structure detail" />
          </div>
          <div className="ten-hero__c-img ten-hero__c-img--b">
            <img src={h3} alt="Tensile canopy installation" />
          </div>
        </div>

        <div className="ten-hero__copy">
          <span className="ten-hero__badge">
            <span>⚡ India&apos;s Tensile Roofing Experts</span>
          </span>

          <h1 className="ten-hero__title">Tensile Roofing Solutions</h1>

          <p className="ten-hero__desc">
            Sculptural fabric roofs engineered for stadiums, atriums and public
            spaces — lightweight, free-form, and built to last 20+ years.
          </p>

          <div className="ten-hero__cta">
            <a href="/contact" className="ten-hero__btn ten-hero__btn--primary">
              Book Free Site Inspection
            </a>
            <a href="#ten-build" className="ten-hero__btn ten-hero__btn--ghost">
              Get Instant Pricing
            </a>
          </div>

          <div className="ten-hero__stats">
            <div className="ten-hero__stat"><strong>200+</strong><span>Projects Done</span></div>
            <div className="ten-hero__stat"><strong>15+</strong><span>Years Experience</span></div>
            <div className="ten-hero__stat"><strong>97%</strong><span>Client Satisfaction</span></div>
          </div>
        </div>

      </div>
    </section>
  );
}
