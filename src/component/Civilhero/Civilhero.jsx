import './Civilhero.css';
import h1 from '../../assets/civilhero1.svg';
import h2 from '../../assets/civilhero2.svg';
import h3 from '../../assets/civilhero3.svg';
import logoicon from '../../assets/logoicon.svg';

export default function Civilhero() {
  return (
    <section className="civ-hero">
      <div className="container civ-hero__inner">

        <div className="civ-hero__collage">
          <div className="civ-hero__c-img civ-hero__c-img--tl">
            <img src={h1} alt="Civil construction RCC works" />
          </div>
          <div className="civ-hero__c-img civ-hero__c-img--tr">
            <img src={h2} alt="Civil foundation pour" />
          </div>
          <div className="civ-hero__c-img civ-hero__c-img--br">
            <img src={h3} alt="Completed civil project" />
          </div>

          <div className="civ-hero__medallion" aria-hidden="true">
            <img src={logoicon} alt="" />
          </div>
        </div>

        <div className="civ-hero__copy">
          <span className="civ-hero__badge">
            <span className="civ-hero__badge-bolt">⚡</span>
            <span>Reliable & Scalable Civil Solutions</span>
          </span>

          <h1 className="civ-hero__title">
            Civil Construction Solutions
          </h1>

          <p className="civ-hero__desc">
            Delivering strong, durable, and high-quality civil <br></br>construction solutions designed for long-term <br></br>performance, safety, and structural integrity.
          </p>

          <div className="civ-hero__cta">
            <a href="/contact" className="civ-hero__btn civ-hero__btn--primary">
              Book Free Site Inspection
            </a>
            <a href="#civ-build" className="civ-hero__btn civ-hero__btn--ghost">
              Get Instant Pricing
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}