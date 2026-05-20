import './Allhero.css';
import h1 from '../../assets/allhero1.svg';
import h2 from '../../assets/allhero2.svg';
import h3 from '../../assets/allhero3.svg';
import logoicon from '../../assets/logoicon.svg';

export default function Allhero() {
  return (
    <section className="all-hero">
      <div className="container all-hero__inner">

        <div className="all-hero__collage">
          <div className="all-hero__c-img all-hero__c-img--tl">
            <img src={h1} alt="Industrial roofing installation" />
          </div>
          <div className="all-hero__c-img all-hero__c-img--tr">
            <img src={h2} alt="Standing seam roof detail" />
          </div>
          <div className="all-hero__c-img all-hero__c-img--br">
            <img src={h3} alt="Completed roofing project" />
          </div>

          <div className="all-hero__medallion" aria-hidden="true">
            <img src={logoicon} alt="" />
          </div>
        </div>

        <div className="all-hero__copy">
          <span className="all-hero__badge">
            <span className="all-hero__badge-bolt">⚡</span>
            <span>Durable & Weather-Resistant Roofing Solutions</span>
          </span>

          <h1 className="all-hero__title">
            All Type of Roofing Solutions
          </h1>

          <p className="all-hero__desc">
            Providing high-quality roofing systems designed for durability, protection,and performance across industrial, commercial, and residential projects.
          </p>

          <div className="all-hero__cta">
            <a href="/contact" className="all-hero__btn all-hero__btn--primary">
              Book Free Site Inspection
            </a>
            <a href="#all-build" className="all-hero__btn all-hero__btn--ghost">
              Get Instant Pricing
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}