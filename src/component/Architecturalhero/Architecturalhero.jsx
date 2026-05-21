import { Link } from 'react-router-dom';
import './Architecturalhero.css';
import h1 from '../../assets/architecturalhero1.svg';
import h2 from '../../assets/architecturalhero2.svg';
import h3 from '../../assets/architecturalhero3.svg';
import logoicon from '../../assets/logoicon.svg';

export default function Architecturalhero() {
  return (
    <section className="arc-hero">
      <div className="container arc-hero__inner">

        <div className="arc-hero__collage">
          <div className="arc-hero__c-img arc-hero__c-img--tl">
            <img src={h1} alt="Architectural rendering" />
          </div>
          <div className="arc-hero__c-img arc-hero__c-img--tr">
            <img src={h2} alt="Structural drawing detail" />
          </div>
          <div className="arc-hero__c-img arc-hero__c-img--br">
            <img src={h3} alt="Completed designed structure" />
          </div>

          <div className="arc-hero__medallion" aria-hidden="true">
            <img src={logoicon} alt="" />
          </div>
        </div>

        <div className="arc-hero__copy">
          <span className="arc-hero__badge">
            <span className="arc-hero__badge-bolt">⚡</span>
            <span>Smart Design&Structural Excellence</span>
          </span>

          <h1 className="arc-hero__title">
            Architectural Design & Structural Consultancy
          </h1>

          <p className="arc-hero__desc">
           Delivering innovative architectural designs and reliable structural solutions that ensure safety, functionality, and modern aesthetics for every project.
          </p>

          <div className="arc-hero__cta">
            <a href="/contact" className="arc-hero__btn arc-hero__btn--primary">
              Book Free Site Inspection
            </a>
            <Link to="/projects" className="arc-hero__btn arc-hero__btn--ghost">
              View Our Projects
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}