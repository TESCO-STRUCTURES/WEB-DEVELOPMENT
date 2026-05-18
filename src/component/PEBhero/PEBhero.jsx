import './PEBhero.css';
import pebhero1 from '../../assets/PEBhero1.svg';
import pebhero2 from '../../assets/PEBhero2.svg';
import pebhero3 from '../../assets/PEBhero3.svg';
import PEBlow from '../../assets/PEBlow.svg';

export default function PEBhero() {
  return (
    <section className="peb-hero">
      <div className="container peb-hero__inner">

        {/* LEFT — image collage:  [large TL] [small TR] / [wide BOTTOM] */}
        <div className="peb-hero__collage">
          <div className="peb-hero__c-img peb-hero__c-img--tl">
            <img src={pebhero1} alt="PEB steel structure exterior" />
          </div>
          <div className="peb-hero__c-img peb-hero__c-img--tr">
            <img src={pebhero2} alt="PEB framework detail" />
          </div>
          <div className="peb-hero__c-img peb-hero__c-img--b">
            <img src={pebhero3} alt="PEB warehouse interior" />
          </div>
        </div>

        {/* RIGHT — copy */}
        <div className="peb-hero__copy">
          <span className="peb-hero__badge">
            <span>⚡ India&apos;s Trusted PEB Builder</span>
          </span>

          <h1 className="peb-hero__title">
            Pre-Engineered Building Solutions
          </h1>

          <p className="peb-hero__desc">
            Delivering durable, cost-effective steel structures designed for speed,
            strength, and long-term value.
          </p>

          <div className="peb-hero__cta">
            <a href="/contact" className="peb-hero__btn peb-hero__btn--primary">
              Book Free Site Inspection
            </a>
            <a href="#peb-build" className="peb-hero__btn peb-hero__btn--ghost">
              Get Instant Pricing
            </a>
          </div>

          <div className="peb-hero__stats">
            <div className="peb-hero__stat">
              <strong>500+</strong>
              <span>Projects Done</span>
            </div>
            <div className="peb-hero__stat">
              <strong>15+</strong>
              <span>Years Experience</span>
            </div>
            <div className="peb-hero__stat">
              <strong>98%</strong>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
