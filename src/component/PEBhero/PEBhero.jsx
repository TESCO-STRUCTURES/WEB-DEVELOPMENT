import { Link } from 'react-router-dom';
import './PEBhero.css';
import pebhero1 from '../../assets/PEBhero1.svg';
import pebhero2 from '../../assets/PEBhero2.svg';
import pebhero3 from '../../assets/PEBhero3.svg';
import logoicon from '../../assets/logoicon.svg';

export default function PEBhero() {
  return (
    <section className="peb-hero">
      <div className="container peb-hero__inner">

        {/* LEFT — image collage:
            ┌──────────────┬──────────────┐
            │              │   TR image   │
            │   TL image   ├──────────────┤
            │  (full ht)   │   BR image   │
            └──────────────┴──────────────┘
            with a circular logo overlay at the intersection */}
        <div className="peb-hero__collage">
          <div className="peb-hero__c-img peb-hero__c-img--tl">
            <img src={pebhero1} alt="PEB steel structure exterior" />
          </div>
          <div className="peb-hero__c-img peb-hero__c-img--tr">
            <img src={pebhero2} alt="PEB framework detail" />
          </div>
          <div className="peb-hero__c-img peb-hero__c-img--br">
            <img src={pebhero3} alt="PEB warehouse interior" />
          </div>

          {/* Center logo medallion */}
          <div className="peb-hero__medallion" aria-hidden="true">
            <img src={logoicon} alt="" />
          </div>
        </div>

        {/* RIGHT — copy */}
        <div className="peb-hero__copy">
          <span className="peb-hero__badge">
            <span className="peb-hero__badge-bolt">⚡</span>
            <span>India&apos;s Trusted PEB Builder</span>
          </span>

          <h1 className="peb-hero__title">
            Pre-Engineered Building Solutions
          </h1>

          <p className="peb-hero__desc">
            Delivering durable, cost-effective steel structures<br />
            designed for speed, strength, and long-term value.
          </p>

          <div className="peb-hero__cta">
            <Link to="/contact" className="peb-hero__btn peb-hero__btn--primary">
              Book Free Site Inspection
            </Link>
            <Link to="/projects" className="peb-hero__btn peb-hero__btn--ghost">
              View Our Projects
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}