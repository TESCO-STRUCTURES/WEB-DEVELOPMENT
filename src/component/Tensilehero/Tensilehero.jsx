import { Link } from 'react-router-dom';
import './Tensilehero.css';
import h1 from '../../assets/tensilehero1.svg';
import h2 from '../../assets/tensilehero2.svg';
import h3 from '../../assets/tensilehero3.svg';
import logoicon from '../../assets/logoicon.svg';

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
          <div className="ten-hero__c-img ten-hero__c-img--br">
            <img src={h3} alt="Tensile canopy installation" />
          </div>

          <div className="ten-hero__medallion" aria-hidden="true">
            <img src={logoicon} alt="" />
          </div>
        </div>

        <div className="ten-hero__copy">
          <span className="ten-hero__badge">
            <span className="ten-hero__badge-bolt">⚡</span>
            <span> Modern & Durable Tensile Structures</span>
          </span>

          <h1 className="ten-hero__title">
            Tensile Roofing Solutions
          </h1>

          <p className="ten-hero__desc">
            Delivering lightweight, flexible, and visually striking<br></br> tensile structures designed for durability, weather<br></br> resistance, and modern architectural appeal.
          </p>

          <div className="ten-hero__cta">
            <a href="/contact" className="ten-hero__btn ten-hero__btn--primary">
              Book Free Site Inspection
            </a>
            <Link to="/projects" className="ten-hero__btn ten-hero__btn--ghost">
              View Our Projects
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}