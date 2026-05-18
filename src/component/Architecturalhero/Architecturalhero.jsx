import './Architecturalhero.css';
import h1 from '../../assets/architecturalhero1.svg';
import h2 from '../../assets/architecturalhero2.svg';
import h3 from '../../assets/architecturalhero3.svg';

export default function Architecturalhero() {
  return (
    <section className="arc-hero">
      <div className="container arc-hero__inner">

        <div className="arc-hero__collage">
          <div className="arc-hero__c-img arc-hero__c-img--tl"><img src={h1} alt="Architectural rendering" /></div>
          <div className="arc-hero__c-img arc-hero__c-img--tr"><img src={h2} alt="Structural drawing detail" /></div>
          <div className="arc-hero__c-img arc-hero__c-img--b"><img src={h3} alt="Completed designed structure" /></div>
        </div>

        <div className="arc-hero__copy">
          <span className="arc-hero__badge">
            <span>⚡ Architectural Design Experts</span>
          </span>

          <h1 className="arc-hero__title">Architectural Design Solutions</h1>

          <p className="arc-hero__desc">
            In-house structural design, 3D visualisation and code-compliant drafting
            — engineered before the first plate is cut.
          </p>

          <div className="arc-hero__cta">
            <a href="/contact" className="arc-hero__btn arc-hero__btn--primary">Book Free Site Inspection</a>
            <a href="#arc-build" className="arc-hero__btn arc-hero__btn--ghost">Get Instant Pricing</a>
          </div>

          <div className="arc-hero__stats">
            <div className="arc-hero__stat"><strong>500+</strong><span>Designs Delivered</span></div>
            <div className="arc-hero__stat"><strong>30%</strong><span>Faster Design Cycle</span></div>
            <div className="arc-hero__stat"><strong>100%</strong><span>In-House Team</span></div>
          </div>
        </div>

      </div>
    </section>
  );
}
